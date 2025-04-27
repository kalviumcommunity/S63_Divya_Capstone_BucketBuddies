import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getFooterLinks = () => {
    switch (currentPath) {
      case '/':
        return (
          <>
            <Link to="/features">Features</Link>
            <span>•</span>
            <Link to="/explore">Explore</Link>
          </>
        );
      case '/features':
        return (
          <>
            <Link to="/">Home</Link>
            <span>•</span>
            <Link to="/explore">Explore</Link>
          </>
        );
      case '/explore':
        return (
          <>
            <Link to="/">Home</Link>
            <span>•</span>
            <Link to="/features">Features</Link>
          </>
        );
      default:
        return (
          <>
            <Link to="/">Home</Link>
            <span>•</span>
            <Link to="/features">Features</Link>
          </>
        );
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-cta">
          <h2>Make your bucket list today.</h2>
          <p>YOUR LIFE. YOUR BUCKET.</p>
          <Link to="/signup" className="footer-btn">
            GET STARTED
          </Link>
        </div>
        <div className="footer-links">
          {getFooterLinks()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
