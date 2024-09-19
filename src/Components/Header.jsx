import React, { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header
        className={`section-container flex items-center justify-between fixed w-full left-[50%] -translate-x-[50%] bg-black/70 backdrop-blur-sm z-10 ${
          menuOpen ? "open-menu" : " "
        }`}
      >
        <a href="#">
          <img
            className="w-24 md:w-32"
            src="./images/shoe-company-logo 1 (1).png"
            alt="logo"
          />
          <p className="text-xs -mt-6 md:text-sm md:-mt-8">The Shoe Company</p>
        </a>
        <nav
          className={`md:block space-x-5 lg:space-x-8 lg:text-2xl hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a className="font-bold mt-4" href="#hero">
            Home
          </a>
          <a className="font-bold mt-4" href="#how-it-works">
            How It Works?
          </a>
          <a className="font-bold mt-4" href="#about">
            About
          </a>
          <a className="font-bold mt-4" href="#testimonials">
            Testimonials
          </a>
          <a className="font-bold mt-4" href="#contact">
            Contact Us
          </a>
        </nav>

        <nav
          id="nav-2"
          className={`flex flex-col md:hidden rounded-xl  bg-neutral-700 bg-opacity-75 absolute top-5 right-7 p-1 pl-5 place-items-start  lg:space-x-8 lg:text-2xl w-36 h-60 transform transition-transform backdrop-blur-sm z-10 ${
            menuOpen ? "translate-x-0" : " translate-x-[200px]"
          }`}
        >
          <img
            id="right-arrow"
            className="absolute right-3 cursor-pointer"
            src="images/arrowright.svg"
            alt=""
            onClick={toggleMenu}
          />
          <a
            className="font-bold mt-4 hover:font-bold hover:underline"
            href="#hero"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            className="font-bold mt-4 hover:font-bold hover:underline"
            href="#how-it-works"
            onClick={toggleMenu}
          >
            How It Works?
          </a>
          <a
            className="font-bold mt-4 hover:font-bold hover:underline"
            href="#about"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            className="font-bold mt-4 hover:font-bold hover:underline"
            href="#testimonials"
            onClick={toggleMenu}
          >
            Testimonials
          </a>
          <a
            className="font-bold mt-4 hover:font-bold hover:underline"
            href="#contact"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </nav>

        {!menuOpen && (
          <button
            onClick={toggleMenu}
            id="button"
            className={`text-5xl md:hidden open-menu:hidden `}
          >
            ≡
          </button>
        )}
      </header>
    </>
  );
}
