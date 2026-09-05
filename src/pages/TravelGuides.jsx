import useFetch from "../hooks/useFetch";
import "./TravelGuides.css";

function TravelGuides() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=9"
  );

  const travelGuides = [
    {
      category: "Planning",
      icon: "🗺️",
      title: "How to Plan the Perfect Trip",
      description:
        "Choose your destination, decide your travel dates, prepare a realistic budget, and create a simple itinerary before booking your trip.",
    },
    {
      category: "Budget",
      icon: "💰",
      title: "Smart Travel Budget Tips",
      description:
        "Set a daily spending limit, compare transportation and accommodation prices, and keep some extra money available for emergencies.",
    },
    {
      category: "Packing",
      icon: "🧳",
      title: "Pack Smart and Travel Light",
      description:
        "Pack only essential clothing, important documents, chargers, medicines, and items suitable for the weather at your destination.",
    },
    {
      category: "Safety",
      icon: "🛡️",
      title: "Stay Safe While Travelling",
      description:
        "Keep your important documents secure, avoid unsafe areas, share your travel plans with trusted people, and know local emergency contacts.",
    },
    {
      category: "Transport",
      icon: "🚆",
      title: "Choose the Right Transportation",
      description:
        "Compare flights, trains, buses, and local transportation options to find the most convenient and affordable way to travel.",
    },
    {
      category: "Accommodation",
      icon: "🏨",
      title: "How to Choose a Good Hotel",
      description:
        "Check the location, reviews, facilities, safety, and cancellation policy before choosing accommodation for your journey.",
    },
    {
      category: "Documents",
      icon: "📄",
      title: "Keep Your Travel Documents Ready",
      description:
        "Check passport validity, visa requirements, tickets, hotel confirmations, and keep digital copies of important documents.",
    },
    {
      category: "Weather",
      icon: "🌦️",
      title: "Check the Weather Before You Go",
      description:
        "Always check the expected weather and seasonal conditions so you can pack suitable clothing and plan activities properly.",
    },
    {
      category: "Experience",
      icon: "📸",
      title: "Make Your Journey Memorable",
      description:
        "Try local food, respect local culture, explore responsibly, take photographs, and enjoy experiences beyond popular tourist spots.",
    },
  ];

  if (loading) {
    return (
      <div className="guides-status">
        <div className="loader"></div>
        <h2>Loading Travel Guides...</h2>
        <p>Please wait while we prepare useful travel information.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="guides-status error">
        <h2>Unable to Load Travel Guides</h2>
        <p>Please check your internet connection and try again.</p>
      </div>
    );
  }

  return (
    <div className="guides-page">
      <section className="guides-hero">
        <p>TRAVEL SMART</p>

        <h1>Travel Guides & Tips</h1>

        <span>
          Everything you need to know to plan smarter,
          travel safely, and enjoy every journey with Tripopia.
        </span>
      </section>

      <section className="guides-container">
        <div className="guides-heading">
          <p>TRAVEL ESSENTIALS</p>
          <h2>Everything You Need for Your Journey</h2>
        </div>

        <div className="guides-grid">
          {posts.map((post, index) => {
            const guide = travelGuides[index];

            return (
              <article className="guide-card" key={post.id}>
                <div className="guide-number">
                  {guide.icon}
                </div>

                <div className="guide-content">
                  <span className="guide-tag">
                    {guide.category}
                  </span>

                  <h3>{guide.title}</h3>

                  <p>{guide.description}</p>

                  <button className="read-btn">
                    Learn More →
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default TravelGuides;