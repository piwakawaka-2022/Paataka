import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import FoodItems from './FoodItems'
import { getAllListings } from '../apis/food'

function Listings () {
  const [listings, setListings] = useState([])
  const auth = useSelector(redux => redux.auth)
  const getListingsAsync = async () => {
    try {
      const allListings = await getAllListings()
      setListings(allListings)
    } catch (err) {
      console.error('get all listings on page load not working!')
    }
  }

  /* this is the functionality for scrolling sideways using the wheel. bit janky with a track pad and throws errors but works with wheel lol

  let item = document.getElementById("all-food-container");

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      item.scrollLeft += 70; //why is this throwing uncaught typeerror
    }
    else {
      item.scrollLeft -= 70; //why is this throwing uncaught typeerror
    }
  });

  */

  useEffect(() => {
    getListingsAsync()
  }, [])

  return (
    <>
      <div>
        <h1 className='listings-title'>Available food in your region</h1>
      </div>
      <div id='all-food-container' className="all-food-container">
        {/* The div here will be the section with the images and detail buttons, a map function */}
        {listings.map(listing => <FoodItems key={listing.id} {...listing} />)}
      </div>
      {auth.isAuthenticated ? 
      <Link className="add-food" to='/AddListing'>Add Kai</Link> : <div></div>
    }
    </>

  )
}

export default Listings
