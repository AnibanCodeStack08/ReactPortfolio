import React from 'react';
import Aboutpic from '../assets/About.jpg'; 

function About() {
  return (
    <>
      <main className='wrapper'>
        <div className="heading-container">
          <div className="heading">About ME</div>
          <div className="line"></div>
        </div>
        <section className='about'>
          <div className='image-section'>
            <img src={Aboutpic} alt='Profile of Anirban Sarkar' />
          </div>
          <article>
            <h3>Hello, my name is Anirban Sarkar</h3>
            <p>
              I am an experienced Full Stack Developer with a strong foundation in backend and frontend development, specializing in PHP, Laravel, and React.js. With a solid academic background and hands-on experience in building dynamic web applications, I am eager to contribute my technical skills to drive impactful solutions. Seeking opportunities to leverage my expertise in delivering innovative, user-centric software solutions while continuously expanding my knowledge in emerging technologies.
            </p>
            <div className='button'>
              <a href="/AnirbanSarkar.pdf" download="AnirbanSarkar.pdf">My CV</a>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default About;
