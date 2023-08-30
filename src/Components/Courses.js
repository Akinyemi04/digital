import hero from "./images/hero.png";
import introImg from "./images/img1.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { landing } from "./store";
const Courses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(landing.header(true));
    dispatch(landing.connection(true));
  });
  return(
    <main>
    <section className="">
        <img src="" alt="" />
    </section>
    <section></section>
    <section></section>
  </main>
  )

};

export default Courses;
