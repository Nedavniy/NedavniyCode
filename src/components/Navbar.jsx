import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState("home");

  const menuItems = ["home", "projects", "about", "contact"];

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`navbar__item ${active === item ? "navbar__item--active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;