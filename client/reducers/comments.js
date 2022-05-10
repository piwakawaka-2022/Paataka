import { GET_COMMENTS } from '../actions/comments'

function comments(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
<<<<<<< HEAD
      return action.comments
||||||| 2547479
      return action.allComments
=======
      return action.listingComments
>>>>>>> 949537741a94c25c652b3eaea9ee8f0fe14971a7

    default:
      return state
  }
}
export default comments
