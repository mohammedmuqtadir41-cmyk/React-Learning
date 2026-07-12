import { useState } from "react";

const Header = ({searchText,setSearchText}) => {
  return (
    <header className="header">
      <div id="logo">
        <img
          src="https://ik.imagekit.io/pfq9vdvnxo/beauty-chef-woman-restaurant-logo-4d15fa32-15ce-4e52-9573-d4dcd73ddc4c.jpg"
          alt="Logo"
        />
      </div>

      <div id="search-bar">
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search for restaurants, cuisines..."
        />
      </div>
          
      
      <div className="nav-items">
        <ul>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign in</li>
          <li>Help</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;