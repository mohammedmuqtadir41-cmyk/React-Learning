import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Header from "./src/components/header";
import Top from "./src/components/Top";
import Body from "./src/components/body";
import Footer from "./src/components/footer";









const App = () => {
  return (
    <div className="container">
      <Header />
      <Top />  
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);