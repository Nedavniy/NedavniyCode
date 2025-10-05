import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", anchor: "#hero" },
    { id: "about", label: "About", anchor: "#about" },
    { id: "projects", label: "Projects", anchor: "#projects" },
    { id: "contact", label: "Contact", anchor: "#contact" },
  ];

  const handleClick = (id) => {
    setActive(id);
    const section = document.querySelector(`#${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {menuItems.map(({ id, label, anchor }) => (
          <li
            key={id}
            className={`navbar__item ${
              active === id ? "navbar__item--active" : ""
            }`}
          >
            <a
              href={anchor}
              onClick={(e) => {
                e.preventDefault();
                handleClick(id);
              }}
              className="navbar__link"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;