import "./page.css";

const SignIn = () => {
  return (
    <div className="page">
      <div className="page-card">
        <h1>Welcome Back</h1>

        <p>
          Sign in to your Food Stack account to access your order
          history, saved addresses, favorite restaurants, and a
          personalized food ordering experience.
        </p>

        <p>
          Stay connected to enjoy faster checkout, exclusive offers,
          and seamless order tracking—all in one place.
        </p>

        <button>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;