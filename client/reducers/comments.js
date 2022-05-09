import { GET_COMMENTS } from '../actions/comments'

function comments (state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments

    default:
      return state
  }
}
export default comments
