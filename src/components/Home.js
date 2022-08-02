import React, {useEffect, useState} from 'react'
import {getTopStories} from '../apiCalls'
import StoriesContainer from './StoriesContainer'

 const Home = () => {
	const [stories, setStories] = useState([])
	const [typeFilter, setTypeFilter] = useState('')

	useEffect(() => {
		getTopStories('home').then(data => setStories(data.results))
	}, [])

	return (
		<div className='home'>
			<h1>Stories Titles</h1>
			<select>

			</select>
			<StoriesContainer stories={stories} />
		</div>
	)
}

export default Home