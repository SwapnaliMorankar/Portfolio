import React, { useState } from 'react';
import './Project.css';

const Project = () => {
  const [expandedStates, setExpandedStates] = useState([false, false, false, false, false, false, false, false]);

  const toggleExpand = (index) => {
    setExpandedStates((prevStates) => 
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className='experience'>
      <div className="first">

        {[0].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
            <h2>01</h2>
            <h1>Spring Boot</h1>
            <h3>Saline Bottle Level Detection and Monitoring</h3>
            <p>Year: 2024</p>
            <p className='techused1'>Skills: Spring Boot, REST APIs, Machine Learning, Image Processing, Java, React.js, MySQL, Hibernate
            </p>
        
            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li> Currently  developing  this  system  using  machine  learning  to  ensure  timely  medical  interventions. </li>
                    <li> The  project  includes  creating  a 
                    web app for patient data, an administrative portal for live monitoring, and a mobile app for nurses. </li>
                    <li> Aiming  to  improve  monitoring  efficiency  by  50%  and  reduce  manual  errors  by  60%,  with  plans  for  future  integration  with 
                    hospital management systems. </li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}

        {[1].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
            <h2>02</h2>
            <h1>Spring Framework</h1>
            <h3>Two Dimensions Placement Preparation Platform</h3>
            <p>Year: 2024</p>
            <p className='techused1'>Skills: Spring Framework, APIs, MVC, ORM, Bootstrap,
                Java, JSP, Servlets, MySQL, Hibernate
            </p>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li>Developed a customized placement preparation platform exclusively for a class,
                         allowing students to register and access targeted courses designed to enhance 
                         their readiness for placement opportunities.</li>
                    <li>Implemented a role-based access system with distinct functionalities for students 
                        and admin. The admin manages all content, monitors student progress, and can add, 
                        delete, or update courses and modules, ensuring content remains relevant and up-to-date.</li>
                    <li>Streamlined the preparation process by organizing resources in a structured, easy-to-navigate web application, 
                        improving student engagement and access to placement-related content.</li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}

      </div>

      <div className="second">

        {[2].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
            <h2>03</h2>
            <h1>Spring MVC</h1>
            <h3>User Management Portal</h3>
            <p>Year: 2024</p>
            <p className='techused1'>Skills: Spring MVC, Spring ORM, Java, MySQL, Hibernate, Javascript, JSP,
                 Servlets, Bootstrap
            </p>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li> Developed  a  Spring  web  application  that  provides  a  complete  user  management  system,  allowing  users  to  register,  log  in,  and 
                    access  personalized  dashboards.</li>
                    <li>The  platform  includes  an  admin  interface  for  managing  user  data,  including  creating,  updating, 
                    deleting, and reading users.</li>
                    <li> Focused  on  implementing  secure  authentication,  user-friendly  navigation,  and  role-based  access  control  to  ensure  seamless  user 
                    experience and data security. </li>               
                    <li>Project URL:  <a href="https://github.com/SwapnaliMorankar/User_Management_Portal">User Managment Portal</a> </li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}

        {[3].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
           <h2>04</h2>
            <h1>Spring ORM</h1>
            <h3>Product Management Platform</h3>
            <p>Year: 2024</p>
            <p className='techused1'>Skills: Spring MVC, Spring ORM, Java, MySQL, JSP,
                 Servlets,  <br />Bootstrap
            </p>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li> Developed  a  full-stack  application  that  implements  complete  CRUD  
                        (Create,  Read,  Update,  Delete)  operations. </li>
                    <li> The  project allows  users  to  input  product  data  via  frontend  forms,  
                        which  is  then  stored  in  a  MySQL  database  and  retrieved  for  display  on 
                        another frontend page.</li>
                        <li> Focused  on  efficient  data  handling  and  smooth  integration  between  the  frontend  and  backend,  ensuring  accurate  storage  and 
                        retrieval of product information. </li>
                        <li>Project URL:  <a href="https://github.com/SwapnaliMorankar/CRUD_Application_Spring">Product Management Platform</a> </li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>

      <div className="first">

        {[4].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
            <h2>05</h2>
            <h1>Spring JDBC</h1>
            <h3>Online Book Store</h3>
            <p>Year: 2024</p>
            <p className='techused1'>Skills: Spring JDBC, Spring Core, Java, MySQL
            </p>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li> Developed  the  backend  for  an  online  book  store,  allowing  users  to  select  and  filter  reading  material  (Books,  Newspapers,  Novels, 
                        Magazines) by type, genre, or language. </li>
                    <li>The system includes distinct flows for admins and users, enabling efficient 
                        management and user interaction. </li>
                    <li> This terminal-based application focuses solely on backend functionality and database integration. </li>
                    <li>Project URL:  <a href="https://github.com/SwapnaliMorankar/OnlineBookStore_SpringJDBC">Online Book Store</a> </li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}

        {[5].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
           <h2>06</h2>
            <h1>Advance Java</h1>
            <h3>Advitiya - Empowering Rural Education System</h3>
            <p>Year: 2023</p>
            <p className='techused1'>Skills: Java, JSP, Servlets, JDBC, Javascript, Bootstrap
            </p>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li> Developed a solution addressing problem statements provided by the Government 
                        of India, focusing on rural education. </li>
                    <li> Created a web application to connect and manage all onsite educational activities, 
                        enhancing coordination and efficiency by 70%</li>
                    <li> Achieved  top  6  rank  in  the  internal  SIH  hackathon,  demonstrating  innovation  and  problem-solving  skills,  and  proposed  further 
                    development including backend integration and partnerships with local businesses. </li>
                    <li>Project URL:  <a href="https://github.com/SwapnaliMorankar/Adivitya_Rural_Education">Advitiya</a> </li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>

      <div className="second">

        {[6].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
            <h2>07</h2>
            <h1>React.js</h1>
            <h3>Edurec Website</h3>
            <p>Year: 2023</p>
            <p className='techused1'>Skills: React.js, Javascript, HTML, CSS, Bootstrap, smtp.js,
                Chatbot Integration
            </p>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li> Contributed  to  the  development  and  enhancement  of  the  company's  portfolio  website,  which  guided  students  on  various  online 
                    distance education courses from different universities.</li>
                    <li>Collaborated  in  a  team  of  two  to  develop  the  company's  portfolio  website  end-to-end,  completing  the  project  20%  ahead  of 
                    schedule.</li>
                    <li> Integrated  SMTP.js  email  functionality  and  chatbot  features  into  the  website,  enhancing  user  engagement  and  support 
                    efficiency by 30%. </li>
                    <li>Project URL:  <a href="https://benevolent-genie-b847b8.netlify.app/">Edurec</a> </li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}

        
        {[7].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
            <h2>08</h2>
            <h1>Frontend Development</h1>
            <h3>7th Gaming Platform</h3>
            <p>Year: 2023</p>
            <p className='techused1'>Skills: Javascript, HTML, CSS, Bootstrap
            </p>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li> Developed  a  frontend  web  development  project  as  part  of  a  competition,  focusing  on  a  website  that  connects  several  multiplayer 
                    games in one place, enhancing user convenience by 60%. </li>
                    <li>Designed  the  UI  for  a  platform  that  aggregates  all  major  famous  games,  simplifying  the  search  process  for  players  and  reducing 
                    the time spent searching by 30%.. </li>
                    <li>Project URL:  <a href="https://swapnalimorankar.github.io/7th-gaming/game.html">7th Gaming</a> </li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Project;
