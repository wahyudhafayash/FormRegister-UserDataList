import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/registerPage";
import User from "../pages/userPage";
import { Provider } from "react-redux";
import { store } from "../redux/store";
const WebRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Register />} path="/" />
          <Route element={<User />} path="/user" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default WebRouter;
