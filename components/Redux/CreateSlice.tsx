"use client"

import { createSlice } from "@reduxjs/toolkit"


type initialStateType = {
    darkMode : boolean
}

const initialState:initialStateType = {
    darkMode : false
}


const SliceHandler = createSlice({
    name : "SliceHandler" ,
    initialState , 
    reducers : {
        toggleDarkMode : (state) => {
            state.darkMode = !state.darkMode
        }
    }
})


export const {toggleDarkMode} = SliceHandler.actions
export default SliceHandler.reducer