import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../redux/userSlice';

function Logout() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();


    const deleteIt = (e) => {
        e.preventDefault()
        dispatch(remove())
    }
  return (
    <div>
         <button disabled={user.pending} onClick={deleteIt}>Logout</button>
   <span>Alo, {user.email} </span>
    </div>
  )
}

export default Logout