import React from "react";
import "./Navbar.css";

const Navbar = ({ onCategoryChange, activeCategory }) => {
  const categories = [
    "general",
    "technology",
    "sports",
    "health",
    "science",
    "business",
  ];

  return (
    <header className="navbar">
      <h1 className="logo">NewsApp</h1>

      <nav className="nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`nav-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;