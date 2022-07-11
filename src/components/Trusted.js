import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { images } from '../constants'
import { useTranslation } from 'react-i18next'

const imgs = [
	images.amazon,
	images.castrol,
	images.cocacola,
	images.dell,
	images.mastercard,
	images.netflix,
	images.lg,
	images.tiktok,
]

const Trusted = () => {
	const { t } = useTranslation()

	return (
		<div className='container trusted'>
			<div className='trusted__title'>{t('trusted__title')}</div>
			<Swiper
				spaceBetween={50}
				slidesPerView={2}
				loop={true}
				modules={[Autoplay]}
				autoplay={{
					delay: 3000,
				}}
				breakpoints={{
					768: {
						slidesPerView: 5,
					},
					480: {
						slidesPerView: 3,
					},
					0: {
						slidesPerView: 2,
					},
				}}
			>
				{imgs.map((img, index) => (
					<SwiperSlide key={index}>
						<img src={img} alt='img brand' />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Trusted
