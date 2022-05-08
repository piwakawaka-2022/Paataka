import { getAllComments } from '../apis/comments'

// VARS
export const FETCH_ONE_LISTING = 'FETCH_ONE_LISTING'

// ACTIONS
export const getComments = (allComments) => {
  return {
    type: GET_COMMENTS,
    allComments
  }
}

// THUNKS

export const thunkingAllComments = () => {
  return async (dispatch) => {
    try {
      const allComments = await getAllComments()
      dispatch(getComments(allComments))
    } catch (err) {
      console.error('comments thunk broken!')
    }
  }
}
