import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAsync = createAsyncThunk(
	'fetch/getAsync',
	async () => {
		const rez = await fetch(
            // 'http://localhost:7000/todos')
`https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${city}`) 
            if (rez.ok) {
			const grad = await rez.json()

            console.log(grad)
			return { grad }
		}
	}
);

const initialState = {
  city: '', id:'', grad: {},
  favorited: false, 
  list: [],
}

export const apiSlice = createSlice({
  name: "api",
  initialState,

  reducers: {
    resetList: (state) => (state = {}),

    addCity: (state, action)=>{
        const newCity = {
            id: grad.id,
            name: action.payload.city,
            favorited: false
        }  
        state.push (newCity)
    },
    toggleFavorited: (state, action)=>{
        const idX = state.findIndex((i) => i.id === action.payload.id)
        console.log(idX)
        state[idX].favorited = action.payload.favorited
    },
    deleteCity: (state, action) => {
        return state.filter((ii) =>ii.id !== action.payload.id)
    },

    addToList: (state,action)=>{
        state.list.push( action.payload) },

    removeFromList: (state,action) =>{
       state.list.splice(action.payload, 1)},

    }, 
    extraReducers: {
        [getAsync.pending]: (state, action) => {
              console.log('FETCHING...')
          },
      [getAsync.fulfilled]: (state, action) => {
        console.log('FETCHED!')
        return action.payload.todos
    },
  }

}
)

export const 
{ addCity, 
  updateFavorite,
  addToList,
removeFromList,
  deleteCity,
  resetList 
} = apiSlice.actions

export default apiSlice.reducer