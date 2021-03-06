import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './Write.css'
import { useSelector } from 'react-redux'
import TextEditor from '../components/Blog/TextEditor'

const Write = () => {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [file, setFile] = useState(null)
	const [fileAvatar, setFileAvatar] = useState(null)
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

		if (file) {
			const data = new FormData()
			const filename = Date.now() + '-' + file.name
			data.append('name', filename)
			data.append('file', file)

			newPost.photo = filename

			try {
				await axios.post('/upload', data, {
					headers: {
						Authorization: localStorage.getItem('token'),
					},
				})
			} catch (error) {
				console.log(error.message)
			}
		}

		if (fileAvatar) {
			const dataAvatar = new FormData()
			const filename = Date.now() + '-' + fileAvatar.name
			dataAvatar.append('name', filename)
			dataAvatar.append('file', fileAvatar)

			newPost.photoAvatar = filename

			try {
				await axios.post('/upload', dataAvatar, {
					headers: {
						Authorization: localStorage.getItem('token'),
					},
				})
			} catch (error) {
				console.log(error.message)
			}
		}

		try {
			const res = await axios.post('/post/create', newPost, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})

			alert('Post created')
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
				Write new blog
			</div>
			{file && (
				<div className='write__image'>
					<img src={URL.createObjectURL(file)} alt='preview' />
				</div>
			)}
			{fileAvatar && (
				<div className='write__image-avatar'>
					<img src={URL.createObjectURL(fileAvatar)} alt='preview' />
				</div>
			)}

			<form className='write__form' onSubmit={handleSubmit}>
				<div className='write__form-group'>
					<label htmlFor='fileInput'>
						<i className='write__icon fas fa-plus'></i>
						<span
							style={{
								marginLeft: '2rem',
							}}
						>
							Add image
						</span>
					</label>
					<input
						id='fileInput'
						type='file'
						style={{ display: 'none' }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
				</div>
				<div className='write__form-group'>
					<label htmlFor='fileInputAvatar'>
						<i className='write__icon fas fa-plus'></i>
						<span
							style={{
								marginLeft: '2rem',
							}}
						>
							Add image avatar
						</span>
					</label>
					<input
						id='fileInputAvatar'
						type='file'
						style={{ display: 'none' }}
						onChange={(e) => setFileAvatar(e.target.files[0])}
					/>
				</div>
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
				<button className='button button--primary'>Publish</button>
			</form>
		</div>
	)
}

export default Write
