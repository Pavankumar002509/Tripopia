import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../redux/slices/favoriteSlice";

import "./DestinationCard.css";

function DestinationCard({ destination }) {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.favorites
  );

  const isFavorite = favorites.some(
    (item) => item.id === destination.id
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(destination.id));
    } else {
      dispatch(addFavorite(destination));
    }
  };

  return (
    <div className="destination-card">

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