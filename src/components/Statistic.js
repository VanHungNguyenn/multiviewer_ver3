import React from 'react'
import { useTranslation } from 'react-i18next'

const Statistic = () => {
	const { t } = useTranslation()

	return (
		<div className='statistic'>
			<div className='container statistic__container'>
				<div className='statistic__list'>
					<div className='statistic__item'>
						<div className='statistic__item-content'>
							<div className='statistic__item-content-value'>
								10+
							</div>
							<div className='statistic__item-content-unit'>
								{t('statistic__item-content-unit.1')}
							</div>
						</div>
						<div className='statistic__item-title'>
							{t('statistic__item-title.1')}
						</div>
					</div>
					<div className='statistic__item'>
						<div className='statistic__item-content'>
							<div className='statistic__item-content-value'>
								30+
							</div>
							<div className='statistic__item-content-unit'>
								{t('statistic__item-content-unit.2')}
							</div>
						</div>
						<div className='statistic__item-title'>
							{t('statistic__item-title.2')}
						</div>
					</div>
					<div className='statistic__item'>
						<div className='statistic__item-content'>
							<div className='statistic__item-content-value'>
								5
							</div>
							<div className='statistic__item-content-unit'>
								{t('statistic__item-content-unit.2')}
							</div>
						</div>
						<div className='statistic__item-title'>
							{t('statistic__item-title.3')}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Statistic
