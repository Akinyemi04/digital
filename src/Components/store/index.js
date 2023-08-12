import { configureStore, createSlice } from "@reduxjs/toolkit";

const landingDetails = createSlice({
    name:'landingDetail',
    initialState:{
        success_story_counter :2
    },
    reducers:{
        change_success_counter(state,action){
            return{
                ...state,
                success_story_counter:action.payload
            }
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