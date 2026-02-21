import React from "react";
import "../Assets/Css/Navbar.css"; // make sure this path is correct

export default function Navbar() {
  // Collapse mobile menu on link click
  const handleNavLinkClick = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show"); // hide menu
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-lg mb-5"
      style={{
        background: "linear-gradient(90deg, #6a0dad, #9b30ff)", // deep purple
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#home">
          MyPortfolio
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#home"
                onClick={handleNavLinkClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#about"
                onClick={handleNavLinkClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#projects"
                onClick={handleNavLinkClick}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#skills"
                onClick={handleNavLinkClick}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}