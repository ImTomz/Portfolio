import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftNav.css";

const LeftNav = ({ onChangePage }) => {
  return (
    <ul className="left-nav">
      <li>
        <NavLink
          onClick={() => {
            onChangePage("/");
          }}
          to="/"
          activeClassName="active-home"
          exact={true}
        >
          <span>01</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            onChangePage("/works");
          }}
          to="/works"
          activeClassName="active-works"
        >
          <span>02</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            onChangePage("/about");
          }}
          to="/about"
          activeClassName="active-about"
        >
          <span>03</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            onChangePage("/hire");
          }}
          to="/hire"
          activeClassName="active-hire"
        >
          <span>04</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default LeftNav;
