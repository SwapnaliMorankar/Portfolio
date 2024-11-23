import React, { useState } from 'react';
import './Curricular.css';
import HackathonsContent from '../Hackathon/Hackathon'
import SeminarsContent from '../Seminars/Seminar'
import OrganizationsContent from '../Organization/Organization'

const Curricular = () => {
  const [activeTab, setActiveTab] = useState('hackathons');

  const renderContent = () => {
    switch (activeTab) {
      case 'hackathons':
        return <HackathonsContent />;
      case 'seminars':
        return <SeminarsContent />;
      case 'organizations':
        return <OrganizationsContent/>;
      default:
        return null;
    }
  };

  return (
    <div className='curricular'>
      <div className="tabs">
        <div 
          className={`curr ${activeTab === 'hackathons' ? 'active' : ''}`} 
          onClick={() => setActiveTab('hackathons')}
        >
          <h2>Hackathons/Competitions</h2>
        </div>

        <div 
          className={`curr ${activeTab === 'seminars' ? 'active' : ''}`} 
          onClick={() => setActiveTab('seminars')}
        >
          <h2>Seminars/Workshops</h2>
        </div>

        <div 
          className={`curr ${activeTab === 'organizations' ? 'active' : ''}`} 
          onClick={() => setActiveTab('organizations')}
        >
          <h2>Organizations/Volunteering</h2>
        </div>
      </div>

      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Curricular;
