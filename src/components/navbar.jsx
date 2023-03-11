import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid a">
        <Link href="/" className="biger">
          {" "}
          <h1 className="nav-link ">STORE</h1>
        </Link>
 header/Edgarperez7
        <button 
        onClick={toggleMenu}
        className="Header-button">
        <svg className="Header-svg1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>

        <div className= {`nav ${ menu ? 'isActive':''}`}>

        <div className="collapse navbar-collapse ">
 main
          <ul className="navbar-nav der">

            <li className="nav-item">
                <SearchBar />
            </li>

            <li className="nav-item">
              <Link href="/" className="links">
                {" "}
                <p className="nav-link">Products</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="links">
                {" "}
                <p className="nav-link">About</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="links">
                {" "}
                <p className="nav-link">contact</p>
              </Link>
 header/Edgarperez7
            </li> 
            <li className="nav-item">
              <Link href="/">
                {" "}
                <button className="Header-svg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"> Cart</button>
              </Link>
              </li>

            </li>
            <li className="nav-item boton1">
              <Link href="/">
                {" "}
                <button className="boton" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"> Cart</button>
              </Link>
            </li>
 main
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;