import React from 'react';
import ParticlesBg from 'particles-bg';
import './index.css';
import FooterBottom from '../../components/FooterBottom';

function Home() {
  return (
    <div>
      <h1 align='center' className='con'>Hi, my name is Nathan. Welcome to my portfolio.</h1>
      <ParticlesBg type="cobweb" color="#5f9ea0" bg={true} />
      <FooterBottom />
    </div>
  );
}

export default Home;