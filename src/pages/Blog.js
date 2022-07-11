import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import BannerBlog from '../components/Blog/BannerBlog'
import Topic from '../components/Blog/Topic'
import Posts from '../components/Blog/Posts'

import axios from 'axios'

import './Blog.css'

const Blog = () => {
	const [posts, setPosts] = useState([])
	const { search } = useLocation()

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('/post/all' + search)
			setPosts(res.data.posts)
		}

		fetchPosts()
	}, [search])

	return (
		<>
			<div className='blog container layout'>
				{/* blog banner */}
				<BannerBlog />
				{/* blog topic */}
				<Topic />
				<Posts posts={posts} />
			</div>
		</>
	)
}

export default Blog
