import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import apiReducer from './apiSlice'
import userReducer from './userSlice'

export default configureStore({
    reducer:{
        user: userReducer,
        todos: todoReducer,
        api: apiReducer,
    }
})