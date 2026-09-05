import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="logo">
          ✈️ Tripopia
        </NavLink>

        <div className="nav-links">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/destinations">
            Destinations
          </NavLink>

          <NavLink to="/packages">
            Packages
          </NavLink>

          <NavLink to="/travel-guides">
            Travel Guides
          </NavLink>

          <NavLink to="/bookings">
            Bookings
          </NavLink>

          <NavLink to="/favorites">
            Favorites ❤️
          </NavLink>

          <NavLink to="/profile">
            Profile
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;