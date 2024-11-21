import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Me</h4>
          <p>Email: yourname@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Location: City, State</p>
        </div>
        <div className="social-media">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Anirban Sarkar.</p>
      </div>
    </footer>
  );
};

export default Footer;