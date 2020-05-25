import React from "react";
import "./WorksBox.css";

const WorksBox = (props) => {
  const { index, description, img, link } = props;
  return (
    <div className="works-box">
      <div>
        <img className="img" src={img} alt="head"></img>
      </div>

      <div className="description">
        <h1>{index}</h1>
        <p>{description}</p>
      </div>
      <a
        href={link}
        className="more-btn "
        rel="noopener noreferrer"
        target="_blank"
      >
        See more..
      </a>
    </div>
  );
};

export default WorksBox;
