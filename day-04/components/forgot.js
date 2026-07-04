function Forgot({ setPage }) {
  return (
    <div className="card">
      <h1>Forgot Password</h1>
      <p className="subtitle">Enter your email to reset your password.</p>
      <form className="form">
        <label>Email</label>

        <input type="email" placeholder="john@example.com" />
        <button type="submit">Send Reset Link</button>
      </form>

      <p className="bottom-text">
        <span onClick={() => setPage("login")}>Back to Login</span>
      </p>
    </div>
  );
}

export default Forgot;
