import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { useEffect, useRef } from "react";
import "./Skills.css";

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.35 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#ff5722", level: 95 },
    { name: "CSS", icon: <FaCss3Alt />, color: "#2196f3", level: 90 },
    { name: "JavaScript", icon: <FaJs />, color: "#fbc02d", level: 85 },
    { name: "React", icon: <FaReact />, color: "#00d8ff", level: 80 },
  ];

  return (
    <div id="skills" ref={skillsRef} className="skills-theme container-fluid">
      <div className="container">

       
        <div className="skills-title fade-drop">
          <h2 className="section-title text-center">MY SKILLS</h2>
          <div className="skills-line"></div>
        </div>

        <p className="skills-desc fade-drop delay-1">
          Technologies I use to build modern, interactive and responsive web
          applications.
        </p>

        
        <div className="row g-4 mt-4">
          {skills.map((skill, i) => (
            <div className="col-md-3" key={i}>
              <div
                className="skill-box"
                style={{ "--glow": skill.color, "--level": `${skill.level}%` }}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>

                <h5>{skill.name}</h5>

                <div className="skill-bar">
                  <span></span>
                </div>

                <small className="skill-percent">{skill.level}%</small>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
