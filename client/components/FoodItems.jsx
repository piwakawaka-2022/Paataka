import React from 'react'
import { useNavigate } from 'react-router-dom'

function FoodItems (props) {
  const navigateTo = useNavigate()

  function handleClick () {
    navigateTo(`/listings/${props.listingId}`, { state: { food: props } })
  }

  return (
    <div className='one-food'>
      <h1 className='listing-title'>{props.title}</h1>
      <div className='listing-image'>
        <img className='food-image' src={props.image ? props.image : 'images/placeholder.jpeg'}/>
      </div>
      <div className='details-btn-container'>
        <button className='details-button' onClick={handleClick}>Details</button>
      </div>
      <br/>
    </div>
  )
}

export default FoodItems
