import React from 'react';
import Navbar from '../composants/Navbar';
import Banner from "../composants/Banner";
import bannerAboutImage from '../assets/images/banner-about.webp';
import Footer from "../composants/Footer";
import Dropdown from '../composants/dropdown';
import data from "../data/dropdownData.json";

const AboutPage = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
      <div className='container'><Banner image={bannerAboutImage}/></div>
      <div className="dropdown__wrapper">
      {data.map((item, index) => (
        <Dropdown key={index} title={item.title} content={item.content} />
      ))}
    </div>
      </main>
      <Footer/> 
    </div>
  );
};

export default AboutPage;
