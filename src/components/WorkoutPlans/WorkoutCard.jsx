import React from "react";
import { Workout } from "../../assets/export";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";

const WorkoutCard = () => {
  return (
    <Link to="/workout/1234">
      <div className="w-full rounded-2xl bg-white">
        <img src={"https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" className="w-full rounded-2xl brightness-75" />
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
