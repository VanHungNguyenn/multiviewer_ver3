import { useState, useRef, useEffect } from 'react'
import './Category.css'
import axios from 'axios'
import Swal from 'sweetalert2'
const Category = () => {
	const [category, setCategory] = useState('')
	const [categories, setCategories] = useState([])
	const InputRef = useRef()

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

	const handleUpdateCategory = async (id) => {
		try {
			Swal.fire({
				title: 'Please enter new category name',
				input: 'text',
				inputAttributes: {
					autocapitalize: 'off',
				},
				showCancelButton: true,
				confirmButtonText: 'Yes, update it!',
			}).then(async (result) => {
				if (result.value) {
					const name = result.value

					try {
						const res = await axios.put(
							`/category/update/${id}`,
							{
								name,
							},
							{
								headers: {
									Authorization:
										localStorage.getItem('token'),
								},
							}
						)

						alert(res.data.message)
						fetchCategories()
					} catch (error) {
						alert(error.response.data.message)
					}
				}
			})
		} catch (error) {
			alert(error.response.data.message)
		}
	}
	const handleDeleteCategory = async (id) => {
		try {
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!',
			}).then(async (result) => {
				if (result.value) {
					try {
						const res = await axios.delete(
							`/category/delete/${id}`,
							{
								headers: {
									Authorization:
										localStorage.getItem('token'),
								},
							}
						)

						alert(res.data.message)
						fetchCategories()
					} catch (error) {
						alert(error.response.data.message)
					}
				}
			})
		} catch (error) {
			alert(error.response.data.message)
		}
	}

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
							<div
								className='button button--primary'
								onClick={() =>
									handleUpdateCategory(category._id)
								}
							>
								Update
							</div>
							<div
								className='button button--primary button--red'
								onClick={() =>
									handleDeleteCategory(category._id)
								}
							>
								Delete
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Category
