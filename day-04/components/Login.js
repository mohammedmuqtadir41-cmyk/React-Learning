import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Object to store validation errors
    const newErrors = {
      email: "",
      password: "",
    };

    // Email Validation
    if (!email) {
      newErrors.email = "Please enter your email";
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    // Password Validation
    if (!password) {
      newErrors.password = "Please enter your password";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Update error state
    setErrors(newErrors);

    // Stop if there are any errors
    if (newErrors.email || newErrors.password) {
      return;
    }

    // Login Success
    alert("Login Successful!");
    navigate("/login");

    console.log("Email:", email);
    console.log("Password:", password);

    // Clear the form
    setEmail("");
    setPassword("");

    // Clear errors
    setErrors({
      email: "",
      password: "",
    });
  };

  return (
    <div className="card">
      <h1>Welcome Back</h1>
      <p className="subtitle">Login to your account</p>

      <form className="form" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>
      </form>

      <p className="bottom-text">
        Don't have an account?{" "}
        <span onClick={() => navigate("/signup")}>Sign Up</span>
      </p>

      <p className="bottom-text">
        <span onClick={() => navigate("/forgot")}>Forgot Password?</span>
      </p>
    </div>
  );
}

export default Login;
