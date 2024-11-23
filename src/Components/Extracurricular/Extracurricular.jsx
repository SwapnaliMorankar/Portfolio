import React, { useState } from 'react';
import './Extracurricular.css';
import Travel from '../Travel/Travel'
import Interior from '../Interior/Interior'
import Dance from '../Dance/Dance'
import Sports from '../Sports/Sports'

const Extracurricular = () => {
  const [activeTab, setActiveTab] = useState('travel');

  const renderContent = () => {
    switch (activeTab) {
      case 'travel':
        return <Travel />;
      case 'interior':
        return <Interior />;
      case 'dance':
        return <Dance/>;
      case 'sports':
        return <Sports/>;
      default:
        return null;
    }
  };

  return (
    <div className='extracurricular'>
      <div className="tabs">
        <div 
          className={`excurr ${activeTab === 'travel' ? 'active' : ''}`} 
          onClick={() => setActiveTab('travel')}
        >
          <h2>Travelling</h2>
        </div>

        <div 
          className={`excurr ${activeTab === 'interior' ? 'active' : ''}`} 
          onClick={() => setActiveTab('interior')}
        >
          <h2>Interior Designing</h2>
        </div>

        <div 
          className={`excurr ${activeTab === 'dance' ? 'active' : ''}`} 
          onClick={() => setActiveTab('dance')}
        >
          <h2>Dance</h2>
        </div>

      <div 
          className={`excurr ${activeTab === 'sports' ? 'active' : ''}`} 
          onClick={() => setActiveTab('sports')}
        >
          <h2>Sports</h2>
        </div>
      </div>
      

      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Extracurricular;
