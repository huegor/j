import React from "react";
import { Link, withRouter } from "react-router-dom";
import Space from "./Space"

function Footer(props){
  return(
    <footer className="center">
      <div className={`${
        props.location.pathname === "/" ? "none" : ""
      }`}>
        <Space />
        <h2>
          <a href="#">(( back to top ))</a>
        </h2>
        <Space />
      </div>
      <p>© 2021 by Skye Hoffman</p>
      <div class="spaceHalf"></div>
    </footer>
  );
}

export default withRouter(Footer);
