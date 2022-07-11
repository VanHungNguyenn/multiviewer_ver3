import React from 'react'

const Contact = () => {
	return (
		<div className='contact'>
			<div className='container'>
				<div className='contact__title'>
					Sign up for news, tips and more
				</div>
				<div className='contact__form'>
					<input
						className='contact__input'
						type='email'
						placeholder='Enter your email address'
					/>
					<div className='button button--primary button--large'>
						Subscribe Now
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
