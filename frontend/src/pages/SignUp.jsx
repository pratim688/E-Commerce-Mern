import React from "react";
import sigin_icon from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { imageToBase64 } from "../helper/imageTobase64";
import SumerryApi from "../../common";
import axios from "axios";
import {toast} from 'react-toastify'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    profilePicture: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleUploadPic = async (e) => {
    const base64 = await imageToBase64(e.target.files[0]);
    setData({ ...data, profilePicture: base64 });
   
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(data.password !== data.confirmPassword){
      return toast.error('Password and Confirm Password do not match')
    }
    try{
    const response = await axios.post(SumerryApi.signup.url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if(response.data.success){
      toast.success(response.data.message +" ,please login to continue");
      navigate('/login')
    }else{
      toast.error(response.data.message)
    }
  }catch(error){
    toast.error(error.response.data.message)
  }
  };
  return (
    <section id="signup" className="mt-10 ">
      <div className="container mx-auto px-4 overflow-auto">
        <div className="bg-white p-5 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto relative">
            <div className="w-full h-full overflow-hidden rounded-full">
              <img 
                src={data.profilePicture || sigin_icon} 
                alt="Login-logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <label>
              <div className="bg-red-600 text-white w-8 h-8 rounded-full absolute bottom-0 right-0 flex items-center justify-center cursor-pointer">
                <FaRegEdit size={16}/>
              </div>
              <input type="file" name="profilePicture" id="profilePicture" className="hidden" onChange={handleUploadPic}/>
            </label>
          </div>
          <form action="" className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={data.name}
                  placeholder="Enter your name"
                  required
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  required
                  placeholder="Enter your email"
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={data.password}
                  placeholder="Enter your password"
                  className="w-full h-full outline-none bg-transparent "
                  onChange={handleChange}
                  required
                />
                <div className="cursor-pointer ">
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={data.confirmPassword}
                  placeholder="Enter your confirm password"
                  className="w-full h-full outline-none bg-transparent "
                  onChange={handleChange}
                  required
                />
                <div className="cursor-pointer ">
                  <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 w-full max-w-[150px] rounded-full mx-auto hover:scale-95 transition-all block mt-5">
              Signup
            </button>
          </form>
          <p className="mt-2">
            Already have account ?{" "}
            <Link
              to="/login"
              className="hover:underline text-red-700 hover:text-red-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
