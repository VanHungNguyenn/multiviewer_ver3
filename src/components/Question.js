import React from 'react'
import Accordion from './utils/Accordion/Accordion'
import { accordionData } from '../constants'
import { useTranslation } from 'react-i18next'

const Question = () => {
	const { t } = useTranslation()

	return (
		<div className='question container'>
			<div className='question__title'>{t('question__title')}</div>
			<div className='question__accordion'>
				<Accordion data={accordionData} />
			</div>
		</div>
	)
}

export default Question
