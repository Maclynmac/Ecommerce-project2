// Import necessary modules and components
import React from "react";
import { product } from "../../assets/data/data"; // Assuming data is imported correctly
import "./product.css"; // Importing the stylesheet
import { ProductCart } from "./ProductCart"; // Importing the ProductCart component

// Define the Product component
export const Product = () => {
  return (
    <>
      {/* Product section */}
      <section className='product'>
        {/* Container for product grid */}
        <div className='container grid3'>
          {/* Map over each product item */}
          {product.map((item) => (
            // Render the ProductCart component for each product
            <ProductCart
              key={item.id} // Unique key for React's virtual DOM
              id={item.id} // Product ID
              cover={item.cover} // Product cover image
              name={item.name} // Product name
              price={item.price} // Product price
            />
          ))}
        </div>
      </section>
    </>
  );
};
