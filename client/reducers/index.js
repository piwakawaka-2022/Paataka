import { combineReducers } from 'redux'

import auth from './auth'
import listings from './listings'
import comments from './comments'

export default combineReducers({
  auth,
  listings,
  comments
})
