import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

function FoodItems (props) {
  // useState?
  // const food = useSelector(state => state.foodItems) // is a selector required here? if so need to probably update the state.foodItem bit
  const navigateTo = useNavigate()

  function handleClick () {
    // runs a functino that naviagtes to listing/props.id
    // console.log(props.listingId)
    navigateTo(`/listings/${props.listingId}`, { state: { food: props } })

    // Try use link instead to pass through data
  }

  return (
    <div className='one-food'>
      {/* The image has to be an image file type, not a link/random string */}
      <div>
        <h1 className='listing-title'>{props.title}</h1>
      </div>
      <div className='listing-image'>
        <img className='food-image' src={props.image ? props.image : 'images/placeholder.jpeg'} />
      </div>
      <div className='details-btn-container'>
        <button className='details-button' onClick={handleClick}>DETAILS</button>
      </div>
      {/* <p>{props.description}</p> */}
      {/* <p>{props.location}</p> */}

      <br></br>
    </div>
  )
}

export default FoodItems
