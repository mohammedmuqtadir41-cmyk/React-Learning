import React from "react";
import ReactDOM, {createElement} from "react-dom/client";

function Navbar() {
    return(
  <nav className="navbar">
    <div className="logo">MyApp</div>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/pricing">Pricing</a>
      </li>
    </ul>
    <input type="text" placeholder="Search..." />
    <button>Profile</button>
  </nav>
);}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar />);


