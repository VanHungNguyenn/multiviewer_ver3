import React from 'react'
import Banner from '../components/Banner'
import Intro from '../components/Intro'
import Statistic from '../components/Statistic'
import Trusted from '../components/Trusted'
import Features from '../components/Features'
import Community from '../components/Community'
import Pricing from '../components/Pricing'
import Question from '../components/Question'
// import Review from '../components/Review'

const Home = () => {
	return (
		<>
			<Banner />
			<Intro />
			<Trusted />
			<Statistic />
			<Features />
			{/* <Review /> */}
			<Pricing />
			<Community />
			<Question />
		</>
	)
}

export default Home
