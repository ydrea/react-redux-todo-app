import axios from "axios";

import { 
    updateStart, 
    updateOk, 
    updateError, 
    resetList
  } from './apiSlice'

  export const updateCity = async (city, dispatch)=>{
    dispatch(updateStart())
    try{
        const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${city}`) 
        dispatch(updateOk(res.data))
    }
    catch(error){dispatch(updateError())}
  }
// //