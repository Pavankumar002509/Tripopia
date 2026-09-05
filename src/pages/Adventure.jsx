// Import package CSS
import "./PackageCategory.css";

function Adventure() {
  // Adventure package data
  const packages = [
    {
      id: 1,
      name: "Manali Adventure Escape",
      duration: "5 Days / 4 Nights",
      price: "₹24,999",
      activities: "Trekking • Paragliding • Camping",
      image: "🏔️",
    },
    {
      id: 2,
      name: "Goa Water Adventure",
      duration: "4 Days / 3 Nights",
      price: "₹19,999",
      activities: "Scuba Diving • Parasailing • Jet Ski",
      image: "🌊",
    },
    {
      id: 3,
      name: "Himalayan Explorer",
      duration: "7 Days / 6 Nights",
      price: "₹34,999",
      activities: "Trekking • Mountain Camping • Hiking",
      image: "⛰️",
    },
  ];

  return (
    <div className="category-page">

      {/* Category heading */}
      <div className="category-heading">
        <p>FOR THE THRILL SEEKERS</p>
        <h2>Adventure Packages</h2>
      </div>

      {/* Package list */}
      <div className="package-card-grid">

        {/* List rendering */}
        {packages.map((trip) => (
          <div className="package-card" key={trip.id}>

            {/* Package visual */}
            <div className="package-emoji">
              {trip.image}
            </div>

            {/* Package information */}
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

export default Adventure;