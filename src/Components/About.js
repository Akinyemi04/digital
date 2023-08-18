import React, { useEffect } from "react";
import "./About.css";
import bg from "./images/img1.jpeg";
import abtImg from "./images/img4.jpg";
import whyImg from "./images/img.jpg";
import tImg from "./images/pic.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import ScrollToTop from "./ScrollToTop";

const About = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    window.history.scrollRestoration = "manual";
    window.removeEventListener("scroll", ScrollCheck);
  },[dispatch])

  function ScrollCheck(){

  }
  return (
    <div>
      <ScrollToTop/>
      <div className="about-container">
        <img alt="HeroImg" src={bg} />
        <h1>About Us</h1>
      </div>
      <div className="about-us">
        <div className="row">
          <div className="about-col-1"></div>
          <img
            className="col-lg-6 col-md-6 col-sm-12 img-fluid"
            src={abtImg}
            height="300px"
            width="300px"
            alt=""
          />
          <div className="about-col-2 col-lg-6 col-md-6 col-sm-12 mt-2">
            <h1>About Us</h1>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived notonly
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem
            </p>
          </div>
        </div>
      </div>
      <div className="why-us about-us">
        <div className="row">
          <div className="why-us-col-1 col-lg-6 col-md-6 col-sm-12 mt-2">
            <h1>Why choose us</h1>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived notonly
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem
            </p>
          </div>
          <img
            className="col-lg-6 col-md-6 col-sm-12 img-fluid" src={whyImg} height="300px" width="300px"
            alt=""
          />
        </div>
      </div>

      <div className="team-wrapper">
       <h1>Meet Our Coaches</h1>
       <div className="team">
        <div className="team-member">
          <div className="team-img">
              <img src={tImg} alt="" />
          </div>
          <p>is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type andz
              scrambled it to make a type specimen book. It has survived notonly
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem</p>
              <h3>OLUDARE OLORUNFEMI</h3>
              <p>Founder, Digital Career Academy(FIP, CIPP/E, CIPM, PECB, cDPO, CDPSE, PSM1)</p>
        </div>
        <div className="team-member">
          <p>is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived notonly
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem</p>
              <h3>BABAJIDE JOLA-OLU KEHINDE</h3>
              <p>Founder, Digital Career Academy(FIP, CIPP/E, CIPM, PECB, cDPO, CDPSE, PSM1)</p>
        </div>
       </div>
      </div>
    </div>
  );
};

export default About;
