import "./Loader.css";

function Loader({ message = "Loading..." }) {
  return (
    <div className="loader-container">
      <div className="travel-loader">
        ✈️
      </div>

      <h3>{message}</h3>

      <p>Please wait while we prepare your journey.</p>
    </div>
  );
}

export default Loader;