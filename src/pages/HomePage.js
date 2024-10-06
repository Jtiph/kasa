import React from 'react';
import Banner from "../composants/Banner";
import homeBannerImage from '../assets/images/banner.webp';
import Gallery from "../composants/Gallery";
import Footer from "../composants/Footer";
import Navbar from '../composants/navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div className='container'><Banner image={homeBannerImage}/></div>
        <Gallery/>
      </main>
      <Footer/> 
    </div>
  );
};

export default HomePage;
