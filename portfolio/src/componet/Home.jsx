import React, { useEffect } from "react";
import "./Home.css";

export default function Home() {

  useEffect(() => {
    document.body.classList.add("show");
  }, []);

  return (
    <div className="home d-flex" id="home">

      {/* LEFT */}
      <div className="left d-flex flex-column justify-content-center p-5">
        <h6 className="mb-2">Hi, I am</h6>
        <h1 className="fw-bold display-4">
          Chavda <br /> Amit
        </h1>

        <p className="text-secondary">
          Front-end Developer / UI Designer
        </p>

        <div className="icons d-flex gap-3 mt-4">

          <a
            href="https://wa.me/919998320342"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="bi bi-whatsapp"></i>
          </a>

          <a
            href="https://www.instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="bi bi-github"></i>
          </a>

        </div>

      </div>

      {/* RIGHT */}
      <div className="right d-flex justify-content-center align-items-center">
        <img src="/amit1.jpeg" alt="profile" />
      </div>

    </div>
  );
}
