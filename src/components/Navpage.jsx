import React from 'react';
import Link from 'next/link';

const Navpage = () => {
    return (
        <div>
            <div className="sectionavb">
    <header className="headernav">
      <Link href="/"><p className="logonav">Store</p></Link>
  
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul class="menu">
    <Link href="/Productos"> <li><p className="mt-4">PRODUCTS</p></li></Link>
    <Link href="/aboutpage"> <li><p className="mt-4">ABOUT</p></li></Link>
    <Link href="Contact_us"> <li><p className="mt-4">CONTACT US</p></li></Link>
    <Link href="LoginPage"> <li><p className="mt-4">LOGIN</p></li></Link>
    <li><button className="btn btn-lg btn-dark">CART 0</button></li>
  </ul>
</header>
</div>
        </div>
    );
}

export default Navpage;
