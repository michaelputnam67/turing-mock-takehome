import React, {useEffect, useState} from 'react'
import {useParams, Navigate} from 'react-router-dom'

const StoryPage = ({stories}) => {
	const {id} = useParams()
	const [article, setArticle] = useState([])



	useEffect(() => {
		setArticle(stories.find(art => art.title === id))
	}, [id, stories])

	if(!stories) {
		return <Navigate to="/" replace />
	}
	
	if(!article) {
		console.log(stories)
		return(
			<p>Please wait will we fetch your article</p>
		)
	}

	return (
		<div className="story-page">
			<h2>{article.title}</h2>
		</div>
	)
}

export default StoryPage