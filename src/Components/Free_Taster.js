import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import { Free_Taste, landing } from "./store";
import bg1 from "./images/bg1.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./free_taster.css";
import DoneIcon from '@mui/icons-material/Done';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Free_Taster = () => {
  const dispatch = useDispatch();
  const nav = useNavigate()
  const name = useSelector((val) => {
    return val.free_taster.name;
  });
  const email = useSelector((val) => {
    return val.free_taster.email;
  });
  const course = useSelector((val) => {
    return val.free_taster.course;
  });
  const term_condition = useSelector((val) => {
    return val.free_taster.Terms_check;
  });

  useEffect(() => {
    dispatch(landing.connection(false));
    dispatch(landing.display_footer(true))
    window.history.scrollRestoration = "manual";
    dispatch(landing.header(false));
  }, [dispatch]);

  function display_courses() {
    const elem = document.getElementById("course");
    const height = elem.offsetHeight;
    const arrow  = document.getElementById('course_arrow')
    if(height < 50){
      arrow.style.transform = "rotateZ(180deg)";
      elem.style.display = 'inline-flex'
      setTimeout(()=>{
        elem.style.opacity= '1'
      },150)

    }
    else{
      arrow.style.transform = "rotateZ(0deg)";
      elem.style.opacity= '0'
      setTimeout(()=>{
        elem.style.display ='none'
      },300)
    }
  }

  function verify(e){
    const elem = e.target
    const child = elem.firstChild
    const style = child.style.display
    if(style ==='' || style ==='none')
    {
      child.style.display ='block'
      child.style.color= 'white'
      elem.style.backgroundColor= '#0082F0'
      dispatch(Free_Taste.terms_and_condition(true))
    }
    else{
      child.style.display = 'none'
      elem.style.backgroundColor= 'white'
      dispatch(Free_Taste.terms_and_condition(false))

    }
 
  }
  function submit(e) {
      if(name.length !== 0 && email.length !== 0 && course !== 'Courses' && term_condition !== false){
        console.log('pass')
        nav('/success_F')

      }
      else{
        e.target.innerHTML = 'All Fields are required'
        setTimeout(() => {
            e.target.innerHTML = 'Submit'
        }, (1500));
      }
  }
  return (
    <div className="free_taster">
      <ScrollToTop />
      <img src={bg1} alt="" />
      <NavLink className='back' to="/">Back</NavLink>
      <main>
        <h1>Register for Free Taster</h1>
        <label htmlFor="name"> Full Name</label>
        <input
          onChange={(e) => {
            dispatch(Free_Taste.change_name(e.target.value));
          }}
          value={name}
          type="text"
          placeholder="Enter Your Full Name"
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => {
            dispatch(Free_Taste.update_email(e.target.value));
          }}
          type="text"
          placeholder="Enter Address"
          id="email"
        />
        <div>
          <p className="pin"> 
            <span id="course_picked">{course}</span>{" "}
            <span onClick={display_courses} id="course_arrow">
              <KeyboardArrowDownIcon />
            </span>
          </p>
          <section id="course">
            <span
              onClick={(e) => {
                dispatch(Free_Taste.change_course(e.target.innerHTML));
                display_courses()
                const elem = document.getElementById('course_picked')
                elem.style.color= 'black'
              }}
            >
              Practical Scrum Master
            </span>
            <span
              onClick={(e) => {
                dispatch(Free_Taste.change_course(e.target.innerHTML));
                display_courses()
                const elem = document.getElementById('course_picked')
                elem.style.color= 'black'
              }}
            >
              Practical Business Analysis
            </span>
            <span
              onClick={(e) => {
                dispatch(Free_Taste.change_course(e.target.innerHTML));
                display_courses()
                const elem = document.getElementById('course_picked')
                elem.style.color= 'black'
              }}
            >
              Data Analytics
            </span>
          </section>
        </div>
        <p className="agreement"> <span onClick={verify} id="checkbox"><DoneIcon/></span> <span className="checkbox_text">I hereby agree to the <NavLink to='/terms and condition'>Terms and conditions </NavLink>and <NavLink to='/privacy policy'>Privacy policy</NavLink>.</span></p>
        <button onClick={submit}>Submit</button>
      </main>
    </div>
  );
};

export default Free_Taster;
