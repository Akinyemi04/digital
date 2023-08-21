import { configureStore, createSlice } from "@reduxjs/toolkit";

const landingDetails = createSlice({
    name:'landingDetail',
    initialState:{
        success_story_counter :2,
        story_height:'',
        cookie_show : true,
        courses_max_height:'auto',
        courses_height:'auto',
        counter_component:true
    },
    reducers:{
        change_success_counter(state,action){
            return{
                ...state,
                success_story_counter:action.payload
            }
        },
        update_story_height(state,action){
            return{
                ...state,
                story_height:action.payload
            }
        },
        reset_cookie(state){
            return{
                ...state,
                cookie_show:false
            }
        },
        reset_course_height(state,action){
            return{
                ...state,
                courses_max_height:action.payload
            }

        },
        change_course_height(state,action){
            return{
                ...state,
                courses_height:action.payload
            }
        },
        counting_component(state,action){
            return{
                ...state,
                counter_component:action.payload
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