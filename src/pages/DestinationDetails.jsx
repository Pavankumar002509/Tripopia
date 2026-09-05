// Import useParams and Link from React Router DOM
import { useParams, Link } from "react-router-dom";

// Import destination data
import destinations from "../data/destinations";

// Import Destination Details CSS
import "./DestinationDetails.css";

function DestinationDetails() {

  // Get the destination ID from the URL
  const { id } = useParams();

  // Find the destination that matches the URL ID
  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  // Display a message if the destination does not exist
  if (!destination) {
    return (
      <div className="destination-not-found">

        {/* Display error message */}
        <h1>Destination Not Found 😔</h1>

        {/* Navigate back to destinations page */}
        <Link to="/destinations">
          Back to Destinations
        </Link>

      </div>
    );
  }

  return (
    <div className="destination-details-page">

      {/* Destination hero section */}
      <section
        className="details-hero"
        style={{
          backgroundImage: `linear-gradient(
            rgba(10, 20, 40, 0.7),
            rgba(10, 20, 40, 0.8)
          ), url(${destination.image})`,
        }}
      >

        {/* Hero content */}
        <div className="details-hero-content">

          {/* Destination category */}
          <span className="details-category">
            {destination.category}
          </span>

          {/* Destination name */}
          <h1>{destination.name}</h1>

          {/* Destination location */}
          <p>
            📍 {destination.country}
          </p>

          {/* Destination rating */}
          <div className="details-rating">
            ⭐ {destination.rating} Rating
          </div>

        </div>

      </section>

      {/* Main destination information */}
      <section className="details-content">

        {/* Left information section */}
        <div className="details-main">

          {/* About destination */}
          <div className="details-section">

            <h2>About {destination.name}</h2>

            <p>
              {destination.description}
            </p>

          </div>

          {/* Highlights */}
          <div className="details-section">

            <h2>Trip Highlights</h2>

            <div className="highlights-grid">

              <div className="highlight-card">
                <span>🌍</span>
                <p>Beautiful Locations</p>
              </div>

              <div className="highlight-card">
                <span>🏨</span>
                <p>Comfortable Stay</p>
              </div>

              <div className="highlight-card">
                <span>🍽️</span>
                <p>Great Food</p>
              </div>

              <div className="highlight-card">
                <span>🎯</span>
                <p>Exciting Activities</p>
              </div>

            </div>

          </div>

        </div>

        {/* Booking information card */}
        <aside className="booking-info-card">

          {/* Card heading */}
          <h3>Plan Your Trip</h3>

          {/* Travel duration */}
          <div className="booking-detail">
            <span>🗓️ Duration</span>
            <strong>{destination.duration}</strong>
          </div>

          {/* Rating */}
          <div className="booking-detail">
            <span>⭐ Rating</span>
            <strong>{destination.rating} / 5</strong>
          </div>

          {/* Starting price */}
          <div className="booking-price">

            <span>Starting from</span>

            <h2>
              ₹{destination.price.toLocaleString()}
            </h2>

          </div>

          {/* Book now button */}
          <Link
            to="/bookings"
            className="book-now-btn"
          >
            Book This Trip →
          </Link>

          {/* Back button */}
          <Link
            to="/destinations"
            className="back-destinations-btn"
          >
            ← Back to Destinations
          </Link>

        </aside>

      </section>

    </div>
  );
}

export default DestinationDetails;