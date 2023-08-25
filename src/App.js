import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import WorkExperience from './Components/workExperience';
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import Login from './Components/Login';
import Free_Taster from './Components/Free_Taster.js';
import Connect from './Components/Connect';
import Cookie from './Components/Cookie';
import Courses from './Components/Courses';
import Business_Analytic from './Components/Business_Analytic';
import Data_Analysis from './Components/Data_Analysis';
import { useSelector } from 'react-redux';
import Scrum_Master from './Components/Scrum_Master';
import Free_Taster_Popup from './Components/Free_Taster_Popup';

function App() {
  const should_header_display = useSelector((val)=>{
    return val.landing.should_display_header
  })
  const should_header_connect = useSelector((val)=>{
    return val.landing.should_display_connect
  })
  const should_footer_display = useSelector((val)=>{
    return val.landing.should_display_footer
  })
  return (
    <BrowserRouter>
      {should_header_display && <Header/>}
      {should_header_connect && <Connect/>}
      <Routes>
        <Route exact path = '/' element={<LandingPage/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/work Experience' element={<WorkExperience/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Free_taster' element={<Free_Taster/>}/>
        <Route path='/cookie' element={<Cookie/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/business_analysis' element={<Business_Analytic/>}/>
        <Route path='/data_analytics' element={<Data_Analysis/>}/>
        <Route path='/scrum_master' element={<Scrum_Master/>}/>
        <Route path='/success_F' element={<Free_Taster_Popup/>}/>
      </Routes>
      {should_footer_display && <Footer/>}
    </BrowserRouter>

  );
}

export default App;
