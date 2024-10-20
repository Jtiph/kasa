import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import NoPage from '../../components/Error/NoPage';
import './Error.scss'

const Error = () => {
  return (
    <div>
      <Navbar/>
      <NoPage/>
      <Footer/>
    </div>
  );
};

export default Error;
