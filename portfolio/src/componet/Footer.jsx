import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaArrowUp,
  FaEnvelope
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark text-light py-5">
      <div className="container text-center">

       
        <div
          className="d-flex justify-content-center mb-4"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          <FaArrowUp className="text-info fs-5 arrow-animate" />
        </div>

     
        <div className="d-flex justify-content-center gap-4 fs-4 mb-4">

          <a
            href="https://wa.me/919998320342?text=Hello%20Amit,%20I%20want%20to%20contact%20you%20for%20a%20project"
            target="_blank"
            rel="noreferrer"
            className="icon-hover whatsapp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="icon-hover instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="icon-hover linkedin"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="icon-hover github"
          >
            <FaGithub />
          </a>

        </div>

        
        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
          <FaEnvelope className="email-icon" />
          <a
            href="mailto:yourmail@gmail.com"
            className="email-text"
          >
            chavdaamit1011@gmail.com
          </a>
        </div>

        <p className="text-muted small mb-0">
          © {new Date().getFullYear()} Chavda Amit
        </p>

      </div>
    </footer>
  );
}
