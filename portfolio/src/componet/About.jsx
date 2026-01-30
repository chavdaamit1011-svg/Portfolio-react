import React, { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.35 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" ref={aboutRef} className="about-theme container-fluid">
      <div className="container">

        
        <div className="about-title-box fade-drop ">
          <h2 className="section-title text-center">ABOUT ME</h2>
          <div className="section-line1"></div>
        </div>

        <p className="about-desc fade-drop delay-1">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra.
        </p>

        <div className="row align-items-center mt-4">

          
          <div className="col-md-6 text-center">
            <img
              src="/amit2.jpeg"
              alt="About"
              className="about-img-rect img-dynamic"
            />
          </div>

          
          <div className="col-md-6 text-dynamic">
            <h3 className="fw-bold ">Chavda Amit</h3>

            <p className="text-muted mt-2">
              I am a passionate Front-end Developer focused on creating
              modern, responsive and user-friendly web applications.
            </p>

            <p className="text-muted">
              I love working with React, Bootstrap and clean UI designs.
              Always eager to learn new technologies and improve my skills.
            </p>

            <button className="explore-btn glow-btn">
              EXPLORE
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
