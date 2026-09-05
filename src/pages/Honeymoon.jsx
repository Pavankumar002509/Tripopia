import "./Honeymoon.css";

function Honeymoon() {
  const honeymoonPackages = [
    {
      id: 1,
      destination: "Maldives",
      duration: "5 Days / 4 Nights",
      price: "₹89,999",
      image: "🏝️",
    },
    {
      id: 2,
      destination: "Bali",
      duration: "6 Days / 5 Nights",
      price: "₹74,999",
      image: "🌴",
    },
    {
      id: 3,
      destination: "Paris",
      duration: "7 Days / 6 Nights",
      price: "₹1,29,999",
      image: "🗼",
    },
  ];

  return (
    <div className="honeymoon-page">
      <div className="honeymoon-header">
        <p>ROMANTIC ESCAPES</p>

        <h1>Honeymoon Packages ❤️</h1>

        <span>
          Create unforgettable memories with your special someone.
        </span>
      </div>

      <div className="honeymoon-grid">
        {honeymoonPackages.map((item) => (
          <div className="honeymoon-card" key={item.id}>
            <div className="honeymoon-image">
              {item.image}
            </div>

            <div className="honeymoon-content">
              <h2>{item.destination}</h2>

              <p className="honeymoon-duration">
                🗓️ {item.duration}
              </p>

              <span className="honeymoon-price">
                {item.price}
              </span>

              <button>Explore Package →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Honeymoon;