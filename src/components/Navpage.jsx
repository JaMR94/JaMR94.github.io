import React from 'react';
import Link from 'next/link'
/*import SearchBar from './SearchBar';*/

const Navpage = () => {
    return (
        <div>
            <div className="sectionavb">
    <header className="headernav">
    <Link href="/" className="logonav">Store</Link>
  
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  {/* <SearchBar/> */}
  <ul class="menu">
    <li><Link href="/Productos" className="mt-4">PRODUCTS</Link></li> 
    <li><Link href="/aboutpage" className="mt-4">ABOUT</Link></li> 
    <li><Link href="/Contact_us" className="mt-4">CONTACT US</Link></li>
    <li><Link href="/LoginPage" className="mt-4">LOGIN</Link></li>
    <li><button className="btn btn-lg btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">CART</button></li>
  </ul>
</header>
</div>
        </div>
    );
}

export default Navpage;
