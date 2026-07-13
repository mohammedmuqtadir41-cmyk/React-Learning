const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>🍔 Food Stack</h2>
          <p>
            Discover your favorite restaurants, explore delicious meals,
            and enjoy a seamless food ordering experience.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Cart</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>Email: support@foodstack.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Available: 24/7</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Food Stack. Built with ❤️ by Mohammed Muqthadir Ahmed.
        </p>
      </div>
    </footer>
  );
};

export default Footer;