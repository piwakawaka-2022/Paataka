import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllListings } from '../apis/food'
import FoodItems from './FoodItems'

function Listings () {
  const auth = useSelector(redux => redux.auth)
  const [listings, setListings] = useState([])

  useEffect(() => {
    getListingsAsync()
  }, [])

  const getListingsAsync = async () => {
    try {
      const allListings = await getAllListings()
      setListings(allListings)
    } catch (err) {
      console.error('get all listings on page load not working!')
    }
  }

  return (
    <>
      <h1 className='listings-title'>Available food in your region</h1>
      <div id='all-food-container' className="all-food-container">
        {listings.map(listing => <FoodItems key={listing.listingId} {...listing}/>)}
      </div>
      {auth.isAuthenticated
        ? <Link className="add-food" to='/AddListing'>Add Kai</Link>
        : <></>
      }
    </>
  )
}

export default Listings
