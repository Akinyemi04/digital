import { landing } from "./store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const FAQ = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    window.history.scrollRestoration = "manual";
    window.removeEventListener("scroll", ScrollCheck);
  },[dispatch])

  function ScrollCheck(){

  }
  return (
    <div>FAQ</div>
  )
}

export default FAQ;