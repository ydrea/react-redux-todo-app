import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  city: '', id:'',
  favorited: false, 
  list: [],
  pending: false,
  err: false
}

export const apiSlice = createSlice({
  name: "api",
  initialState,

  reducers: {
    resetList: (state) => (state = {}),

    updateStart: (state)=>{state.pending=true},
    
    updateOk: (state,action)=>{
        state.pending=false; 
        state.city = action.payload 
      },
      
    updateError:(state)=>{state.err=true;
        state.pending=false},

    addToList: (state,action)=>{
        state.list.push( action.payload) },

    removeFromList: (state,action) =>{
       state.list.splice(action.payload, 1)},

    updateFavorite: (state,action)=>{
      const idX = state.findIndex((x) => x.id === action.payload.id);
      state[idX].favorited=action.payload.favorited
          
      },

    }, 
}
)

export const 
{ 
  updateStart,
  updateOk, 
  updateError, 
  updateFavorite,
  addToList,
  removeFromList,
  resetList 
} = apiSlice.actions

export default apiSlice.reducer