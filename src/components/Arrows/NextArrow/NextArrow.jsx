import React from "react";
import "./NextArrow.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      <i className="fas fa-arrow-right fa-lg"></i>
    </div>
  );
};

export default NextArrow;
