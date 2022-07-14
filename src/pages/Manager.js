import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { images } from '../constants'
import { logout } from '../redux/authSlice'
import { useDispatch } from 'react-redux'
import './Manager.css'

const Manager = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLogout = () => {
		localStorage.removeItem('token')
		dispatch(logout())
		navigate('/login')
	}

	return (
		<div className='manager'>
			<div className='manager__header'>
				<div className='manager__header-logo'>
					<img src={images.logo} alt='Logo' />
				</div>
				<div className='manager__header-list'>
					<div className='manager__header-list-item'>
						<Link to='/manager'>Manage Blog</Link>
					</div>
					<div className='manager__header-list-item'>
						<Link to='/manager/category'>Category</Link>
					</div>
					<div className='manager__header-list-item'>
						<Link to='/manager/write'>Write</Link>
					</div>
					<div
						className='manager__header-list-item'
						onClick={handleLogout}
						style={{
							cursor: 'pointer',
						}}
					>
						Logout
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	)
}

export default Manager
