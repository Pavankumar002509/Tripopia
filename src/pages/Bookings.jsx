// Import useReducer and useState hooks
import { useReducer, useState } from "react";

// Import booking reducer
import bookingReducer from "../reducers/bookingReducer";

// Import Bookings CSS
import "./Bookings.css";

function Bookings() {

  // Initial booking data
  const initialBookings = [
    {
      id: 1,
      name: "Rahul Sharma",
      destination: "Goa",
      date: "2026-10-15",
      travelers: "2",
    },
    {
      id: 2,
      name: "Priya Patel",
      destination: "Bali",
      date: "2026-11-20",
      travelers: "2",
    },
  ];

  // useReducer manages booking CRUD operations
  const [bookings, dispatch] = useReducer(
    bookingReducer,
    initialBookings
  );

  // Store form input values
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    date: "",
    travelers: "",
  });

  // Store validation errors
  const [errors, setErrors] = useState({});

  // Store the booking currently being edited
  const [editingId, setEditingId] = useState(null);

  // Update form values when user types
  const handleChange = (event) => {

    // Get input name and value
    const { name, value } = event.target;

    // Update only the changed field
    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove the error when the user starts correcting the field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validate the booking form
  const validateForm = () => {

    // Create an object for validation errors
    const newErrors = {};

    // Validate customer name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate destination
    if (!formData.destination) {
      newErrors.destination = "Please select a destination";
    }

    // Validate travel date
    if (!formData.date) {
      newErrors.date = "Please select a travel date";
    }

    // Validate number of travelers
    if (!formData.travelers || Number(formData.travelers) < 1) {
      newErrors.travelers = "Enter at least 1 traveler";
    }

    // Save validation errors
    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (event) => {

    // Prevent page refresh
    event.preventDefault();

    // Stop submission if validation fails
    if (!validateForm()) {
      return;
    }

    // Check whether the user is editing or creating
    if (editingId) {

      // Update the existing booking
      dispatch({
        type: "UPDATE_BOOKING",
        payload: {
          id: editingId,
          ...formData,
        },
      });

      // Stop edit mode
      setEditingId(null);

    } else {

      // Add a new booking
      dispatch({
        type: "ADD_BOOKING",
        payload: formData,
      });
    }

    // Clear the form after submission
    setFormData({
      name: "",
      destination: "",
      date: "",
      travelers: "",
    });
  };

  // Load booking information into the form for editing
  const handleEdit = (booking) => {

    // Fill form with selected booking data
    setFormData({
      name: booking.name,
      destination: booking.destination,
      date: booking.date,
      travelers: booking.travelers,
    });

    // Store the ID of the booking being edited
    setEditingId(booking.id);

    // Scroll to the form
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete a booking
  const handleDelete = (id) => {

    // Ask for confirmation before deleting
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    // Delete only when user confirms
    if (confirmDelete) {
      dispatch({
        type: "DELETE_BOOKING",
        payload: id,
      });
    }
  };

  // Cancel editing
  const handleCancel = () => {

    // Exit edit mode
    setEditingId(null);

    // Clear the form
    setFormData({
      name: "",
      destination: "",
      date: "",
      travelers: "",
    });

    // Clear validation errors
    setErrors({});
  };

  return (
    <div className="bookings-page">

      {/* Page heading */}
      <section className="bookings-hero">

        <p>PLAN YOUR JOURNEY</p>

        <h1>My Trip Bookings</h1>

        <span>
          Create, manage, update, and organize all your travel bookings.
        </span>

      </section>

      <div className="bookings-container">

        {/* Booking form */}
        <section className="booking-form-section">

          <div className="booking-form-header">

            <div>
              <p>TRIP DETAILS</p>

              <h2>
                {editingId
                  ? "Update Your Booking"
                  : "Create a New Booking"}
              </h2>
            </div>

          </div>

          <form onSubmit={handleSubmit}>

            {/* Customer name */}
            <div className="form-group">

              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <small className="form-error">
                  {errors.name}
                </small>
              )}

            </div>

            {/* Destination */}
            <div className="form-group">

              <label>Destination</label>

              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >
                <option value="">
                  Select destination
                </option>

                <option value="Goa">Goa</option>
                <option value="Manali">Manali</option>
                <option value="Kerala">Kerala</option>
                <option value="Bali">Bali</option>
                <option value="Dubai">Dubai</option>
                <option value="Maldives">Maldives</option>

              </select>

              {errors.destination && (
                <small className="form-error">
                  {errors.destination}
                </small>
              )}

            </div>

            {/* Travel date */}
            <div className="form-group">

              <label>Travel Date</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              {errors.date && (
                <small className="form-error">
                  {errors.date}
                </small>
              )}

            </div>

            {/* Number of travelers */}
            <div className="form-group">

              <label>Number of Travelers</label>

              <input
                type="number"
                name="travelers"
                placeholder="Number of travelers"
                value={formData.travelers}
                onChange={handleChange}
                min="1"
              />

              {errors.travelers && (
                <small className="form-error">
                  {errors.travelers}
                </small>
              )}

            </div>

            {/* Form buttons */}
            <div className="booking-form-buttons">

              <button
                type="submit"
                className="booking-submit-btn"
              >
                {editingId
                  ? "Update Booking"
                  : "Create Booking"}
              </button>

              {/* Display cancel button only while editing */}
              {editingId && (
                <button
                  type="button"
                  className="booking-cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}

            </div>

          </form>

        </section>

        {/* Booking list */}
        <section className="booking-list-section">

          <div className="booking-list-header">

            <div>
              <p>YOUR JOURNEYS</p>

              <h2>
                Current Bookings
              </h2>
            </div>

            <span className="booking-count">
              {bookings.length} Total
            </span>

          </div>

          {/* Conditional rendering for bookings */}
          {bookings.length > 0 ? (

            <div className="booking-list">

              {/* Render all bookings */}
              {bookings.map((booking) => (

                <div
                  className="booking-item"
                  key={booking.id}
                >

                  <div className="booking-item-info">

                    <h3>{booking.destination}</h3>

                    <p>👤 {booking.name}</p>

                    <p>🗓️ {booking.date}</p>

                    <p>👥 {booking.travelers} Travelers</p>

                  </div>

                  <div className="booking-actions">

                    {/* Edit button */}
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(booking)}
                    >
                      Edit
                    </button>

                    {/* Delete button */}
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(booking.id)}
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* Display when there are no bookings */
            <div className="empty-bookings">

              <span>✈️</span>

              <h3>No Bookings Yet</h3>

              <p>
                Create your first trip booking and start your journey!
              </p>

            </div>

          )}

        </section>

      </div>

    </div>
  );
}

export default Bookings;