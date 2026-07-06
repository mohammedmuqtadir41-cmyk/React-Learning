import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div id="logo">
        <img src="https://www.google.com/imgres?q=food%20delivery%20logos&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F0b%2F33%2F87%2F0b338706f3c86a9c676a32eec4805c71.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fhealthy-food-delivery-by-qilart-on-creativemarket--33354853477559329%2F&docid=KUOuwlJXBkrSnM&tbnid=N675XsJyNbc4NM&vet=12ahUKEwiTwsrmyr6VAxVZna8BHWrNOSsQnPAOegQIcBAA..i&w=736&h=490&hcb=2&ved=2ahUKEwiTwsrmyr6VAxVZna8BHWrNOSsQnPAOegQIcBAA" alt="Logo" />
      </div>
      
      <div id="search-bar">
        <input placeholder="what would you like" />
      </div>
      
      <div className="nav-items">
        <ul>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Header />);
