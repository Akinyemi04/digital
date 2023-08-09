import { NavLink } from "react-router-dom";
import h_logo from "./images/header_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  const screenSize = window.screen.availWidth;

  function toggle_nav(e) {
    if (!e.target.classList.contains("open")) {
      console.log("not open");
    } else {
      console.log("open");
    }
    e.target.classList.toggle("open");
  }
  return (
    <header>
      {screenSize < 800 && (
        <aside className="hamburger">
          <div onClick={toggle_nav} id="nav-icon4">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </aside>
      )}
      <NavLink to="/">
        <img src={h_logo} alt="" />
      </NavLink>
      <nav>
        <NavLink to='/about'> About us </NavLink>
        <NavLink className="courses">
          <div>
            <p>
              {" "}
              <span>Courses</span> <ArrowDropDownIcon />{" "}
            </p>
          </div>
        </NavLink>
        <NavLink to= '/work Experience' >Work Experience Program</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink>FAQs</NavLink>
        {screenSize > 800 && (
          <NavLink className="taster "> Free Taster Session</NavLink>
        )}
        <NavLink>Log In</NavLink>
        <span className="search">
          <SearchIcon />
        </span>
      </nav>
      {screenSize < 800 && (
        <NavLink className="taster "> Free Taster Session</NavLink>
      )}
    </header>
  );
};

export default Header;
