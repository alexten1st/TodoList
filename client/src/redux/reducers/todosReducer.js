import {
  CHANGE_TODO,
  CREATE_TODO,
  DONE_TODO,
  INIT_TODOS,
} from "../actionCreators/todosActionCreators";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];

    case DONE_TODO:
      return state.map((todo) => {
        if (todo._id === action.payload.id) {
          return { ...todo, done: action.payload.done };
        }
        return todo;
      });

    case CHANGE_TODO:
      return state.map((todo) => {
        if (todo._id === action.payload.id) {
          return { ...todo, description: action.payload.description, wasEdited: true };
        }
        return todo;
      });

    case INIT_TODOS:
      return action.payload;

    default:
      return state;
  }
};

export default todosReducer;
