import React from "react";
import { NotificationIcon } from "../../assets/export";

const NotificationCard = () => {
  return (
    <div className="w-full flex items-center px-4 py-2 bg-gray-50 rounded-lg gap-3">
      <img src={NotificationIcon} alt="" className="w-24 h-24" />
      <div className="flex flex-col gap-1 relative">
        <span className="absolute text-xs font-normal bottom-0 right-0 md:right-4 md:top-1">Monday 04, 2024</span>
        <p className="text-base font-medium">Notification title</p>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, esse?</p>
        <div className="flex items-center gap-6">
            <span className="text-xs font-medium">Sent to: All</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
