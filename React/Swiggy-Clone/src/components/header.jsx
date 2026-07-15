import { useState } from "react";
import { Link } from "react-router";
import { LogoURL } from "../mockData/constants";

const Header = ({ searchText, setSearchText }) => {
  return (
    <header className="header">
      <div id="logo">
        <Link to={"/"}>
        <img src={LogoURL} />
        </Link>
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
      
          <li>
            {" "}
            <Link to={"/offers"}>Offers</Link>
          </li>
          <li>
            {" "}
            <Link to={"/help"}>Help</Link>
          </li>
          <li>
            {" "}
            <Link to={"/signin"}>Sign in</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            {" "}
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
