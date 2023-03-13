import React from 'react';

const Navpage = () => {
    return (
        <div>
            <div className="sectionavb">
    <header className="headernav">
  <a href="/" className="logonav">Store</a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul class="menu">
    <li><a href="#" className="mt-4">PRODUCTS</a></li>
    <li><a href="#" className="mt-4">ABOUT</a></li>
    <li><a href="#" className="mt-4">CONTACT US</a></li>
    <li><a href="#" className="mt-4">LOGIN</a></li>
    <li><button className="btn btn-lg btn-dark">CART 0</button></li>
  </ul>
</header>
</div>
        </div>
    );
}

export default Navpage;
