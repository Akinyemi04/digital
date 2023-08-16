import React from 'react'
import './faq.css';
import bg from "./images/first_m.png";



const FAQ = () => {

  return (
    <div> 
        <div className='faq-container' >
            <img alt='FAQ' src={bg} />
            <h1>Frequently Asked Questions</h1>
        </div>


    <div className="row">
        <div className="col">  
            <div class="tabs">
            <div className="tab">
                <input type="checkbox" id="chck1"/>
                <label className="tab-label" for="chck1">What is Digital Careers Academy and what does it offer</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck2"/>
                <label className="tab-label" for="chck2">Are the courses at ..</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck3"/>
                <label className="tab-label" for="chck3">Item 3</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck4"/>
                <label className="tab-label" for="chck4">Item 4</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck5"/>
                <label className="tab-label" for="chck5">Item 5</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck6"/>
                <label className="tab-label" for="chck6">Item 6</label>
                <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="chck7"/>
                <label className="tab-label" for="chck7">Item 7</label>
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