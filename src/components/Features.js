import React from 'react'
import { icon } from '../constants'
import { useTranslation } from 'react-i18next'
import linkDownload from '../constants/link'

const Features = () => {
	const { t } = useTranslation()

	return (
		<div className='features container' id='solutions'>
			<div className='features__content'>
				{/* map 4 items [1,2,3,4] */}
				{[1, 2, 3, 4].map((item) => (
					<div className='features__item' key={item}>
						{icon[`${item - 1}`]}

						<div className='features__item-title'>
							{t(`features__item-title.${[item]}`)}
						</div>
						<div className='features__item-text'>
							{t(`features__item-text.${[item]}.1`)} <br />
							{t(`features__item-text.${[item]}.2`)} <br />
							{t(`features__item-text.${[item]}.3`)}
						</div>
					</div>
				))}
			</div>
			<div className='features__intro'>
				<h3 className='features__intro-title'>
					{t('features__intro-title.1')} <br />
					{t('features__intro-title.2')} <br />
					{t('features__intro-title.3')}
				</h3>
				<a href={linkDownload} target='_blank' rel='noreferrer'>
					<div className='features__intro-button button button--primary button--large'>
						{t('features__intro-button')}
					</div>
				</a>
			</div>
		</div>
	)
}

export default Features
