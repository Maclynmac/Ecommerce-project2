import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

// Footer component definition
export const Footer = () => {
  return (
    <>
      {/* Footer section */}
      <footer className='boxItems'>
        <div className='container flex'>
          {/* Copyright and attribution */}
          <p>Cartsy Medicine - All right reserved - Design & Developed by RedQ ,Inc</p>
          {/* Social media icons */}
          <div className='social'>
            <BsFacebook className='icon' /> {/* Facebook icon */}
            <RiInstagramFill className='icon' /> {/* Instagram icon */}
            <AiFillTwitterCircle className='icon' /> {/* Twitter icon */}
            <AiFillLinkedin className='icon' /> {/* LinkedIn icon */}
          </div>
        </div>
      </footer>
    </>
  );
};
