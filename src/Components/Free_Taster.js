import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import { landing } from "./store";
import bg1 from "./images/bg1.png";
import { NavLink } from "react-router-dom";
import './free_taster.css'

const Free_Taster = () => {
  const dispatch = useDispatch();
  const name = useSelector((val)=>{
    return val.free_taster.name
    
  })
  const email = useSelector((val)=>{
    return val.free_taster.email
    
  })
  const course = useSelector((val)=>{
    return val.free_taster.course
    
  })
  const term_condition = useSelector((val)=>{
    return val.free_taster.Terms_check
    
  })
  
  useEffect(() => {dispatch(landing.connection(false))

    window.history.scrollRestoration = "manual";
    window.removeEventListener("scroll", ScrollCheck);
    window.removeEventListener("scroll", assistant_dropdown);
    dispatch(landing.header(false));
  }, [dispatch]);

  function ScrollCheck() {}
  function assistant_dropdown(){
    console.log('child')
  }
  return (
    <div className="free_taster">
      <ScrollToTop />
      <img src={bg1} alt="" />
      <NavLink to="/">Back</NavLink>
      <main>
        <h1>Register for Free Taster</h1>
        <label htmlFor="name"> FULL NAME</label>
        <input type="text" placeholder="Enter Your Full Name" id="name"/>
        <label htmlFor="email">EMAIL</label>
        <input type="text" placeholder="Enter Address" id="email" />
      </main>
    </div>
  );
};

export default Free_Taster;
