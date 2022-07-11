import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './Single.css'
import { Link } from 'react-router-dom'
import RelatedPosts from '../components/Blog/RelatedPosts'

const Single = () => {
	const PF = 'http://localhost:5555/images/'

	const param = useParams()
	const [post, setPost] = useState({})
	const [relatedPosts, setRelatedPosts] = useState([])

	console.log(relatedPosts)

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await axios.get(`/post/${param.id}`)

				setPost(res.data.post)
			} catch (error) {
				console.log(error.message)
			}
		}

		fetchPost()
	}, [param.id])

	useEffect(() => {
		const fetchRelatedPosts = async () => {
			try {
				const res = await axios.get(`/post/related/${param.id}`)

				setRelatedPosts(res.data.posts)
			} catch (error) {
				console.log(error.message)
			}
		}

		fetchRelatedPosts()
	}, [param.id])

	return (
		<>
			<div className='layout container single'>
				{/* back to prev page */}
				<div className='single__back button button--primary'>
					<Link to='/blog'>
						<i className='fas fa-arrow-left'></i>
						<span>Back to overview</span>
					</Link>
				</div>
				{/* single title and date */}
				<div className='single__head'>
					<h1 className='single__title'>{post.title}</h1>
					<div className='single__date'>
						<i className='fas fa-calendar-alt'></i>
						<span>{new Date(post.createdAt).toDateString()}</span>
					</div>
					<div className='single__author'>
						<div className='single__author-image'>
							{/* random image avatar */}
							<img
								src='https://picsum.photos/200/200'
								alt='author'
							/>
						</div>
						<div className='single__author-infor'>
							<div className='single__author-name'>
								<span>Writen by </span>
								<Link to='/'>{post.username}</Link>
							</div>
							<div className='single__author-role'>Admin</div>
						</div>
					</div>
				</div>
				{/* single image */}
				<div className='single__image'>
					<img src={PF + post.photoAvatar} alt='single' />
				</div>
				{/* single content */}
				<div className='single__content'>
					{post.content}
					{/* <h2>Abstraction</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
						<a
							href='https://google.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Quisquam
						</a>
						, quidem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Et, quae! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Iusto voluptatum eum saepe
						ipsum aliquam nobis at, numquam consectetur veniam
						officia officiis! Atque delectus est cum ab cupiditate
						deleniti, repellat quisquam blanditiis alias
						voluptatibus molestias eveniet iste consequuntur
						architecto magni mollitia. Cumque aperiam incidunt
						deserunt, cupiditate recusandae possimus ipsa, tempore
						tempora corporis, dolore expedita. Autem suscipit
						consequuntur omnis unde expedita. Quod dolor possimus
						similique iste nemo! Facilis aut tenetur voluptates,
						cumque voluptatum possimus veniam harum rerum ad odio
						accusamus et quo in perspiciatis ipsam, voluptate,
						magnam repellendus? Incidunt earum expedita ullam
						quibusdam alias, error dicta? Adipisci perspiciatis
						asperiores minus neque nam.
					</p>
					<img src={'https://picsum.photos/id/2/400/300'} alt='' />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quasi nobis eveniet, alias magni,
						suscipit iste voluptas voluptates dolores, fugiat
						aperiam molestias autem explicabo architecto ullam sunt
						sint illo nulla recusandae molestiae quia tempora
						minima? Voluptas officia consequuntur veritatis
						cupiditate ut architecto facilis commodi perspiciatis!
						Distinctio, tempore ut deleniti, tempora pariatur nobis
						placeat sunt quam libero nihil molestiae facere nemo
						officiis eum, totam veritatis. Deserunt vero quidem
						ipsum debitis facilis. Optio magnam vero reiciendis cum
						laudantium iste voluptate corporis consequuntur
						voluptatibus quis, ullam, dolor, delectus reprehenderit!
						Accusantium, tenetur quisquam. Eum, inventore et!{' '}
						<a
							href='https://google.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Quod eligendi
						</a>{' '}
						facilis ullam. Adipisci dolor sunt expedita labore.
					</p>
					<blockquote>
						"Helping people make the world a better place through
						quality software."
					</blockquote>
					<h2>The User Experience</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Veniam fugit quod atque, est tempore
						sapiente quia mollitia repellendus dolore temporibus
						eaque accusamus? Et aut amet architecto soluta vel
						mollitia voluptas consequuntur assumenda rem maxime
						fugit voluptate, alias repellendus repellat quis. Sed
						fuga placeat perferendis officia pariatur molestiae,
						quas quae debitis!
					</p>
					<img src={'https://picsum.photos/id/3/400/300'} alt='' />
					<note>
						Side note... Want to just play around with stuff? Want
						to just ship stuff? That's totally cool. Just recognize
						you don't know the trade-offs and that could bite you in
						the future. If the future doesn't matter that much then
						don't worry about it!
					</note>
					<note>
						Side note... Want to just play around with stuff? Want
						to just ship stuff? That's totally cool. Just recognize
						you don't know the trade-offs and that could bite you in
						the future. If the future doesn't matter that much then
						don't worry about it!
					</note>
					<note>
						Side note... Want to just play around with stuff? Want
						to just ship stuff? That's totally cool. Just recognize
						you don't know the trade-offs and that could bite you in
						the future. If the future doesn't matter that much then
						don't worry about it!
					</note>
					<note>
						Side note... Want to just play around with stuff? Want
						to just ship stuff? That's totally cool. Just recognize
						you don't know the trade-offs and that could bite you in
						the future. If the future doesn't matter that much then
						don't worry about it!
					</note> */}
					<hr />
				</div>
				<RelatedPosts posts={relatedPosts} />
			</div>
		</>
	)
}

export default Single
