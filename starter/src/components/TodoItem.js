import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { deleteToDo, toggleFavorited } from '../redux/todoSlice';

const TodoItem = ({id, title, favorited}) => {
const dispatch = useDispatch()

// const {id, title, favorited} = useSelector((state)=>state.todos)

const handleFavoritedClick=()=>{
	
	dispatch(toggleFavorited({id: id, favorited: !favorited  }))
}

const handleDeletedClick=()=>{
	dispatch(deleteToDo({id: id}))
}


return (
		<li className={`list-group-item ${favorited && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>

				<span className='d-flex align-items-center'>
					<input 
					type='checkbox' 
					className='mr-3' 
					checked={favorited}
					onChange={handleFavoritedClick}
					></input>
					{title}
				</span>
				<button 
				className='btn btn-danger'
				onClick={handleDeletedClick}
				>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
