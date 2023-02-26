import React from 'react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
                 <Link href="/"> 
                    <h3 className="nav-link uwu">STORE</h3>
                </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item left">
                <Link href="/about">
                    <p className="nav-link">About</p>
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
}

export default Navbar;
