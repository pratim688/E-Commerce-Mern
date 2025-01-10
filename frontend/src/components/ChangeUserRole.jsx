import React, { useState } from "react";
import ROLE from "../common/role";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import SumerryApi from "../common";
import axios from "axios";
const ChangeUserRole = ({ name, email, role, onClose , userId , callFunc }) => {
  const [ userRole, setUserRole ] = useState(role);
  const updateUserRole = async () => {
    try {
      // Make an HTTP POST request to update the user role
      console.log(name,email,userRole,userId)
      const response = await axios.post(
        SumerryApi.updateUser.url, // Replace with your actual API endpoint
        {
          name,
          email,
          role: userRole,
          userId : userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensures cookies or authentication tokens are sent
        }
      );
  
      // Handle the response
      if (response.status === 200) {
        toast.success("User role updated successfully!");
        onClose(); // Close the modal
        callFunc();
      } else {
        toast.error("Failed to update user role. Please try again.");
      }
    } catch (error) {
      // Handle errors
      toast.error("Error updating user role:", error);
      
    }
  };
  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value)
}

  return (
    <div className="absolute w-full h-full z-10 flex justify-between bg-gray-100">
      <div className="mx-auto bg-white p-4 shadow-md w-full max-w-sm">
        <button onClick={onClose} className="float-right">
          <IoMdClose />
        </button>
        <h1>Change User Role</h1>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <div>
          <label htmlFor="role">Select Role : </label>
          <select className='border px-4 py-1' value={userRole} onChange={handleOnChangeSelect}>
                    {
                        Object.values(ROLE).map(el => {
                            return(
                                <option value={el} key={el}>{el}</option>
                            )
                        })
                    }
                </select>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={updateUserRole}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
