// Import NavLink and Outlet for nested routing
import { NavLink, Outlet } from "react-router-dom";

// Import Packages page CSS
import "./Packages.css";

function Packages() {
  return (
    <div className="packages-page">

      {/* Packages hero section */}
      <section className="packages-hero">

        <p>TRAVEL YOUR WAY</p>

        <h1>Find Your Perfect Package</h1>

        <span>
          Choose from exciting adventure trips, memorable family vacations,
          and romantic honeymoon experiences.
        </span>

      </section>

      {/* Package category navigation */}
      <section className="packages-navigation-section">

        <div className="package-tabs">

          {/* Adventure nested route */}
          <NavLink
            to="adventure"
            className={({ isActive }) =>
              isActive ? "package-tab active-tab" : "package-tab"
            }
          >
            🏔️ Adventure
          </NavLink>

          {/* Family nested route */}
          <NavLink
            to="family"
            className={({ isActive }) =>
              isActive ? "package-tab active-tab" : "package-tab"
            }
          >
            👨‍👩‍👧‍👦 Family
          </NavLink>

          {/* Honeymoon nested route */}
          <NavLink
            to="honeymoon"
            className={({ isActive }) =>
              isActive ? "package-tab active-tab" : "package-tab"
            }
          >
            💕 Honeymoon
          </NavLink>

        </div>

        {/* Outlet displays the selected nested route */}
        <Outlet />

      </section>

    </div>
  );
}

export default Packages;