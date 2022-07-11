import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { images } from '../constants'

const Register = () => {
	const userRef = useRef()
	const navigate = useNavigate()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [key, setKey] = useState('')

	const [errMsg, setErrMsg] = useState('')

	useEffect(() => {
		userRef.current.focus()
	}, [])

	useEffect(() => {
		setErrMsg('')
	}, [username, password, email])

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const res = await axios.post('/user/register', {
				username,
				password,
				email,
				key,
			})

			alert(res.data.message)
			setUsername('')
			setPassword('')
			setEmail('')
			setKey('')

			navigate('/login')
		} catch (err) {
			setErrMsg(err.response.data.message)
		}
	}

	return (
		<div className='auth container layout'>
			<div className='auth__content'>
				<div className='auth__title'>Register</div>
				<form onSubmit={handleSubmit}>
					<div className='auth__form-group'>
						<label htmlFor='username'>Username:</label>
						<input
							type='text'
							id='username'
							ref={userRef}
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className='auth__form-group'>
						<label htmlFor='password'>Password:</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='auth__form-group'>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='auth__form-group'>
						<label htmlFor='key'>Key:</label>
						<input
							type='text'
							id='key'
							value={key}
							onChange={(e) => setKey(e.target.value)}
						/>
					</div>
					<div className='auth__form-group'>
						<button className='auth__button button button--primary'>
							Register
						</button>
						{errMsg && <div className='auth__error'>{errMsg}</div>}
					</div>
				</form>
				<div className='auth__form-gr'>
					Already have an account?
					<Link to='/login' className='auth__link'>
						{' '}
						Login
					</Link>
				</div>
			</div>
			<div className='auth__image'>
				<img src={images.bannerBlog} alt='' />
			</div>
		</div>
	)
}

export default Register
