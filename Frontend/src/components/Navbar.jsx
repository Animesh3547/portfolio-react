import { useState } from "react";

function Navbar({ toggleTheme, theme }) {
  const [isFixed, setIsFixed] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar ${isFixed ? "fixed" : ""}`}>
      <div className="container">

        {/* Logo (optional placeholder) */}
        <h3>Portfolio</h3>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Nav Links */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <button className="btn" onClick={toggleTheme}>
            {theme === "light" ? "Neo Noir" : "Light"}
          </button>

          
        </div>

      </div>
    </header>
  );
}

export default Navbar;