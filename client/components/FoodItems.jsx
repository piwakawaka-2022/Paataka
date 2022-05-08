import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Details from './Details'
// import { useSelector } from 'react-redux'

function FoodItems (props) {
  // useState?
  // const food = useSelector(state => state.foodItems) // is a selector required here? if so need to probably update the state.foodItem bit
  const navigateTo = useNavigate()

  function handleClick () {
    // runs a functino that naviagtes to listing/props.id
    // console.log(props.listingId)
    navigateTo(`/listings/${props.listingId}`)
  }

  return (
    <>
      {/* The image has to be an image file type, not a link/random string */}
      <img className='food-image' src={props.image ? props.image : 'placeholder.jpeg'} />
      <h1>{props.title}</h1>
      {/* <p>{props.description}</p> */}
      {/* <p>{props.location}</p> */}

      <button onClick={handleClick}>DETAILS</button>
    </>
  )
}

export default FoodItems
