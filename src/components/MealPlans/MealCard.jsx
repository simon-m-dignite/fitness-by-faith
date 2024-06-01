import React from "react";
import { MealImage } from "../../assets/export";
import { Link } from "react-router-dom";

const MealCard = () => {
  return (
    <Link to="/meal/1234">
      <div className="w-full h-auto md:h-[265px] p-4 rounded-2xl flex flex-col md:flex-row gap-y-4 bg-white">
        <img src={MealImage} alt="" className="h-[265px] md:h-full w-full md:w-[180px]" />
        <div className="h-full px-4 flex flex-col justify-center gap-3">
          <p className="text-xs font-normal text-[#64B5AC]">Vegans</p>
          <h1 className="text-lg font-medium text-[#64B5AC]">
            Cauliflower Fried Rice
          </h1>
          <p className="text-xs font-normal">
            Boil 2 eggs for 15 minutes and add 3 tomatoes in the fry pan which
            should be burning on 130 C.
          </p>
          <div className="w-full grid grid-cols-2">
            <p className="text-[#7D7D7D] text-xs font-normal">Prep. Time</p>
            <p className="text-[#7D7D7D] text-xs font-normal">15 mins</p>
          </div>
          <div className="w-full grid grid-cols-2">
            <p className="text-[#7D7D7D] text-xs font-normal">Serving Size</p>
            <p className="text-[#7D7D7D] text-xs font-normal">1 Plate</p>
          </div>
          <div className="w-full grid grid-cols-2">
            <p className="text-[#7D7D7D] text-xs font-normal">No. of Serving</p>
            <p className="text-[#7D7D7D] text-xs font-normal">2</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MealCard;
