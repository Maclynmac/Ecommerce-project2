// Import the necessary libraries and files
import React from "react"; // Import the React library
import { order } from "../../assets/data/data"; // Import the 'order' array from the data file
import "./slider.css"; // Import the CSS file for styling

// Define the 'Order' component
export const Order = () => {
  return (
    <>
      {/* Section for rendering the list of items */}
      <section className='order'>
        <div className='container grid boxItems'>
          {/* Map over each item in the 'order' array and render its details */}
          {order.map((item) => (
            <div className='box flexCenter' key={item.id}>
              {/* Display the item's ID */}
              <div className='num'>
                <h1>{item.id}</h1>
              </div>
              {/* Display the item's title and description */}
              <div className='text'>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
