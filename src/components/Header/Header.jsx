import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { TimelineMax, Power3 } from "gsap";

const Header = ({ onChangePage, onBurgerPressed, isOpen }) => {
  //Animation timeline
  const tl = new TimelineMax();

  //Ref for burger
  let lineOne = useRef();
  let lineTwo = useRef();
  let lineThree = useRef();

  useEffect(() => {
    //Setting animation back on mount
    if (!isOpen) {
      tl.to(lineOne, 0.1, {
        backgroundColor: "#fff",
        rotate: 0,
        y: 0,
        ease: Power3.easeIn,
      })
        .to(lineTwo, 0.1, { opacity: "1" })
        .to(lineThree, 0.1, { backgroundColor: "#fff", rotate: 0, y: 0 });
    }
  }, [isOpen]); //eslint-disable-line

  //Handle changepage after clicking on logo
  const handleChange = () => {
    onChangePage("/");
  };

  //Handle burger click
  const handleClick = () => {
    //Animation
    if (!isOpen) {
      tl.to(lineOne, 0.1, {
        backgroundColor: "red",
        y: "7px",
        rotate: "-40",
        ease: Power3.easeIn,
      })
        .to(lineTwo, 0.1, { opacity: "0" })
        .to(lineThree, 0.1, {
          backgroundColor: "red",
          y: "-7px",
          rotate: "40",
        });
    } else {
      tl.to(lineOne, 0.1, {
        backgroundColor: "#fff",
        rotate: 0,
        y: 0,
        ease: Power3.easeIn,
      })
        .to(lineTwo, 0.1, { opacity: "1" })
        .to(lineThree, 0.1, { backgroundColor: "#fff", rotate: 0, y: 0 });
    }
    //Change state in parent
    onBurgerPressed();
  };

  return (
    <div className="headNav-flex">
      <div>
        <h3>
          <Link to="/" onClick={handleChange}>
            Tomáš Boďa
          </Link>
        </h3>
      </div>
      <div className="hamburger" onClick={handleClick}>
        <div className="line" ref={(el) => (lineOne = el)}></div>
        <div className="line mid-line " ref={(el) => (lineTwo = el)}></div>
        <div className="line" ref={(el) => (lineThree = el)}></div>
      </div>
    </div>
  );
};

export default Header;
