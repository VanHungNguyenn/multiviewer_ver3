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
import Manager from './pages/Manager'
import Category from './pages/Category'
import UpdateBlog from './pages/UpdateBlog'
import Layout from './components/Layout'

import PrivateRoute from './routes/PrivateRoute'
import { getToken, getUser } from './redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import ManageBlog from './pages/ManageBlog'

function App() {
	const { i18n } = useTranslation()
	const { lang, setLang } = useContext(LangContext)

	useEffect(() => {
		setLang(i18n.language)
	}, [i18n.language, setLang])

	const dispatch = useDispatch()
	const isLogin = !!localStorage.getItem('token')
	const { isLoggedIn } = useSelector((state) => state?.auth)

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
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route path='/' element={<Home />} />
							{languages.map((lang) => (
								<Route
									key={lang.code}
									path={`/${lang.code}`}
									element={<Home />}
								></Route>
							))}
							<Route path='blog' element={<Blog />} />
							<Route path='blog/:slug' element={<Single />} />
							<Route path='login' element={<Login />} />
							<Route path='register' element={<Register />} />
						</Route>
						{/* private page */}

						<Route
							path='manager'
							element={
								<PrivateRoute>
									<Manager />
								</PrivateRoute>
							}
						>
							<Route
								path='manage-blog'
								element={<ManageBlog />}
							/>
							<Route path='write' element={<Write />} />
							<Route path='category' element={<Category />} />
							<Route path='update/:id' element={<UpdateBlog />} />
						</Route>

						{/* 404 route */}
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</>
			) : (
				<></>
			)}
		</div>
	)
}

export default App
