// Not used

import React from 'react'
import { images } from '../constants'

const Utilities = () => {
	return (
		<div className='utilities container'>
			<div className='utilities__title'>MultiViewer fits your Needs</div>
			<div className='utilities__list'>
				<div className='utilities__item'>
					<img
						src={images.util1}
						alt='util'
						className='utilities__item-image'
					/>
					<div className='utilities__item-title'>
						Runs in Cloud or On-Premises
					</div>
					<div className='utilities__item-text'>
						Choose our cloud solution to benefit from our
						infrastructure and service or install on your own
						servers and work completely independently.
					</div>
					{/* <div className='utilities__item-link'>Learn More</div> */}
				</div>

				<div className='utilities__item'>
					<img
						src={images.util3}
						alt='util'
						className='utilities__item-image'
					/>
					<div className='utilities__item-title'>
						Flexibility & Customization
					</div>
					<div className='utilities__item-text'>
						Create your own version of MultiViewer and fit it to
						your individual needs. Allow a consistent brand
						experience for your users.
					</div>
					{/* <div className='utilities__item-link'>Learn More</div> */}
				</div>
			</div>
		</div>
	)
}

export default Utilities
