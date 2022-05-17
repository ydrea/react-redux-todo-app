import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import {useSelector, useDispatch} from 'react-redux'
import { getAsync } from '../redux/todoSlice';

const TodoList = () => {
const todos = useSelector((state)=>state.todos)
const dispatch = useDispatch()

useEffect(
	()=>{
		dispatch(getAsync())
	},[dispatch]
)
	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} favorited={todo.favorited} key={Math.random()}/>
			))}
		</ul>
	);
};

export default TodoList;
