import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid a">
        <Link href="/" className="biger">
          {" "}
          <h1 className="nav-link ">STORE</h1>
        </Link>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav der">
            <li className="nav-item">
              <Link href="/products" className="links">
                {" "}
                <p className="nav-link">Products</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="links">
                {" "}
                <p className="nav-link">About</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="links">
                {" "}
                <p className="nav-link">contact</p>
              </Link>
            </li>
            <li className="nav-item boton1">
              <Link href="/">
                {" "}
                <button className="boton"> Cart</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
