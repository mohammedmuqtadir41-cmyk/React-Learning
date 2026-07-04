import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Forgot from "./components/Forgot";

function App() {
  const [page, setPage] = useState("login");
  
  return (
    <div className="container">
      {page === "login" && <Login setPage={setPage} />}

      {page === "signup" && <Signup setPage={setPage} />}

      {page === "forgot" && <Forgot setPage={setPage} />}
    </div>
  );
}

export default App;
