import React from 'react';
import Navbar from '../composants/navbar';
import Banner from "../composants/Banner";
import aboutBannerImage from '../assets/images/banner-about.webp';


const AboutPage = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
      <div className='container'><Banner image={aboutBannerImage}/></div>
      </main>
    </div>
  );
};

export default AboutPage;
