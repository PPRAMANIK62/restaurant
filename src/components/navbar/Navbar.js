/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [stickyClass, setStickyClass] = useState("");
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  function handleClick(e) {
    e.target.classList.toggle("bx-x");
    setNavBarOpen((prev) => !prev);

    window.onscroll = () => {
      e.target.classList.remove("bx-x");
      setNavBarOpen(false);
    };
  }

  function handleSearch() {
    setSearchOpen((prev) => !prev);
  }

  return (
    <header className={stickyClass}>
      <Link to="/" className="logo">
        <i className="bx bxs-home"></i>
        {!searchOpen && <h3>&nbsp;Restaurant</h3>}
      </Link>

      <ul className={`navlist ${navBarOpen ? "open" : ""}`}>
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#shop">Our Shop</a>
        </li>
        <li>
          <a href="#review">Our Customer</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className="nav-icons">
        <div className="search-container">
          {searchOpen && (
            <input
              type="text"
              className="open search-input"
              placeholder="Search Here..."
            />
          )}
          <button id="search-btn" onClick={handleSearch}>
            <i className="bx bx-search"></i>
          </button>
        </div>
        <i className="bx bx-cart"></i>
        <div id="menu-icon" onClick={handleClick}>
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
