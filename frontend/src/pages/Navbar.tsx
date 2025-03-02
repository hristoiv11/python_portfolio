import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/projects" style={styles.navLink}>Projects</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/skills" style={styles.navLink}>Skills</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/reviews" style={styles.navLink}>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

// Basic inline styles (can be replaced with CSS or Tailwind)
const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
