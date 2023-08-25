// Import required dependencies and styles
import React from "react";
import image from "../../assets/images/input.png"; // Import the image file
import "./account.css"; // Import the associated CSS styles

// Define the Account component
export const Account = () => {
  return (
    <>
      {/* Section containing user account information */}
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            {/* Left column for image display */}
            <div className='left'>
              <div className='img flexCenter'>
                {/* Input for uploading an image */}
                <input type='file' accept='image/*' /> {/* Remove src attribute */}
                {/* Image preview */}
                <img src={image} alt='' className='image-preview' />
              </div>
            </div>
            {/* Right column for user information */}
            <div className='right'>
              {/* Labels and input fields for username, email, and password */}
              <label>Username</label>
              <input type='text' required />
              <label>Email</label>
              <input type='text' required />
              <label>Password * </label>
              <input type='text' required />
              {/* Button for updating user information */}
              <button className='button'>Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
