// Import package CSS
import "./PackageCategory.css";

function Family() {
  // Family package data
  const packages = [
    {
      id: 1,
      name: "Kerala Family Retreat",
      duration: "6 Days / 5 Nights",
      price: "₹29,999",
      activities: "Backwaters • Houseboat • Sightseeing",
      image: "🌴",
    },
    {
      id: 2,
      name: "Dubai Family Experience",
      duration: "5 Days / 4 Nights",
      price: "₹54,999",
      activities: "Desert Safari • City Tour • Theme Parks",
      image: "🏙️",
    },
    {
      id: 3,
      name: "Jaipur Heritage Tour",
      duration: "4 Days / 3 Nights",
      price: "₹21,999",
      activities: "Forts • Palaces • Local Markets",
      image: "🏰",
    },
  ];

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

              <p>🗓️ {trip.duration}</p>

              <p>🎯 {trip.activities}</p>

              <div className="package-price-row">

                <strong>{trip.price}</strong>

                <button>Explore →</button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Family;