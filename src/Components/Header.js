import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import white_logo from "./images/white-logo.png";
import { useEffect } from "react";

const Header = () => {
  const screenSize = window.screen.availWidth;


  // eslint-disable-next-line react-hooks/exhaustive-deps


  useEffect(()=>{
    window.addEventListener('scroll' , assistant_dropdown);
    return () => {
      window.removeEventListener("scroll", assistant_dropdown);
    };
  },[])
  function toggle_nav(e) {
    const nav = document.getElementById("nav");
    const body = document.getElementsByTagName("body")[0];
    if (!e.target.classList.contains("open")) {
      nav.style.left = "0";
      body.style.overflow = "hidden";
    } else {
      nav.style.left = "-95vw";
      body.style.overflowY = "scroll";
    }
    e.target.classList.toggle("open");
  }

  function navigate() {
    const nav = document.getElementById("nav");
    const icon = document.getElementById("nav-icon4");
    const body = document.getElementsByTagName("body")[0];
    if (screenSize < 1001) {
      nav.style.left = "-100vw";
      icon.classList.toggle("open");
      body.style.overflowY = "scroll";
    }
  }

  function assistant_dropdown() { // function for other links in the header to disable dropdown upon clicking
    const click = document.getElementById("course-controller"); // event which triggered
    const child = click.children[1];
    const parent = click.parentElement; // targeting the section
    const article = parent.children[1]; // targetng the article element
    const arrow = document.getElementById("arrow");
    const links = Array.from(article.children);
    child.style.transform = "rotateZ(0deg)";
    links.map((val) => {
      val.style.opacity = "0";
      setTimeout(() => {
        val.style.display = "none";
      }, 500);
    });
    setTimeout(() => {
      article.style.opacity = "0";
    }, 60);
  }

  function dropdown(e) { // dropdown function
    const click = document.getElementById("course-controller"); // event which triggered
    const child = click.children[1]; // targetting the arrow icon
    const parent = click.parentElement; // targeting the section
    const article = parent.children[1]; // targetng the article element
    const arrow = document.getElementById("arrow");
    const style = arrow.style.transform; // css stylin for the arrow icon
    const links = Array.from(article.children); // all a tags under courses
    child.style.transform = "rotateZ(180deg)";
    //code below handles the smooth css transitioning of the courses drop down
    if (style === "") {
      child.style.transform = "rotateZ(180deg)";
      article.style.display = "flex";

      setTimeout(() => {
        article.style.opacity = "1";
      }, 75);
      setTimeout(() => {
        links.map((val) => {
          val.style.display = "block";
          setTimeout(() => {
            val.style.opacity = "1";
          }, 100);
        });
      }, 55);
    } else if (style === "rotateZ(180deg)") {
      child.style.transform = "rotateZ(0deg)";
      links.map((val) => {
        val.style.opacity = "0";
        setTimeout(() => {
          val.style.display = "none";
        }, 500);
      });
      setTimeout(() => {
        article.style.opacity = "0";
      }, 60);
    } else {
      child.style.transform = "rotateZ(180deg)";
      article.style.display = "flex";
      setTimeout(() => {
        article.style.opacity = "1";
      }, 75);
      setTimeout(() => {
        links.map((val) => {
          val.style.display = "block";
          setTimeout(() => {
            val.style.opacity = "1";
          }, 100);
        });
      }, 55);
    }
  }

  return (
    <header>
      {
        <aside className="hamburger">
          <div onClick={toggle_nav} id="nav-icon4">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </aside>
      }
      <NavLink
        onClick={screenSize > 1000 ? assistant_dropdown : navigate}
        to="/"
      >
        <img id="logo" src={white_logo} alt="" />
      </NavLink>
      <nav id="nav">
        {screenSize < 1000 && (
          <NavLink onClick={navigate} to="/">
            {" "}
            Home{" "}
          </NavLink>
        )}
        <NavLink
          onClick={screenSize > 1000 ? assistant_dropdown : navigate}
          to="/about"
        >
          {" "}
          About us{" "}
        </NavLink>
        <div className="courses">
          <p id="course-controller" onClick={dropdown}>
            {" "}
            <span>Courses</span>{" "}
            <span id="arrow">
              {screenSize > 1000 ? (
                <ArrowDropDownIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </span>
          </p>
          <aside>
            <NavLink
              onClick={screenSize > 1000 ? dropdown : navigate}
              to="/scrum_master"
            >
              Practical Scrum Master
            </NavLink>
            <NavLink
              onClick={screenSize > 1000 ? dropdown : navigate}
              to="/business_analysis "
            >
              Practical Business Analysis
            </NavLink>
            <NavLink
              onClick={screenSize > 1000 ? dropdown : navigate}
              to="/data_analytics"
            >
              Data Analytics
            </NavLink>
          </aside>
        </div>
        <NavLink
          onClick={screenSize > 1000 ? assistant_dropdown : navigate}
          to="/work Experience"
        >
          Work Experience Program
        </NavLink>
        <NavLink
          onClick={screenSize > 1000 ? assistant_dropdown : navigate}
          to="/contact"
        >
          Contact Us
        </NavLink>
        <NavLink
          onClick={screenSize > 1000 ? assistant_dropdown : navigate}
          to="/faq"
        >
          FAQs
        </NavLink>
        <NavLink onClick= {navigate} to='/Free_taster' className="taster "> Free Taster Session</NavLink>

        <NavLink
          onClick={screenSize > 1000 ? assistant_dropdown : navigate}
          to="/login"
        >
          Log In
        </NavLink>
        {/* <span className="search">
          <SearchIcon />
        </span> */}
      </nav>
    </header>
  );
};

export default Header;
