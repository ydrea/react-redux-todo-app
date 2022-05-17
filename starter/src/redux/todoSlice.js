import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getAsync = createAsyncThunk(
	'fetch/getAsync',
	async () => {
		const rez = await fetch(
            'http://localhost:7000/todos')
// `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${value}`) 
            if (rez.ok) {
			const todos = await rez.json()
			return { todos }
		}
	}
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addToDo: (state, action)=>{
            const newToDo = {
                id: Date.now(),
                title: action.payload.title,
                favorited: false
            }  
            state.push (newToDo)
        },
        toggleFavorited: (state, action)=>{
            const idX = state.findIndex((i) => i.id === action.payload.id)
            console.log(idX)
            state[idX].favorited = action.payload.favorited
        },
        deleteToDo: (state, action) => {
            return state.filter((ii) =>ii.id !== action.payload.id)
        }
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
})

export const {addToDo, deleteToDo, toggleFavorited} = todoSlice.actions
export default todoSlice.reducer