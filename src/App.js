import React, { useContext, useEffect, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { languages } from './constants'
import LangContext from './context/LangProvider'
import { useTranslation } from 'react-i18next'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Register from './pages/Register'
import Write from './pages/Write'
import Single from './pages/Single'
import Footer from './components/Footer'
import Header from './components/Header'

import PrivateRoute from './routes/PrivateRoute'
import { getToken, getUser } from './redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

function App() {
	const { i18n } = useTranslation()
	const { lang, setLang } = useContext(LangContext)

	useEffect(() => {
		setLang(i18n.language)
	}, [i18n.language, setLang])

	const dispatch = useDispatch()
	const isLogin = !!localStorage.getItem('token')
	const { isLoggedIn } = useSelector((state) => state?.auth)

	console.log({ isLoggedIn })

	const getTokenUser = useCallback(async () => {
		const token = localStorage.getItem('token')

		if (token) {
			dispatch(getToken(token))
		}
	}, [dispatch])

	useEffect(() => {
		if (isLogin) {
			getTokenUser()
		}
	}, [isLogin, getTokenUser])

	const getInforUser = useCallback(async () => {
		try {
			const res = await axios.get('/user/infor', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})

			dispatch(getUser(res.data.user))
		} catch (error) {
			console.log(error.message)
		}
	}, [dispatch])

	useEffect(() => {
		if (isLoggedIn) {
			getInforUser()
		}
	}, [isLoggedIn, getInforUser])

	return (
		<div className='App'>
			{lang ? (
				<>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						{languages.map((lang) => (
							<Route
								key={lang.code}
								path={`/${lang.code}`}
								element={<Home />}
							/>
						))}
						<Route path='blog' element={<Blog />} />
						<Route path='blog/:id' element={<Single />} />
						<Route path='login' element={<Login />} />
						<Route path='register' element={<Register />} />
						{/* private page */}
						<Route
							path='write'
							element={
								<PrivateRoute>
									<Write />
								</PrivateRoute>
							}
						/>

						{/* 404 route */}
						<Route path='*' element={<PageNotFound />} />
					</Routes>
					<Footer />
				</>
			) : (
				<></>
			)}
		</div>
	)
}

export default App