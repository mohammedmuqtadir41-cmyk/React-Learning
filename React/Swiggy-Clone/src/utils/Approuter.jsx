import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Top from "../components/Top";
import { useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Header searchText={searchText} setSearchText={setSearchText} />
      {/* <Top /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
