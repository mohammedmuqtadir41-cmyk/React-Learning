import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import Reset from "./components/Reset";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;
// import Login from "./components/Login";

// function App() {
//   return <Login />;
// }

// export default App;
