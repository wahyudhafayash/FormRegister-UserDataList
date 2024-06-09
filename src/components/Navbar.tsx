const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-5 flex justify-between items-center bg-blue-200">
      <a className="text-black font-bold text-3xl" href="/">
        Practice
      </a>
      <div>
        <ul className="flex gap-4 ">
          <li>
            <a className="text-black  text-2xl" href="/user">
              User
            </a>
          </li>
          <li>
            <a className="text-black  text-2xl" href="/">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
