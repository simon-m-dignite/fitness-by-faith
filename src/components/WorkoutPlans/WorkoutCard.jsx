import React from "react";
import { Workout } from "../../assets/export";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";

const WorkoutCard = ({id, title, description, thumbnail}) => {
  return (
    <Link to={`/workout/${id}`}>
      <div className="w-full rounded-2xl bg-white">
        <img src={thumbnail} alt="" className="w-full h-[350px] object-cover rounded-2xl brightness-75" />
        <div className="w-full px-4 flex flex-col justify-center items-start py-4 gap-2">
          <h1 className="text-xl font-medium text-[#64B5AC]">{title}</h1>
          <p className="text-xs font-normal">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
 