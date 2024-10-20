import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import FicheLogement from './pages/Logement/FicheLogement';
import Error from './pages/Error/Error';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error/>} />
        </Routes>
    </Router>
  );
}

export default App;

