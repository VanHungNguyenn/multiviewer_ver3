import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
	const PF = 'http://localhost:5555/images/'

	return (
		<>
			<div className='post'>
				<Link to={`/blog/${post._id}`}>
					<div className='post__image'>
						<img src={PF + post.photoAvatar} alt='' />
					</div>
				</Link>
				<div className='post__time'>
					{new Date(post.createdAt).toDateString()}
				</div>
				<Link to={`/blog/${post._id}`}>
					<h3 className='post__title'>{post.title}</h3>
				</Link>
			</div>
		</>
	)
}

export default Post
