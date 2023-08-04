import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Parth</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/iparth36i/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          > 
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/parth-gandhi-478379162/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; ParthGandhi. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
