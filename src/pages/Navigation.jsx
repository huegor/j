import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className="container">
      <h1>
        <Link to="/">j, <span className={`${
          props.location.pathname !== "/" ? "none" : ""
        }`}>if you die tomorrow,</span></Link>
      </h1>
      <h2>
        <ul className={`container flexBaseline flexEnd ${
          props.location.pathname === "/" ? "none" : ""
        }`}>
          <li className={`${
            props.location.pathname === "/vaquero" ? "italic" : ""
          }`}>
            <Link to="/vaquero">va<span className="mobileHide">quero</span></Link>
          </li>
          <li className={`${
            props.location.pathname === "/seeds" ? "italic" : ""
          }`}>
            <Link to="/seeds">se<span className="mobileHide">eds</span></Link>
          </li>
          <li className={`${
            props.location.pathname === "/iggy" ? "italic" : ""
          }`}>
            <Link to="/iggy">ig<span className="mobileHide">gy</span></Link>
          </li>
          <li className={`${
            props.location.pathname === "/christmas" ? "italic" : ""
          }`}>
            <Link to="/christmas">ch<span className="mobileHide">ristmas</span></Link>
          </li>
          <li className={`${
            props.location.pathname === "/blanket" ? "italic" : ""
          }`}>
            <Link to="/blanket">bl<span className="mobileHide">anket</span></Link>
          </li>
        </ul>
      </h2>
    </nav>
  );
}

export default withRouter(Navigation);
