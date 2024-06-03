import React, { useState } from "react";
import CreateWorkoutForm from "../components/CreateWorkout/CreateWorkoutForm";
import WorkoutCreationForm from "../components/CreateWorkout/WorkoutCreationForm";
import CreateVideoBasedWorkoutForm from "../components/CreateWorkout/CreateVideoBasedWorkoutForm";
import { styles } from "../styles/styles";

const CreateWorkout = () => {
  const [imageBasedWorkout, setImageBasedWorkout] = useState(true);
  return (
    <div className="min-h-screen w-full">
      <div className="w-full flex flex-col lg:flex-row mb-6 lg:mb-2 items-start justify-between">
        <h1 className="text-xl font-semibold mb-6">Create Workout Plan</h1>
        <div className="flex items-start justify-end gap-3">
          <button
            onClick={() => setImageBasedWorkout(false)}
            className={imageBasedWorkout ? 'text-xs font-medium border-2 border-[#64B5AC] bg-gray-50 rounded-lg px-3 py-2 text-[#64B5AC]': `text-xs rounded-lg px-3 py-2.5 font-medium text-white ${styles.bgColor}`}
          >
            Video Based Workout
          </button>
          <button
            onClick={() => setImageBasedWorkout(true)}
            className={imageBasedWorkout ? `text-xs rounded-lg px-3 py-2.5 font-medium text-white ${styles.bgColor}`: 'text-xs font-medium border-2 border-[#64B5AC] rounded-lg px-3 py-2 text-[#64B5AC] bg-gray-50'}
          >
            Images Based Workout
          </button>
        </div>
      </div>
      {imageBasedWorkout ? (
        <WorkoutCreationForm />
      ) : (
        <CreateVideoBasedWorkoutForm />
      )}
    </div>
  );
};

export default CreateWorkout;
