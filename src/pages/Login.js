import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { images } from '../constants'
import { login } from '../redux/authSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import './Auth.css'

const Login = () => {
	const userRef = useRef()

	const navigate = useNavigate()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const [errMsg, setErrMsg] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		userRef.current.focus()
	}, [])

	useEffect(() => {
		setErrMsg('')
	}, [username, password])

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const res = await axios.post('/user/login', {
				username,
				password,
			})

			const accessToken = res?.data?.accessToken

			localStorage.setItem('token', accessToken)
			dispatch(
				login({
					username,
					token: accessToken,
				})
			)
			alert('Login Successful')
			setUsername('')
			setPassword('')
			navigate('/manager')
		} catch (error) {
			setErrMsg(error.response.data.message)
		}
	}

	return (
		<div className='auth container layout'>
			<div className='auth__content'>
				<div className='auth__title'>Log in</div>
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
						<button className='auth__button button button--primary'>
							Log in
						</button>
						{errMsg && <div className='auth__error'>{errMsg}</div>}
					</div>
				</form>
				<div className='auth__form-gr'>
					Forgot your password?
					<Link to='/register' className='auth__link'>
						{' '}
						Register
					</Link>
				</div>
			</div>
			<div className='auth__image'>
				<img src={images.bannerBlog} alt='' />
			</div>
		</div>
	)
}

export default Login
