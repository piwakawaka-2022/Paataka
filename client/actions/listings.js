import { getAllListings } from '../apis/food'

export const FETCH_LISTINGS_PENDING = 'FETCH_LISTINGS_PENDING'
export const FETCH_LISTINGS_SUCCESS = 'FETCH_LISTINGS_SUCCESS'
export const ADD_LISTING = 'ADD_LISTING'

export function addListing(newListing) {
  return {
    type: ADD_LISTING,
    title: newListing.title,
    image: newListing.image,
    description: newListing.image,
    location: newListing.location,
    category: newListing.category,
    users_id: newListing.users_id,
  }
}

export function fetchListingPending() {
  return {
    type: FETCH_LISTINGS_PENDING,
  }
}

export function fetchListingSuccess() {
  return {
    type: FETCH_LISTINGS_SUCCESS,
  }
}

// THUNKS

export function fetchListing() {
  return (dispatch) => {
    dispatch(fetchListingPending())
    return getAllListings().then((listings) => {
      dispatch(fetchListingSuccess(listings))
      return null
    })
  }
}
