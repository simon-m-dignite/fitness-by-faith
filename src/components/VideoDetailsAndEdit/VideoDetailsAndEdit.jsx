import React from "react";
import { styles } from "../../styles/styles";

const VideoDetailsAndEdit = () => {
  return (
    <div className="w-full flex flex-col gap-6 bg-white p-6 rounded-xl">
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-auto lg:h-[60vh] bg-center bg-contain rounded-xl"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-4">
        <h1>Video Title</h1>
        <h2>Exercise Name</h2>
        <p>Category: Lifting</p>
        <p>Sub-category: Gym</p>
        <button
          className={`${styles.bgColor} text-white font-medium text-sm px-4 py-2 rounded-lg`}
        >
          Edit Workout
        </button>
      </div>
    </div>
  );
};

export default VideoDetailsAndEdit;
