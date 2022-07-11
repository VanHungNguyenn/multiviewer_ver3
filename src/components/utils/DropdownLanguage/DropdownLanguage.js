import React, { useState, useRef, useContext } from 'react'
import { languages } from '../../../constants'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import './dropdownLanguage.css'
import { useTranslation } from 'react-i18next'
import LangContext from '../../../context/LangProvider'
import { useNavigate } from 'react-router-dom'

const DropdownLanguage = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { lang: currentLang, setLang } = useContext(LangContext)
	const navigate = useNavigate()

	const ref = useRef()
	const { i18n } = useTranslation()

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const handleChange = (lang) => {
		setIsOpen(false)
		setLang(lang)
		i18n.changeLanguage(lang)
		navigate(`/${lang}`)
	}

	useOnClickOutside(ref, () => setIsOpen(false))

	return (
		<>
			{currentLang && (
				<div ref={ref} className='dropdown-language'>
					<div
						className='dropdown-language__current'
						onClick={handleClick}
					>
						<div className='dropdown-language-current__block'>
							{/* flags */}
							<div
								className={`dropdown-language-current__flag fi fi-${
									languages.find(
										(lang) => lang.code === currentLang
									).country_code
								}`}
							></div>
							{/* language */}
							<div className='dropdown-language-current__name'>
								{
									languages.find(
										(lang) => lang.code === currentLang
									).name
								}
							</div>
						</div>
						{/* fontawesome arrow */}
						<i className='fas fa-angle-down dropdown-language-current__arrow'></i>
					</div>
					{/* dropdown */}
					{isOpen && (
						<div className='dropdown-language__dropdown'>
							{languages.map((lang, index) => (
								<div
									key={index}
									className='dropdown-language-dropdown__item'
									value={lang.code}
									onClick={() => handleChange(lang.code)}
								>
									{/* flags */}
									<div
										className={`dropdown-language-dropdown__flag fi fi-${lang.country_code}`}
									></div>
									{/* language */}
									<div className='dropdown-language-dropdown__name'>
										{lang.name}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</>
	)
}

export default DropdownLanguage
