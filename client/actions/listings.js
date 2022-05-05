import { getAllListings, getOnelisting } from '../apis/food'

// export const FETCH_LISTINGS_PENDING = 'FETCH_LISTINGS_PENDING'
// export const FETCH_LISTINGS_SUCCESS = 'FETCH_LISTINGS_SUCCESS'
export const FETCH_ONE_LISTING = 'FETCH_ONE_LISTING'
export const FETCH_USER_LISTINGS = 'FETCH_USER_LISTINGS'
export const FETCH_LISTINGS = 'FETCH_LISTINGS'

// set up api for this action
// export function fetchUserListings(listings) {
//   return {
//     type: FETCH_USER_LISTINGS,
//     listings

//   }
// }

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
// export function fetchListingsPending() {
//   return {
//     type: FETCH_LISTINGS_PENDING,
//   }
// }

// export function fetchListingsSuccess() {
//   return {
//     type: FETCH_LISTINGS_SUCCESS,
//   }
// }

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
