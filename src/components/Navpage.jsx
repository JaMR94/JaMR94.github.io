import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Navpage = () => {
    return (
        <div>
            <div className="sectionavb">
    <header className="headernav">
      <a href="/"className="logonav">Store</a>
  
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <SearchBar/>
  <ul class="menu">
    <li><a href="/Productos" className="mt-4">PRODUCTS</a></li>
    <li><a href="/aboutpage" className="mt-4">ABOUT</a></li>
    <li><a href="/Contact_us" className="mt-4">CONTACT US</a></li>
    <li><a href="/LoginPage" className="mt-4">LOGIN</a></li>
    <li><button className="btn btn-lg btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">CART 0</button></li>
  </ul>
</header>
</div>
        </div>
    );
}

export default Navpage;
