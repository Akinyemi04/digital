import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import { landing } from "./store";
import bg1 from "./images/bg1.png";
import { Navigate } from "react-router-dom";

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
  
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.removeEventListener("scroll", ScrollCheck);
    dispatch(landing.header(false));
  }, [dispatch]);

  function ScrollCheck() {}
  return (
    <div>
      <ScrollToTop />
      <img src={bg1} alt="" />
      <Navigate to="/">Back</Navigate>
      <main>
        <h1>Register for Free Taster</h1>
        <label htmlFor=""></label>
        <input type="text" />n
      </main>
    </div>
  );
};

export default Free_Taster;
