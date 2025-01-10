import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SumerryApi from "../common";
import axios from "axios";
//import SearchSection from "../utils/SearchSection";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../store/userSlice";
import SearchSection from "../utils/SearchSection";
import { persistor } from "../store/store";
import ROLE from "../common/role";

const Header = () => {
  const { user } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const [menuDispaly, setMenuDisplay] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get(SumerryApi.logout.url, {
        withCredentials: true,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(null));
        persistor.purge();

      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      if (user.role !== ROLE.ADMIN) {
        navigate("/login");
      }
    }
  }, [user]);
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to="/">
            <Logo w={90} h={50} />
          </Link>
        </div>

        <div className="hidden md:flex m-4 items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="Search product here..."
            className="w-full outline-none pl-2"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="relative">
            {user?._id &&(
                 <div
                 className="text-3xl cursor-pointer"
                 onClick={() => setMenuDisplay((prev) => !prev)}
               >
                 {user ? (
                   <Link to="#">
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

            )}
         
            {menuDispaly && user?.role === ROLE.ADMIN && (
              <div className="absolute bg-white bottom-0 left-1/2 -translate-x-1/2 top-11 h-fit p-2 shadow-lg rounded ">
                <nav>
                  <Link
                    to="/admin-panel"
                    className="whitespace-nowrap hover:bg-slate-100 p-1 rounded-md"
                    onClick={() => setMenuDisplay((prev) => !prev)}
                  >
                    Admin Panel
                  </Link>
                </nav>
              </div>
            )}
          </div>

          <div className="text-3xl cursor-pointer relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className=" bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className=" bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* <div className="block md:hidden w-full px-4 mt-6 mb-10">
        <SearchSection />
      </div> */}
    </header>
  );
};

export default Header;
