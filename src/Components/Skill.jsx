import React from 'react';

// Importing images from assets folder
import HTML5 from '../assets/HTML5.png'; 
import CSS3 from '../assets/css3.png';
import JavaScript from '../assets/javascript.png';
import ReactJS from '../assets/Reactjs.jpg';
import PHP from '../assets/PHP.png';
import API from '../assets/API.png';
import Laravel from '../assets/Laravel.png';
import MySQL from '../assets/MYSQL.jpg';
import Skillpic from '../assets/SkillPhoto.jpg';

// Import FontAwesomeIcon and brand icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Skill() {
  return (
    <>
      <div className="heading-container">
        <div className="heading">SKILLS</div>
        <div className="line"></div>
      </div>
      <div className='All_skill'>  
          <div className='All-skills'>
            <div className="skill_container">
            <div className="icon">
              <div className="imgBx active" style={{ '--i': 1 }}>
                <img src={HTML5} alt="HTML5" />
              </div>
              <div className="imgBx active" style={{ '--i': 2 }}>
                <img src={CSS3} alt="CSS3" />
              </div>
              <div className="imgBx active" style={{ '--i': 3 }}>
                <img src={JavaScript} alt="JavaScript" />
              </div>
              <div className="imgBx active" style={{ '--i': 4 }}>
                <img src={ReactJS} alt="ReactJS" />
              </div>
              <div className="imgBx active" style={{ '--i': 5 }}>
                <img src={PHP} alt="PHP" />
              </div>
              <div className="imgBx active" style={{ '--i': 6 }}>
                <img src={API} alt="API" />
              </div>
              <div className="imgBx active" style={{ '--i': 7 }}>
                <img src={Laravel} alt="Laravel" />
              </div>
              <div className="imgBx active" style={{ '--i': 8 }}>
                <img src={MySQL} alt="MySQL" />
              </div>
            </div>

            <div className='content'>
              <div className='contentBx active' id='content1'>
                <div className='card'>
                  <div className='imgBx'>
                    <img src={Skillpic} alt='Profile' />
                  </div>
                  <div className='textBx'>
                    <h2>Anirban<br /><span>Sarkar</span></h2>
                    <ul className='sci'>
                      <li>
                        <a href="https://facebook.com">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>


          <div className="skill_details">
    <div className="skill_card">
      <h2>Frontend</h2>
      <ul>
        <li><span>Proficient in:</span> React.js, JavaScript, HTML5, CSS3, and responsive design principles.</li>
        <li>Experienced in building dynamic and interactive web applications.</li>
      </ul>
    </div>

    <div className="skill_card">
      <h2>Backend</h2>
      <ul>
        <li><span>Proficient in:</span> PHP and Laravel for server-side development.</li>
        <li>Expertise in designing RESTful APIs and integrating with diverse databases.</li>
      </ul>
    </div>
  </div>  

      </div>    
    </>
  );
}

export default Skill;
