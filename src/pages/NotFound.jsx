import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <div className="notfound-number">404</div>

        <div className="plane">✈️</div>

        <h1>Oops! You’re Lost.</h1>

        <p>
          Looks like this destination doesn't exist in Tripopia.
          Let's get you back to your next adventure!
        </p>

        <Link to="/" className="home-button">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;