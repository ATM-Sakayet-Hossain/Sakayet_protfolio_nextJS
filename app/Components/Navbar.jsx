"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="navbar ng">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <img
            className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-[110px]"
            src="images/logo.png"
            alt="logo"
          />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div
          className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link
              href="/about"
              className="navbar-link text-sm sm:text-base md:text-lg"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/Resume"
              className="navbar-link text-sm sm:text-base md:text-lg"
              onClick={toggleMobileMenu}
            >
              Resume
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/portfolio"
              className="navbar-link text-sm sm:text-base md:text-lg"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link href="/contact" className="navbar-link" onClick={toggleMobileMenu}>
              Blog
            </Link>
          </li> */}
          <li className="navbar-item">
            <Link
              href="/contact"
              className="navbar-link text-sm sm:text-base md:text-lg"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
