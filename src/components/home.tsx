import React from "react";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Academic Journey, More Affordable</h1>
          <p className="hero-description">
            Save up to 50% on Academic Materials. Join thousands of students today.
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search academic materials..."
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
          <div className="category">
            {["Science", "Mathematics", "Physics", "Engineering"].map(
              (category) => (
                <span key={category} className="category-item">
                  {category}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="features-container mt-5">
        {[
          "Used Books Place",
          "Handwritten Notes",
          "Direct Communication",
          "Easy & Secure Payments",
          "Ratings & Reviews",
          "Advanced Search",
        ].map((feature, index) => (
          <div key={index} className="feature-card">
            <h3 className="feature-title">{feature}</h3>
            <p className="feature-description">Description of {feature}.</p>
            <a href="#" className="feature-link">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
