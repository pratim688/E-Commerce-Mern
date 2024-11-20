import React from "react";
import sigin_icon from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email : "",
    password : ""
  })
  const handleChange = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <section id="login" className="mt-10">
      <div className="container mx-auto px-4">
        <div className="bg-white p-5 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={sigin_icon} alt="Login-logo" />
          </div>
          <form action="" className="pt-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
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
                />
                <div className="cursor-pointer ">
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <Link to="/forgot-password" className="block w-fit ml-auto hover:underline hover:text-red-600">
              Forgot Password ?
            </Link>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 w-full max-w-[150px] rounded-full mx-auto hover:scale-95 transition-all block mt-5">
              Login
            </button>
          </form>
          <p className="mt-2">Don't have account ? <Link to='/signup' className="hover:underline text-red-700 hover:text-red-600">Signup</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
