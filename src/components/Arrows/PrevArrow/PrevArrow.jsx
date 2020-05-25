import React from "react";
import "./PrevArrow.css";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      <i className="fas fa-arrow-left fa-lg"></i>
    </div>
  );
};

export default PrevArrow;
