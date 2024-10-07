import React from 'react';
import Banner from "../composants/Banner";
import Gallery from "../composants/Gallery";
import Footer from "../composants/Footer";
import Navbar from "../composants/Navbar";
import bannerImage from '../assets/images/banner.webp';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div className='container'><Banner image={bannerImage} title="Chez vous, partout et ailleurs" /></div>
        <Gallery/>
      </main>
      <Footer/> 
    </div>
  );
};

export default HomePage;
