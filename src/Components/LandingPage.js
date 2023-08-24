import "./Landing.css";
import { useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ScrollToTop from "./ScrollToTop";
import lady from "./images/DCK 1.png";
import mobile_lady from "./images/mobile.png";
import img1 from "./images/first_m.png";
import img2 from "./images/second_m.png";
import img3 from "./images/unsplash_Jy2mwPtOCOU.png";
import CloseIcon from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useDispatch, useSelector } from "react-redux";
import { landing } from "./store";
import { NavLink } from "react-router-dom";
import scrum from "./images/Scrum card.png";
import business from "./images/Business Analytics.png";
import analytic from "./images/Data Analytics.png";
import Success_stories from "./Success_stories";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);

const LandingPage = () => {
  const screen = window.screen.availWidth;
  const success_counter = useSelector((val) => {
    return val.landing.success_story_counter;
  }); // use to monitor number of story display


  const cookie_show = useSelector((val) => {
    return val.landing.cookie_show; // controls if the cookie slider should display
  });
  const courses_max_height = useSelector((val) => {
    return val.landing.courses_max_height;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookie_show) {
      setTimeout(() => {
        const cookie = document.getElementsByClassName("cookie_start")[0];
        if (cookie) cookie.setAttribute("id", "cookiee");
      }, 800);
    }
  }, [cookie_show, dispatch]);

  useEffect(() => {
    dispatch(landing.connection(true))
    if (screen < 1680) {
      const element = document.getElementById("business_analysis");

      setTimeout(() => {
        dispatch(landing.reset_course_height(element.offsetHeight));
      }, 1000);
    }
  }, [screen, dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", ScrollCheck);
    window.history.scrollRestoration = "manual";
    dispatch(landing.header(true));
    return () => {
      window.removeEventListener("scroll", ScrollCheck);
    };
  }, [dispatch, screen, ScrollCheck]);

  function ScrollCheck() {
    let valueDisplays = document.querySelectorAll(".counter");
    const Elder = document.getElementById("parent");
    if (Elder.parentElement.classList.contains("visible")) {
      window.removeEventListener("scroll", ScrollCheck);
      let interval = 1300;
      valueDisplays.forEach((value) => {
        let startValue = 0;
        let endValue = parseInt(value.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          if (endValue === 8000) {
            startValue += 25;
            value.textContent = startValue;
          } else {
            startValue += 1;
            value.textContent = startValue;
          }
          if (startValue === endValue) {
            value.nextElementSibling.style.opacity = "1";
            clearInterval(counter);
          }
        }, duration);
      });
    }
  }

  function cookie_control() {
    const element = document.getElementsByClassName("cookie_start")[0];
    element.removeAttribute("id");
    setTimeout(() => {
      dispatch(landing.reset_cookie());
    }, 800);
  }

  function Accept_cookie() {
    const element = document.getElementsByClassName("cookie_start")[0];
    element.removeAttribute("id");
    setTimeout(() => {
      dispatch(landing.reset_cookie());
    }, 800);
  }
  return (
    <div id="landing">
      <ScrollToTop />
      <section className="intro">
        {screen > 500 ? (
          <Swiper
            effect="cover"
            spaceBetween={50}
            navigation
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img loading="lazy" src={img1} alt="" />
              <article>
                <h1>Did you Know?</h1>
                <p>
                  Business Analysts are in high demand in UK and earn as much as
                  £600 per day. Get trained in 6- weeks.
                </p>
                <a href="https://digitalbusinesskonsult.com/business-analysis-payment/">
                  Enrol
                </a>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src={img2} alt="" />
              <article>
                <h1>Did you Know?</h1>
                <p>
                  You can be trained to become a Scrum Master in 6weeks. Scrum
                  Masters can earn £650 per day in UK.
                </p>
                <a href="https://digitalbusinesskonsult.com/business-analysis-payment/">
                  Enrol
                </a>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src={img3} alt="" />
              <article>
                <h1>Did you Know?</h1>
                <p>
                  You can be trained to become a Scrum Master in 6weeks. Scrum
                  Masters can earn £650 per day in UK.
                </p>
                <a href="https://digitalbusinesskonsult.com/business-analysis-payment/">
                  Enrol
                </a>
              </article>
            </SwiperSlide>
          </Swiper>
        ) : (
          <Swiper
            effect="cover"
            spaceBetween={50}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img loading="lazy" src={img1} alt="" />
              <article>
                <h1>Did you Know?</h1>
                <p>
                  Business Analysts are in high demand in UK and earn as much as
                  £600 per day. Get trained in 6- weeks.
                </p>
                <aside>
                  <a href="https://digitalbusinesskonsult.com/business-analysis-payment/">
                    Enrol
                  </a>
                  <a href="" id="mobile_taste">
                    Free Taster Session
                  </a>
                </aside>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src={img2} alt="" />
              <article>
                <h1>Did you Know?</h1>
                <p>
                  You can be trained to become a Scrum Master in 6weeks. Scrum
                  Masters can earn £650 per day in UK.
                </p>
                <aside>
                  <a href="https://digitalbusinesskonsult.com/business-analysis-payment/">
                    Enrol
                  </a>
                  <a href="" id="mobile_taste">
                    Free Taster Session
                  </a>
                </aside>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src={img3} alt="" />
              <article>
                <h1>Did you Know?</h1>
                <p>
                  You can be trained to become a Scrum Master in 6weeks. Scrum
                  Masters can earn £650 per day in UK.
                </p>
                <aside>
                  <a href="https://digitalbusinesskonsult.com/business-analysis-payment/">
                    Enrol
                  </a>
                  <a href="" id="mobile_taste">
                    Free Taster Session
                  </a>
                </aside>
              </article>
            </SwiperSlide>
          </Swiper>
        )}
      </section>
      <section className="courses">
        <h2>Explore Our Courses</h2>
        <main>
          <article>
            <div className="detail">
              <img loading="lazy" src={scrum} alt="" />
              <span>Practical Scrum Master</span>
            </div>
            <div style={{ maxHeight: courses_max_height }} className="swipe_up">
              <h4>Practical Scrum Master</h4>
              <p>
                The Practical Scrum Master training is a 6-week fast-track,
                intensive program that equips you with the right skills needed
                to thrive as an experienced Scrum Master within an Agile Product
                Development environment.
              </p>
              <NavLink to="/scrum"> Enrol Now</NavLink>
            </div>
          </article>
          <article id="business_analysis">
            <div className="detail">
              {" "}
              <img loading="lazy" src={business} alt="" />{" "}
              <span>Practical Business Analysis</span>
            </div>

            <div style={{ maxHeight: courses_max_height }} className="swipe_up">
              <h4>Practical Business Analysis</h4>
              <p>
                Jumpstart your TECH career by enrolling for Digital Careers
                Academy’s 6-week intensive Business Analysis program. Learn to
                identify business needs and translate business requirements into
                actionable technical specifications.
              </p>
              <NavLink to="/business_analysis">Enrol Now</NavLink>
            </div>
          </article>
          <article>
            <div className="detail">
              <img loading="lazy" src={analytic} alt="" />
              <span id="data_a">Data Analytics</span>
            </div>
            <div style={{ maxHeight: courses_max_height }} className="swipe_up">
              <h4> Data Analytics</h4>
              <p>
                Data Analytics experts are in high demand within the global tech
                industry. The Practical Data Analytics training is a 12-week
                intensive program that equips you with the right skills needed
                to thrive as a Data Analytics Expert.
              </p>
              <NavLink to="/data_analytics">Enrol Now</NavLink>
            </div>
          </article>
        </main>
      </section>
      <section className="choose_us">
        {screen > 500 ? (
          <img loading="lazy" src={lady} alt="" />
        ) : (
          <img loading="lazy" src={mobile_lady} alt="" />
        )}
        <article>
          <h2>Why Choose Us</h2>
          <p>
            Digital Careers Academy is committed to helping you secure high
            paying jobs by providing unique IT skills training and work
            experience. Our training facilitators are competent in Product
            Management, Business Analysis, Scrum Master & Data Analytics. Our
            interns gain work experience by using collaborative and product
            development tools in a simulated environment. <br /> We guide
            candidates through the entire development cycle of products from
            design to launch in an agile environment and have a plethora of
            vetted digital career mentors to guide you in securing high paying
            digital roles. See what people are saying about the founder on
            LinkedIn <br />
            {screen > 1000 ? (
              <a href="https://www.linkedin.com/posts/oludare-olorunfemi">
                See what people are saying about the founder on LinkedIn{" "}
                <span className="icon">
                  <LinkedInIcon />
                </span>{" "}
              </a>
            ) : (
              <a href="https://www.linkedin.com/posts/oludare-olorunfemi">
                https://www.linkedin.com/posts/oludare-olorunfemi
              </a>
            )}
          </p>
          <div>
            <button className="enrol">
              {screen > 500 ? "Enrol for Courses" : "Enrol Now"}
            </button>
            <button className="read_more"> Read More </button>
          </div>
        </article>
      </section>
      <Success_stories/>
     
      <AnimationOnScroll animateIn="visible">
        <section id="parent" className="info">
          <div>
            <p className="number">
              <span data-val="200" className="counter">
                000
              </span>
              <span className="plus">+</span>
            </p>
            <p className="detail">Success Stories</p>
          </div>
          <div>
            <p className="number">
              <span data-val="100" className="counter">
                000
              </span>
              <span className="plus">+</span>
            </p>
            <p className="detail">Candidates</p>
          </div>
          <div>
            <p className="number">
              <span data-val="45" className="counter">
                00
              </span>
              <span>+</span>
            </p>
            <p className="detail">Digital Products </p>
          </div>
          <div>
            <p className="number">
              <span data-val="10" className="counter">
                00
              </span>
              <span>+</span>
            </p>
            <p className="detail">Career Mentor</p>
          </div>
        </section>
        
      </AnimationOnScroll>
      {cookie_show && (
        <section className="cookie_start">
          <span className="icon" onClick={cookie_control}>
            <CloseIcon />
          </span>
          <p>
            We use cookies on our website to give you the most relevant
            experience by remembering your preferences and repeat visits. By
            clicking “Accept All”, you consent to the use of ALL the cookies.
            However, you may visit "Cookie Settings" to provide a controlled
            consent.
          </p>
          <aside>
            <span onClick={Accept_cookie}>Accept</span>
            <NavLink to="/cookie"> Manage Cookies</NavLink>
          </aside>
        </section>
      )}
    </div>
  );
};

export default LandingPage;
