import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import FicheLogement from './pages/Logement/FicheLogement';
import Error from './pages/Error/Error';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router basename='/kasa'>
      <div>
        <header>
          <Navbar/>
        </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </div>     
    </Router>
  );
}

export default App;

