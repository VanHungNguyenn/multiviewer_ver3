import React from 'react'
import { useTranslation } from 'react-i18next'
import {
	facebookLink,
	twitterLink,
	telegramLink,
	youtubeLink,
} from '../constants/link'

const Community = () => {
	const { t } = useTranslation()

	return (
		<div className='community container' id='contact'>
			<div className='community__title'>{t('community__title')}</div>
			<div className='community__list'>
				<a
					href={facebookLink}
					target='_blank'
					rel='noopener noreferrer'
					className='community__item'
				>
					{/* fontawesome facebook */}
					<i className='fa-brands fa-facebook-f'></i>
					<div className='community__item-title'>Facebook</div>
				</a>
				<a
					href={twitterLink}
					target='_blank'
					rel='noopener noreferrer'
					className='community__item'
				>
					{/* fontawesome twitter */}
					<i className='fa-brands fa-twitter'></i>
					<div className='community__item-title'>Twitter</div>
				</a>
				<a
					href={telegramLink}
					target='_blank'
					rel='noopener noreferrer'
					className='community__item'
				>
					{/* fontawesome telegram */}
					<i className='fa-brands fa-telegram'></i>
					<div className='community__item-title'>Telegram</div>
				</a>
				<a
					href={youtubeLink}
					target='_blank'
					rel='noopener noreferrer'
					className='community__item'
				>
					{/* fontawesome youtube */}
					<i className='fa-brands fa-youtube'></i>
					<div className='community__item-title'>Youtube</div>
				</a>
			</div>
		</div>
	)
}

export default Community
