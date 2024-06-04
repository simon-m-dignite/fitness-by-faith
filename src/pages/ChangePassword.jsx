import React, { useState } from "react";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { styles } from "../styles/styles";

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      alert("Fill the missing field");
    } else if (confirmPassword !== newPassword) {
      alert("Passwords do not match");
    } else {
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-xl font-semibold">Update your password</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white rounded-xl p-6 flex flex-col gap-6 mt-6"
      >
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="current-password" className="text-sm font-medium">
            Current Password
          </label>
          <div
            tabIndex={1}
            className="w-full focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] flex items-center justify-between border rounded-lg px-3"
          >
            <input
              type={showCurrentPassword ? "text" : "password"}
              name="current-password"
              id="current-password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full border-none  py-3 text-sm outline-none"
            />
            <span onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
              {showCurrentPassword ? (
                <LuEye className="text-gray-500" />
              ) : (
                <LuEyeOff className="text-gray-500" />
              )}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="new-password" className="text-sm font-medium">
            New Password
          </label>
          <div
            tabIndex={1}
            className="w-full focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] flex items-center justify-between border rounded-lg px-3"
          >
            <input
              type={showPass1 ? "text" : "password"}
              name="new-password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border-none  py-3 text-sm outline-none"
            />
            <span onClick={() => setShowPass1(!showPass1)}>
              {showPass1 ? (
                <LuEye className="text-gray-500" />
              ) : (
                <LuEyeOff className="text-gray-500" />
              )}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="confirm-password" className="text-sm font-medium">
            Confirm Password
          </label>
          <div
            tabIndex={1}
            className="w-full focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] flex items-center justify-between border rounded-lg px-3"
          >
            <input
              type={showPass2 ? "text" : "password"}
              name="confirm-password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-none  py-3 text-sm outline-none"
            />
            <span onClick={() => setShowPass2(!showPass2)}>
              {showPass2 ? (
                <LuEye className="text-gray-500" />
              ) : (
                <LuEyeOff className="text-gray-500" />
              )}
            </span>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg text-sm font-medium text-white ${styles.bgColor}`}
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
