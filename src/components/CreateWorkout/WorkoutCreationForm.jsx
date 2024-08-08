import React, { Fragment, useRef, useState } from "react";
import { styles } from "../../styles/styles";
import { LuImagePlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import Loader from "../Global/Loader";
import { ErrorToaster, SuccessToaster } from "../Global/Toaster";

const WorkoutCreationForm = () => {
  const navigate = useNavigate()
  // const [workoutCategory, setWorkoutCategory] = useState("");
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [calorieBurn, setCalorieBurn] = useState("");
  // const [totalExercises, setTotalExercises] = useState("");
  const [imgAddress, setImgAddress] = useState('');
  
  const [imgLoading, setImgLoading] = useState(false);
  const [snippetLoading, setSnippetLoading] = useState(false);
  const [snippetErr, setSnippetErr] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)

  const [selectedBodyPart, setSelectedBodyPart] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const categories = {
    yoga: [],
    cardio: ["bodyweight cardio", "equipment-based cardio"],
    lifting: ["free weight", "gym"],
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(""); 
  };
  const subCategories = categories[selectedCategory] || [];

  console.log("Selected Sub-category:::", selectedSubCategory);

  const [numExercises, setNumExercises] = useState(0); 
  const [restBetween, setRestBetween] = useState(0);
  const [exerciseForms, setExerciseForms] = useState([{
    title: '', sets: '', time: '', reps: '', isTimeBased: false, imagePreview: '', 
  }]);

  const handleNumExercisesChange = (event) => {
    const newNumExercises = parseInt(event.target.value);
    if (newNumExercises >= 1) {
      setNumExercises(newNumExercises);
      setExerciseForms(
        Array(newNumExercises).fill({
          title: "",
          sets: "",
          reps: "",
          restBetweenSets: "",
          image: null,
          time: "",
        })
      );
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

  const handleExerciseImage = async (exerciseIndex, event) => {
    const updatedForms = [...exerciseForms];
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    // URL for the image preview
    const imagePreviewUrl = URL.createObjectURL(file);
    updatedForms[exerciseIndex].imagePreview = imagePreviewUrl;

    try{
      setSnippetLoading(true)
      const {data} = await axios.post("media/upload/image", formData)
      if(data.status === 200){
        setSnippetLoading(false)
        setSnippetErr(false)
        updatedForms[exerciseIndex] = {
          ...updatedForms[exerciseIndex],
          image: data?.data?.fileAddress,
        };
        setExerciseForms(updatedForms);
      }
    }
    catch(err){
      setSnippetErr(true)
      setSnippetLoading(false)
    console.log("🚀 ~ handleExerciseImage ~ err:", err)
    }
  };

  // const handleDeleteExercise = (index) => {
  //   const updatedForms = exerciseForms.filter(
  //     (_, formIndex) => formIndex !== index
  //   );
  //   setExerciseForms(updatedForms);
  // };

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

  // const addExerciseField = () => {
  //   setExerciseList([
  //     ...exerciseList,
  //     {
  //       id: nextId,
  //       title: "",
  //       sets: "",
  //       reps: "",
  //       restBetweenSets: "",
  //       image: null,
  //       time: "",
  //     },
  //   ]);
  //   setNextId(nextId + 1); // Increment nextId for the next exercise
  // };

  const removeExerciseField = (id) => {
    const updatedExerciseList = exerciseList.filter(
      (exercise) => exercise.id !== id
    );
    setExerciseList(updatedExerciseList);
  };

  // const handleExerciseChange = (id, field, value) => {
  //   const updatedExerciseList = exerciseList.map((exercise) => {
  //     if (exercise.id === id) {
  //       // Ensure the checkbox state is boolean
  //       const updatedValue =
  //         field === "isTimeBased" ? !exercise.isTimeBased : value;
  //       return { ...exercise, [field]: updatedValue };
  //     }
  //     return exercise;
  //   });
  //   setExerciseList(updatedExerciseList);
  // };

  // const handleImageChange = (id, event) => {
  //   const updatedExerciseList = exerciseList.map((exercise) => {
  //     if (exercise.id === id) {
  //       return { ...exercise, image: event.target.files[0] };
  //     }
  //     return exercise;
  //   });
  //   setExerciseList(updatedExerciseList);
  // };

  // const addExercise = () => {
  //   const newExercise = {
  //     title: exerciseTitle,
  //     sets: sets,
  //     reps: reps,
  //     restBetweenSets: restBetweenSets,
  //   };
  //   setExerciseList([...exerciseList, newExercise]);
  //   // setExerciseTitle("");
  //   setSets("");
  //   setReps("");
  //   // setRestBetweenSets("");
  // };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  
  
  const mapSubCategory = (subCategory) => {
    if (subCategory === "bodyweight cardio") return "BodyWeight";
    if (subCategory === "equipment-based cardio") return "Equipment";
    if (subCategory === "free weight") return "FreeWeight";
    if (subCategory === "gym") return "Gym";
    return subCategory; 
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }
    if ((selectedCategory === "lifting" || selectedCategory === "cardio") && !selectedSubCategory) {
      alert("Please select a sub-category.");
      return;
    }
    if (selectedSubCategory === "free weight" || selectedSubCategory === "gym") {
      if (!bodyPart) {
        alert("Please select a body part.");
        return;
      }
    }
    console.log("test mapping->",mapSubCategory(selectedSubCategory))
    const workoutData = {
      category: capitalizeFirstLetter(selectedCategory),
      title: workoutTitle,
      subCategory: mapSubCategory(selectedSubCategory),
      bodyPart: selectedBodyPart || "Chest", 
      description: workoutDescription,
      sets: 3, 
      totalTime: duration,
      breakTime: restBetween,
      calorieburn: calorieBurn,
      thumbnail: imgAddress,
      exercises: exerciseForms.map(({ title, sets, time, reps, image }) => ({
        "name":title,
        "sets":sets,
        // time,
        ...(reps ? { "reps": +reps } : { "time": +time }),
        "url":image,
        "category": "Legs",
        "calorieburn":100,
        "isActive": true,
      }))
    };

    try {
      setBtnLoading(true)
      const {data} = await axios.post("workout/create", workoutData);
      console.log("Workout created successfully:", data);
      if (data.status === 200) {
        SuccessToaster(data.message[0])
        setBtnLoading(false)
        navigate("/workout-plans")
      }
      else{
        setBtnLoading(false)
        ErrorToaster(data.message[0])
      }
    } catch (error) {
      console.error("Failed to create workout:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  // image uploading and image preview
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);
  const handleProfileImg = () => {
    fileInputRef.current.click();
  };

  const handleProfileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    
    if (file) {
      try {
        
        const base64String = await convertImageToBase64(file);
        setImage(base64String);
        // updateProfile(base64String);
        setImgLoading(true);
  
        const {data} = await axios.post("media/upload/image", formData,);
        if(data?.status === 200){
          setImgAddress(data?.data?.fileAddress);
          setImgLoading(false);
        }
        // console.log(base64String)
      } catch (error) {
        setImgLoading(false);
        console.error("Error->", error.message);
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
          {imgLoading ? (
            <Loader />
          ) : (
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
          )}
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

        {selectedSubCategory === "free weight" ||
        selectedSubCategory === "gym" ? (
          <div className="w-full">
            <div className="w-full flex flex-col items-start gap-1">
              <label className="text-sm font-medium">Sub-category</label>
              <select
                className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                value={selectedBodyPart}
                onChange={(e) => setSelectedBodyPart(e.target.value)}
              >
                <option value="">Select Body Part</option>
                <option value="Biceps">Biceps</option>
                <option value="Triceps">Triceps</option>
                <option value="Chest">Chest</option>
                <option value="Back">Back</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Legs">Legs</option>
              </select>
            </div>
          </div>
        ) : (
          <></>
        )}

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
              min={1}
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
              min={1}
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
              id="restBetween"
              value={restBetween}
              onChange={(e)=>setRestBetween(e.target.value)}
              min={1}
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
                  name="title"
                  className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                  onChange={(event) => handleExerciseChange2(index, event)}
                  value={exercise.title || ""}
                />
              </div>
              <div className="w-full flex flex-col gap-1 items-start">
                <label className="text-sm font-medium">Sets</label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                  name="sets"
                  onChange={(event) => handleExerciseChange2(index, event)}
                  value={exercise.sets || ""}
                  min={1}
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full flex flex-col gap-1 items-start">
                <div className="w-full flex items-center justify-between gap-4">
                  <label className="text-sm font-medium">
                    {exercise.isTimeBased ? "Time Duration" : "No. Reps"}
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
                {exercise.isTimeBased ? (
                  <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                    placeholder="Enter time in seconds"
                    name="time"
                    value={exercise.time || ""}
                    onChange={(event) => handleExerciseChange2(index, event)}
                    min={1}
                  />
                ) : (
                  <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                    placeholder="Enter no. of reps"
                    name="reps"
                    value={exercise.reps || ""}
                    onChange={(event) => handleExerciseChange2(index, event)}
                    min={1}
                  />
                )}
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="timeBased"
                    id="timeBased"
                    checked={exercise.isTimeBased}
                    onChange={(e) => {
                      const updatedForms = [...exerciseForms];
                      updatedForms[index].isTimeBased = e.target.checked;
                      setExerciseForms(updatedForms);
                    }}
                  />
                  <label htmlFor="timeBased" className="text-xs">
                    Is the exercise time based?
                  </label>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1 items-start">
                <label className="text-sm font-medium">Exercise Image</label>
                <div className="w-full flex justify-between ">
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full h-12 border rounded-lg mr-2 px-3 py-2 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                    onChange={(event) => handleExerciseImage(index, event)}
                  />
                  {exercise.imagePreview && (
                    <Fragment>
                      {snippetLoading ? (
                        <div>uploading...</div>
                      ) : (
                        <>
                        {snippetErr ?
                         <p className="text-red-700 text-[12px]">Upload failed: Make sure correct file type</p>:
                        <img
                        src={exercise.imagePreview}
                        alt="Preview"
                        className=" ml-2 w-14 h-14 object-cover"
                      />
                        }
                        </>
                      )}
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="">
          <button
            type="button"
            className={`${styles.bgColor} text-white font-medium text-[10px] px-3 py-2 rounded-lg`}
            onClick={addExerciseField}
          >
            Add More Exercises
          </button>
        </div> */}

        <div className="w-full flex items-center justify-end gap-4 py-4">
          <button
          disabled={btnLoading}
            type="submit"
            className={`${styles.bgColor} text-white font-medium text-sm px-4 py-2 rounded-lg`}
          >
            {btnLoading ? "Creating... " : "Create Workout"}
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
