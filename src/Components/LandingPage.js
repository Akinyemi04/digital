import "./Landing.css";
import { useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ScrollToTop from "./ScrollToTop";
import lady from "./images/DCK 1.png";
import mobile_lady from "./images/mobile.png";
import img1 from "./images/first_m.png";
import img2 from "./images/second_m.png";
import img3 from "./images/unsplash_Jy2mwPtOCOU.png";
import mobile1 from "./images/mobile_1.png";
import mobile2 from "./images/mobile_2.png";
import mobile3 from "./images/mobile_3.png";
import t1 from "./images/testimonial_1.png";
import t2 from "./images/testimonial_2.png";
import t3 from "./images/Rectangle 32.png";
import t4 from "./images/image 18.png";
// import t5 from "./images/image 20.png";
// import t6 from "./images/image 22.png";
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

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);

const LandingPage = () => {
  const screen = window.screen.availWidth;
  const success_counter = useSelector((val) => {
    return val.landing.success_story_counter;
  }); // use to monitor number of story display

  const story_height = useSelector((val) => {
    return val.landing.story_height;
  });
  const cookie_show = useSelector((val) => {
    return val.landing.cookie_show; // controls if the cookie slider should display
  });
  const courses_max_height = useSelector((val) => {
    return val.landing.courses_max_height;
  });
  const dispatch = useDispatch();


  useEffect(() => {
    const element = document.getElementById("first_testimonial");
    dispatch(landing.update_story_height(element.offsetHeight + 60));

    setTimeout(() => {
      element.style.height = `${element.offsetHeight + 65}px`;
    }, 1200);
    if (cookie_show) {
      setTimeout(() => {
        const cookie = document.getElementsByClassName("cookie_start")[0];
        if(cookie)
        cookie.setAttribute("id", "cookiee");
      }, 800);
    }
  }, []);

  useEffect(() => {
    if (screen < 1680) {
      const element = document.getElementById("business_analysis");

      setTimeout(() => {
        dispatch(landing.reset_course_height(element.offsetHeight));
      }, 1000);
    }
  }, []);

  useEffect(() => {  
      window.addEventListener("scroll", ScrollCheck);
      window.history.scrollRestoration = "manual";
      if (screen < 501) {
        dispatch(landing.change_success_counter(1));
      }
      return () => {
        window.removeEventListener("scroll", ScrollCheck);
      };
  }, [dispatch,]);

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
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src={img1} alt="" />
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
              <img src={img2} alt="" />
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
              <img src={img3} alt="" />
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
            autoplay={{ delay: 3000 }}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src={mobile1} alt="" />
              <article>
                <h1>Did you Know?</h1>
                <p>
                  Business Analysts are in high demand in UK and earn as much as
                  £600 per day. Get trained in 6- weeks.
                </p>
                <a href="https://digitalbusinesskonsult.com/business-analysis-payment/">
                  Enrol
                </a>
                <img src={img2} alt="" />
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <img src={mobile2} alt="" />
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
              <img src={mobile3} alt="" />
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
        )}
      </section>
      <section className="courses">
        <h2>Explore Our Courses</h2>
        <main>
          <article>
            <div className="detail">
              <img src={scrum} alt="" />
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
              <img src={business} alt="" />{" "}
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
              <img src={analytic} alt="" />
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
          <img src={lady} alt="" />
        ) : (
          <img src={mobile_lady} alt="" />
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
      <section className="success_story">
        <h2> Success Stories</h2>
        <Swiper
          effect="cover"
          spaceBetween={50}
          autoplay={{ delay: 3000 }}
          slidesPerView={success_counter}
        >
          <SwiperSlide>
            <article id="first_testimonial">
              <img src={t1} alt="" />
              <p>
                “I am happy to inform you that I have secured a process Analyst
                position with a Government Agency in the U.K. I am happy and
                excited about the opportunity. I want to thank the coaching team
                and Prof Oludare for your mentorship, support and the remarkable
                learning experience during my practical{" "}
                <strong> Business Analysis program.</strong> I encourage all
                present DCA students to stay motivated, Keep sweating it out and
                getting your hands dirty, you work and dedication will
                definitely be rewarded”
              </p>
              <p className="name">OLU</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article style={{ height: story_height }}>
              <img src={t2} alt="" />
              <p>
                “I’m pleased to announce I have been offered a role as a{" "}
                <strong> Business Analyst </strong> for a software development
                company within the risk management sector. Always think about
                the end result, why you are on this platform, visualize the
                house, car and the ability to treat yourself and your family.
                When you succeed you will not only be a blessing to your own
                life but to others only”.
              </p>
              <p className="name"> DAREN.S</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article style={{ height: story_height }}>
              <img src={t3} alt="" />
              <p>
                “I recently complete the Digital Careers Academy's Business
                Program and it has been an incredible experience. The courses
                are well structured, the instructors are knowledgeable and
                always willing to help and their support network is top-notch. I
                have just Secured a <strong>Business Analyst</strong> role.”
              </p>
              <p className="name">PEACE</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article style={{ height: story_height }}>
              <img src={t4} alt="" />
              <p>
                “I am glad and excited to announce to my privacy team that I
                have secured a <strong> Data Protection </strong> Specialist job
                and I give God the Glory. This achievement couldn't have been
                possible without the persistent support of Prof Oludare, he
                encouraged and believe in me, he was always available at all
                times. I also put in the shift with so much hard work and
                dedication. The tunnel might seem very dim but keep pushing and
                success will be yours”.
              </p>
              <p className="name">ANONYMOUS</p>
            </article>
          </SwiperSlide>
          {/* <SwiperSlide>
            <article style={{ height: story_height }}>
              <img src={t5} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti iste molestias pariatur tempore labore quisquam
                voluptas rem aliquam dolorem officiis. Optio eius nostrum, est
                error molestias tempore deleniti recusandae sint?
              </p>
              <p className="name">Name</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article style={{ height: story_height }}>
              <img src={t6} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti iste molestias pariatur tempore labore quisquam
                voluptas rem aliquam dolorem officiis. Optio eius nostrum, est
                error molestias tempore deleniti recusandae sint?
              </p>
              <p className="name">Name</p>
            </article>
          </SwiperSlide> */}
        </Swiper>
      </section>
      <AnimationOnScroll animateIn="visible">
        {screen > 500 ? (
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
        ) : (
          <Swiper
            effect="cover"
            spaceBetween={50}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            className="info"
            id="parent"
          >
            <SwiperSlide>
              <div>
                <p className="number">
                  <span data-val="200" className="counter">
                    000
                  </span>
                  <span className="plus">+</span>
                </p>
                <p className="detail">Success Stories</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="number">
                  <span data-val="100" className="counter">
                    000
                  </span>
                  <span className="plus">+</span>
                </p>
                <p className="detail">Candidates</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="number">
                  <span data-val="45" className="counter">
                    00
                  </span>
                  <span>+</span>
                </p>
                <p className="detail">Digital Products </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="number">
                  <span data-val="10" className="counter">
                    00
                  </span>
                  <span>+</span>
                </p>
                <p className="detail">Career Mentor</p>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
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
