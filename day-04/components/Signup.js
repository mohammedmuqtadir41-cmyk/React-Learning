function Signup() {
  return (
    <div className="card">
      <h1>Create Account</h1>
      <p className="subtitle">Sign up to continue</p>

      <form className="form">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="john@example.com"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="********"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="********"
        />

        <button type="submit">
          Create Account
        </button>
      </form>

      <p className="bottom-text">
        Already have an account?
        <span onClick={() => setPage("login")}>
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;
