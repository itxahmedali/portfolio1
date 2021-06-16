import React from 'react';
import './Contact.css'

export default function Contact() {
    return (
        <div>
        <section id="contact" className="contact-section">
    <div className="contact-section-h">
      <h1>Contact</h1>
    </div>
    <div className="contact-section-content">
      <i className="fas fa-address-book"></i>
      <p>Ahmed Ali</p>
      <i className="fas fa-mobile-alt"></i>
      <p>+92312-2596250</p>
      <i className="fas fa-envelope"></i>
      <p>ahmedakhter1289@gmail.com</p>
    </div>
  </section>
  <footer className="footer">
    <div className="footer-links">

      <a href="https://www.facebook.com/itx.ahmedali"><i className="fab fa-facebook-f footer-icons"></i></a>
      <a href="https://www.instagram.com/i.ahmed._.ali/"><i className="fab fa-instagram footer-icons"></i></a>
      <a href="https://www.linkedin.com/in/ahmed-ali-13108320b/"><i className="fab fa-linkedin-in footer-icons"></i></a>
      <a href="mailto:ahmedakhter1289@gmail.com"><i className="fas fa-envelope footer-icons"></i></a>
    </div>
    <div className="footer-p">
      <p> © Copyright 2021 Ahmed Ali</p>
    </div>
  </footer>
</div>
    )
}
