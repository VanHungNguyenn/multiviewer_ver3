import { useState, useEffect } from 'react'
import './ManageBlog.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { linkImages } from '../constants/link'

const ManageBlog = () => {
	const [posts, setPosts] = useState([])
	const PF = linkImages

	const fetchPosts = async () => {
		const res = await axios.get('/post/all')
		setPosts(res.data.posts)
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	const deletePost = async (id) => {
		try {
			const res = await axios.delete('/post/' + id, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})

			alert(res.data.message)
			fetchPosts()
		} catch (error) {
			alert(error.response.data.message)
		}
	}

	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.value) {
				deletePost(id)
			}
		})
	}

	return (
		<div className='manage container'>
			<div className='posts'>
				{posts.map((post) => {
					return (
						<div className='post' key={post._id}>
							<Link to={`/blog/${post.slug}`}>
								<div className='post__image'>
									<img src={PF + post.photoAvatar} alt='' />
								</div>
							</Link>
							<div className='post__time'>
								{new Date(post.createdAt).toDateString()}
							</div>
							<Link to={`/blog/${post.slug}`}>
								<h3 className='post__title'>{post.title}</h3>
							</Link>
							{/* button delete */}
							<button
								className='button button--primary button--red'
								onClick={() => handleDelete(post._id)}
							>
								Delete
							</button>
							{/* button update */}
							<Link
								className='button button--primary'
								to={`/manager/update/${post._id}`}
								style={{
									textAlign: 'center',
								}}
							>
								Update
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ManageBlog
