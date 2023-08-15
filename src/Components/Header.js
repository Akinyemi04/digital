import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import white_logo from "./images/white-logo.png";

const Header = () => {
  const screenSize = window.screen.availWidth;

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

  function navigate(){
    const nav = document.getElementById("nav");
    const icon = document.getElementById("nav-icon4");
    const body = document.getElementsByTagName("body")[0];
    if(screenSize < 501){
      nav.style.left = "-60vw";
      icon.classList.toggle("open");
      body.style.overflowY = "scroll";
    }
  }

  function dropdown(e) {
    const click = e.target; // event which triggered
    const child = click.children[1]; // targetting the arrow icon
    const parent = e.target.parentElement; // targeting the section
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
        setTimeout(()=>{
          val.style.display='none'
        },500)
      });
      setTimeout(() => {
        article.style.opacity = "0";
      },60);
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

  // function enter(e){
  //   const click = e.target.children[0]; // event which triggered
  //   const child = click.children[1]; // targetting the arrow icon
  //   const parent = click.parentElement; // targeting the section
  //   const article = parent.children[1]; // targetng the article element
  //   const links = Array.from(article.children); // all a tags under courses

  //   console.log(click)
  //   // code below handles the smooth css transitioning of the courses drop down

  //   child.style.transform = "rotateZ(180deg)";
  //   article.style.display = "flex";
    
  //   setTimeout(() => {
  //     article.style.opacity = "1";
  //   }, 75);
  //   setTimeout(() => {
  //     links.map((val) => {
  //       val.style.display = "block";
  //       setTimeout(() => {
  //         val.style.opacity = "1";
  //       }, 100);
  //     });
  //   }, 55);

  // }
  // function exit(e){
  //   const click = e.target; // event which triggered
  //   const child = click.children[1]; // targetting the arrow icon
  //   const parent = e.target.parentElement; // targeting the section
  //   const article = parent.children[1]; // targetng the article element
  //   const arrow = document.getElementById("arrow");
  //   const style = arrow.style.transform; // css stylin for the arrow icon
  //   const links = Array.from(article.children); // all a tags under courses

  //    //code below handles the smooth css transitioning of the courses drop down

  //   child.style.transform = "rotateZ(0deg)";
  //   links.map((val) => {
  //     val.style.opacity = "0";
  //     setTimeout(()=>{
  //       val.style.display='none'
  //     },500)
  //   });
  //   setTimeout(() => {
  //     article.style.opacity = "0";
  //   },60);
  // }
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
      <NavLink onClick= {navigate} to="/">
        <img id="logo" src={white_logo} alt="" />
      </NavLink>
      <nav id="nav">
        {screenSize < 1000 && <NavLink onClick= {navigate} to="/"> Home </NavLink>}
        <NavLink onClick= {navigate} to="/about"> About us </NavLink>
        <div className="courses">
          <p onClick={dropdown}>
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
            <NavLink onClick= {navigate} to ='/scrum_master'>Practical Scrum Master</NavLink>
            <NavLink onClick= {navigate} to= '/Business_analysis ' >Practical Business Analysis</NavLink>
            <NavLink to='/data_analytic' >Data Analytics</NavLink>
          </aside>
        </div>
        <NavLink to="/work Experience">Work Experience Program</NavLink>
        <NavLink   to="/contact">Contact Us</NavLink>
        <NavLink  to="/faq">FAQs</NavLink>
          <a href="https://digitalbusinesskonsult.com/tap-registration/" className="taster">Free Taster Session</a>
        {/* <NavLink to= '/taster' className="taster "> Free Taster Session</NavLink> */}

        <NavLink onClick= {navigate} to="/login">Log In</NavLink>
        {/* <span className="search">
          <SearchIcon />
        </span> */}
      </nav>
    </header>
  );
};

export default Header;
