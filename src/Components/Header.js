import { NavLink } from "react-router-dom";
import h_logo from "./images/header_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  const screenSize = window.screen.availWidth;

  return (
    <header>
      <NavLink to="/">
        <img src={h_logo} alt="" />
      </NavLink>
      <nav >
        <NavLink> About us </NavLink>
        <NavLink className='courses'>
          <div>
            <p> <span>Courses</span> <ArrowDropDownIcon/> </p>
          </div>
        </NavLink>
        <NavLink>Work Experience Program</NavLink>
        <NavLink>Contact Us</NavLink>
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
