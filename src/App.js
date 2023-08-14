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
import FreeTaster from './Components/freeTaster';
import Connect from './Components/Connect';
import Cookie from './Components/Cookie';
import Scrum from './Components/Scrum';
import Business_analysis from './Components/Business_analysis';
import Data_analytics from './Components/Data_analytics';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Connect/>
      <Routes>
        <Route exact path = '/' element={<LandingPage/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/work Experience' element={<WorkExperience/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/taster' element={<FreeTaster/>}/>
        <Route path='/cookie' element={<Cookie/>}/>
        <Route path='/scrum' element={<Scrum/>}/>
        <Route path='/business_analysis' element={<Business_analysis/>}/>
        <Route path='/data_analytics' element={<Data_analytics/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
