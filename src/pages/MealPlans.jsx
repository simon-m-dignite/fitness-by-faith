import React from "react";
import MealCard from "../components/MealPlans/MealCard";
import { Link } from "react-router-dom";
import { styles } from "../styles/styles";

const MealPlans = () => {
  return (
    <div className="flex flex-col gap-3 min-h-screen">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-semibold">Meal Plans</h1>
        <Link
          to="/create-meal-plan"
          className={`${styles.bgColor} text-white text-xs font-medium px-4 py-3 rounded-xl`}
        >
          Create Meal Plan
        </Link>
      </div>
      <div className="w-full flex items-center justify-start gap-4">
        <div className="w-full flex items-center justify-start gap-4"> 
          <button className="text-[12px] px-4 py-1 rounded-full bg-[#64B5AC] text-white font-medium transition-all duration-300">
            All
          </button>
          <button className="text-[12px] bg-gray-200 px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300">
            Hight Protein
          </button>
          <button className="text-[12px] bg-gray-200 px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300">
            Low Carbs
          </button>
          <button className="text-[12px] bg-gray-200 px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300">
            High Carbs
          </button>
          <button className="text-[12px] bg-gray-200 px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300">
            Vegan
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
      </div>
    </div>
  );
};

export default MealPlans;
