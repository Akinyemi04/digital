import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path = '/' element={<LandingPage/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
