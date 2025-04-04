import React from 'react';

const UserProfile = () => {
  return (
    <div className="container mt-5">
      {/* Profile section */}
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <img
              src="profile-picture-url"
              alt="Profile"
              className="rounded-circle"
              width="50"
              height="50"
            />
            <div className="ms-3">
              <h5 className="card-title">Your Name</h5>
              <p className="card-text">your-email@example.com</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn btn-primary me-2">Create New Listing</button>
            <button className="btn btn-secondary">Edit Profile</button>
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <div>
              <h6>12</h6>
              <p>Active Listings</p>
            </div>
            <div>
              <h6>48</h6>
              <p>Total Sales</p>
            </div>
            <div>
              <h6>4.8</h6>
              <p>Rating</p>
            </div>
            <div>
              <h6>156</h6>
              <p>Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for content */}
      <div className="card mt-3">
        <div className="card-body">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#active-listings">Active Listings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#transactions">Transactions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#reviews">Reviews</a>
            </li>
          </ul>
          <div className="tab-content mt-3">
            <div className="tab-pane fade show active" id="active-listings">
              <div className="card">
                <img
                  src="item-image-url"
                  alt="Item"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Item Name</h5>
                  <p className="card-text">$99.99</p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="transactions">
              <p>No transactions available.</p>
            </div>
            <div className="tab-pane fade" id="reviews">
              <p>No reviews yet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
