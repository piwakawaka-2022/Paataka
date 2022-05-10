/* eslint-disable space-before-function-paren */
import { FETCH_ONE_LISTING, FETCH_LISTINGS } from '../actions/listings'

function listings(state = [], action) {
  switch (action.type) {
    case FETCH_ONE_LISTING:
      return action.listing

    case FETCH_LISTINGS:
      return action.listings

    default:
      return state
  }
}
export default listings
