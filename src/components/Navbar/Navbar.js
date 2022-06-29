import React from "react";
import './Navbar.css';
import {FiSearch} from 'react-icons/fi';
import Logo from './../../logogigasite.png';
import { GrLanguage } from "react-icons/gr";


export default function Navbar() {
  return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container topnav">
   
  <a
          className="btn px-3"
          href="/"
          role="button"
          ><i className="fab fa-github" style={{display: "flex", justifyContent: "center", alignItems: "center"}}><GrLanguage/></i
        ></a>

    <div className="collapse navbar-collapse" id="navbarButtonsExample">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize: "12px", fontWeight: "bold"}}>
        <li className="nav-item" style={{padding: "3px", margin: "5px", "&:hover": {color: "white"}}}>
          <a className="nav-link list-group-item list-group-item-action list-group-item-light" href="/">À PROPOS</a>
        </li>
        <li className="nav-item" style={{padding: "3px", margin: "5px"}}>
          <a className="nav-link list-group-item list-group-item-action list-group-item-light" href="/">FONCTIONNEMENT</a>
        </li>
        <li className="nav-item" style={{padding: "3px", margin: "5px"}}>
          <a className="nav-link list-group-item list-group-item-action list-group-item-light" href="/">PRODUITS</a>
        </li>
      </ul>
      </div>

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

      <form className="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autoComplete="off"
          type="search"
          className="form-control"
          placeholder="Recherche"
          style={{minWidth: "125px", maxWidth: "200px", maxHeight: "30px", verticalAlign: "middle", marginTop: "5px", fontSize: "12px", borderRadius: "0"}}
        />
        <span className="input-group-text border-0 d-none d-lg-flex" style={{marginTop: "5px", borderRadius: "0"}}
          ><i className="fas fa-search" style={{maxHeight: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><FiSearch/></i
        ></span>
      </form>

      <div className="d-flex align-items-center">
        <a className="btn btn-link px-3 me-2" style={{textDecoration: "none", margin: "5px", fontWeight: "bold", borderRadius: "0"}} href="/login">
          Connexion
        </a>
        <a type="button" className="btn btn-primary me-3 button-class" style={{padding: "3px", borderRadius: "0", fontWeight: "bold", "&:hover": {backgroundColor: "black"}}} href="/register">
          Inscription
        </a>
   
      </div>
  </div>
</nav>
    
  );
}