import { useState, useRef, useEffect } from 'react'
import './Category.css'
import axios from 'axios'
const Category = () => {
	const [category, setCategory] = useState('')
	const [categories, setCategories] = useState([])
	const InputRef = useRef()

	console.log(categories)

	useEffect(() => {
		InputRef.current.focus()
	}, [])

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

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const res = await axios.post(
				'/category/create',
				{
					name: category,
				},
				{
					headers: {
						Authorization: localStorage.getItem('token'),
					},
				}
			)

			alert(res.data.message)
			fetchCategories()
			setCategory('')
		} catch (error) {
			alert(error.response.data.message)
		}
	}

	useEffect(() => {
		fetchCategories()
	}, [])

	return (
		<div className='category container'>
			{/* Add category */}
			<div className='category__add'>
				<div className='category__add-title'>Add category</div>
				<div className='category__add-form'>
					<form onSubmit={handleSubmit}>
						<div className='category__add-form-input'>
							<input
								type='text'
								placeholder='Category name'
								onChange={(e) => setCategory(e.target.value)}
								value={category}
								ref={InputRef}
							/>
						</div>
						<div className='category__add-form-button'>
							<button
								type='submit'
								className='button button--primary'
							>
								Add
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* List category */}
			<div className='category__list'>
				<div className='category__list-title'>List category:</div>
				<div className='category__list-content'>
					{categories.map((category) => (
						<div
							className='category__list-content-item'
							key={category._id}
						>
							<div className='category__list-content-item-name'>
								{category.name}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Category
