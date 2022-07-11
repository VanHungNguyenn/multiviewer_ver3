import React from 'react'
import { Link } from 'react-router-dom'
import Image404 from '../../../images/404.png'
import './pagenotfound.css'

const PageNotFound = () => {
	return (
		<div className='page-not-found'>
			<div className='page-not-found__container'>
				<div className='page-not-found__image'>
					<img src={Image404} alt='404' />
				</div>
				<div className='page-not-found__text'>
					<h1>404</h1>
					<p>Page not found</p>
					<Link
						to='/'
						className='button button--primary button--large'
					>
						Go to home
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PageNotFound
