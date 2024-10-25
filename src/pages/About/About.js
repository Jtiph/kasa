import React from 'react';
import Banner from "../../components/Banner/Banner";
import bannerAboutImage from '../../assets/images/banner/banner-about.webp';
import Dropdown from '../../components/Dropdown/dropdown';
import data from "../../data/dropdownData.json";
import './About.scss';

const About = () => {
  return (
    <div>
      <main className='main-container'>
      <div className='container'><Banner image={bannerAboutImage}/></div>
      <div className="dropdown__wrapper">
      {data.map((item, index) => (
        <Dropdown key={index} title={item.title} content={item.content} />
      ))}
    </div>
      </main>
    </div>
  );
};

export default About;
