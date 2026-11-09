"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

const navbarLinks = [
  { label: "MEN", href: "/men" },
  { label: "WOMEN", href: "/women" },
  { label: "KIDS", href: "/kids" },
  { label: "THE FAMILY EDIT", href: "/family-edit" },
  { label: "CONTACT", href: "/contact" },
];

// Links displayed in the mobile menu
const menuLinks = [
  { label: "HOME", href: "/home" },
  ...navbarLinks,

  // Additional menu-only links
  { label: "CART", href: "/cart" },
  { label: "BRAND STORY", href: "/brand-story" },
];

function ShoppingBag() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      width="26"
      height="26"
      aria-hidden="true"
    >
      <path d="M5 5h14l1 17H4L5 5Z" />
      <path d="M9 8V4a3 4 0 0 1 6 0v4" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menu-icon ${open ? "is-open" : ""}`}>
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="saanko-navbar">
      {/* Desktop navbar */}
      <div className="navbar-desktop-grid">
        <div className="navbar-column navbar-decoration">
          <img src="/navbar-left.png" alt="svg" />
        </div>

        <nav className="navbar-column navbar-left-links">
          {navbarLinks.slice(0, 3).map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/home" className="navbar-column navbar-brand">
          <img
            src="/Saanko_logo.png"
            alt="Saanko - The Bridge between Tradition and modernity"
          />
        </a>

        <nav className="navbar-column navbar-right-links">
          {navbarLinks.slice(3).map((link, index) => (
            <a key={link.label} href={link.href}>
              {link.label}
              {index === 2 && " |"}
            </a>
          ))}

          <a href="/cart" className="navbar-cart">
            <span className="navbar-cart-label">CART |</span>
            <ShoppingBag />
          </a>
        </nav>

        <div className="navbar-column navbar-decoration">
          <img src="/navbar-right-1.png" alt="svg" />
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="navbar-mobile">
        <div className="mobile-decoration mobile-decoration-left">
          <img src="/navbar-left-1.png" alt="svg" />
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <a href="/" className="mobile-brand">
          <img src="/Saanko_logo.png" alt="Saanko" />
        </a>

        <a href="/cart" className="mobile-cart" aria-label="Shopping cart">
          <span className="mobile-cart-label">CART |</span>
          <ShoppingBag />
        </a>

        <div className="mobile-decoration mobile-decoration-right">
          <img src="/navbar-right.png" alt="" />
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`mobile-menu-panel ${menuOpen ? "open" : ""}`}>
        {menuLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            <span>{link.label}</span>
            <ArrowRight className="menu-link-arrow" size={25} strokeWidth={1.5}/>
          </a>
        ))}
      </div>
    </header>
  );
}
