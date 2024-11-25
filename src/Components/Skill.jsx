import React from 'react';

// Importing images from assets folder
import Htmllogo from '/assets/HTML5.png'; 
import Csslogo from '/assets/css3.png';
import JavascriptLogo from '/assets/javascript.png';
import Reactjslogo from '/assets/Reactjs.jpg';
import Phplogo from '/assets/PHP.png';
import Apilogo from '/assets/API.png';
import Laravellogo from '/assets/Laravel.png';
import Mysqllogo from '/assets/MYSQL.jpg';
import Skilllogo from '/assets/SkillPhoto.jpg';

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
                <img src={Htmllogo} alt="HTML5" />
              </div>
              <div className="imgBx active" style={{ '--i': 2 }}>
                <img src={Csslogo} alt="CSS3" />
              </div>
              <div className="imgBx active" style={{ '--i': 3 }}>
                <img src={JavascriptLogo} alt="JavaScript" />
              </div>
              <div className="imgBx active" style={{ '--i': 4 }}>
                <img src={Reactjslogo} alt="ReactJS" />
              </div>
              <div className="imgBx active" style={{ '--i': 5 }}>
                <img src={Phplogo} alt="PHP" />
              </div>
              <div className="imgBx active" style={{ '--i': 6 }}>
                <img src={Apilogo} alt="API" />
              </div>
              <div className="imgBx active" style={{ '--i': 7 }}>
                <img src={Laravellogo} alt="Laravel" />
              </div>
              <div className="imgBx active" style={{ '--i': 8 }}>
                <img src={Mysqllogo} alt="MySQL" />
              </div>
            </div>

            <div className='content'>
              <div className='contentBx active' id='content1'>
                <div className='card'>
                  <div className='imgBx'>
                    <img src={Skilllogo} alt='Profile' />
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
