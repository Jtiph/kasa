import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import NoPage from '../../components/Error/NoPage';
import './Error.scss'

const Error = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className='main-container'>
        <NoPage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Error;
