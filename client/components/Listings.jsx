import React, { useEffect, useState } from 'react'

import FoodItems from './FoodItems'
import { getAllListings } from '../apis/food'

function Listings () {
  const [listings, setListings] = useState([])

  const getListingsAsync = async () => {
    try {
      const allListings = await getAllListings()
      setListings(allListings)
    } catch (err) {
      console.error('get all listings on page load not working!')
    }
  }

  useEffect(() => {
    getListingsAsync()
  }, [])

  return (
    <>
      <div>
        <h1 className='listings-title'>Available food in your region</h1>
      </div>
      <div className="all-food-container">
        {/* The div here will be the section with the images and detail buttons, a map function */}
        {listings.map(listing => <FoodItems key={listing.id} {...listing} />)}
      </div>
    </>

  )
}

export default Listings
