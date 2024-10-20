import React, { useState } from "react";
import "./Profile.css"; // Importing the CSS file

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("JohnDoe123");
  const [email, setEmail] = useState("johndoe@example.com");
  const [bio, setBio] = useState("This is my bio...");
  const [profileImage, setProfileImage] = useState(null);

  // Handle profile image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Store the image as base64 URL
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false); // Save and stop editing mode

  return (
    <div className="container">
      {/* Profile Icon or Uploaded Image */}
      <div className="profile-icon">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="uploaded-img" />
        ) : (
          <i className="fas fa-user-circle fa-9x profile-icon" />
        )}
      </div>

      {/* Allow image upload only in edit mode */}
      {editing && (
        <div className="upload-container">
          <label htmlFor="fileInput" className="upload-label">
            Change Profile Photo
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
          />
        </div>
      )}

      {/* Editable Fields */}
      <div className="profile-details">
        {editing ? (
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        ) : (
          <p class="user">{username}</p>
        )}
        <label>Email:</label>
        {editing ? (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        ) : (
          <p>{email}</p>
        )}

        <label>Bio:</label>
        {editing ? (
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="text-area"
          />
        ) : (
          <p>{bio}</p>
        )}
      </div>

      {/* Edit/Save Buttons */}
      <div>
        {editing ? (
          <button onClick={handleSave} className="save-button">
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className="edit-button">
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
