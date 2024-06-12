import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../users.json";

export interface User {
  name: string;
  email: string;
  password: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: users,
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default UserSlice.reducer;
