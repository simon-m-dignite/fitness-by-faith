import React from "react";
import { Link } from "react-router-dom";

const VideoCard = () => {
  return (
    <div className="w-full relative">
      <Link to="/videos">
        <img
          src={
            "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          className="w-full rounded-2xl brightness-75 relative"
        />
        <div className="w-full absolute bottom-4 px-4 flex flex-col gap-1">
          <h1 className="text-lg font-semibold text-white">
            Improve Flexibility
          </h1>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
