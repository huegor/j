import React from "react";
import {Link} from "react-router-dom";

function Home(){
  return (
    <>
      <div className="spaceHalf"></div>
      <div className="relative">
        <img id ="bg" src={`/img/group/group.png`} alt="group"/>
        <Link to="/vaquero">
          <img id="vaquero" className="absolute" src={`/img/group/group_vaquero.png`} alt="vaquero"/>
        </Link>
        <Link to="/blanket">
          <img id="blanket" className="absolute" src={`/img/group/group_blanket.png`} alt="blanket"/>
        </Link>
        <Link to="/iggy">
          <img id="iggy" className="absolute" src={`/img/group/group_iggy.png`} alt="iggy"/>
        </Link>
        <Link to="/christmas">
          <img id="christmas" className="absolute" src={`/img/group/group_christmas.png`} alt="christmas"/>
        </Link>
        <Link to="/seeds">
          <img id="seeds" className="absolute" src={`/img/group/group_seeds.png`} alt="seeds"/>
        </Link>
      </div>
    </>
  );
}

export default Home;
