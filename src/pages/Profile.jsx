import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

import "./Profile.css";

function Profile() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(null);

  const [user, setUser] = useState({
    name: "Pavankumar Patil",
    email: "pavankumar@example.com",
    location: "India",
  });

  const [editing, setEditing] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setProfileImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div className={`profile-page ${theme}`}>
      <section className="profile-hero">
        <p>MY ACCOUNT</p>

        <h1>Traveler Profile</h1>

        <span>
          Manage your Tripopia profile and preferences.
        </span>
      </section>

      <div className="profile-container">
        <section className="profile-card">

          <div className="profile-image-section">
            <div
              className="profile-image"
              onClick={handleImageClick}
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                />
              ) : (
                <span>{user.name.charAt(0)}</span>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              hidden
            />

            <button
              className="change-photo-btn"
              onClick={handleImageClick}
            >
              Change Photo
            </button>
          </div>

          <div className="profile-details">

            <div className="profile-heading">
              <div>
                <p>PERSONAL INFORMATION</p>

                <h2>Your Details</h2>
              </div>

              <button
                className="edit-profile-btn"
                onClick={() => setEditing(!editing)}
              >
                {editing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            {editing ? (
              <div className="profile-form">

                <div className="profile-input-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="profile-input-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="profile-input-group">
                  <label>Location</label>

                  <input
                    type="text"
                    name="location"
                    value={user.location}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="save-profile-btn"
                  onClick={handleSave}
                >
                  Save Changes
                </button>

              </div>
            ) : (
              <div className="profile-info">

                <div className="info-row">
                  <span>Full Name</span>
                  <strong>{user.name}</strong>
                </div>

                <div className="info-row">
                  <span>Email</span>
                  <strong>{user.email}</strong>
                </div>

                <div className="info-row">
                  <span>Location</span>
                  <strong>{user.location}</strong>
                </div>

              </div>
            )}

          </div>

        </section>

        <section className="preferences-card">

          <div>
            <p>APPEARANCE</p>
            <h2>Preferences</h2>
          </div>

          <div className="theme-setting">

            <div>
              <h3>Theme Mode</h3>

              <p>
                Switch between light and dark appearance.
              </p>
            </div>

            <button
              className="theme-btn"
              onClick={toggleTheme}
            >
              {theme === "light"
                ? "🌙 Dark Mode"
                : "☀️ Light Mode"}
            </button>

          </div>

        </section>

      </div>
    </div>
  );
}

export default Profile;