import { configureStore, createSlice } from "@reduxjs/toolkit";

const landingDetails = createSlice({
    name:'landingDetail',
    initialState:{
        success_story_counter :2,
        story_height:'',
        cookie_show : true,
        courses_max_height:'auto',
        courses_height:'auto',
        counter_component:true,
        should_display_header:true
    },
    reducers:{
        header(state,action){
            return{
                ...state,
                should_display_header:action.payload
            }
        }
        ,
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

const Free_Taster= createSlice({
    name:'freeTaster',
    initialState:{
        name:'',
        email:'',
        course:'',
        Terms_check:false
    },
    reducers:{
        change_name(state,action){
            return {
                ...state,
                name:action.payload
            }
        },
        update_email(state,action){
            return {
                ...state,
                email:action.payload
            }
        },
        change_course(state,action){
            return{
                ...state,
                course:action.payload
            }
        },
        terms_and_condition(state,action){
            return{
                ...state,
                Terms_check:action.payload
            }
        }
    }
})

export const  landing = landingDetails.actions
export const Free_Taste = Free_Taster.actions

const store = configureStore({
    reducer:{
        landing:landingDetails.reducer,
        free_taster:Free_Taster.reducer

    }
})
 
export default store