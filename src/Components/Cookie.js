import { useEffect } from "react";
import "./cookie.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ScrollToTop from "./ScrollToTop";
import CircleIcon from "@mui/icons-material/Circle";

const Cookie = () => {
  useEffect(() => {
    window.removeEventListener("scroll", ScrollCheck);
  });
  function ScrollCheck() {}
  return (
    <div id="cookie">
      <ScrollToTop />
      <main>
        <h1>Privacy Overview</h1>
        <span className="circle">
          <CircleIcon/>
        </span>
        <span className="line">
          <HorizontalRuleIcon/>
        </span>
        <p>
          This website uses cookies to improve your experience while you
          Navigate through the website. Out of these, the cookies that are
          categorised as necessary are store on your browser as they are
          essential for the working of basic functionalities of the websites. We
          also use third party cookies that help us analyse and understand how
          you use this websites. These cookies can be stored in your browser
          only with your consent. You also have the option to opt-out of these
          cookies. But opting out of some of these cookies may affect your
          browsing experience.
        </p>
        <span>show less</span>
        <section>
          <div>
            <p>
              <span>
                <KeyboardArrowRightIcon />
              </span>
              <span>Necessary</span>
            </p>
            <p></p>
          </div>
          <div>
            <p>
              <span>
                <KeyboardArrowRightIcon />
              </span>
              <span>Necessary</span>
            </p>
          </div>
          <div>
            <p>
              <span>
                <KeyboardArrowRightIcon />
              </span>
              <span>Necessary</span>
            </p>
          </div>
          <div>
            <p>
              <span>
                <KeyboardArrowRightIcon />
              </span>
              <span>Necessary</span>
            </p>
          </div>
          <div>
            <p>
              <span>
                <KeyboardArrowRightIcon />
              </span>
              <span>Necessary</span>
            </p>
          </div>
          <div>
            <p>
              <span>
                <KeyboardArrowRightIcon />
              </span>
              <span>Necessary</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cookie;
