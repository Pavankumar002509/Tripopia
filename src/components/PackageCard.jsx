import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../redux/slices/bookingSlice";
import Modal from "./Modal";
import "./PackageCard.css";

function PackageCard({ packageData }) {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBooking = () => {
    dispatch(
      addBooking({
        id: Date.now(),
        packageId: packageData.id,
        name: packageData.name,
        duration: packageData.duration,
        price: packageData.price,
        image: packageData.image,
        status: "Pending",
        bookedAt: new Date().toLocaleDateString(),
      })
    );

    setIsModalOpen(false);

    alert("Your trip has been added to bookings!");
  };

  return (
    <>
      <div className="package-card">
        <div className="package-image">
          <img
            src={packageData.image}
            alt={packageData.name}
          />

          <span className="package-badge">
            Popular
          </span>
        </div>

        <div className="package-card-content">
          <h3>{packageData.name}</h3>

          <p className="package-duration">
            🗓️ {packageData.duration}
          </p>

          <p className="package-description">
            {packageData.description}
          </p>

          <div className="package-price-row">
            <div>
              <small>Starting from</small>
              <strong>{packageData.price}</strong>
            </div>

            <button onClick={() => setIsModalOpen(true)}>
              Book Now →
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Your Booking"
      >
        <div className="booking-modal-content">
          <h3>{packageData.name}</h3>

          <p>
            🗓️ {packageData.duration}
          </p>

          <p>
            💰 {packageData.price}
          </p>

          <button
            className="confirm-booking-btn"
            onClick={handleBooking}
          >
            Confirm Booking
          </button>
        </div>
      </Modal>
    </>
  );
}

export default PackageCard;