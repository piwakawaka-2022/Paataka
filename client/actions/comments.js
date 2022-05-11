/* eslint-disable comma-dangle */
import { getListingComments } from '../apis/comments'

// VARS
export const FETCH_ONE_LISTING = 'FETCH_ONE_LISTING'
export const GET_COMMENTS = 'GET_COMMENTS'

// ACTIONS
export const getComments = (listingComments) => {
  return {
    type: GET_COMMENTS,
    listingComments,
  }
}

// THUNKS
export const thunkingAllComments = (id) => {
  console.log('we are in comments thunks start')
  return async (dispatch) => {
    try {
      console.log('we are in comments thunks inside try')
      const listingComments = await getListingComments(id)
      console.log('we are in comments thunks post API')
      dispatch(getComments(listingComments))
      console.log('we are in comments thunks post dispatch')
    } catch (err) {
      console.error('comments thunk broken!')
    }
  }
}
