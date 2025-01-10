import React, { useState, useEffect } from "react";
import axios from "axios";
import SumerryApi from "../common";
import { toast } from "react-toastify";
import ChangeUserRole from "../components/ChangeUserRole";

const AllUsers = () => {
  // State to hold all users
  const [allUsers, setAllUsers] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [updateUser, setUpdateUser] = useState({
    name: "",
    email: "",
    role: "",
    userId: "",
  });

  // Function to fetch all users
  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(SumerryApi.allUsers.url, {
        withCredentials: true, // Ensures cookies or authentication tokens are sent
      });
      if (response.data && response.data.users) {
        setAllUsers(response.data.users); // Update state with user data
      } else {
        toast.error("No users found in the response");
      }
    } catch (error) {
      toast.error("Error fetching users");
    }
  };

  // useEffect to fetch users when the component loads
  useEffect(() => {
    fetchAllUsers();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // Render the list of users
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">All Users</h2>
      <table className="w-full border-collapse border border-gray-200 shadow-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">No.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Created Date</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.length > 0 ? (
            allUsers.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.role || "User"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="flex space-x-3 border border-gray-300 px-4 py-2 ">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                    onClick={() => {
                      setUpdateUser({
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        userId: user._id,
                      });
                      setOpenEditModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center text-gray-500 border border-gray-300 px-4 py-2"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {openEditModal && (
        <ChangeUserRole
          onClose={() => setOpenEditModal(false)}
          name={updateUser.name}
          email={updateUser.email}
          role={updateUser.role}
          userId={updateUser.userId}
          callFunc={fetchAllUsers}
        />
      )}
    </div>
  );
};

export default AllUsers;
