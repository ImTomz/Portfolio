import React from "react";
import { Link } from "react-router-dom";
import "./HireBtn.css";

const HireBtn = () => {
  return (
    <div className="hireMe-btn">
      <Link to="/hire">
        <p>HIRE ME</p>
        <i className="fas fa-arrow-right fa-lg"></i>
      </Link>
    </div>
  );
};

export default HireBtn;
