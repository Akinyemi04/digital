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
import t5 from "./images/image 20.png";
import t6 from "./images/image 22.png";

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

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);

const LandingPage = () => {
  const screen = window.screen.availWidth;
  const success_counter = useSelector((val)=>{
    return val.landing.success_story_counter
  })

  const dispatch = useDispatch()
  
  useEffect(() => {
    window.addEventListener("scroll", ScrollCheck);
    window.history.scrollRestoration = "manual";
    if(screen < 501 ){
      dispatch(landing.change_success_counter(1) )
    }
    return () => {
      window.removeEventListener("event", ScrollCheck);
    };
  }, []);

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
  return (
    <div id="landing">
      <ScrollToTop />
      <section className="intro">
        <article>
          <h1>Did you Know?</h1>
          <p>
            Business Analysts are in high demand in UK and earn as much as £600
            per day. Get trained in 6- weeks.
          </p>
          <a href="#">Enrol</a>
        </article>
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
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
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
            </SwiperSlide>
            <SwiperSlide>
              <img src={mobile2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mobile3} alt="" />
            </SwiperSlide>
          </Swiper>
        )}
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
            <article>
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
            <article>
              <img src={t2} alt="" />
              <p>
                “I’m pleased to announce I have been offered a role as a{" "}
                <strong> Business Analyst </strong> for a software development
                company within the risk management sector. Always think about
                the end result, why you are on this platform, visualize the
                house, car and the ability to treat yourself and your family.
                When you succeed you will not only be a blessing to your own
                life but to others only”. DAREN.S.
              </p>
              <p className="name"> DAREN.S</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <img src={t3} alt="" />
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
            <article>
              <img src={t4} alt="" />
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
            <article>
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
            <article>
              <img src={t6} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti iste molestias pariatur tempore labore quisquam
                voluptas rem aliquam dolorem officiis. Optio eius nostrum, est
                error molestias tempore deleniti recusandae sint?
              </p>
              <p className="name">Name</p>
            </article>
          </SwiperSlide>
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
    </div>
  );
};

export default LandingPage;
