import { initMetaAC } from "../redux/actionTypes/metaActionTypes";
import { initTodosAC } from "../redux/actionTypes/todoActionTypes";
import { api } from "./api";

export const getTodos = (page) => {
  return function (dispatch) {
    api.get("/", { params: { page } }).then(({data}) => {
      dispatch(initMetaAC(Number(data.totalPages)))
      dispatch(initTodosAC(data.todos));
    });
  };
};
