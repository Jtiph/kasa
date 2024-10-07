import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from "../../components/Banner/Banner";
import bannerAboutImage from '../../assets/images/banner-about.webp';
import Footer from "../../components/Footer/Footer";
import Dropdown from '../../components/Dropdown/dropdown';
import data from "../../data/dropdownData.json";
import './About.scss';

const About = () => {
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

export default About;
