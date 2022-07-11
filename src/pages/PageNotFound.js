import React from 'react'
import { images } from '../constants'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return (
		<>
			<div
				className='pnf'
				style={{
					paddingTop: '15rem',
					paddingBottom: '13rem',
				}}
			>
				<div className='pnf__image'>
					<img src={images.image404} alt='pnf' />
				</div>
				<Link to='/'>
					<div className='pnf__button button button--primary'>
						<span>Go to Home</span>
					</div>
				</Link>
			</div>
		</>
	)
}

export default PageNotFound
