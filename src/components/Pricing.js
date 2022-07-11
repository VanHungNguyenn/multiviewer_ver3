import React from 'react'
import { useTranslation } from 'react-i18next'
import linkDownload from '../constants/link'

const Pricing = () => {
	const { t } = useTranslation()

	return (
		<div className='pricing container' id='pricing'>
			<div className='pricing__title'>{t('pricing__title')}</div>
			<h5 className='pricing__subtitle'>{t('pricing__subtitle')}</h5>
			<a href={linkDownload} target='_blank' rel='noreferrer'>
				<div className='pricing__button button button--large button--primary text-center'>
					{t('pricing__button')}
				</div>
			</a>
			<div className='pricing__list'>
				{[1, 2, 3].map((item) => (
					<div className='pricing__item' key={item}>
						<div className='pricing__item-name'>
							{t(`pricing__item-name.${item}`)}
						</div>
						<div className='pricing__item-price'>
							{t(`pricing__item-price.${item}`)}
						</div>
						<div className='pricing__item-subprice'>
							{t(`pricing__item-subprice.${item}`)}
						</div>
						<p className='pricing__item-text'>
							{t(`pricing__item-text.${item}.1`)} <br />
							{t(`pricing__item-text.${item}.2`)}
						</p>
						<a href={linkDownload} target='_blank' rel='noreferrer'>
							<div
								className={`pricing__item-button button button--large ${
									item === 2
										? 'button--primary'
										: 'button--default'
								}
						
						} button--100`}
							>
								{t('pricing__item-button')}
							</div>
						</a>
						<div className='pricing__item-includes'>
							{t(`pricing__item-includes.${item}`)}
						</div>
						<ul className='pricing__item-features'>
							{[1, 2, 3, 4, 5, 6, 7, 8].map((number) => {
								return t(
									`pricing__item-features.${item}.${number}`
								) !==
									`pricing__item-features.${item}.${number}` ? (
									<li key={number}>
										{t(
											`pricing__item-features.${item}.${number}`
										)}
									</li>
								) : null
							})}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}

export default Pricing
