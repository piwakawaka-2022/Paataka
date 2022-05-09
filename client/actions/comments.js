import { getListingComments } from '../apis/comments'

// VARS
export const FETCH_ONE_LISTING = 'FETCH_ONE_LISTING'
export const GET_COMMENTS = 'GET_COMMENTS'

// ACTIONS
export const getComments = (listingComments) => {
  return {
    type: GET_COMMENTS,
    listingComments
  }
}

// THUNKS

export const thunkingAllComments = (id) => {
  return async (dispatch) => {
    try {
      const listingComments = await getListingComments(id)
      dispatch(getComments(listingComments))
    } catch (err) {
      console.error('comments thunk broken!')
    }
  }
}
