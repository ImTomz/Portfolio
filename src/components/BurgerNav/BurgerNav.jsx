import React, { useRef, useEffect } from "react";
import "./BurgerNav.css";
import { Link } from "react-router-dom";
import { TimelineMax } from "gsap";

const BurgerNav = ({ onChangePage }) => {
  //Timeline
  const tl = new TimelineMax();

  //Ref for links and icons
  let home = useRef();
  let about = useRef();
  let works = useRef();
  let hireMe = useRef();
  let icons = useRef();

  //Animation
  useEffect(() => {
    tl.to(home, 0.7, { top: "0px" })
      .to(works, 0.7, { top: "0px" }, 0)
      .to(about, 0.7, { top: "0px" }, 0)
      .to(hireMe, 0.7, { top: "0px" }, 0)
      .to(icons, 0.7, { opacity: 1 });
  });

  return (
    <div className="burger-nav">
      <div className="burger-container">
        <ul>
          <li
            onClick={() => {
              onChangePage("/");
            }}
          >
            <Link to="/" ref={(el) => (home = el)}>
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              onChangePage("/works");
            }}
          >
            <Link to="/works" ref={(el) => (works = el)}>
              Works
            </Link>
          </li>
          <li
            onClick={() => {
              onChangePage("/about");
            }}
          >
            <Link to="/about" ref={(el) => (about = el)}>
              About
            </Link>
          </li>
          <li
            onClick={() => {
              onChangePage("/hire");
            }}
          >
            <Link to="/hire" ref={(el) => (hireMe = el)}>
              Hire Me
            </Link>
          </li>
        </ul>
        <div className="icons" ref={(el) => (icons = el)}>
          <a
            href="https://github.com/ImTomz"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://twitter.com/t_bodaa"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
          <a
            href="https://www.instagram.com/t_bodaa/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerNav;
