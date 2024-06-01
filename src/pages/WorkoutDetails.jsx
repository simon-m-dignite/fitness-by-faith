import React from "react";
import { styles } from "../styles/styles";
import EditWorkoutForm from "../components/EditWorkout/EditWorkoutForm";

const WorkoutDetails = () => {
  return (
    <div className="w-full flex flex-col items-start gap-6">
      <div className="w-full flex itmes-center justify-between">
        <h1 className="text-xl font-semibold">Workout details</h1>
        <button
          className={`${styles.bgColor} text-white text-xs font-medium px-3 py-2 rounded-lg`}
        >
          Edit Workout
        </button>
      </div>
      <EditWorkoutForm/>
    </div>
  );
};

export default WorkoutDetails;
