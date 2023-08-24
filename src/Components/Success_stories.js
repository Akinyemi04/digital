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
import t1 from "./images/testimonial_1.png";
import t2 from "./images/testimonial_2.png";
import t3 from "./images/Rectangle 32.png";
import t4 from "./images/image 18.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { landing } from "./store";
import "./success_stories.css";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);

const Success_stories = () => {
  const dispatch = useDispatch();
  const screen = window.screen.availWidth;
  const success_counter = useSelector((val) => {
    return val.landing.success_story_counter;
  }); // use to monitor number of story display

  const story_height = useSelector((val) => {
    return val.landing.story_height;
  }); // since different testimonial have different height ,i'm using the height of the most populated text
  useEffect(() => {
    const element = document.getElementById("first_testimonial");
    dispatch(landing.update_story_height(element.offsetHeight + 60));
    if (screen < 501) {
      dispatch(landing.change_success_counter(1));
    }

    setTimeout(() => {
      element.style.height = `${element.offsetHeight + 60}px`;
    }, 1200);

  },[]);
  return (
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
              getting your hands dirty, you work and dedication will definitely
              be rewarded”
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
              company within the risk management sector. Always think about the
              end result, why you are on this platform, visualize the house, car
              and the ability to treat yourself and your family. When you
              succeed you will not only be a blessing to your own life but to
              others only”.
            </p>
            <p className="name"> DAREN.S</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article style={{ height: story_height }}>
            <img src={t3} alt="" />
            <p>
              “I recently complete the Digital Careers Academy's Business
              Program and it has been an incredible experience. The courses are
              well structured, the instructors are knowledgeable and always
              willing to help and their support network is top-notch. I have
              just Secured a <strong>Business Analyst</strong> role.”
            </p>
            <p className="name">PEACE</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article style={{ height: story_height }}>
            <img src={t4} alt="" />
            <p>
              “I am glad and excited to announce to my privacy team that I have
              secured a <strong> Data Protection </strong> Specialist job and I
              give God the Glory. This achievement couldn't have been possible
              without the persistent support of Prof Oludare, he encouraged and
              believe in me, he was always available at all times. I also put in
              the shift with so much hard work and dedication. The tunnel might
              seem very dim but keep pushing and success will be yours”.
            </p>
            <p className="name">ANONYMOUS</p>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Success_stories;
