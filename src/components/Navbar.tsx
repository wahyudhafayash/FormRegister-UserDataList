import { useSelector } from "react-redux";
import { User } from "../redux/userSlice";

const Navbar = () => {
  const count = useSelector(
    (state: { user: { users: User[] } }) => state.user.users.length
  );
  return (
    <nav className="fixed top-0 left-0 right-0 p-3 flex justify-between items-center bg-black">
      <a className="text-white font-bold  pl-8 text-4xl" href="/">
        Practice
      </a>
      <div className="text-white text-xl border rounded-xl p-2">
        Remaining Data : {count}
      </div>
      <div>
        <ul className="flex gap-6 pr-8 ">
          <li>
            <a className="text-white  text-1xl" href="/user">
              User
            </a>
          </li>
          <li>
            <a className="text-white  text-1xl" href="/">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
