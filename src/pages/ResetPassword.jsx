import React, { useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { ResetPasswordMockup } from "../assets/export";
import { styles } from "../styles/styles";

const ResetPassword = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
          <div className="rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold">Update Password.</h3>
                <p className="text-sm mt-4">Update your password!</p>
              </div>
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center border justify-start border-gray-300 rounded-md px-4">
                  <input
                    name="password"
                    type={showPass ? "text" : "password"}
                    className="w-full text-sm py-3 outline-none"
                    placeholder="Enter password"
                  />
                  <button onClick={() => setShowPass(!showPass)}>
                    {showPass ? (
                      <LuEyeOff className="text-lg text-gray-400" />
                    ) : (
                      <LuEye className="text-lg text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">Confirm Password</label>
                <div className="relative flex items-center border justify-start border-gray-300 rounded-md px-4">
                  <input
                    name="password"
                    type={showPass2 ? "text" : "password"}
                    className="w-full text-sm py-3 outline-none"
                    placeholder="Enter password"
                  />
                  <button onClick={() => setShowPass2(!showPass2)}>
                    {showPass2 ? (
                      <LuEyeOff className="text-lg text-gray-400" />
                    ) : (
                      <LuEye className="text-lg text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className={`w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white ${styles.bgColor} hover:opacity-85 focus:outline-none`}
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
          <div className="lg:h-[550px] md:h-[400px] max-md:mt-10">
            <img
              src={ResetPasswordMockup}
              className="w-full h-full object-cover"
              alt="Authentication Mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
