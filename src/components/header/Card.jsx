// Import necessary modules and components
import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { product } from "../../assets/data/data";
import { CartItems } from "./CartItems";
import { useSelector } from "react-redux";

// Define the Card component
export const Card = () => {
  // State to manage whether the cart overlay is open or closed
  const [cardOpen, setCardOpen] = useState(false);

  // Function to close the cart overlay
  const closeCard = () => {
    setCardOpen(false);
  };

  // Extract quantity and cart items from Redux store
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  // Calculate the total price of items in the cart
  let total = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item) => {
    total += item.totalPrice;
  });

  // JSX rendering
  return (
    <>
      {/* Shopping cart icon */}
      <div className='card' onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className='cardIcon' />
        <span className='flexCenter'>{quantity}</span>
      </div>
      
      {/* Overlay for the cart */}
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      {/* Cart content */}
      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className='title flex'>
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className='icon' />
          </button>
        </div>
        
        {/* Render individual cart items */}
        {cartItems.map((item) => (
          <CartItems
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}

        {/* Display total price and checkout button */}
        <div className='checkOut'>
          <button>
            <span>Proceed To Checkout</span>
            <label htmlFor=''>${total}</label>
          </button>
        </div>
      </div>
    </>
  );
};
