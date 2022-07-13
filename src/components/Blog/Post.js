import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'
import { linkImages } from '../../constants/link'

const Post = ({ post }) => {
	const PF = linkImages

	return (
		<>
			<div className='post'>
				<Link to={`/blog/${post.slug}`}>
					<div className='post__image'>
						<img src={PF + post.photoAvatar} alt='' />
					</div>
				</Link>
				<div className='post__time'>
					{new Date(post.createdAt).toLocaleDateString()}
				</div>
				<Link to={`/blog/${post.slug}`}>
					<h3 className='post__title'>{post.title}</h3>
				</Link>
			</div>
		</>
	)
}

export default Post
