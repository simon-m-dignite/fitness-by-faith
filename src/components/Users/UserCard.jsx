import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";

const UserCard = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 gap-3 rounded-xl bg-white">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="block rounded-full w-20 h-20"
      />
      <div className="w-full flex flex-col items-center gap-1">
        <h1 className="text-sm font-medium">Jon Doe</h1>
        <p className="text-xs font-normal text-gray-400">user@gmail.com</p>
      </div>
      <p className="text-xs font-normal text-gray-400 mt-2">Workout Plan</p>
      <Link
        to="/user/1234"
        className={`w-full border rounded-md text-xs text-center font-normal text-gray-400 py-2 mt-2 hover:${styles.bgColor} hover:text-white transition-all duration-300`}
      >
        View Profile
      </Link>
    </div>
  );
};

export default UserCard;
