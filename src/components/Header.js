import React from 'react';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">Deadweight Fit</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/pages/shop.html">Shop</a></li>
          <li><a href="/pages/about.html">About</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
