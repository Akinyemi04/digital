import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import { landing } from "./store";
import Success_stories from "./Success_stories";
import pba1 from "./images/pba1.png";
import pba2 from "./images/pba2.png";
import pba3 from "./images/pba3.png";
import pba4 from "./images/pba4.png";
import { NavLink } from "react-router-dom";

const Business_Analytic = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.removeEventListener("scroll", ScrollCheck);
    dispatch(landing.header(true));
  }, [dispatch]);
  function ScrollCheck() {}

  return (
    <div>
      <ScrollToTop />
      <main className="course">
        <section className="one">
          <img src={pba1} alt="" />
          <h1>Practical Business Analysis </h1>
        </section>
        <section className="two">
          <img src={pba2} alt="" />
          <aside>
            <h3>Practical Business Analysis</h3>
            <p>
              Business Analysts (BA) helps organisations achieve their goals by
              analysing data, assessing processes and systems, creating
              solutions and planning for the future. BAs helps to improve
              efficiency, optimise resources, and achieve strategic goals.
            </p>
            <p>
              Business Analysts play a crucial role in facilitating
              communication between stakeholders, understanding business needs,
              and translating them into actionable requirements for
              implementation. As a Business Analyst you'll work within an
              organisation, helping to manage, change and plan for the future in
              line with their goals.
            </p>
            <NavLink to="/enrol">Enrol Now</NavLink>
          </aside>
        </section>
        <section className="three">
          <article>
            <span className="question">price</span>
            <span className="answer">£800</span>
          </article>
          <article>
            <span className="question">Course Duration</span>
            <span className="answer"> 6 Weeks</span>
          </article>
          <article>
            <span className="question">Mode of Learning</span>
            <span className="answer">Virtual</span>
          </article>
        </section>
        <section className="four">
          <aside>
            <h4>Prospective Learners</h4>
            <span> Upon completion of this program you will learn to:</span>
            <ul>
              <li>Develop and present a solid Business case</li>
              <li>Gather, analyze, verify and validate requirements.</li>
              <li>Create user personas and customer journey maps..</li>
              <li>
                Model scope and requirements using various business modelling
                tools
              </li>
              <li> Write Epics, User Stories and Test cases,</li>
              <li> and so much more...</li>
            </ul>
          </aside>
          <img src={pba3} alt="" />
        </section>
        <section className="five">
          <article>
            <h5> Perks </h5>
            <span>What you will get</span>
            <ul className="special">
              <li>One-2-One Career coaching sessions</li>
              <li>Weekly Live sessions</li>
              <li>On-the-job support</li>
              <li>Interview Prep and CV review</li>
              <li>Become part of our BA community</li>
              <li>Product Simulation</li>
              <li>Discounted access to DCA’s Work Experience program</li>
            </ul>
          </article>
          <div>
            <img src={pba4} alt="" />
            <aside>
              <h3> Course Overview</h3>
              <ul>
                <li>Develop and present a solid Business case,</li>
                <li>Gather, analyze, verify and validate requirements,</li>
                <li>Create user personas and customer journey maps,</li>
                <li>
                  Model scope and requirements using various business,modelling
                  tools,
                </li>
                <li>Write Epics, User Stories and Test cases,</li>
                <li>and so much more...</li>
              </ul>
              <NavLink to="/enrol">Enrol Now</NavLink>
            </aside>
          </div>
        </section>
      </main>
      <Success_stories />
    </div>
  );
};

export default Business_Analytic;
