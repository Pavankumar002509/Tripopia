import { Link } from "react-router-dom";

import "./Hero.css";

function Hero({
  subtitle = "DISCOVER THE WORLD",
  title = "Your Next Adventure",
  highlight = "Starts Here.",
  description = "Discover amazing destinations and unforgettable travel experiences.",
}) {
  return (
    <section className="reusable-hero">

      <div className="reusable-hero-overlay"></div>

      <div className="reusable-hero-content">

        <p className="reusable-hero-subtitle">
          ✈️ {subtitle}
        </p>

        <h1>
          {title} <span>{highlight}</span>
        </h1>

        <p className="reusable-hero-description">
          {description}
        </p>

        <div className="reusable-hero-buttons">

          <Link
            to="/destinations"
            className="hero-primary-btn"
          >
            Explore Destinations
          </Link>

          <Link
            to="/packages"
            className="hero-secondary-btn"
          >
            View Packages
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;