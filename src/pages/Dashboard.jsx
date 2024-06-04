import React, { useState } from "react";
import Analytics from "../components/Dashbaord/Analytics";
import AnalyticalChart from "../components/Dashbaord/AnalyticalChart";
import RecentUsersList from "../components/Dashbaord/RecentUsersList";
import { IoCalendarOutline } from "react-icons/io5";
import FilterCalendar from "../components/Dashbaord/FilterCalendar";

const Dashboard = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <button onClick={handleShowCalendar} className="text-xs font-medium px-4 py-2 rounded-full bg-gray-200 flex items-center justify-center gap-1">
          <IoCalendarOutline className="text-base" />
          Select Date
        </button>
        <FilterCalendar
          showCalendar={showCalendar}
          onclick={handleShowCalendar}
        />
      </div>
      <Analytics />
      <AnalyticalChart />
      <RecentUsersList />
    </div>
  );
};

export default Dashboard;

// total users, total revenue, total meal plans sold, total workout plans sold
