import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import { landing } from "./store";
import Success_stories from "./Success_stories";

const Scrum_Master = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.removeEventListener("scroll", ScrollCheck);
    dispatch(landing.header(true));
  }, [dispatch]);
  function ScrollCheck() {}

  return (
    <div>
      <ScrollToTop />
      <Success_stories/>
    </div>
  );
};

export default Scrum_Master;
