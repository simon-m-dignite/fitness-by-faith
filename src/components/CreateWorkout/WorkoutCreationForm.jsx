import React, { useRef, useState } from "react";
import { styles } from "../../styles/styles";
import { LuImagePlus } from "react-icons/lu";
import { Link } from "react-router-dom";

const WorkoutCreationForm = () => {
  const [workoutCategory, setWorkoutCategory] = useState("");
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [calorieBurn, setCalorieBurn] = useState("");
  const [totalExercises, setTotalExercises] = useState("");
  const [isTimeBased, setIsTimeBased] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const categories = {
    yoga: [],
    cardio: ["bodyweight cardio", "equipment-based cardio"],
    lifting: ["free weight", "gym"],
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(""); // Reset subcategory on category change
  };
  const subCategories = categories[selectedCategory] || [];

  const [numExercises, setNumExercises] = useState(0); // Initial state for number of exercises
  const [exerciseForms, setExerciseForms] = useState([]); // Array to store exercise forms
  const handleNumExercisesChange = (event) => {
    const newNumExercises = parseInt(event.target.value);
    if (newNumExercises >= 1) {
      // Enforce minimum of 1 exercise
      setNumExercises(newNumExercises);
      // Reset exercise forms on number change
      setExerciseForms(Array(newNumExercises).fill({}));
    }
  };

  const handleExerciseChange2 = (exerciseIndex, event) => {
    const updatedForms = [...exerciseForms];
    updatedForms[exerciseIndex] = {
      ...updatedForms[exerciseIndex],
      [event.target.name]: event.target.value,
    };
    setExerciseForms(updatedForms);
  };
  const handleDeleteExercise = (index) => {
    const updatedForms = exerciseForms.filter((_, formIndex) => formIndex !== index);
    setExerciseForms(updatedForms);
  };

  const [exerciseList, setExerciseList] = useState([
    {
      title: "",
      sets: "",
      reps: "",
      restBetweenSets: "",
      image: null,
      time: "",
    },
  ]);
  const [nextId, setNextId] = useState(2);

  const addExerciseField = () => {
    setExerciseList([
      ...exerciseList,
      {
        id: nextId,
        title: "",
        sets: "",
        reps: "",
        restBetweenSets: "",
        image: null,
        time: "",
      },
    ]);
    setNextId(nextId + 1); // Increment nextId for the next exercise
  };

  const removeExerciseField = (id) => {
    const updatedExerciseList = exerciseList.filter(
      (exercise) => exercise.id !== id
    );
    setExerciseList(updatedExerciseList);
  };

  const handleExerciseChange = (id, field, value) => {
    const updatedExerciseList = exerciseList.map((exercise) => {
      if (exercise.id === id) {
        // Ensure the checkbox state is boolean
        const updatedValue =
          field === "isTimeBased" ? !exercise.isTimeBased : value;
        return { ...exercise, [field]: updatedValue };
      }
      return exercise;
    });
    setExerciseList(updatedExerciseList);
  };

  const handleImageChange = (id, event) => {
    const updatedExerciseList = exerciseList.map((exercise) => {
      if (exercise.id === id) {
        return { ...exercise, image: event.target.files[0] };
      }
      return exercise;
    });
    setExerciseList(updatedExerciseList);
  };

  const addExercise = () => {
    const newExercise = {
      title: exerciseTitle,
      sets: sets,
      reps: reps,
      restBetweenSets: restBetweenSets,
    };
    setExerciseList([...exerciseList, newExercise]);
    setExerciseTitle("");
    setSets("");
    setReps("");
    setRestBetweenSets("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to server
    console.log({
      workoutCategory,
      workoutTitle,
      workoutDescription,
      duration,
      calorieBurn,
      totalExercises,
      exerciseList,
    });
  };

  // image uploading and image preview
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const handleProfileImg = () => {
    fileInputRef.current.click();
  };

  const handleProfileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const base64String = await convertImageToBase64(file);
        setImage(base64String);
        // updateProfile(base64String);

        // console.log(base64String)
      } catch (error) {
        console.error("Error converting image to base64:", error.message);
      }
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result.split(",")[1]; // Get base64 string without data:image part
        resolve(base64String);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="w-full bg-white rounded-xl p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-start gap-4"
      >
        <div className="w-full">
          <div
            onClick={handleProfileImg}
            className="w-full h-60 md:h-80 bg-white border border-[#eaeaea] cursor-pointer rounded-xl flex flex-col gap-1 justify-center items-center"
          >
            <input
              ref={fileInputRef}
              id="cat-image-add"
              className="w-full hidden h-10 rounded-full text-sm  outline-none border-none px-4"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => handleProfileChange(e)}
            />
            {image ? (
              <img
                src={`data:image/webp;base64,${image && image}`}
                className="w-full h-full rounded-xl object-contain"
              />
            ) : (
              <div className="w-auto flex flex-col gap-3 justify-center items-center">
                <LuImagePlus className="text-4xl font-medium text-gray-400" />
                <span className="text-sm font-normal text-gray-400">
                  Please upload workout thumbnail.
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm font-medium">Workout Title</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
            value={workoutTitle}
            onChange={(e) => setWorkoutTitle(e.target.value)}
          />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1 flex flex-col items-start gap-1">
            <label className="text-sm font-medium">Workout Category</label>
            <select
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              {Object.keys(categories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-start gap-1">
            <label className="text-sm font-medium">Sub-Category</label>
            <select
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
            >
              <option value="">Select Subcategory</option>
              {subCategories.map((subCategory) => (
                <option key={subCategory} value={subCategory}>
                  {subCategory}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1 flex flex-col items-start gap-1">
            <label className="text-sm font-medium">
              Estimated Calorie Burn
            </label>
            <input
              type="number"
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              value={calorieBurn}
              onChange={(e) => setCalorieBurn(e.target.value)}
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-start gap-1">
            <label className="text-sm font-medium">
              Duration <span className="text-xs text-gray-400">(minutes)</span>
            </label>
            <input
              type="number"
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm font-medium">Workout Description</label>
          <textarea
            className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
            value={workoutDescription}
            rows={"5"}
            onChange={(e) => setWorkoutDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full col-span-2 md:col-span-1 flex flex-col items-start gap-1">
            <label className="text-sm font-medium">Total Exercises</label>
            <input
              type="number"
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              id="numExercises"
              value={numExercises}
              onChange={handleNumExercisesChange}
              min={1}
            />
          </div>
          <div className="w-full col-span-2 md:col-span-1 flex flex-col gap-1 items-start">
            <label className="text-sm font-medium">Rest Between Sets</label>
            <input
              type="number"
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              // value={exercise.restBetweenSets}
              // onChange={(e) =>
              //   handleExerciseChange(index, "restBetweenSets", e.target.value)
              // }
            />
          </div>
        </div>

        {exerciseForms.map((exercise, index) => (
          <div key={index} className="w-full flex flex-col items-start gap-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full flex flex-col gap-1 items-start">
                <label className="text-sm font-medium flex items-center justify-start gap-4">
                  <span>Exercise {index + 1} Title</span>
                  {index >= 1 ? (
                    <button
                      type="button"
                      className="text-red-600 font-medium text-xs"
                      onClick={() => removeExerciseField(exercise.id)}
                    >
                      Delete Exercise
                    </button>
                  ) : (
                    <></>
                  )}
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                  value={exercise.title}
                  onChange={(e) =>
                    handleExerciseChange(index, "title", e.target.value)
                  }
                />
              </div>
              <div className="w-full flex flex-col gap-1 items-start">
                <label className="text-sm font-medium">Sets</label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                  value={exercise.sets}
                  onChange={(e) =>
                    handleExerciseChange(index, "sets", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full flex flex-col gap-1 items-start">
                <div className="w-full flex items-center justify-between gap-4">
                  <label className="text-sm font-medium">
                    {isTimeBased ? "Time Duration" : "No. Reps"}
                  </label>
                  {/* <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      name="timeBased"
                      id="timeBased"
                      checked={isTimeBased}
                      onChange={(e) => setIsTimeBased(e.target.checked)}
                    />
                    <label htmlFor="timeBased" className="text-sm">
                      Is the exercise time based?
                    </label>
                  </div> */}
                </div>
                {isTimeBased ? (
                  <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                    value={exercise.time}
                    placeholder="Enter time in seconds"
                    onChange={(e) =>
                      handleExerciseChange(index, "reps", e.target.value)
                    }
                  />
                ) : (
                  <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                    value={exercise.reps}
                    placeholder="Enter no. of reps"
                    onChange={(e) =>
                      handleExerciseChange(index, "reps", e.target.value)
                    }
                  />
                )}
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="timeBased"
                    id="timeBased"
                    checked={isTimeBased}
                    onChange={(e) => setIsTimeBased(e.target.checked)}
                  />
                  <label htmlFor="timeBased" className="text-xs">
                    Is the exercise time based?
                  </label>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1 items-start">
                <label className="text-sm font-medium">Exercise Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                  onChange={(e) => handleImageChange(index, e)}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="">
          <button
            type="button"
            className={`${styles.bgColor} text-white font-medium text-[10px] px-3 py-2 rounded-lg`}
            onClick={addExerciseField}
          >
            Add More Exercises
          </button>
        </div>

        <div className="w-full flex items-center justify-end gap-4 py-4">
          <button
            type="submit"
            className={`${styles.bgColor} text-white font-medium text-sm px-4 py-2 rounded-lg`}
          >
            Create Workout
          </button>
          <Link
            to="/workout-plans"
            className={`bg-red-500 text-white font-medium text-sm px-4 py-2 rounded-lg`}
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default WorkoutCreationForm;
