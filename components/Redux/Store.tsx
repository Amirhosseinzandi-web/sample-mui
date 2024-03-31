"use client"

import { configureStore } from "@reduxjs/toolkit"
import SliceHandler from "./CreateSlice"



const Store = configureStore({
    reducer : {
        app : SliceHandler
    }
})


export default Store