import { useState } from "react";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must contain at least 5 characters";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess(false);

    if (validateForm()) {
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <p>GET IN TOUCH</p>

        <h1>Let's Plan Your Next Adventure</h1>

        <span>
          Have questions about destinations, packages, or bookings?
          Our Tripopia team is here to help you.
        </span>
      </section>

      <section className="contact-container">

        <div className="contact-info">

          <p className="section-tag">CONTACT TRIPOPIA</p>

          <h2>We're Here to Help</h2>

          <p className="contact-description">
            Whether you're planning a relaxing vacation, an exciting
            adventure, or a romantic getaway, contact us and we'll help
            you plan your perfect journey.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <span>📧</span>

              <div>
                <h3>Email Us</h3>
                <p>hello@tripopia.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <span>📞</span>

              <div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-detail">
              <span>📍</span>

              <div>
                <h3>Our Location</h3>
                <p>India</p>
              </div>
            </div>

          </div>

        </div>

        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          {success && (
            <div className="success-message">
              🎉 Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <small className="error-message">
                  {errors.name}
                </small>
              )}
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <small className="error-message">
                  {errors.email}
                </small>
              )}
            </div>

            <div className="form-group">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
              />

              {errors.subject && (
                <small className="error-message">
                  {errors.subject}
                </small>
              )}
            </div>

            <div className="form-group">
              <label>Your Message</label>

              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {errors.message && (
                <small className="error-message">
                  {errors.message}
                </small>
              )}
            </div>

            <button type="submit" className="send-message-btn">
              Send Message ✈️
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;