import React, { useState } from "react";
import NotificationList from "../components/Notifications/NotificationList";
import { styles } from "../styles/styles";
import CreateNotificationModal from "../components/Notifications/CreateNotificationModal";

const Notifications = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col gap-6 min-h-screen">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <button
          onClick={handleModal}
          className={`text-xs ${styles.bgColor} text-white px-4 py-3 rounded-lg`}
        >
          Create Notification
        </button>
      </div>
      <NotificationList />
      <CreateNotificationModal showModal={showModal} onclick={handleModal}/>
    </div>
  );
};

export default Notifications;
