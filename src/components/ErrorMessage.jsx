import "./ErrorMessage.css";

function ErrorMessage({
  title = "Something went wrong!",
  message = "Please try again later.",
}) {
  return (
    <div className="error-container">
      <div className="error-icon">
        ⚠️
      </div>

      <h2>{title}</h2>

      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;