import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import { landing } from "./store";
import Success_stories from "./Success_stories";
import bg from "./images/data_analysis.png";
import { NavLink } from "react-router-dom";
import img1 from "./images/Rectangle 21.png";
import "./mini_course.css";
import digital2 from "./images/data_analaysis2.png";
import digital3 from './images/data_analysis3.png'

const Data_Analysis = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    dispatch(landing.header(true));
  }, [dispatch]);

  return (
    <div>
      <ScrollToTop />
      <main className="course">
        <section className="one">
          <img src={bg} alt="" />
          <h1>Data Analytics </h1>
        </section>
        <section className="two">
          <img src={img1} alt="" />
          <aside>
            <h3>Data Analytics</h3>
            <p>
              Data analytics experts are in high demand within the global tech
              industry. The Practical Data Analytics training is a 12-week
              intensive program that equips you with the right skills needed to
              thrive as a Data Analytics Expert.
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
            <span className="answer"> 12 Weeks</span>
          </article>
          <article>
            <span className="question">Mode of Learning</span>
            <span className="answer">Virtual</span>
          </article>
        </section>
        <section className="four">
          <aside>
            <h4>Prospective Learners</h4>
            <p>
              You will master tools like MS Excel and Power BI and become
              proficient in R, SQL and also gain an introduction to Python for
              Data Analytics. This course is for anyone that is looking to
              elevate their career to an enriching tech job. <br />
              Data analytics experts are in high demand within the global tech
              industry. Analysts evaluate data to gain critical insights and
              solve problems that impact on a business and thereby boost
              profits.
            </p>
          </aside>
          <img src={digital2} alt="" />
        </section>
        <section className="five">
          <article>
            <h5> Perks </h5>
            <ul>
              <li>Informed Decision Making</li>
              <li>Improved Efficiency and Productivity</li>
              <li>Enhanced Customer Experience</li>
              <li>Predictive Analytics</li>
            </ul>
          </article>
          <div>
            <img src={digital3} alt="" />
            <aside>
              <h3> Course Overview</h3>
              <ul>
                <li>Develop and present a solid Business case,</li>
                <li>
                Gather, analyze, verify and validate requirements,
                </li>
                <li>
                Create user personas and customer journey maps,
                </li>
                <li>
                Model scope and requirements using various business,modelling tools,
                </li>
                <li>
                Write Epics, User Stories and Test cases,
                </li>
                <li>
                and so much more...
                </li>
              </ul>
              <NavLink to='/enrol'>Enrol Now</NavLink>
            </aside>
          </div>
        </section>
      </main>
      <Success_stories />
    </div>
  );
};

export default Data_Analysis;
