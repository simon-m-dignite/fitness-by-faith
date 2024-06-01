import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";

const Analytics = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="w-full rounded-xl px-6 py-8 flex flex-col items-center justify-center gap-2.5 bg-white">
        <div className="w-16 h-16 bg-[#dcefed] rounded-full flex items-center justify-center">
          <FaUsers className="text-4xl text-[#64B5AC]" />
        </div>
        <h3 className="text-sm font-medium text-gray-400">Total Users</h3>
        <h1 className="text-3xl font-medium">1,023</h1>
      </div>
      <div className="w-full bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-2.5">
        <div className="w-16 h-16 bg-[#dcefed] rounded-full flex items-center justify-center">
          <FaSackDollar className="text-3xl text-[#64B5AC]" />
        </div>
        <h3 className="text-sm font-medium text-gray-400">Total Revenue</h3>
        <h1 className="text-3xl font-medium">$2,567</h1>
      </div>
      <div className="w-full bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-2.5">
        <div className="w-16 h-16 bg-[#dcefed] rounded-full flex items-center justify-center">
          <FaDumbbell className="text-4xl text-[#64B5AC]" />
        </div>
        <h3 className="text-sm font-medium text-gray-400">
          Workout Plans Sold
        </h3>
        <h1 className="text-3xl font-medium">2,123</h1>
      </div>
      <div className="w-full bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-2.5">
        <div className="w-16 h-16 bg-[#dcefed] rounded-full flex items-center justify-center">
          <GiMeal className="text-4xl text-[#64B5AC]" />
        </div>
        <h3 className="text-sm font-medium text-gray-400">Meal Plans Sold</h3>
        <h1 className="text-3xl font-medium">903</h1>
      </div>
    </div>
  );
};

export default Analytics;
