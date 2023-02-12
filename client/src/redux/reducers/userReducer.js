import { LOGIN, LOGOUT } from "../actionCreators/userActionCreators"

const userReducer = (state = {auth: false}, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, auth: true }

    case LOGOUT:
    return { ...state, auth: false }

    default:
      return state
  }
}

export default userReducer