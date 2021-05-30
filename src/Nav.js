import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && `nav__black`}`}>
      <img
        className="nav__logo"
        src="https://img.icons8.com/color/96/000000/netflix.png"
      />
      <img
        className="nav__avatar"
        src="https://img.icons8.com/ios-filled/50/fa314a/likes-folder--v1.png"
      />
    </div>
  );
}

export default Nav;
