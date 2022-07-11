import React from 'react'
import { images } from '../constants'

const Loading = () => {
	return (
		<>
			<div className='loading'>
				<div className='loading__image'>
					<img src={images.spinner} alt='loading' />
				</div>
			</div>
		</>
	)
}

export default Loading
