// src/pages/Home.jsx
import React from 'react';
import Header from '../Components/Header/Header';
import About from '../Components/About/About';
import Skill from '../Components/Skill/Skill';
import Expertise from '../Components/Expertise/Expertise';
import Connect from '../Components/Connect/Connect';
import Contact from '../Components/Contact/Contact';

const Home = () => (
  <div>
    <Header />
    <About />
    <Expertise />
    <Skill />
    <Connect />
    <Contact />
  </div>
);

export default Home;
