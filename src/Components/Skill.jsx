import React from 'react';

// Importing assets
import Htmllogo from '../assets/HTML5.png';
import Csslogo from '../assets/css3.png';
import JavascriptLogo from '../assets/javascript.png';
import Reactjslogo from '../assets/Reactjs.jpg';
import Phplogo from '../assets/PHP.png';
import Apilogo from '../assets/API.png';
import Laravellogo from '../assets/Laravel.png';
import Mysqllogo from '../assets/MYSQL.jpg';
import Skilllogo from '../assets/SkillPhoto.jpg';

// Importing FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Skill() {
  return (
    <>
      {/* Skills Heading Section */}
      <div className="heading-container">
        <div className="heading">SKILLS</div>
        <div className="line"></div>
      </div>

      {/* All Skills Section */}
      <div className="All_skill">
        <div className="All-skills">
          <div className="skill_container">
            <div className="icon">
              {/* Skill Logos */}
              {[
                { src: Htmllogo, alt: 'HTML5' },
                { src: Csslogo, alt: 'CSS3' },
                { src: JavascriptLogo, alt: 'JavaScript' },
                { src: Reactjslogo, alt: 'ReactJS' },
                { src: Phplogo, alt: 'PHP' },
                { src: Apilogo, alt: 'API' },
                { src: Laravellogo, alt: 'Laravel' },
                { src: Mysqllogo, alt: 'MySQL' },
              ].map((skill, index) => (
                <div
                  className="imgBx active"
                  style={{ '--i': index + 1 }}
                  key={index}
                >
                  <img src={skill.src} alt={skill.alt} />
                </div>
              ))}
            </div>

            {/* Profile Card */}
            <div className="content">
              <div className="contentBx active" id="content1">
                <div className="card">
                  <div className="imgBx">
                    <img src={Skilllogo} alt="Profile" />
                  </div>
                  <div className="textBx">
                    <h2>
                      Anirban<br />
                      <span>Sarkar</span>
                    </h2>
                    <ul className="sci">
                      {[
                        { href: 'https://facebook.com', icon: faFacebook },
                        { href: 'https://github.com', icon: faGithub },
                        { href: 'https://linkedin.com', icon: faLinkedin },
                        { href: 'https://instagram.com', icon: faInstagram },
                      ].map((social, index) => (
                        <li key={index}>
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={social.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Details Section */}
        <div className="skill_details">
          {/* Frontend Skills */}
          <div className="skill_card">
            <h2>Frontend</h2>
            <ul>
              <li>
                <span>Proficient in:</span> React.js, JavaScript, HTML5, CSS3, and responsive design principles.
              </li>
              <li>Experienced in building dynamic and interactive web applications.</li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="skill_card">
            <h2>Backend</h2>
            <ul>
              <li>
                <span>Proficient in:</span> PHP and Laravel for server-side development.
              </li>
              <li>Expertise in designing RESTful APIs and integrating with diverse databases.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;