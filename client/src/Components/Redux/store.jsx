import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import adminReducer from './adminSlice'

console.log(`**** store *****`)
const store = configureStore({
    reducer:{
        user: userReducer,
        admin: adminReducer
    }
})

export default store
