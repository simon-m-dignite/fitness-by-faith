import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({title, description, thumbnail}) => {
  return (
    <div className="w-full relative">
      <Link to="/videos">
        <img src={thumbnail} alt="video" className="w-full rounded-2xl brightness-75 relative"/>
        <div className="w-full absolute bottom-4 px-4 flex flex-col gap-1">
          <h1 className="text-lg font-semibold text-white">
            {title}
          </h1>
          <p className="text-sm text-white">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
