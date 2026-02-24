import { useEffect, useRef, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const projectsRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.35 }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Cosmetics JS",
      desc: "Modern responsive web application built with JavaScript.",
      video:"/cosmetic.mp4",
      link: "https://cosmetics-js.netlify.app/",
    },
    {
      id: 2,
      title: "Netflix",
      desc: "Create a single web-page with html-css.",
      video: "/netflix.mp4",
      link: "https://singlepage-8-8-2004.netlify.app/",
    },
    {
      id: 3,
      title: "Shambhus cofee",
      desc: "Create a responsive cofee webpage with html css.",
      video: "/shambhuscofee.mp4",
      link: "https://shambhus-cofee-singlepage.netlify.app/",
    },
  ];

  const handleProjectClick = (url) => {
    setLoading(true);

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
    }, 1200); // loading delay
  };

  return (
    <>
      {/* LOADING OVERLAY */}
      {loading && (
        <div className="project-loading">
          <div className="loader-box">
            <span className="loader"></span>
            <p>Loading… please wait</p>
          </div>
        </div>
      )}

      <div
        id="projects"
        ref={projectsRef}
        className="projects-theme container-fluid"
      >
        <div className="container">

          <div className="projects-title fade-drop">
            <h2 className="section-title text-center">PROJECTS</h2>
            <div className="projects-line"></div>
          </div>

          <p className="projects-desc fade-drop delay-1">
            Some of my selected work showcasing UI, animations and functionality.
          </p>

         
          <div className="row g-4 mt-4">
            {projects.map((project) => (
              <div className="col-md-4" key={project.id}>
                <div
                  className="project-card"
                  onClick={() => handleProjectClick(project.link)}
                >
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="project-media"
                    />
                  ) : (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="project-media"
                    />
                  )}

                  <div className="project-body">
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-desc">{project.desc}</p>

                    <div className="project-footer">
                      <span className="project-btn">View Project →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
