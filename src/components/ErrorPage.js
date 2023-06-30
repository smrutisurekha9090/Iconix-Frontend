import React from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
        <div className="error-container">
            <h1 className="error-text">404 Error</h1>
            <NavLink to="/" className="home-link">Go back to Home</NavLink>
        </div>
        
    </>
  )
}

export default ErrorPage