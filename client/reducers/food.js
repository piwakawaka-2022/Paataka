import { ADD_LISTING } from '../actions/listings'
import { getAllListings } from '../apis/food'

function listings(state = [], action) {
  switch (action.type) {
    case ADD_LISTING:
      getAllListings(action)
      const allIds = state.map((events) => events.id)
      const maxId = Math.max(...allIds)
      return [
        ...state,
        {
          id: maxId + 1,
          title: action.title,
          image: action.image,
          description: action.image,
          location: action.location,
          category: action.category,
          users_id: action.users_id,
        },
      ]
  }
}

export default listings
