import { CHANGE_TODO, CREATE_TODO, DONE_TODO, INIT_TODOS } from "../actionCreators/todosActionCreators";

export function initTodosAC(payload) {
    return { type: INIT_TODOS, payload };
  }
  export function createTodoAC(payload) {
    return { type: CREATE_TODO, payload };
  }
  export function doneTodoAC(payload) {
    return { type: DONE_TODO, payload };
  }
  export function changeTodoAC(payload) {
    return { type: CHANGE_TODO, payload };
  }