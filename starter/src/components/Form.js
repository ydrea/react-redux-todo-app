import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCity } from '../redux/apiCall';
import 
{ 

  updateStart, updateOk, 
  updateError, 
  addToList, removeFromList,
  resetList
 } from '../redux/apiSlice';
import List from './List';
//

export default function Form() {

    const [city, citySet] = useState("");
    // const count = 10;

    const cities = useSelector((state) => state.api.list);
const favorited = useSelector((state)=>state.api.favorited)
// const id = useSelector((state)=>state.api.city.city.id)

// console.log('id', id) 
// dear player,
// quitting games the way you just did is considered unfair.
// I have submitted a report to chess.com administrators.
// Please don't do this again!

console.log(cities)
const citi = useSelector((state) => state);
console.log(citi)
console.log(favorited)

    const dispatch = useDispatch();
    //  //render monitor
  const renderMon = useRef(0)
  console.log(`zrendalo ${renderMon.current} puta`)
  useEffect(()=>{renderMon.current = renderMon.current +1})
  //

    const doDaj = (e)=>{
      e.preventDefault()
      dispatch(addToList(city));
      updateCity(city, dispatch)
      console.log(city)
      citySet('')
    }
//
// const popis = cities.map((city, index)=>{
//   <div>
//  city={city} key={city} index={index +1}
//  </div>
// })
//
return (
    <form 
    // onSubmit={submitIt}
    >
   <input  name='city' placeholder='...City' 
                onChange={(e) => citySet(e.target.value)}
        />
        <button 
        // disabled={cities.pending} 
        onClick={doDaj}>dajGrad</button>
        {cities.length !== 0 ?
<List city={city}/>
  : null }
    </form>
  )
}
