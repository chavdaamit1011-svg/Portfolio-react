import { useEffect, useRef } from "react";
import "./Contact.css";

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.35 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="contact"
      ref={contactRef}
      className="contact-theme container-fluid"
    >
      <div className="container">

       
        <div className="contact-title fade-drop">
          <h2 className="section-title text-center">CONTACT</h2>
          <div className="contact-line"></div>
        </div>

        <p className="contact-desc fade-drop delay-1">
          Let’s work together. Feel free to drop a message.
        </p>

        
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 col-lg-6">
            <form className="contact-form">

              <div className="form-group mb-4">
                <input type="text" required />
                <label>ENTER YOUR NAME *</label>
                <span className="line"></span>
              </div>

              <div className="form-group mb-4">
                <input type="email" required />
                <label>ENTER YOUR EMAIL *</label>
                <span className="line"></span>
              </div>

              <div className="form-group mb-4">
                <input type="tel" />
                <label>PHONE NUMBER</label>
                <span className="line"></span>
              </div>

              <div className="form-group textarea mb-5">
                <textarea rows="4" required></textarea>
                <label>YOUR MESSAGE *</label>
                <span className="line"></span>
              </div>

              <div className="text-center">
                <button type="submit" className="submit-btn">
                  <span></span>
                  SUBMIT
                  <span></span>
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
