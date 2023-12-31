import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavData } from "./NavData.js";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className={sidebar ? "menu-bars active" : "menu-bars"} >
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src="./logov1.png" alt="Logo"/>
        </div>
        <nav className={sidebar ? "navMenu active" : "navMenu"}>
          <ul className="navMenuItems" onClick={showSidebar}>
            <li className="navbarToggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;