import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

export const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  // Function to increment the quantity of the cart item
  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };

  // Function to decrement the quantity of the cart item
  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <>
      {/* Container for an individual cart item */}
      <div className='cardList' key={id}>
        <div className='cartContent'>
          {/* Item image and remove button */}
          <div className='img'>
            <img src={cover} alt='' />
            <button className='remove flexCenter'>
              <AiOutlineClose />
            </button>
          </div>
          <div className='details'>
            {/* Item name and unit price */}
            <p>{name}</p>
            <label htmlFor=''>Unit Price ${price}</label>

            {/* Quantity and total price section */}
            <div className='price'>
              {/* Quantity controls */}
              <div className='qty flexCenter'>
                <button className='plus' onClick={incCartitems}>
                  <AiOutlinePlus />
                </button>
                <button className='num'>1{quantity}</button>
                <button className='minus' onClick={descCartitems}>
                  <AiOutlineMinus />
                </button>
              </div>
              {/* Total price */}
              <div className='priceTitle'>${totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
