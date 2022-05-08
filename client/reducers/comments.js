import { GET_COMMENTS } from '../actions/comments'

function listings (state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.allComments

    default:
      return state
  }
}
export default listings
