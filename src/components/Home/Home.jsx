import React, { useEffect, useRef } from "react";
import "./Home.css";
import HireBtn from "../HireBtn/HireBtn";
import { TweenMax, Power3 } from "gsap";
import Astronaut from "../../images/img.png";

const Home = ({ onChangePage }) => {
  //Ref for home page
  let homePage = useRef();

  //Mounting hook
  useEffect(() => {
    //Set tittle
    document.title = "Tomáš Boďa";
    //Fade in animation
    TweenMax.to(homePage, 1, { opacity: 1, ease: Power3.easeIn });
    //Setting state on redirect
    onChangePage("/");
  }, []); // eslint-disable-line

  return (
    <div
      className="home-page "
      ref={(el) => {
        homePage = el;
      }}
    >
      <div className="home-flex-container">
        <div className="content">
          <h1 className="home-title">
            Welcome on my page
            <span role="img" aria-label="label">
              &#128075;
            </span>
          </h1>
          <HireBtn />
        </div>
        <div className="astronaut">
          <img src={Astronaut} alt="astronaut" />
        </div>
      </div>
      <div className="boxes">
        <div className="box">
          <h2>FOCUS & INTERESTS</h2>
          <p>
            I am mostly focusing on frontend but maybe in the future I might
            switch to fullstack.
          </p>
        </div>
        <div className="box">
          <h2>CODE & TECHNOLOGY</h2>
          <p>My main focus is on Javascript. More specific React.js</p>
        </div>
        <div className="box">
          <h2> JOBS & OFFERS</h2>
          <p>
            Currently: <span>Looking for job offers</span> <br />
            Current work position: <span>None</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
