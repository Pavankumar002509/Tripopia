import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <p>ABOUT TRIPOPIA</p>

        <h1>Your Journey, Our Passion</h1>

        <span>
          Tripopia helps travelers discover amazing destinations,
          unforgettable experiences, and travel packages designed
          for every kind of explorer.
        </span>
      </section>

      <section className="about-content">

        <div className="about-intro">

          <div className="about-text">
            <p>WHO WE ARE</p>

            <h2>Making Travel Simple & Memorable</h2>

            <span>
              At Tripopia, we believe that every journey should be
              exciting, comfortable, and unforgettable.
              <br /><br />
              Whether you are planning a family vacation, a romantic
              honeymoon, or an exciting adventure, Tripopia is here
              to help you discover your next perfect journey.
            </span>
          </div>

          <div className="about-image"></div>

        </div>


        <div className="about-values">

          <p>WHY CHOOSE US</p>

          <h2>What Makes Tripopia Different?</h2>

          <div className="values-grid">

            <Link
              to="/destinations"
              className="value-card"
            >
              <div className="value-icon">🌍</div>

              <h3>Best Destinations</h3>

              <p>
                Discover carefully selected destinations from around
                the world and find your next favorite place.
              </p>

              <span className="card-link">
                Explore Destinations →
              </span>
            </Link>


            <Link
              to="/packages"
              className="value-card"
            >
              <div className="value-icon">💰</div>

              <h3>Great Travel Experiences</h3>

              <p>
                Explore travel packages designed to provide memorable
                experiences at affordable prices.
              </p>

              <span className="card-link">
                View Packages →
              </span>
            </Link>


            <Link
              to="/contact"
              className="value-card"
            >
              <div className="value-icon">🛡️</div>

              <h3>Trusted Travel</h3>

              <p>
                Travel with confidence and discover reliable travel
                experiences designed for your comfort and enjoyment.
              </p>

              <span className="card-link">
                Contact Us →
              </span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;