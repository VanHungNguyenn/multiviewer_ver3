import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Topic.css'

const Topic = () => {
	const [cats, setCats] = useState([])

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get('/category/all')

			setCats(res.data.categories)
		}

		getCats()
	}, [])

	return (
		<div className='topic'>
			<div className='topic__title'>Search blog by topics:</div>
			<div className='topic__list'>
				<Link to={`/blog`}>
					<div className='topic__item'>all</div>
				</Link>
				{cats.map((cat, index) => (
					<Link to={`/blog?category=${cat.name}`} key={index}>
						<div className='topic__item'>{cat.name}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Topic
