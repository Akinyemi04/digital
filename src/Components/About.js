import React from "react";
import "./About.css";
import bg from "./images/vector.png";
import abtImg from "./images/Img2.png";
import whyImg from "./images/img3.png";
import team1Img from "./images/img6.png";
import team2Img from "./images/img7.png";

import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
  return (
    <div>
      <div className="about-container">
        <img alt="HeroImg" src={bg} />
        <h1>About Us</h1>
      </div>
      <div class="about-us">
        <div class="about-us-flex">
          <div class=" about-us-col-1">
            <img class="img-fluid" src={abtImg} alt="" />
          </div>
          <div
            class=" about-us-col-2 col-lg-6 col-md-6 col-sm-12"
          >
            <h1>About Us</h1>
            <p>
              Digital Careers Academy coaches and mentor candidates through the
              entire development cycle of products from design to launch in an
              agile environment. We have a plethora of vetted digital career
              mentors to guide you in securing high-paying digital roles. Our
              training facilitators are competent in Product Management,
              Business Analysis, Scrum Master, Product Ownership, Data
              Analytics, and Data Protection. Our interns gain work experience
              by using collaborative and product development tools in a
              simulated environment.
            </p>
          </div>
        </div>
      </div>

      <div className="why-us">
        <div className="row flex-items-2">
          <div className="why-us-col-1 col-lg-6 col-md-6 col-sm-12 mt-2 img-fluid">
            <h2>Why Digital Career Academy</h2>
            <p>
              <b>Comprehensive Curriculum</b> <br />
               We offer comprehensive training in
              Business Analysis, Scrum Master, & Data Analytics. <br />
               Practical Hands-on Experience. 
               Our interns gain work experience by using
              collaborative and product development tools in an interactive simulated environment. <br />

              <b>Flexibility and Accessibility</b> <br />
              Learning
              management system that allows candidates access all training
              sessions at all times. Coaches are readily available to support.
              Industry Expert Instructors  <br />
               <b>Our coaches are certified industry</b> <br />
              experts with years of experience who provide valuable insights and
              guidance. <br /> 
              <b>Affordable Fees</b>  <br /> 
              Budget friendly fees. We also offer
              Interest free payment plans.
            </p>
          </div>
          <img
            className="why-us-col-2 col-lg-6 col-md-6 col-sm-12 img-fluid"
            src={whyImg}
            alt=""
          />
        </div>
      </div>

      <div className="team-wrapper">
        <h1>Meet Our Coaches</h1>
        <div className="row team">
          <div className="team-member-1 team-member col-lg-6 col-md-6 col-sm-12 img-fluid">
            <div className="team-img">
              <img src={team1Img} alt="" />
            </div>
            <p>
              “Oludare is a multiskilled highly competent Data Privacy/Digital
              Transformation Coach with over 15 years global experience
              providing resource and capability development to organizations and
              individuals. Excellently skilled in coaching and leading teams
              globally in designing and developing digital products that meet
              customer needs, while adopting Agile frameworks. Expertise cover
              Data Protection, Product Management and Delivery, Digital Business
              Transformation, and Scrum Coaching”...
              <a
                href="linkedin.com/in/oludare-olorunfemi"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/oludare-olorunfemi
              </a>
            </p>
            <div className="titles">
              <h3>OLUDARE OLORUNFEMI</h3>
              <p>
                Founder, Digital Career Academy(FIP, CIPP/E, CIPM, PECB, cDPO,
                CDPSE, PSM1)
              </p>
            </div>
          </div>
          <div className="team-member-2 team-member col-lg-6 col-md-6 col-sm-12">
            <div className="team-img">
              <img src={team2Img} alt="" />
            </div>
            <p>
              A Proactive IIBA Certified Business Analyst, Certified
              Professional Scrum Product Owner, Business Process Modeller and
              Lean Six Sigma Yellow & Green Belt with strong understanding of
              business process architecture with the ability to produce
              high-quality output and value. Proven experience in coaching &
              mentoring on Business & Process Improvement Analysis. A keen team
              worker that is result-driven and able to motivate & mentor others
              to think “outside the box”
            </p>
            <div className="titles">
              <h3>BABAJIDE JOLA-OLU KEHINDE</h3>
              <p>PSPO, BPM, LSSGB, CBAP Business Analysis Coach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
