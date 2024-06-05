import React from "react";
import VideoDetailsAndEdit from "../components/VideoDetailsAndEdit/VideoDetailsAndEdit";

const VideoDetailsPage = () => {
  return (
    <div className="w-full flex flex-col items-start gap-6 min-h-screen">
      <h1 className="text-xl font-semibold">Video Details</h1>
      <VideoDetailsAndEdit />
    </div>
  );
};

export default VideoDetailsPage;
