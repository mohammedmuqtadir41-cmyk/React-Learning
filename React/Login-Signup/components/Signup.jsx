import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const[confirmPassword, setConfirmPassword] = useState("");

const navigate = useNavigate();

const [errors, setErrors] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const handleSignup = (e) => {
  e.preventDefault();

  const newErrors = {
    name: "",
  email: "",
  password: "",
  confirmPassword: "",
  };

  if(!name.trim()){
    newErrors.name = "Please enter your name";
  }
  if(!email){
    newErrors.email = "Please enter your email";
  }else if(!email.includes("@")){
    newErrors.email = "Please enter a valid email";
  }
  if(!password){
    newErrors.password = "Please enter a password";
  }else if(password.length < 8){
    newErrors.password = "Password must be atleast 8 characters";
  }
  if(!confirmPassword){
    newErrors.confirmPassword = "Please confirm your password";
  }else if(password !== confirmPassword){
    newErrors.confirmPassword = "Passwords do not match";
  };

  setErrors(newErrors);

  if(
  newErrors.name ||
  newErrors.email ||
  newErrors.password ||
  newErrors.confirmPassword 
  ) { return; }

  alert("Validation Passed!");
};


  return (
    <div className="card">
      <h1>Create Account</h1>
      <p className="subtitle">Sign up to continue</p>

      <form className="form" onSubmit={handleSignup}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error"> {errors.name}</p>}

        <label>Email Address</label>
        <input
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="********"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit">
          Create Account
        </button>
      </form>

      <p className="bottom-text">
        Already have an account?
        <span onClick={() => navigate("/")}>
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;
