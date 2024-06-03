import React, { useState } from "react";
import { styles } from "../styles/styles";
import EditWorkoutForm from "../components/EditWorkout/EditWorkoutForm";

const WorkoutDetails = () => {
  const [editable, setEditable] = useState(false);

  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-full flex itmes-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Workout details</h1>
        <button
          onClick={() => setEditable(true)}
          className={`${styles.bgColor} text-white text-xs font-medium px-3 py-2 rounded-lg`}
        >
          Edit Workout
        </button>
      </div>
      <EditWorkoutForm editable={editable} setEditable={setEditable} />

      {editable && (
        <div className="w-full flex justify-end bg-white rounded-b-xl p-6 items-center gap-4">
          <button
            onClick={() => setEditable(false)}
            className={`${styles.bgColor} text-white text-xs font-medium px-3 py-2 rounded-lg`}
          >
            Update Workout
          </button>
          <button
            onClick={() => setEditable(false)}
            className={`bg-red-600 text-white text-xs font-medium px-3 py-2 rounded-lg`}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkoutDetails;
