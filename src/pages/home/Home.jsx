import React from "react"

// Importing necessary components
import { Category } from "../../components/category/Category"
import { Order } from "../../components/hero/Order"
import { Slider } from "../../components/hero/Slider"
import { Product } from "../../components/product/Product"

// Defining the Home component
export const Home = () => {
  return (
    <>
      {/* Rendering the Slider component */}
      <Slider />

      {/* Rendering the Order component */}
      <Order />

      {/* Rendering the Category component */}
      <Category />

      {/* Rendering the Product component */}
      <Product />
    </>
  )
}
