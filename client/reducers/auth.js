/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: {},
  errorMessage: '',
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: '',
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: null,
      }
    default:
      return state
  }
}
