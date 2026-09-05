import { useNavigate } from "react-router-dom";
import "./PackageCategory.css";

function Adventure() {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      name: "Manali Adventure Escape",
      location: "Manali, Himachal Pradesh",
      duration: "5 Days / 4 Nights",
      price: "₹24,999",
      activities: ["Trekking", "Paragliding", "Camping"],
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      name: "Goa Water Adventure",
      location: "Goa, India",
      duration: "4 Days / 3 Nights",
      price: "₹19,999",
      activities: ["Scuba Diving", "Parasailing", "Jet Ski"],
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      name: "Himalayan Explorer",
      location: "Himalayas, India",
      duration: "7 Days / 6 Nights",
      price: "₹34,999",
      activities: ["Trekking", "Camping", "Hiking"],
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const handleExplore = (trip) => {
    alert(`You selected ${trip.name}!`);
    navigate("/contact");
  };

  return (
    <div className="category-page">

      <section className="category-hero">
        <p>FOR THE THRILL SEEKERS</p>

        <h1>Adventure Packages</h1>

        <span>
          Experience breathtaking landscapes, thrilling activities,
          and unforgettable adventures.
        </span>
      </section>

      <section className="package-section">

        <div className="package-section-heading">
          <p>EXPLORE THE WILD</p>

          <h2>Choose Your Next Adventure</h2>

          <span>
            Handpicked adventure experiences designed for travelers
            who love excitement.
          </span>
        </div>

        <div className="package-card-grid">

          {packages.map((trip) => (
            <div className="package-card" key={trip.id}>

              <div className="package-image">
                <img src={trip.image} alt={trip.name} />

                <div className="package-badge">
                  Adventure
                </div>

                <div className="package-duration">
                  🗓 {trip.duration}
                </div>
              </div>

              <div className="package-card-content">

                <p className="package-location">
                  📍 {trip.location}
                </p>

                <h3>{trip.name}</h3>

                <div className="activities">
                  {trip.activities.map((activity) => (
                    <span key={activity}>
                      {activity}
                    </span>
                  ))}
                </div>

                <div className="package-price-row">

                  <div>
                    <small>Starting from</small>
                    <strong>{trip.price}</strong>
                  </div>

                  <button onClick={() => handleExplore(trip)}>
                    Explore →
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Adventure;