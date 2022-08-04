import React from 'react'
import Story from './Story'

const StoriesContainer = ({stories}) => {
	const renderStories = () => stories.map(story => {
		return (<Story key={Math.random() * 100} story={story} />)
	})


	return (
		<div
		className="stories-container"
		>{renderStories()}</div>
	)
}

export default StoriesContainer
