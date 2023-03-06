import React, { useState } from "react";
import Link from "next/link";
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

        <div className= {`nav ${ menu ? 'isActive':''}`}>
          <ul className="navbar-nav der">
            <li className="nav-item">
              <Link href="/" className="links">
                {" "}
                <a className="nav-link">Products</a>
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
          </ul>
        </div>

        <button>
        <svg className="Header-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
       
        </button>
        <button 
        onClick={toggleMenu}
        className="Header-button">
        <svg className="Header-svg1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
