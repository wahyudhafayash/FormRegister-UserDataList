import { useState, useEffect } from "react";
import { getUsers } from "../api/apiUrl";
import { UserListProps } from "../utils/interface";

const UserList = () => {
  const [users, setUsers] = useState<UserListProps[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await getUsers().then((response: any) => {
      setUsers(response?.data);
    });
  };

  return (
    <div className="w-screen min-h-screen pt-32 ">
      <table className="w-3/4 mx-auto mt-6 text-left border-collapse border border-gray-800">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Password</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: any) => {
            return (
              <tr key={user?.id} className="border border-gray-800 text-white">
                <td className="p-4">{user?.name}</td>
                <td className="p-4">{user?.email}</td>
                <td className="p-4">{user?.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
