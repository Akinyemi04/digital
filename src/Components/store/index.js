import { configureStore, createSlice } from "@reduxjs/toolkit";

const landingDetails = createSlice({
    name:'landingDetail',
    initialState:{

    },
    reducers:{
        change(state,action){

        }
    }
})

export const  landing = landingDetails.actions

const store = configureStore({
    reducer:{
        landing:landingDetails.reducer
    }
})

export default store