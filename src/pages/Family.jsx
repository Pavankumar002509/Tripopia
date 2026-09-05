import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Family.css";

function Family() {
  const navigate = useNavigate();

  const [selectedTrip, setSelectedTrip] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Kerala Family Retreat",
      duration: "6 Days / 5 Nights",
      price: "₹29,999",
      activities: "Backwaters • Houseboat • Sightseeing",
      image: "🌴",
      description:
        "Enjoy a relaxing family vacation surrounded by Kerala's beautiful backwaters, peaceful beaches, scenic landscapes, and unforgettable sightseeing experiences.",
    },
    {
      id: 2,
      name: "Dubai Family Experience",
      duration: "5 Days / 4 Nights",
      price: "₹54,999",
      activities: "Desert Safari • City Tour • Theme Parks",
      image: "🏙️",
      description:
        "Experience an exciting family holiday in Dubai with a desert safari, city sightseeing, famous attractions, entertainment, and amazing theme parks.",
    },
    {
      id: 3,
      name: "Jaipur Heritage Tour",
      duration: "4 Days / 3 Nights",
      price: "₹21,999",
      activities: "Forts • Palaces • Local Markets",
      image: "🏰",
      description:
        "Discover the royal beauty of Jaipur by exploring magnificent forts, historic palaces, colorful markets, traditional culture, and local attractions.",
    },
  ];

  const handleBooking = () => {
    navigate("/bookings", {
      state: {
        selectedPackage: selectedTrip,
      },
    });
  };

  return (
    <div className="category-page">

      <div className="category-heading">
        <p>MEMORIES FOR EVERYONE</p>
        <h2>Family Packages</h2>
      </div>

      <div className="package-card-grid">

        {packages.map((trip) => (
          <div className="package-card" key={trip.id}>

            <div className="package-emoji">
              {trip.image}
            </div>

            <div className="package-card-content">

              <h3>{trip.name}</h3>

              <p>
                🗓️ {trip.duration}
              </p>

              <p>
                🎯 {trip.activities}
              </p>

              <div className="package-price-row">

                <strong>{trip.price}</strong>

                <button onClick={() => setSelectedTrip(trip)}>
                  Explore →
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {selectedTrip && (
        <div
          className="family-modal-overlay"
          onClick={() => setSelectedTrip(null)}
        >

          <div
            className="family-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="family-close-btn"
              onClick={() => setSelectedTrip(null)}
            >
              ✕
            </button>

            <div className="family-modal-emoji">
              {selectedTrip.image}
            </div>

            <h2>{selectedTrip.name}</h2>

            <p>
              <strong>🗓️ Duration:</strong>{" "}
              {selectedTrip.duration}
            </p>

            <p>
              <strong>🎯 Activities:</strong>{" "}
              {selectedTrip.activities}
            </p>

            <p className="family-description">
              {selectedTrip.description}
            </p>

            <div className="family-modal-bottom">

              <h3>{selectedTrip.price}</h3>

              <button onClick={handleBooking}>
                Book This Trip →
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Family;