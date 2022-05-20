import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addCity} from '../redux/apiSlice'

const Form = () => {
const [city, citySet] = useState('');
const dispatch = useDispatch()

	const onSubmit = (event) => {
		event.preventDefault();
	dispatch (addCity({
	city: city,
})
)
		console.log('user entered: ' + city);
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add city...'
				value={city}
				onChange={(event) => citySet(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default Form;
