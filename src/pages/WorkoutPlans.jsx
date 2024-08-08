import React, { Fragment, useEffect, useState } from "react";
import WorkoutCard from "../components/WorkoutPlans/WorkoutCard";
import { Link } from "react-router-dom";
import { styles } from "../styles/styles";
import Axios from "../axios";
import Loader from "../components/Global/Loader";

const WorkoutPlans = () => {

  const [workoutData, setWorkoutData] = useState([])
  const [loading, setLoading] = useState(false)

  const getWorkouts = async() => {
    try{
      setLoading(true)
      const {data} = await Axios.get("workout/getAll")
      setWorkoutData(data?.data)
    }
    catch(error){
      console.log("Error : ", error)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    getWorkouts()
  },[])

  return (
    <div className="min-h-screen flex flex-col gap-6">
      {loading ? (
        <Loader/>
      ) : (
        <Fragment>
          <div className="w-full flex items-center justify-between">
            <h1 className="text-xl font-semibold">Workout Plans</h1>
            <Link
              to="/create-workout"
              className={`${styles.bgColor} text-white text-xs font-medium px-4 py-3 rounded-xl`}
            >
              Create Workout
            </Link>
          </div>
          <div className="w-full flex items-center justify-start gap-4">
            <button className="text-[12px] px-4 py-1 rounded-full bg-[#64B5AC] text-white font-medium transition-all duration-300">
              All
            </button>
            <button className="text-[12px] bg-gray-200 px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300">
              Yoga
            </button>
            <button className="text-[12px] bg-gray-200 px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300">
              Cardio
            </button>
            <button className="text-[12px] bg-gray-200 px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300">
              Lifting
            </button>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workoutData?.map((workOut, index) => (
              <WorkoutCard
                key={index}
                id={workOut._id}
                title={workOut.title}
                description={workOut.description}
                thumbnail={workOut.thumbnail}
              />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default WorkoutPlans;
