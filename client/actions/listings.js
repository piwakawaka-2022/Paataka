/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import { getAllListings, getOnelisting } from '../apis/food'

export const FETCH_ONE_LISTING = 'FETCH_ONE_LISTING'
export const FETCH_USER_LISTINGS = 'FETCH_USER_LISTINGS'
export const FETCH_LISTINGS = 'FETCH_LISTINGS'

export function fetchOneLising(listing) {
  return {
    type: FETCH_ONE_LISTING,
    listing,
  }
}
export function fetchListings(listings) {
  return {
    type: FETCH_LISTINGS,
    listings,
  }
}

// THUNKS

export function oneListingThunk() {
  return (dispatch) => {
    return getOnelisting().then((listing) => {
      dispatch(fetchOneLising(listing))
      return null
    })
  }
}

export function fetchListingsThunk() {
  return (dispatch) => {
    return getAllListings().then((listings) => {
      dispatch(fetchListings(listings))
      return null
    })
  }
}
