/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable promise/always-return */
import { getUserTokenInfo, isAuthenticated, removeUser } from '../utils/auth'
import { login, register } from '../apis/auth'

export function requestLogin() {
  return {
    type: 'LOGIN_REQUEST',
  }
}

export function receiveLogin(user) {
  return {
    type: 'LOGIN_SUCCESS',
    user,
  }
}

export function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    message,
  }
}

export function receiveLogout() {
  return {
    type: 'LOGOUT_SUCCESS',
  }
}

export function registerUserRequest(creds, confirmSuccess) {
  return (dispatch) => {
    dispatch(requestLogin())
    register(creds)
      .then((userInfo) => {
        dispatch(receiveLogin(userInfo))
        confirmSuccess()
      })
      .catch((err) => dispatch(loginError(err)))
  }
}

export function loginUser(creds, confirmSuccess) {
  return (dispatch) => {
    dispatch(requestLogin())
    return login(creds)
      .then((userInfo) => {
        dispatch(receiveLogin(userInfo))
        confirmSuccess()
      })
      .catch((err) => {
        dispatch(loginError(err))
      })
  }
}

export function logoutUser(confirmSuccess) {
  return (dispatch) => {
    removeUser()
    dispatch(receiveLogout())
    confirmSuccess()
  }
}

export function checkAuth(confirmSuccess) {
  return (dispatch) => {
    if (isAuthenticated()) {
      dispatch(receiveLogin(getUserTokenInfo()))
      confirmSuccess()
    }
  }
}
