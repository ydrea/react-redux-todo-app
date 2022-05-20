import React from 'react'
import { useSelector } from 'react-redux'

const Favorites = () => {
	const favoritedList = useSelector
	(
		(state)=>state.todos.filter((i)=>
		i.favorited === true
		) 	
	)

	return (
	<>
	<h4 className='mt-3'>Total Complete Items: {favoritedList.length} </h4>
{favoritedList.map((i)=>
<p key={i.id}>{i.title}</p>
)}
	</>
)
};

export default Favorites;
