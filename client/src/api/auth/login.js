import { api } from "../api";

export const login = async (payload) => {
try {
    const response = await api.post("/auth/login", payload);
  return response;
} catch (error) {
    return error.response
}
  
};
