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

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path = '/' element={<LandingPage/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/work Experience' element={<WorkExperience/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/taster' element={<FreeTaster/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
