import React, { useEffect } from "react";

import Slider from "react-slick";
import WorksBox from "../WorksBox/WorksBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Works.css";
import firstImg from "../../images/Screenshot-1.png";
import secondImg from "../../images/MERN.png";
import thirdImg from "../../images/Static.png";
import fourthImg from "../../images/Redux.png";
import NextArrow from "../Arrows/NextArrow/NextArrow";
import PrevArrow from "../Arrows/PrevArrow/PrevArrow";

const Works = ({ onChangePage }) => {
  //Mounting hook
  useEffect(() => {
    //Setting title
    document.title = "Works - Tomáš Boďa";
    //Setting state on reload
    onChangePage("/works");
  }, []); // eslint-disable-line

  //Settings for slider
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="works-page">
      <div className="works-title">
        <h1>Works</h1>
        <span role="img" aria-label="label">
          &#x1F6E0;
        </span>
      </div>
      <Slider {...settings} className="slider">
        <WorksBox
          index="Landing Page"
          description="Landing page for practice animations with GSAP library."
          img={firstImg}
          link="https://github.com/ImTomz/Landing_PageGSAP"
        />
        <WorksBox
          index="Static HTML/CSS"
          description="Static HTML/CSS page using grid and responzive design."
          img={thirdImg}
          link="https://github.com/ImTomz/Static-responsive-Web"
        />
        <WorksBox
          index="React/Redux app"
          description="React/Redux e-commerce like application only frontend side."
          img={fourthImg}
          link="https://github.com/ImTomz/React-Redux-e-commerce"
        />
        <WorksBox
          index="MERN Todolist"
          description="MERN stack application React on frontend Express and mongoDB on backend."
          img={secondImg}
          link="https://github.com/ImTomz/MERN_Todolist_App"
        />
      </Slider>
    </div>
  );
};

export default Works;
