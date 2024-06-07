import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/register";
import User from "../pages/userPage";
const WebRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path="/" />
        <Route element={<User />} path="/user" />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRouter;
