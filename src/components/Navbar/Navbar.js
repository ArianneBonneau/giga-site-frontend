import React from "react";
import { MenuItems } from "../MenuItems";
import { Nav } from "react-bootstrap";
import './Navbar.css';
import { Avatar } from "../Styles";
import Logo from './../../giga-site-logo.png';

export default function Navbar() {
  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo"><Avatar image={Logo} style={{height: "15px", width: "105px"}}/></h1>
      {/* <div className="menu-icon"></div> */}
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.Title}
              </a>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
}