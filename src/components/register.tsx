import React from 'react';
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-7 d-none d-md-flex image-side">
          <img src="./6920933.jpg" alt="registration" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
        </div>
        <div className="col-md-5 d-flex container flex-column justify-content-center">
          <h2 className="heading">Sign Up</h2>
          <form >
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-bold">Name:</label>
              <input type="text" id="username" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Email:</label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label fw-bold">Mobile no:</label>
              <input type="number" id="mobile" className="form-control" placeholder="Enter your mobile no" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">Password:</label>
              <input type="password" id="password" className="form-control" placeholder="Enter your password" />
            </div>
            <div className="mb-3">
              <input type="checkbox" id="terms" className="form-check-input" />
              <label htmlFor="terms" className="form-check-label">I agree to the Terms and Conditions</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign up</button>
          </form>
          <p className="mt-3 text-center fw-bold">
            Already have an account?<Link to="/login">Login now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
