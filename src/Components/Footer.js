import logo from "./images/header_logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <article className="first">
        <img src={logo} alt="" />
        <aside>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </aside>
      </article>
      <article className="second">
        <section className="one">
          <p>Digital Career Academy</p>
          <p>
            office Address: <br /> BOS House,Olden way Buiness Park,Ballybrit
            Galeway,H91 E65V, Ireland
          </p>
        </section>
        <section>
          <h4>Program Track</h4>
          <NavLink> Practical Scrum Master</NavLink>
          <NavLink>Practical Business Analysis</NavLink>
          <NavLink> Data Analysis</NavLink>
        </section>
        <section>
          <h4>Resources</h4>
          <NavLink>About Us</NavLink>
          <NavLink>Privacy</NavLink>
          <NavLink> Terms and Condition</NavLink>
          <NavLink> FAQS</NavLink>
        </section>
        <section className="four">
          <h4>Contact Us</h4>
          <p>
            <span>+353 91724190</span>
            <span> +353 871152980</span>
          </p>
          <p>info@digitalcareers.academy</p>
          <p>
            <span>Whatsapp</span>
            <span>+447488818292</span>
            <span>+1587330305</span>
          </p>
        </section>
      </article>
      <p className="base">© 2023 DCA Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
