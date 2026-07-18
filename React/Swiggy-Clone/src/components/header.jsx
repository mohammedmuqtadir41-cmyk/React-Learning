import { useContext, useState } from "react";
import { Link } from "react-router";
import { LogoURL } from "../Utils/constants";
import UserContext from "../Utils/UserContext";

const Header = ({ searchText, setSearchText }) => {
  const data = useContext(UserContext);
  console.log(data);
  
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
          <li><button>Top Rated Restaurants</button></li>
          <li>{data.name}</li>
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
