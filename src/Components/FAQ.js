import { landing } from "./store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const FAQ = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    window.history.scrollRestoration = "manual";
    dispatch(landing.counting_component(false))
  },[dispatch])
  return (
    <div>FAQ</div>
  )
}

export default FAQ;