import React from "react";
import { NotificationIcon } from "../../assets/export";

const NotificationCard = ({notification}) => {
  const date = new Date(notification?.createdAt);
const options = { weekday: 'long', day: '2-digit', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
  console.log("🚀 ~ NotificationCard ~ formattedDate:", formattedDate)
  return (
    <div className="w-full flex items-center px-4 py-2 bg-gray-50 rounded-lg gap-3">
      {/* <img src={notification?.url} alt="" className="w-24 h-24" /> */}
      <div className="flex flex-col gap-1 relative min-w-[410px]">
        <span className="absolute text-xs font-normal bottom-0 right-0 md:right-4 md:top-1">{formattedDate}</span>
        <p className="text-base font-medium">{notification?.title}</p>
        <p className="text-sm text-gray-400">{notification?.message}</p>
        {/* <div className="flex items-center gap-6">
            <span className="text-xs font-medium">Sent to: All</span>
        </div> */}
      </div>
    </div>
  );
};

export default NotificationCard;
