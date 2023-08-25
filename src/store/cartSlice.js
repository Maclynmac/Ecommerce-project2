// Import the necessary function from the Redux Toolkit library
import { createSlice } from "@reduxjs/toolkit"

// Create a Redux slice named "cart"
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState: {
    itemsList: [], // Array to store cart items
    totalQuantity: 0, // Total quantity of items in the cart
  },
  reducers: {
    // Reducer for adding items to the cart
    addToCart(state, action) {
      const newItem = action.payload

      // Check if the item being added already exists in the cart
      const existingItem = state.itemsList.find((item) => item.id === newItem.id)

      if (existingItem) {
        // If the item exists, update its quantity and total price
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      } else {
        // If the item doesn't exist, add it to the cart
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.cover,
        })
        state.totalQuantity++
      }
    },

    // Reducer for removing items from the cart
    removeFromCart(state, action) {
      const id = action.payload
      const existingItem = state.itemsList.find((item) => item.id === id)

      if (existingItem.quantity === 1) {
        // If the item quantity is 1, remove the item from the cart
        state.itemsList = state.itemsList.filter((item) => item.id !== id)
        state.totalQuantity--
      } else {
        // If the item quantity is greater than 1, decrement quantity and total price
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
    },
  },
})

// Export the action creators as an object
export const cartActions = cartSlice.actions

// Export the cartSlice object itself
export default cartSlice
