// Import required dependencies and components
import React from "react";
import Medicine from "../../assets/images/Medicine.svg"; // Import the Medicine logo image
import "./header.css"; // Import the associated CSS file for styling
import { AiOutlineSearch } from "react-icons/ai"; // Import the search icon component
import { Card } from "./Card"; // Import the Card component (not defined in this snippet)
import { User } from "./User"; // Import the User component (not defined in this snippet)
import { Link } from "react-router-dom"; // Import the Link component from React Router

// Define the Header component
export const Header = () => {
  // Add a scroll event listener to the window
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    // Toggle the "active" class based on scroll position
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  // Scroll the window to the bottom of the page with smooth behavior
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  // Return the JSX representing the header section
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          {/* Logo */}
          <div className='logo'>
            <Link to='/'> {/* Logo links to the root path */}
              <img src={Medicine} alt='Medicine' />
            </Link>
          </div>
          {/* Search Bar */}
          <div className='search flex'>
            <AiOutlineSearch className='searchIcon' />
            <input type='text' placeholder='Search...' />
          </div>
          {/* Account Section */}
          <div className='account flexCenter'>
            {/* Card component (imported but not defined in this snippet) */}
            <Card />
            {/* User component (imported but not defined in this snippet) */}
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
