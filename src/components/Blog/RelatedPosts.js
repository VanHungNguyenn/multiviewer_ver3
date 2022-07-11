import React from 'react'
import Post from './Post'
import './RelatedPosts.css'

const RelatedPosts = ({ posts }) => {
	return (
		<>
			{posts ? (
				<div className='related container'>
					<div className='related__title'>Related posts:</div>
					<div className='posts'>
						{posts.map((post, index) => {
							return <Post key={index} post={post} />
						})}
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	)
}

export default RelatedPosts
