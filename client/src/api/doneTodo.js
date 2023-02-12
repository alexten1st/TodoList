import { api } from "./api";

export const doneTodo = async (payload) => {
  api.put(`/done/${payload.id}`, {done: payload.done});
};
