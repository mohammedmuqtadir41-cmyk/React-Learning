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
      setError("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setEmail("");
    navigate("/reset");
  };

  return (
    <div className="card">
      <h1>Forgot Password</h1>

      <p className="subtitle">
        Enter your registered email to reset your password.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <label>Email</label>

        <input
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">
          Send Reset Link
        </button>
      </form>

      <p className="bottom-text">
        Remember your password?{" "}
        <span onClick={() => navigate("/")}>
          Back to Login
        </span>
      </p>
    </div>
  );
}

export default Forgot;