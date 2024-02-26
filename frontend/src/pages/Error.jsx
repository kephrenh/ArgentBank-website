import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="error">
      <section className="error-section">
        <h2 className="error-title">404</h2>
        <p className="error-message">Page not found</p>
        <Link to="/" className="error-link">
          Back to homepage
        </Link>
      </section>
    </main>
  );
};

export default Error;
