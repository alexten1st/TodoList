import { api } from "./api";

export const changeDescriptionTodo = async (payload) => {
  api.put(`/update/${payload.id}`, {description: payload.description});
};
