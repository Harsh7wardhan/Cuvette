import React from "react";
import { NavLink } from "react-router-dom";
import sb1 from "../../media/top-bar/sb1.png";
import sb2 from "../../media/top-bar/sb2.png";
import sb3 from "../../media/top-bar/sb3.png";


const LeftNav = () => {
  return (
    <div className="left-nav">
      <div className="nav-items">
        <NavLink
          activeClassName="active-nav-item"
          className="nav-item"
          to="/dashboard"
          exact
        >
          <img className="nav-img" src={sb2}/>
          Dashboard
          {/* <EqualizerOutlinedIcon fontSize="14" /> &nbsp; Dashboard */}
        </NavLink>
        <NavLink
          activeClassName="active-nav-item"
          className="nav-item"
          to="/"
          exact
        >
          <img className="nav-img" src={sb3}/>
          Skill Test
          {/* <MilitaryTechOutlinedIcon fontSize="14" /> &nbsp; Skill Test */}
        </NavLink>
        <NavLink
          activeClassName="active-nav-item"
          className="nav-item"
          to="/internships"
          exact
        >
          <img className="nav-img" src={sb1}/>
          Internships
          {/* <FileOpenOutlinedIcon fontSize="14" /> &nbsp; Internships */}
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNav;
