import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { reviewData } from '../constants'

import quoteWrite from '../images/quote-white.svg'

const Review = () => {
	return (
		<div className='review' id='reviews'>
			<div className='overlay' />
			<div className='container-sm'>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					loop={true}
					modules={[Autoplay]}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 3000,
					}}
				>
					{reviewData.map((review, index) => (
						<SwiperSlide key={index}>
							<div className='review__item'>
								<img
									src={quoteWrite}
									className='review__item-image'
									alt='quote'
								/>
								<div className='review__item-quote'>
									{review.quote}
								</div>
								<div className='review__item-author'>
									{review.author}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Review
