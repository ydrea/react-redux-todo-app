import React from 'react'

import Gradcard from './Gradcard'

import { useSelector, useDispatch } from 'react-redux'

const List = ({city}) => {
  
 console.log(city)
const favorited = useSelector((state)=>state.api.favorited)
console.log(favorited)
// const id = useSelector((state)=>state.api.city.city.id)
//  console.log(id)
const cities = useSelector((state) => state.api.list)


    return (
    <div>
              {cities.map((i)=>{
        <Gradcard 
          city={i.city} 
          key={i.id} 
          // id={index +1} 
          favorited={i.favorited}
       />  } )}

    </div>
  )
}

export default List