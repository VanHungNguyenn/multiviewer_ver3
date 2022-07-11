import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import axios from 'axios'
import { languages } from './constants'

const detectLocale = async (callback) => {
	try {
		const res = await axios.get('https://lumtest.com/myip.json')

		// domain/path, if path available, then use path, else use domain
		// get current domain
		const pathname = window.location.pathname

		if (pathname === '/') {
			if (res.data.country.toLowerCase()) {
				const newLang =
					languages.find(
						(lang) =>
							lang.country_code === res.data.country.toLowerCase()
					)?.code || 'vi'

				callback(newLang)
			} else {
				callback('vi')
			}
		} else {
			const newLang =
				languages.find(
					(lang) => lang.code === pathname.split('/')[1].toLowerCase()
				)?.code || 'vi'

			callback(newLang)
		}
		// get current language, check pathname
	} catch (error) {
		callback('vi')
	}
}

const LanguageDetector = {
	type: 'languageDetector',
	detect: detectLocale,
	async: true,
	init: () => {},
	cacheUserLanguage: () => {},
}

// first detect language from call api, check nations, then fallback to browserlanguage
// Adding own detection functionality

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.use(Backend)
	.init({
		fallbackLng: 'vi',
		debug: false,
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
