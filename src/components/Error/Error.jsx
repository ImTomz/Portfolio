import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-page">
      <div className="flex">
        <span role="img" aria-label="label">
          &#x1F915;
        </span>
        <h1>...Ops something went wrong</h1>
        <Link to="/" className="back-btn">
          Back home
        </Link>
      </div>
    </div>
  );
};

export default Error;
