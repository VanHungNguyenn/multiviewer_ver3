import React from 'react'
import './BannerBlog.css'
import { images } from '../../constants'

const BannerBlog = () => {
	return (
		<div className='banner-blog'>
			<div className='banner-blog__content'>
				<h1 className='banner-blog__title'>
					Learn development with great articles.
				</h1>
				<p className='banner-blog__description'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					euismod, nisi vel consectetur consectetur, nisi nisi
				</p>
			</div>
			<div className='banner-blog__image'>
				<img src={images.bannerBlog} alt='' />
			</div>
		</div>
	)
}

export default BannerBlog
