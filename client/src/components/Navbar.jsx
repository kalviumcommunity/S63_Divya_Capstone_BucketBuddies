import React from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

const menuItems = [
  { name: "HOME", href: "#home", animateUnderline: true },
  { name: "FEATURES", href: "#features", animateUnderline: true },
  { name: "EXPLORE", href: "#explore", animateUnderline: true },
  { name: "GET STARTED", href: "#get-started", animateUnderline: false },
];

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-logo">
        <span className="bucket" aria-label="Bucket">BUCKET</span>
        <span className="buddies" aria-label="Buddies">BUDDIES</span>
      </div>
      <ul className="navbar-links">
        {menuItems.map(({ name, href, animateUnderline }) => (
          <li key={name}>
            {animateUnderline ? (
              <motion.a
                href={href}
                tabIndex="0"
                style={{ position: "relative", display: "inline-block" }}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {name}
                <motion.span
                  variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: 2,
                    backgroundColor: "#a12c38",
                    borderRadius: 1,
                    pointerEvents: "none",
                  }}
                />
              </motion.a>
            ) : (
              <a href={href} tabIndex="0">{name}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
