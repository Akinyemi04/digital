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
import Business_analysis from './Components/Business_Analysis';
import Data_analytics from './Components/Data_Analytics';
import { useSelector } from 'react-redux';
import Scrum_Master from './Components/Scrum_Master';

function App() {
  const should_header_display = useSelector((val)=>{
    return val.landing.should_display_header
  })
  return (
    <BrowserRouter>
      {should_header_display && <Header/>}
      <Connect/>
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
        <Route path='/business_analysis' element={<Business_analysis/>}/>
        <Route path='/data_analytics' element={<Data_analytics/>}/>
        <Route path='/scrum_master' element={<Scrum_Master/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
