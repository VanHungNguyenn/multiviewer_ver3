import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import './Write.css'
import { useSelector } from 'react-redux'
import TextEditor from '../components/Blog/TextEditor'

const UpdateBlog = () => {
	const param = useParams()

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [category, setCategory] = useState([])
	const [categories, setCategories] = useState([])

	const { username } = useSelector((state) => state?.auth)

	const navigate = useNavigate()

	const fetchCategories = async () => {
		try {
			const res = await axios.get('/category/all', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})

			setCategories(res.data.categories)
		} catch (error) {
			console.log(error.response.data.message)
		}
	}

	const fetchPostById = useCallback(async () => {
		try {
			const res = await axios.get(`/post/getid/${param.id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})

			setTitle(res.data.post.title)
			setContent(res.data.post.content)
			setCategory(res.data.post.categories)
		} catch (error) {
			console.log(error.response.data.message)
		}
	}, [param.id])

	useEffect(() => {
		fetchPostById()
	}, [fetchPostById])

	useEffect(() => {
		fetchCategories()
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()

		let newPost = {
			username,
			title,
			content,
			categories: category,
		}

		try {
			const res = await axios.put(`/post/${param.id}`, newPost, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})

			alert(res.data.message)
			navigate(`/blog/${res.data.post.slug}`)
		} catch (error) {
			alert(error.response.data.message)
		}
	}

	const handleCheck = (name) => {
		if (category.includes(name)) {
			setCategory(category.filter((category) => category !== name))
		} else {
			setCategory([...category, name])
		}
	}

	return (
		<div className='write layout container'>
			<div
				style={{
					fontSize: '3rem',
					fontWeight: 'bold',
					marginBottom: '1rem',
				}}
			>
				Update blog
			</div>

			<form className='write__form' onSubmit={handleSubmit}>
				<div className='write__form-group'>
					<input
						className='write__input'
						placeholder='Title'
						type='text'
						autoFocus={true}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className='write__form-group'>
					{/* multi select from categories, radio */}
					{categories.map((cat) => (
						<div key={cat._id}>
							<input
								type='checkbox'
								onChange={() => handleCheck(cat.name)}
								checked={category.includes(cat.name)}
							/>
							<label
								style={{
									marginLeft: '1rem',
								}}
							>
								{cat.name}
							</label>
						</div>
					))}
				</div>
				<div className='write__form-group'>
					<TextEditor setContent={setContent} content={content} />
				</div>
				<button className='button button--primary'>Update</button>
			</form>
		</div>
	)
}

export default UpdateBlog
