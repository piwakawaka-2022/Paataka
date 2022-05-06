import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SingleFoodItem from './SingleFoodItem'

function FoodItems (props) {
  // useState?
  const food = useSelector(state => state.foodItems) // is a selector required here? if so need to probably update the state.foodItem bit

  return (
    <>
      <img src='https://ipcdn.freshop.com/resize?url=https://images.freshop.com/3127591/1f7dc84335cc154ba6cd9f045b0412e5_large.png&width=256&type=webp&quality=80' />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.location}</p>
    </>
  )
}

export default FoodItems
