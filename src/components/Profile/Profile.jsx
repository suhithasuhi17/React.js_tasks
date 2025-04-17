import React, { useState } from "react";
import './profile.css'


const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        {/* Header Section */}
        <div className="profile-header">
          <img
            src="data:image/png;base64,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"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <h2 className="profile-name">Your Name</h2>
            <p className="profile-title">Team Manager</p>
            <p className="profile-location">Location, Country</p>
          </div>
          <button className="edit-btn primary" onClick={toggleEdit}>
            {isEditable ? "Save" : "Edit"}
          </button>
        </div>

        {/* Personal Information Section */}
        <div className="profile-section personal-info">
          <div className="section-header">
            <h3 className="section-title">Personal Information</h3>
          </div>
          <InfoRow
            label="First Name"
            value="Your First Name"
            isEditable={isEditable}
          />
          <InfoRow
            label="Last Name"
            value="Your Last Name"
            isEditable={isEditable}
          />
          <InfoRow
            label="Email Address"
            value="your.email@example.com"
            isEditable={isEditable}
          />
          <InfoRow
            label="Phone"
            value="+91 12345 67890"
            isEditable={isEditable}
          />
          <InfoRow label="Bio" value="Team Manager" isEditable={isEditable} />
        </div>

        {/* Address Section */}
        <div className="profile-section address-info">
          <div className="section-header">
            <h3 className="section-title">Address</h3>
          </div>
          <InfoRow
            label="Country"
            value="Your Country"
            isEditable={isEditable}
          />
          <InfoRow
            label="City/State"
            value="Your City, State"
            isEditable={isEditable}
          />
          <InfoRow
            label="Postal Code"
            value="12345"
            isEditable={isEditable}
          />
          <InfoRow label="Tax ID" value="123-456-789" isEditable={isEditable} />
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, isEditable }) => (
  <div className="info-row">
    <span className="info-label">{label}</span>
    <input
      className="info-input"
      type="text"
      defaultValue={value}
      readOnly={!isEditable}
    />
  </div>
);

export default Profile;
