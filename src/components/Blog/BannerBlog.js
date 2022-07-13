import React from 'react'
import './BannerBlog.css'
import { images } from '../../constants'

const BannerBlog = () => {
	return (
		<div className='banner-blog'>
			<div className='banner-blog__content'>
				<h1 className='banner-blog__title'>Multiviewer blog</h1>
				<p className='banner-blog__description'>
					Phần mềm Multiviewer truy cập các thiết bị từ xa. Điều khiển
					máy tính từ xa , hỗ trợ từ xa giúp người dùng làm việc và
					cộng tác trên máy tính một cách hiệu quả. Phần mềm
					Multiviewer cũng cập truy cập nhiều thiết bị máy tính từ xa
					an toàn và dễ dùng.
				</p>
			</div>
			<div className='banner-blog__image'>
				<img src={images.bannerBlog} alt='' />
			</div>
		</div>
	)
}

export default BannerBlog
