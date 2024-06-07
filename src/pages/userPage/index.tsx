import UserList from "../../components/UserList";

import Navbar from "../../components/Navbar";

const Users = () => {
  return (
    <main className="bg-gray-500 ">
      <Navbar />
      <div className="w-screen h-full flex gap-y-5 justify-center items-center">
        <UserList />
      </div>
    </main>
  );
};

export default Users;
