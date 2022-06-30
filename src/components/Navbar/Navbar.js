import React from "react";
import './Navbar.css';
import {FiSearch} from 'react-icons/fi';
import Logo from './../../logogigasite.png';
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { useState } from 'react';


export default function Navbar() {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(true);
  const [menu, setMenu] = useState(true);

  const handleClick = () => setClick(!click);
  
  const showButton = () => {
    if(window.innerWidth <=1000){
      setButton(false)
    } else {
      setButton(true)
    }
  }
  window.addEventListener('resize', showButton);

  return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{marginLeft: "0", marginRight: "0"}}>
  <div className="container topnav" style={{marginLeft: "0", marginRight: "0"}}>
   { button ? (
    <a
          className="btn px-3"
          href="/"
          role="button"
          style={{height: "30px"}}>
            <i className="fab fa-github" style={{display: "flex", justifyContent: "center", alignItems: "center"}}><GrLanguage/> FR</i></a>
   ): (
    <a
    className="btn px-3"
    href="/"
    role="button"
    style={{height: "24px"}}>
    <i className="fab fa-github" style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px"}}><GrLanguage/></i></a>
  
   )}

{ button ? (
  <a className="navbar-brand me-2" href="/" style={{transform: "translateX(-50%)", left: "50%", position: "absolute"}}>
      <img
        src={Logo}
        height="27"
        alt="Giga-site Logo"
        loading="lazy"
        style={{verticalAlign: "middle"}}
        className="topnav-centered"
      />
    </a>
) : (
  <a className="navbar-brand me-2" href="/" style={{transform: "translateX(-50%)", left: "50%", position: "absolute"}}>
      <img
        src={Logo}
        height="10"
        alt="Giga-site Logo"
        loading="lazy"
        style={{verticalAlign: "middle"}}
        className="topnav-centered"
      />
    </a>
)}
  
  {button ? (
    <div className="collapse navbar-collapse menu-nav-select" style={{verticalAlign: "middle"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize: "12px", fontWeight: "bold"}}>
        <li className="nav-item" style={{ margin: "5px", height: "30px"}}>
          <a className="nav-link list-group-item list-group-item-action list-group-item-light" style={{color: "#2176FF", height: "fit-content"}} href="/">À PROPOS</a>
        </li>
        <li className="nav-item" style={{ margin: "5px", height: "30px"}}>
          <a className="nav-link list-group-item list-group-item-action list-group-item-light" style={{color: "#2176FF", height: "fit-content"}} href="/">FONCTIONNEMENT</a>
        </li>
        <li className="nav-item" style={{ margin: "5px", height: "30px"}}>
          <a className="nav-link list-group-item list-group-item-action list-group-item-light" style={{color: "#2176FF", height: "fit-content"}} href="/">PRODUITS</a>
        </li>
      </ul>
      </div>
  ) : (
        <div className="menu-icon" onClick={handleClick} style={{verticalAlign: "middle", left: "0", position: "absolute"}}>
        {click ? <FaTimes/> : <FaBars/> }
        </div>
      // <div className="collapse navbar-collapse menu-nav-select" id="navbarButtonsExample" style={{verticalAlign: "middle"}}>
      
      // <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize: "12px", fontWeight: "bold", marginLeft: "30px"}}>
      //   <li className="nav-item" style={{ margin: "5px", height: "20px"}}>
      //     <a className="nav-link list-group-item list-group-item-action list-group-item-light" style={{color: "#2176FF", height: "fit-content"}} href="/">À PROPOS</a>
      //   </li>
      //   <li className="nav-item" style={{ margin: "5px", height: "20px"}}>
      //     <a className="nav-link list-group-item list-group-item-action list-group-item-light" style={{color: "#2176FF", height: "fit-content"}} href="/">FONCTIONNEMENT</a>
      //   </li>
      //   <li className="nav-item" style={{ margin: "5px", height: "20px"}}>
      //     <a className="nav-link list-group-item list-group-item-action list-group-item-light" style={{color: "#2176FF", height: "fit-content"}} href="/">PRODUITS</a>
      //   </li>
      // </ul>
      // </div>
  )}

      
          { search ? (
            <form className="input-group w-auto my-auto d-none d-sm-flex" style={{position: "relative", right: "90px"}}>
            <input
              autoComplete="off"
              type="search"
              className="form-control"
              placeholder="Recherche"
              style={{minWidth: "125px", maxWidth: "200px", maxHeight: "30px", verticalAlign: "middle", marginTop: "5px", marginBottom: "5px", ontSize: "12px", borderRadius: "0"}}/>
            <span className="input-group-text border-0 d-none d-lg-flex" style={{marginTop: "5px", marginBottom: "5px", borderRadius: "0"}}>
              <i className="fas fa-search" style={{maxHeight: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><FiSearch/></i></span>
            </form>
          ): (
              // <span className="input-group-text border-0 d-none d-lg-flex" style={{marginTop: "5px", borderRadius: "0"}}>
              //   <i className="fas fa-search" style={{maxHeight: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><FiSearch/></i></span>
                // <FiSearch/>
                <div></div>
          )}
     


        {button ? (
          <div className="d-flex align-items-center" style={{right: "0px", position: "absolute"}}>
          <a className="btn btn-link px-3 me-2" style={{textDecoration: "none", margin: "5px", fontWeight: "bold", borderRadius: "0", height: "36px"}} href="/login">
            Connexion <MdFingerprint/>
          </a>
          <a type="button" className="btn btn-primary me-3" style={{padding: "3px", borderRadius: "0", fontWeight: "bold", height: "30px"}} href="/register">
            Inscription
          </a>
          </div>
        ) : (
          <div className="d-flex align-items-center" style={{right: "0px", position: "absolute"}}>
          <a className="btn btn-link px-3 me-2" style={{textDecoration: "none", margin: "5px", borderRadius: "0", fontSize: "10px"}} href="/login">
          Connexion
        </a>
        <a type="button" className="btn btn-primary me-3 button-class" style={{padding: "3px", borderRadius: "0", fontSize: "10px"}} href="/register">
          Inscription
        </a>
        </div>
        )}

  </div>
</nav>
    
  );
}