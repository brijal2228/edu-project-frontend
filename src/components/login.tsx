import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center">
      <div className="row w-100">
        {/* <div className="col-md-7 d-none d-md-flex image-side">
          <img src="./6920933.jpg" alt="login" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }}/>
        </div> */}
        <div className="col-md-5 d-flex  container flex-column justify-content-center">
          <h2 className="heading">Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Email:</label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">Password:</label>
              <input type="password" id="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <p className="mt-3 text-center fw-bold">Don't have an account? <a href="/" rel="now">Sign up now</a></p>
        </div>
        <div className="col-md-7 d-none d-md-flex image-side">
          <img src="./6920933.jpg" alt="login" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }}/>
        </div>

      </div>
    </div>
  );
}

export default Login;
