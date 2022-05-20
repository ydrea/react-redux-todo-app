
import { useDispatch, useSelector } from 'react-redux'
import {removeFromList, updateFavorite, updateOk} from '../redux/apiSlice'
// import { useEffect } from 'react';
// import { updateCity, deleteCity } from '../redux/apiCall';


function Gradcard({city, favorited}) {
  const dispatch = useDispatch();
  // const cities = useSelector((state) => state.api.list)
  const id = useSelector((state)=>state.api.city.city.id)

console.log('ime', city, 'a index mi', id, 'jel fav', favorited)

  const deleteIt =(e, id)=>{
    e.preventDefault()
      dispatch (removeFromList(id))
      updateOk(id, dispatch)
    }
// sori, ajmo ipak preskociti kavu.. taman mi je krenulo, pa da ne prekidam ;)
 
const toggleFavoriteClick=()=>{
  // e.preventDefault()
  dispatch (updateFavorite({id: id, favorited: !favorited}))
  // updateOk(id, dispatch)
  // updateFavorite(id, dispatch)
  // console.log(checked)
}

  return (
  <>
    <div>{id}. {city} </div>
    <button onClick={ (id)=> (deleteIt(id))}>Delete</button> 
    
    <input type='checkbox' 
    name="isFavorite" 
    id="isFavorite"
    checked={favorited}
    onChange={toggleFavoriteClick()}
     /> 

    </>
  )
}

export default Gradcard