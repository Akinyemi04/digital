import React from "react";
import hero from "./images/hero.png";
import introImg from "./images/img1.png";

const Courses = () => {
  return (
    <div>
      <div className="hero">
        <img src={hero} alt="" />
        <h1>Courses</h1>
      </div>
      <div className="intro">
        <div className="intro-text">
          <p>
            Jumpstart your TECH career by enrolling for Digital Careers
            Academy’s 6-week intensive business analysis program. Learn how
            identify business needs and using industry standard tools determine
            solutions to complex problems by translating business requirements
            into actionable technical specifications
          </p>
        </div>
        <img src={introImg} alt="" />
      </div>

    { /* Courses */}

    <div className="All-courses">
        <h2>All Courses</h2>
    </div> 
</div>
  );
};

export default Courses;
