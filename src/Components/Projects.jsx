import React, { useEffect, useRef, useState } from "react";
import ReactJS from "../assets/Reactjs.jpg";
import Coffee from "../assets/Coffee.png";

function Projects() {
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0); // Line height for scroll movement

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector(".timeline");
      const line = lineRef.current;

      // Get the top position of the timeline relative to the viewport
      const timelineTop = timeline.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the timeline is visible
      if (timelineTop < viewportHeight && timelineTop > -timeline.offsetHeight) {
        // Increase the height of the line based on scroll position
        const visibleHeight = Math.min(viewportHeight - timelineTop, timeline.offsetHeight);
        setLineHeight(visibleHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hide");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hide");
          }
        });
      },
      { threshold: 0.5 }
    );

    const containers = document.querySelectorAll(".project-container");
    containers.forEach((container) => observer.observe(container));
  }, []);

  return (
    <>
      <div className="heading-container">
        <div className="heading">Projects</div>
        <div className="line"></div>
      </div>
      <div className="timeline">
        {/* Dynamic vertical timeline line */}
        <div
          className="timeline-line"
          ref={lineRef}
          style={{ height: `${lineHeight}px` }}
        ></div>

        {/* Project containers */}
        <div className="project-container left-container">
    
          <div className="text-box">
            <h2>Project 1</h2>
            <img
              src={Coffee}
              alt="Project 1 Preview"
              className="project-image"
            />
            <p>
              Results-driven Full Stack Developer with a strong foundation in backend and
              frontend development, specializing in PHP, Laravel, and React.js.
              <br />
              Check out the project here:
              <a
                href="https://your-project-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a> |
              <a
                href="https://your-github-repo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub Repo
              </a>
            </p>
          </div>

        </div>
        <div className="project-container right-container">
          
          <div className="text-box">
            <h2>Project 2</h2>
            <small>April-May</small>
            <p>
              Results-driven Full Stack Developer with a strong foundation in
              backend and frontend development, specializing in PHP, Laravel,
              and React.js.
            </p>
          </div>
        </div>
        <div className="project-container left-container">
          
          <div className="text-box">
            <h2>Project 3</h2>
            <small>June-September</small>
            <p>
              Results-driven Full Stack Developer with a strong foundation in
              backend and frontend development, specializing in PHP, Laravel,
              and React.js.
            </p>
          </div>
        </div>
        <div className="project-container right-container">
          
          <div className="text-box">
            <h2>Project 4</h2>
            <small>October-November</small>
            <p>
              Results-driven Full Stack Developer with a strong foundation in
              backend and frontend development, specializing in PHP, Laravel,
              and React.js.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
