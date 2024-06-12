import axios from "axios";

const API_URL = "http://localhost:5000/";

export const getUsers = () => axios.get(`${API_URL}users`);
export const getUserById = (id: string) => axios.get(`${API_URL}users/${id}`);
export const createUser = (user: any) => axios.post(`${API_URL}users`, user);
