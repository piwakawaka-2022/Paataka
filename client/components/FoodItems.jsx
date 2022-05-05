import React from "react";
import { useSelector } from "react-redux";

import SingleFoodItem from "./SingleFoodItem";

function FoodItems () {
  // useState?
  const food = useSelector(state => state.foodItems) // is a selector required here? if so need to probably update the state.foodItem bit
  
  return (
    <>
      {food.map((item) => <SingleFoodItem/> // Need to update this map function
      )}
    </>
  )

}

export default FoodItems