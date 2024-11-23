import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home';
import Educationpage from './pages/Educationpage';
import WorkExperience from './pages/Workexperience';
import Projects from './pages/Projects';
import PositionOfResponsibility from './pages/PositionOfRes';
import Certifications from './pages/Certifications';
import CoCurricular from './pages/Cocurricular';
import ExtraCurricular from './pages/ExtraCurricular';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
   
        <Route path="/" element={<Home/>} />
        <Route path="/education" element={<Educationpage />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/position-of-responsibility" element={<PositionOfResponsibility />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/co-curricular" element={<CoCurricular />} />
        <Route path="/extra-curricular" element={<ExtraCurricular />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
