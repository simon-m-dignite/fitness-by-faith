import React from "react";
import VideoCard from "./VideoCard";

const VideoList = () => {
  return (
    <div className="w-full mt-6">
      <div className="w-full flex items-center justify-start gap-4">
        <button className="text-[12px] px-4 py-1 rounded-full bg-[#64B5AC] text-white font-medium transition-all duration-300">
          All
        </button>
        <button className="text-[12px] bg-gray-200 px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300">
          Yoga
        </button>
        <button className="text-[12px] bg-gray-200 px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300">
          Cardio
        </button>
        <button className="text-[12px] bg-gray-200 px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300">
          Lifting
        </button>
      </div>
      <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default VideoList;
