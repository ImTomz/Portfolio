import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import HireBtn from "../HireBtn/HireBtn";
import Satellite from "../../images/Satellite.png";
import "./About.css";

const About = ({ onChangePage }) => {
  //Ref for animation
  let AboutPage = useRef();

  //Mounting hook
  useEffect(() => {
    //Setting title of site
    document.title = "About - Tomáš Boďa";
    //Setting state on reload page
    onChangePage("/about");
  }, []); // eslint-disable-line

  return (
    <div className="about-page" ref={(el) => (AboutPage = el)}>
      <div>
        <div className="about-content">
          <div className="about-title">
            <h1>
              Little bit about me
              <span role="img" aria-label="label">
                &#x2728;
              </span>
            </h1>
            <div className="about-text">
              <p className="text">
                Hello my name is Tomas and I'm frontend developer. My main focus
                is Javascript/React.js but I'm also very excited for trying new
                technologies. I started my developer journey about a year ago
                but I have been always interested into computers. If you want to
                know more about me and my work lets talk!
              </p>
              <HireBtn />
            </div>
            <div className="emojis">
              <div className="emojis-container">
                <ul>
                  <li>
                    <p>
                      <span role="img" aria-label="label">
                        &#x23F1;
                      </span>
                      Efficiency
                    </p>
                  </li>
                  <li>
                    <p>
                      <span role="img" aria-label="label">
                        &#x1F3AF;
                      </span>
                      Consistency
                    </p>
                  </li>
                  <li>
                    <p>
                      <span role="img" aria-label="label">
                        &#129504;
                      </span>
                      Quick Learning
                    </p>
                  </li>
                  <li>
                    <p>
                      <span role="img" aria-label="label">
                        &#x1F44A;
                      </span>
                      Sociable
                    </p>
                  </li>
                </ul>
              </div>
              <div className="emojis-container">
                <ul>
                  <li>
                    <p>
                      <span role="img" aria-label="label">
                        &#x1F3AE;
                      </span>
                      Games
                    </p>
                  </li>
                  <li>
                    <p>
                      <span role="img" aria-label="label">
                        &#x1F3A7;
                      </span>
                      Music
                    </p>
                  </li>
                  <li>
                    <p>
                      <span role="img" aria-label="label">
                        &#x1F3AC;
                      </span>
                      Movies
                    </p>
                  </li>
                  <li>
                    <p>
                      <span role="img" aria-label="label">
                        &#x1F48E;
                      </span>
                      3D modeling
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="satellite">
            <img src={Satellite} alt="satellite" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
