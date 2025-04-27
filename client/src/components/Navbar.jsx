import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // If we're scrolling down, hide the navbar
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        // If we're scrolling up, show the navbar
        setShow(true);
      }
      // Update last scroll position
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? 'navbar-show' : 'navbar-hide'}`}>
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="bucket">BUCKET</div>
          <div className="buddies">BUDDIES</div>
        </Link>
      </div>
      
      <ul className="navbar-links">
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/features" style={{ textDecoration: 'none', color: 'inherit' }}>
            Features
          </Link>
        </li>
        <li>
          <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}>
            Explore
          </Link>
        </li>
        <li>
          <Link to="/get-started" className="get-started" style={{ textDecoration: 'none' }}>
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
