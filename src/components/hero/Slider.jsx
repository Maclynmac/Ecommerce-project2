// Import React and required styles
import React from "react";
import "./slider.css";

// Import the data for the slider images
import { slide } from "../../assets/data/data";

// Define the Slider component
export const Slider = () => {
  return (
    <>
      {/* Container for the image slider */}
      <div className='slider'>
        {/* Container for the grid of images */}
        <div className='container grid'>
          {/* Map through the slide array and render each image */}
          {slide.map((item, i) => (
            <div className='box' key={i}>
              {/* Container for an individual image */}
              <div className='img'>
                {/* Display the image */}
                <img src={item.image} alt={`Slide ${i}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
