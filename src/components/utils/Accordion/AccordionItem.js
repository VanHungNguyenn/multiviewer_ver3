import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const AccordionItem = ({ item }) => {
	const { t } = useTranslation()

	const [active, setActive] = useState(false)

	const handleAccordion = () => {
		setActive(!active)
	}

	return (
		<div
			className={`accordion__item ${
				active ? 'accordion__item--active' : ''
			}`}
		>
			<div className='accordion__item-title' onClick={handleAccordion}>
				{t(`question__data.${item}.question`)}
				<i className='fas fa-chevron-down'></i>
			</div>
			<div className='accordion__item-content'>
				{t(`question__data.${item}.answer`)}
			</div>
		</div>
	)
}

export default AccordionItem
