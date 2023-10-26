import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../media/logo/logo.png";
import Harshwardhan from "../../media/top-bar/prof.jpg";

const TopBar = () => {
  const notificationCount = 1;
  const [menu, setMenu] = useState(1);
  return (
    <div className="top-bar">
      {/* ---------- */}
      {/* Logo */}
      <div className="logo-top">
        <img src={Logo} alt="Logo" />
      </div>
      {/* ---------- */}
      {/* Desktop */}
      <div className="desktop-view">
        <div className="top-right-items">
         
          <Link to="/" className="top-right-item profile">
            <img src={Harshwardhan} alt="Logo" />
            &nbsp; &nbsp;
            <div className="profile-name">Harshwardhan</div>
          </Link>
        </div>
      </div>
      {/* ---------- */}
      {/* Mobile */}
      {/* <div className="mobile-view">
        <div className="hamburger">
          {menu === 1 ? (
            <MenuIcon onClick={() => setMenu(2)} />
          ) : (
            <CloseIcon onClick={() => setMenu(1)} />
          )}
        </div>
        <OutsideClickHandler onOutsideClick={() => setMenu(1)}>
          {menu === 2 && (
            <div className="top-right-items">
              
              <Link to="/" className="top-right-item profile">
                <img src={Harshwardhan} alt="Logo" />
                &nbsp; &nbsp;
                <div className="profile-name">Harshwardhan</div>
              </Link>
            </div>
          )}
        </OutsideClickHandler>
      </div> */}
    </div>
  );
};

export default TopBar;
