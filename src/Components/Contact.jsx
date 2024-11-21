import React from 'react';




function Contact() {
    return (
      <section className="contact-main-sec">
        <div className="contact-container">
          {/* Left Section */}
          <div className="contact-left">
            <h1 className="contact-left-head">WANNA CHAT OVER?</h1>
            <form className="contact-form">
              <label htmlFor="name">My Name Is</label>
              <input type="text" id="name" placeholder="Your name" />
  
              <label htmlFor="phone">You Can Contact Me..</label>
              <input type="text" id="phone" placeholder="Your phone number" />
  
              <label htmlFor="email">Or By Email At</label>
              <input type="email" id="email" placeholder="Your email" />
            </form>
          </div>
  
          {/* Right Section */}
          <div className="contact-right">
            <div className="contact-info">
              <h3>GIVE US A CALL!</h3>
              <p>+917585881506</p>
            </div>
            <div className="contact-info">
              <h3>WRITE WITH US</h3>
              <p>anirbansarkar549@gmail.com.com</p>
            </div>
            <div className="contact-info">
              <h3>COME AND SEE US</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
  
        <button className="contact-btn">SEND MESSAGE</button>
      </section>
    );
  }
  
  export default Contact;