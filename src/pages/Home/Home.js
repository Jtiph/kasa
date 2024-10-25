import React from 'react';
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import bannerImage from '../../assets/images/banner/banner.webp';
import '../../App.scss'
import './Home.scss';

const Home = () => {
  return (
    <div>
      <main className='main-container'>
        <div className='banner'><Banner image={bannerImage} title="Chez vous, partout et ailleurs" /></div>
        <Gallery/>
      </main>
    </div>
  );
};

export default Home;