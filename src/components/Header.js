import React, { useState, useEffect } from 'react'
import { images } from '../constants'
import DropdownLanguage from './utils/DropdownLanguage/DropdownLanguage'
import { HashLink } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Header = () => {
	const { t, i18n } = useTranslation()
	const [toggleMenu, setToggleMenu] = useState(false)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	const handleOffToggleMenu = () => {
		setToggleMenu(false)
	}

	useEffect(() => {
		document.title = t('title')
	}, [i18n, t])

	useEffect(() => {
		document.querySelector('html').setAttribute('lang', i18n.language)
	}, [i18n.language])

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth)
		}

		window.addEventListener('resize', changeWidth)

		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	}, [])

	return (
		<div className='header'>
			<div className='container header__container'>
				<div className='header__logo'>
					<HashLink to='/'>
						<img src={images.logo} alt='Logo' />
						<h1>MultiViewer</h1>
					</HashLink>
				</div>
				{(toggleMenu || screenWidth > 1024) && (
					<div className='header__menu slide-bottom'>
						<div
							className='header__close'
							onClick={handleOffToggleMenu}
						>
							<i className='fa-solid fa-xmark'></i>
						</div>
						<div className='header__nav'>
							<HashLink
								to='/#home'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								{t('header__nav-links.home')}
							</HashLink>
							<HashLink
								to='/#solutions'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								{t('header__nav-links.solutions')}
							</HashLink>
							{/* <HashLink
								to='#reviews'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								{t('header__nav-links.reviews')}
							</HashLink> */}
							<HashLink
								to='/#pricing'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								{t('header__nav-links.pricing')}
							</HashLink>
							<HashLink
								to='/#contact'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								{t('header__nav-links.contact')}
							</HashLink>
							<Link
								to='/blog'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Blog
							</Link>
						</div>
						<div className='header__language'>
							<DropdownLanguage />
						</div>
					</div>
				)}
				<div className='header__bar' onClick={handleToggleMenu}>
					{/* font awesome bar */}
					<i className='fa-solid fa-bars'></i>
				</div>
			</div>
		</div>
	)
}

export default Header
