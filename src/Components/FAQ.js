import React from "react";
import "./faq.css";
import bg from "./images/faqbg.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import { landing } from "./store";

const FAQ = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    dispatch(landing.header(true));
    window.removeEventListener("scroll", ScrollCheck);
  }, [dispatch]);

  function ScrollCheck() {}
  return (
    <div className="">
      <ScrollToTop />
      <div className="faq-hero">
        <img alt="FAQ" src={bg} />
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faqmain">
        <div className="tabs">
          <div className="tab">
            <input type="checkbox" id="chck1" />
            <label className="tab-label" htmlFor="chck1">
              What is Digital Careers Academy and what does it offer
            </label>
            <div className="tab-content">
              Digital Careers Academy is an e-learning platform specifically
              designed for professionals looking to transition into the tech
              industry. It provides comprehensive courses, hands-on trainings
              and resources to upskill individuals with the necessary knowledge
              and skills for a successful career in technology.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" id="chck2" />
            <label className="tab-label" htmlFor="chck2">
              Are the courses at Digital Careers Academy suitable for beginners
              with no technological backgrounds?
            </label>
            <div className="tab-content">
              Absolutely! Our courses are designed to cater to individuals with
              various levels of tech knowledge, including complete beginners.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" id="chck3" />
            <label className="tab-label" htmlFor="chck3">
              Can I access the course material on any device?
            </label>
            <div className="tab-content">
              Yes, our e-learning platform is fully responsive, allowing you to
              access course materials on any device with an internet connection,
              such as a computer, tablet, or smartphone.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" id="chck4" />
            <label className="tab-label" htmlFor="chck4">
              How does the enrollment process work?
            </label>
            <div className="tab-content">
              Enrolling in the Digital Careers Academy is straightforward.
              Simply browse through our website for available courses and choose
              the one that aligns with your career goals. You can attend a free
              taster before enrolling. After enrollment, you will gain immediate
              access to the live classes and course materials.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" id="chck5" />
            <label className="tab-label" htmlFor="chck5">
              What types of tech careers are covered in the courses?
            </label>
            <div className="tab-content">
              Our courses cover a wide range of tech careers, including data
              analysis, scrum master, business analysis, and product management.
              We strive to offer diverse options to match individual interests
              and aspirations.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" id="chck6" />
            <label className="tab-label" htmlFor="chck6">
              How long do I have access to the course materials
            </label>
            <div className="tab-content">
              You will have unlimited access to the course materials during the
              duration of your course and for as long as you are active on our
              platform, the course is available. This way, you can review the
              content and refresh your knowledge even after completing the
              course
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" id="chck7" />
            <label className="tab-label" htmlFor="chck7">
              Are there any opportunities For hands-on experience or real-world
              projects?
            </label>
            <div className="tab-content">
              Yes, we emphasise real hands-on experience for our candidates, we
              believe in providing practical learning experiences. Many of our
              courses include hands-on projects and real-world simulations to
              reinforce your learning and help you build a portfolio to showcase
              your skills to potential employers.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" id="chck8" />
            <label className="tab-label" htmlFor="chck8">
              Do you offer support?
            </label>
            <div className="tab-content">
              Yes, we are committed to helping our candidates succeed in their
              tech careers.We offer career support services, including resume
              building and interview preparation, to increase your chances of
              landing your dream tech job.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" id="chck9" />
            <label className="tab-label" htmlFor="chck9">
              Can I study at my own pace,or are there specific deadlines?
            </label>
            <div className="tab-content">
              We understand that everyone's learning pace is different. Our
              courses and trainings are intensive for initial 6 weeks. However ,
              you are allowed to self-paced at your convenience and complete
              modules as per your schedule.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" id="chck10" />
            <label className="tab-label" htmlFor="chck10">
              What set Digital Careers Academy apart from other e-learning
              platforms?
            </label>
            <div className="tab-content">
              Digital Careers Academy stands out for its specialized focus on
              helping professionals transition into the tech industry. Our
              curated courses, career support, practical projects, and flexible
              learning options make us the ideal platform for anyone seeking a
              successful tech career change.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
