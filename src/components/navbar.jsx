import React, { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [ menu ,setMenu ] = useState ( false)
    const toggleMenu = () => {
      setMenu ( !menu )
    }
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid a">
        <Link href="/" className="biger">
          {" "}
          <h1 className="Header-h1">STORE</h1>
        </Link>
        <button 
        onClick={toggleMenu}
        className="Header-button">
        <svg className="Header-svg1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>
      
        <div className= {`nav ${ menu ? 'isActive':''}`}>
          <ul className="navbar-nav der">
            <li className="nav-item">
              <SearchBar/>
            </li>
            <li className="nav-item">
              <Link href="/" className="links">
                {" "}
                <a className="nav-link">Products </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="links">
                {" "}
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="links">
                {" "}
                <a className="nav-link">contact</a>
              </Link>
            </li> 
            <li className="nav-item">
              <Link href="/">
                {" "}
                <button className="Header-svg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"> Cart</button>
              </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;