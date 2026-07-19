import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Top from "../components/Top";
import { useState, useEffect, useContext } from "react";
import HotelListContext from "./HotelListContext";

const App = () => {

  const [hotelList, setHotelList] = useState([]);
  const [allItems, setAllItems] = useState([]);




  return (
    <div>
      <HotelListContext.Provider value={{ hotelList, setHotelList, allItems, setAllItems }}>
        <Header />
        {/* <Top /> */}
        <Outlet />
        <Footer />
      </HotelListContext.Provider>
    </div>
  );
};

export default App;
