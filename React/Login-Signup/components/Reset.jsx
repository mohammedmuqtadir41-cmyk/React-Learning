import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Reset() {
  

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasLength = password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    if (!/\d/.test(password)) {
      setError("Password must contain at least one number.");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    alert("Password reset successfully!");

    setPassword("");
    setConfirmPassword("");

    navigate("/");
  };

  return (
    <div className="card">
      <h1>Reset Password</h1>

      <p className="subtitle">Create a strong new password.</p>

      <form className="form" onSubmit={handleSubmit}>
        <label>New Password</label>

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span className="eye" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <label>Confirm Password</label>

        <div className="password-box">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <span
            className="eye"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {error && <p className="error">{error}</p>}

        <div className="password-rules">

  {password.length > 0 && (
  <div className="password-rules">

    <p className={hasLength ? "valid" : "invalid"}>
      {hasLength ? "✅" : "❌"} At least 8 characters
    </p>

    <p className={hasUpperCase ? "valid" : "invalid"}>
      {hasUpperCase ? "✅" : "❌"} One uppercase letter
    </p>

    <p className={hasLowerCase ? "valid" : "invalid"}>
      {hasLowerCase ? "✅" : "❌"} One lowercase letter
    </p>

    <p className={hasNumber ? "valid" : "invalid"}>
      {hasNumber ? "✅" : "❌"} One number
    </p>

    <p className={hasSpecial ? "valid" : "invalid"}>
      {hasSpecial ? "✅" : "❌"} One special character
    </p>

  </div>
)}

</div>

        <button type="submit">Reset Password</button>
      </form>

      <p className="bottom-text">
        <span onClick={() => navigate("/")}>Back to Login</span>
      </p>
    </div>
  );
}

export default Reset;
