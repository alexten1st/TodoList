import { INIT, TOGGLE_SORT } from "../actionCreators/metaActionCreators"

const metaReducer = (state = {totalPages: 1, sort:{}}, action) => {
  switch (action.type) {
    case INIT:
      return { ...state, totalPages: action.payload }
    case TOGGLE_SORT:
      return { ...state, sort: action.payload }
    default:
      return state
  }
}

export default metaReducer