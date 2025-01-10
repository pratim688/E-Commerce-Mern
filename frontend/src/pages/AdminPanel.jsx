import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const AdminPanal = () => {
  const user = useSelector((state) => state?.user?.user);

  return (
    <div className="min-h-[calc(100vh-120px)] flex">
      <aside className="bg-white min-h-full w-full md:max-w-60 max-w-20">
        <div className="text-3xl cursor-pointer relative p-4">
          <div className="flex justify-center">
            {user ? (
              <Link to="">
                <img
                  src={user.profilePicture}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            ) : (
              <Link to="/login">
                <FaRegCircleUser />
              </Link>
            )}
          </div>
          <div className="text-center">
            <p className="capitalize text-lg font-semibold justify-center md:block hidden">
              {user?.name}
            </p>
            <p className="capitalize text-lg justify-center md:block hidden">
              {user?.role}
            </p>
          </div>
        </div>
        {/* navigation */}
        <div className="">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to={"all-users"} className="md:block text-center">
              <span className="md:inline hidden">All Users</span>
              <span className="md:hidden inline">👥</span>
            </Link>
            <Link to={"all-products"} className="md:block text-center">
              <span className="md:inline hidden">Products</span>
              <span className="md:hidden inline">📦</span>
            </Link>
          </nav>
        </div>
      </aside>
      <main className="p-2">
        <Outlet/>
      </main>
    </div>
  );
};

export default AdminPanal;