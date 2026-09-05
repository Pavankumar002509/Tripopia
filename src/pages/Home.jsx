// Import Link for navigation
import { Link } from "react-router-dom";

// Import Home page CSS
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Hero section */}
      <section className="hero-section">

        {/* Dark overlay for better text visibility */}
        <div className="hero-overlay"></div>

        {/* Hero content */}
        <div className="hero-content">

          {/* Small heading */}
          <p className="hero-subtitle">
            ✈️ DISCOVER THE WORLD WITH TRIPOPIA
          </p>

          {/* Main heading */}
          <h1>
            Your Next Adventure <span>Starts Here.</span>
          </h1>

          {/* Hero description */}
          <p className="hero-description">
            Discover breathtaking destinations, unforgettable experiences,
            and travel packages designed for every kind of explorer.
          </p>

          {/* Hero buttons */}
          <div className="hero-buttons">

            {/* Explore destinations button */}
            <Link to="/destinations" className="primary-btn">
              Explore Destinations
            </Link>

            {/* Explore packages button */}
            <Link to="/packages" className="secondary-btn">
              View Packages
            </Link>

          </div>

        </div>

      </section>

      {/* Popular destinations section */}
      <section className="popular-section">

        {/* Section heading */}
        <div className="section-heading">
          <p>EXPLORE THE WORLD</p>
          <h2>Popular Destinations</h2>
          <span>
            Discover amazing places and create unforgettable memories.
          </span>
        </div>

        {/* Destination cards */}
        <div className="destination-preview">

          <div className="preview-card">
            <div className="preview-image goa-image"></div>
            <div className="preview-content">
              <h3>Goa</h3>
              <p>India</p>
              <Link to="/destinations">Explore →</Link>
            </div>
          </div>

          <div className="preview-card">
            <div className="preview-image bali-image"></div>
            <div className="preview-content">
              <h3>Bali</h3>
              <p>Indonesia</p>
              <Link to="/destinations">Explore →</Link>
            </div>
          </div>

          <div className="preview-card">
            <div className="preview-image dubai-image"></div>
            <div className="preview-content">
              <h3>Dubai</h3>
              <p>United Arab Emirates</p>
              <Link to="/destinations">Explore →</Link>
            </div>
          </div>

        </div>

      </section>

      {/* Why choose us section */}
      <section className="features-section">

        <div className="section-heading">
          <p>WHY TRIPOPIA?</p>
          <h2>Travel Better With Us</h2>
        </div>

        {/* Features */}
        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Best Destinations</h3>
            <p>
              Explore handpicked destinations across the world.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Best Price</h3>
            <p>
              Get amazing travel experiences at affordable prices.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Trusted Travel</h3>
            <p>
              Travel confidently with reliable packages and services.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>24/7 Support</h3>
            <p>
              Our team is always ready to help you during your journey.
            </p>
          </div>

        </div>

      </section>

      {/* Call to action section */}
      <section className="cta-section">

        <div className="cta-content">

          <p>READY FOR YOUR NEXT JOURNEY?</p>

          <h2>
            The World Is Waiting For You
          </h2>

          <span>
            Start exploring destinations and find your perfect travel experience.
          </span>

          <Link to="/destinations" className="cta-btn">
            Start Exploring →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;