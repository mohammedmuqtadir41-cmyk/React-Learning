import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Top from "../components/Top";
import { useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";

const App = () => {
  const data = useContext(UserContext);
  console.log("App rendered");

  // const [searchText, setSearchText] = useState("");
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [hotelList, setHotelList] = useState([]);

  // const data = useContext(UserContext);

  useEffect(() => {
    const randomTrue = Math.random() < 0.1;
    console.log("Random:", randomTrue);

    const LogginedUser = {
      userName: "Muqthadir Ahmed",
      email: "ahmedmuqtadir097@gmail.com",
    };

    const GuestUser = {
      userName: "Guest",
      email: "guest@xyz.com",
    };

    if (!randomTrue) {
      console.log(GuestUser.userName);
      setUserName(GuestUser.userName);
      setEmail(GuestUser.email);
      return;
    } else {
      setUserName(LogginedUser.userName);
      setEmail(LogginedUser.email);
    }
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ hotelList, setHotelList }}>
        <Header />
        {/* <Top /> */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
