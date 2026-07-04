import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forgot() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email) {
      setError("Please enter your Email");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid Email");
      return;
    }

    alert("Password reset link sent successfully");

    setEmail("");

    navigate("/");
  };

  return (
    <div className="card">
      <h1>Forgot Password</h1>
      <p className="subtitle">Enter your email to reset your password.</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="error"> {error}</p>}
        <button type="submit">Send Reset Link</button>
      </form>

      <p className="bottom-text">
        <span onClick={() => navigate("/")}>Back to Login</span>
      </p>
    </div>
  );
}

export default Forgot;
