import axios from "axios";

const API_URL = "https://66616aa063e6a0189fe9b5ac.mockapi.io/";

export const getUsers = () => axios.get(`${API_URL}users`);
export const getUserById = (id: string) => axios.get(`${API_URL}users/${id}`);
export const createUser = (user: any) => axios.post(`${API_URL}users`, user);
export const updateUser = (id: string, user: any) =>
  axios.put(`${API_URL}users/${id}`, user);
export const deleteUser = (id: string) => axios.delete(`${API_URL}users/${id}`);
