/* eslint-disable space-before-function-paren */
import { GET_COMMENTS } from '../actions/comments'

function comments(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.listingComments

    default:
      return state
  }
}
export default comments
