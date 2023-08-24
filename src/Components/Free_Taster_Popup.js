import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { landing } from './store'
import up from './images/Vectorup.png'
import down from './images/Vectordown.png'
import done from './images/succesful.svg'
import { NavLink } from 'react-router-dom'

const Free_Taster_Popup = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(landing.display_footer(false))
        dispatch(landing.header(false));
        dispatch(landing.connection(false));
    })
  return (
    <div className='free_taste_popup'>
        <img className='up' src={up} loading='lazy' alt="" />
        <img className='down' src={down} loading='lazy' alt="" />
        <main>
            <img className='done' src={done} alt="" />
            <h5>Registration Successful</h5>
            <p>Kindly check your Email for more details</p>
            <NavLink to='/' >Continue</NavLink>
        </main>
    </div>
  )
}

export default Free_Taster_Popup