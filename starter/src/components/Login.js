import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../redux/userSlice';

export default function Login() {
    
    const [password, passwordSet] = useState("");
    const [email, emailSet] = useState("");
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const submitIt = (e) => {
        e.preventDefault();
        dispatch(update({ email, password }));
        };
    
      // const deleteIt = (e) => {
      //     e.preventDefault()
      //     dispatch(remove())
      // }
    // const changeIt=(e)=>{
    //     const{name,value}=e.target
    //     loginSet((cB)=>{
    //         return{...cB, [name]:value}
    //     })
    // }

    // const submitIt=(e)=>{
    //     e.preventDefault()
    //     console.log(login)
    // }

  return (
    <form 
    // onSubmit={submitIt}
    >
        <input type='email' name='email' placeholder='Email' 
                onChange={(e) => emailSet(e.target.value)}
        // onChange={changeIt} value={login.email}
        />
        <input type='pwd' name='pwd' placeholder='Password'
                onChange={(e) => passwordSet(e.target.value)}
        // onChange={changeIt} value={login.pwd}
        />
        <button disabled={user.pending} onClick={submitIt}>Login</button>
        </form>
  )
}
