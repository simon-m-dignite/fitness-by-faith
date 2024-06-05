import React, { useEffect } from "react";
import { OTPMockup } from "../assets/export";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles/styles";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/reset-password");
  };

  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
          <div className="border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-6">
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Verify OTP</h3>
                <p className="text-sm mt-4">
                  Input the OTP code we've provided at your registered email.
                </p>
              </div>
              <div>
                <label className="text-sm mb-2 block">OTP Code</label>
                <div className="relative flex items-center">
                  <input
                    name="otp"
                    type="password"
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-none"
                    placeholder="OTP Code"
                  />
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleNavigate}
                  className={`w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white ${styles.bgColor} hover:opacity-85 focus:outline-none`}
                >
                  Verify OTP
                </button>
                <p className="text-sm text-center mt-4 text-gray-400">
                  Didn't receive OTP?
                  <button className="underline ml-1 text-black font-medium">Resend OTP</button>
                </p>
              </div>
            </form>
          </div>
          <div className="lg:h-[550px] md:h-[400px] max-md:mt-10">
            <img
              src={OTPMockup}
              className="w-full h-full object-cover"
              alt="Authentication Mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
