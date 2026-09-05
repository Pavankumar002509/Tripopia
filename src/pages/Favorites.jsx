import { useDispatch, useSelector } from "react-redux";

import {
  removeFavorite,
  clearFavorites,
} from "../redux/slices/favoriteSlice";

import "./Favorites.css";

function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.favorites
  );

  return (
    <div className="favorites-page">

      <section className="favorites-hero">
        <p>SAVED DESTINATIONS</p>

        <h1>Your Favorite Places</h1>

        <span>
          Keep track of the destinations you love and plan your next adventure.
        </span>
      </section>

      <section className="favorites-container">

        <div className="favorites-header">

          <div>
            <p>MY COLLECTION</p>

            <h2>Saved Destinations</h2>
          </div>

          {favorites.length > 0 && (
            <button
              className="clear-btn"
              onClick={() => dispatch(clearFavorites())}
            >
              Clear All
            </button>
          )}

        </div>

        {favorites.length > 0 ? (

          <div className="favorites-grid">

            {favorites.map((place) => (

              <div
                className="favorite-card"
                key={place.id}
              >

                <img
                  src={place.image}
                  alt={place.name}
                />

                <div className="favorite-content">

                  <h3>{place.name}</h3>

                  <p>{place.country}</p>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      dispatch(removeFavorite(place.id))
                    }
                  >
                    Remove ❤️
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="empty-favorites">

            <span>💙</span>

            <h2>No Favorites Yet</h2>

            <p>
              Start exploring destinations and save your favorite places here!
            </p>

          </div>

        )}

      </section>

    </div>
  );
}

export default Favorites;