import React from 'react'
import './accordion.css'
import AccordionItem from './AccordionItem'

const Accordion = ({ data }) => {
	return (
		<div className='accordion'>
			{data.map((item, index) => {
				return <AccordionItem key={index} item={item} />
			})}
		</div>
	)
}

export default Accordion
