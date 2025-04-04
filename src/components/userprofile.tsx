import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header d-flex align-items-center justify-content-between">
        <div className="profile-info">
          <img
            src="./proflie.png"
            alt="Profile"
            className="profile-pic"
          />
          <div className="details">
            <h2>Shaikh Afrin</h2>
            <p>shaikhafrin0711@gmail.com</p>
          </div>
        </div>
        <div className="profile-buttons">
          <button className="btn btn-primary">Create New Listing</button>
          <button className="btn btn-secondary">Edit Profile</button>
        </div>
      </div>
      <div className="profile-stats row text-center">
        <div className="col">
          <h3>12</h3>
          <p>Active Listings</p>
        </div>
        <div className="col">
          <h3>48</h3>
          <p>Total Sales</p>
        </div>
        <div className="col">
          <h3>4.8</h3>
          <p>Rating</p>
        </div>
        <div className="col">
          <h3>156</h3>
          <p>Reviews</p>
        </div>
      </div>
      <div className="profile-tabs">
        <button className="tab active">Active Listings</button>
        <button className="tab">Transactions</button>
        <button className="tab">Reviews</button>
      </div>
      <div className="listings">
        <div className="listing-item d-flex align-items-center">
          <img src="item-placeholder.jpg" alt="Item" className="listing-pic"/>
          <div className="listing-details">
            <h4>Item Name</h4>
            <p>$99.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
