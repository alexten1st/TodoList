import { api } from "./api";

export const createTodo = async (payload) => {
  const response = await api.post("/", payload);
  return response;
};
