import React from "react";
import { Workout } from "../../assets/export";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";

const WorkoutCard = () => {
  return (
    <Link to="/workout/1234">
      <div className="w-full rounded-2xl bg-white">
        <img src={Workout} alt="" className="w-full  rounded-2xl" />
        <div className="w-full px-4 flex flex-col justify-center items-start py-4 gap-2">
          <h1 className="text-xl font-medium text-[#64B5AC]">Exercise Name</h1>
          <p className="text-xs font-normal">
            The most soothing yoga exercise to make your body feel warm and
            fresh in morning. You can do this workout any where and every where.
          </p>
          {/* <div className="w-full flex gap-2">
            <Link to="/workout/update/12344" className={`text-xs ${styles.bgColor} text-white font-medium px-3 py-1.5 rounded-md`}>Edit</Link>
            <Link to="/workout/update/12344" className={`text-xs ${styles.bgColor} text-white font-medium px-3 py-1.5 rounded-md`}>Edit</Link>
            <button className={`text-xs bg-red-500 text-white font-medium px-3 py-1.5 rounded-md`}>Delete</button>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
