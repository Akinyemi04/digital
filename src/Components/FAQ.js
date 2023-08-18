import React from 'react'
import './faq.css';
import bg from "./images/faqbg.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";



const FAQ = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    window.history.scrollRestoration = "manual";
    window.removeEventListener("scroll", ScrollCheck);
  },[dispatch])

function ScrollCheck(){

}  
  return (
    <div className=""> 
        <div className='faq-container' >
            <img alt='FAQ' src={bg} />
            <h1>Frequently Asked Questions</h1>
        </div>


    <div className="row faqmain">
        <div className="col">  
            <div className="tabs">
            <div className="tab">
                <input type="checkbox" id="chck1"/>
                <label className="tab-label" htmlFor="chck1">What is Digital Careers Academy and what does it offer</label>
                <div className="tab-content">
                Digital Careers Academy is an e-learning platform ....
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck2"/>
                <label className="tab-label" htmlFor="chck2">Are the courses at Digital Careers Academy suitable for beginners with no technological backgrounds?</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck3"/>
                <label className="tab-label" htmlFor="chck3">Can I access the course material on any device?</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck4"/>
                <label className="tab-label" htmlFor="chck4">How does the enrollment process work?</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck5"/>
                <label className="tab-label" htmlFor="chck5">What types of tech careers are covered in the courses?</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck6"/>
                <label className="tab-label" htmlFor="chck6">How long do I have access to the course materials</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck7"/>
                <label className="tab-label" htmlFor="chck7">Are there any opportunities htmlFor hands-on experience or real-world projects?</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck8"/>
                <label className="tab-label" htmlFor="chck8">Do you offer support?</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck9"/>
                <label className="tab-label" htmlFor="chck9">Can I study at my own pace, or are there specific deadlines?</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck10"/>
                <label className="tab-label" htmlFor="chck10">What set Digital Careers Academy apart from other e-learning platforms?</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default FAQ;



