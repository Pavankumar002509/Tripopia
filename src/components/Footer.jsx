import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Tripopia</h2>

          <p>
            Discover amazing destinations and create unforgettable
            travel memories with us.
          </p>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h3>Explore</h3>

            <Link to="/destinations">Destinations</Link>

            <Link to="/packages">Packages</Link>

            <Link to="/travel-guides">Travel Guides</Link>
          </div>

          <div className="footer-column">
            <h3>Support</h3>

            <Link to="/contact">Contact Us</Link>

            <Link to="/bookings">Bookings</Link>

            <Link to="/profile">Profile</Link>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Tripopia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;