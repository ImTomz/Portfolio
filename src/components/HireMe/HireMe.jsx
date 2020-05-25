import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import "./HireMe.css";

const HireMe = ({ onChangePage }) => {
  //Ref of hire page
  let HirePage = useRef();

  //Mounting hook
  useEffect(() => {
    //Setting title
    document.title = "Hire - Tomáš Boďa";
    //Fade in animation
    TweenMax.to(HirePage, 1, { opacity: 1, ease: Power3.easeIn });
    //Set state on reload
    onChangePage("/hire");
  }, []); // eslint-disable-line

  return (
    <div className="hireMe-page" ref={(el) => (HirePage = el)}>
      <div className="hire-info">
        <div className="header">
          <span role="img" aria-label="label">
            &#x1F47E;
          </span>
          <h2>Tomáš Boďa</h2>
          <h3>tomasboda77@gmail.com</h3>
        </div>
        <div>
          <a
            href="https://twitter.com/t_bodaa"
            className="social-btn twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/ImTomz"
            className="social-btn github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:tomasboda77@gmail.com"
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
