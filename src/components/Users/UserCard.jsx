import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";

const UserCard = ({id, fullName, email, image, target, age, chest, gender, height, hip, waist, weight}) => {
  return (
    <div className="w-full flex flex-col items-center p-6 gap-3 rounded-xl bg-white">
      <img
        src={image}
        alt=""
        className="block rounded-full w-20 h-20 object-cover"
      />
      <div className="w-full flex flex-col items-center gap-1">
        <h1 className="text-sm font-medium">{fullName}</h1>
        <p className="text-xs font-normal text-gray-400">{email}</p>
      </div>
      <p className="text-xs font-normal text-gray-400 mt-2">{target}</p>
      <Link
        to={`/user/${id}`} state={{ fullName, email, image, target, age, chest, gender, height, hip, waist, weight }}
        className={`w-full border rounded-md text-xs text-center font-normal text-gray-400 py-2 mt-2 hover:${styles.bgColor} hover:text-white transition-all duration-300`}
      >
        View Profile
      </Link>
    </div>
  );
};

export default UserCard;
