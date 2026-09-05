import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  addFavorite,
  removeFavorite,
} from "../redux/slices/favoriteSlice";

import "./DestinationCard.css";

function DestinationCard({ destination }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector(
    (state) => state.favorites.favorites
  );

  const isFavorite = favorites.some(
    (item) => item.id === destination.id
  );

  // Open destination details when the card is clicked
  const handleCardClick = () => {
    navigate(`/destinations/${destination.id}`);
  };

  // Add or remove destination from favorites
  const handleFavorite = (event) => {
    // Prevent the card click from running
    event.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavorite(destination.id));
    } else {
      dispatch(addFavorite(destination));
    }
  };

  return (
    <div
      className="destination-card"
      onClick={handleCardClick}
      role="button"
      tabIndex="0"
    >
      <div className="destination-image">
        <img
          src={destination.image}
          alt={destination.name}
        />

        <button
          className={`favorite-icon ${
            isFavorite ? "active" : ""
          }`}
          onClick={handleFavorite}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="destination-content">
        <div className="destination-title">
          <h3>{destination.name}</h3>
          <span>{destination.country}</span>
        </div>

        <p>{destination.description}</p>

        <div className="destination-footer">
          <span className="destination-price">
            ₹{destination.price}
          </span>

          <span className="destination-rating">
            ⭐ {destination.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;