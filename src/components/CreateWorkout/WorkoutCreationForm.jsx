import React, { Fragment, useRef, useState } from "react";
import { styles } from "../../styles/styles";
import { LuImagePlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import Loader from "../Global/Loader";
import { ErrorToaster, SuccessToaster } from "../Global/Toaster";

const WorkoutCreationForm = () => {
  const navigate = useNavigate()
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [calorieBurn, setCalorieBurn] = useState("");
  const [imgAddress, setImgAddress] = useState('');
  
  const [imgLoading, setImgLoading] = useState(false);
  const [snippetLoading, setSnippetLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false)

  const [snippetErr, setSnippetErr] = useState(false)
  const [subCategoryErr,setSubCategoryErr] = useState(null)
  const [categoryErr,setCategoryErr] = useState(null)
  const [bodyErr,SetBodyErr] = useState(null) 

  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  
  const [numExercises, setNumExercises] = useState(1);
  const [restBetween, setRestBetween] = useState(1);
  const [exerciseForms, setExerciseForms] = useState([{
    title: '', sets: 3, time: '', reps: '', isTimeBased: false, imagePreview: '', loading: false, error: false, 
  }]);
  console.log("🚀 ~ WorkoutCreationForm ~ exerciseForms:", exerciseForms)
  const [subCategory, setSubCategory] = useState("");

  const categories = {
    Yoga: [],
    Cardio: ["Bodyweight Cardio", "Equipment-Based Cardio"],
    Lifting: ["Free Weight", "Gym"],
  };

  const subCategories = categories[selectedCategory] || [];

  const handleSubCategory = (e) =>{
    setSubCategoryErr(null)
    setSelectedSubCategory(e.target.value)
    if (e.target.value === "Bodyweight Cardio") return setSubCategory("BodyWeight") ;
    if (e.target.value === "Equipment-based cardio") return setSubCategory("Equipment");
    if (e.target.value === "Free Weight") return setSubCategory("FreeWeight");
    if (e.target.value === "Gym") return setSubCategory("Gym");
  }
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(""); 
    setCategoryErr(null)
  };

  const handleNumExercisesChange = (event) => {
    const newNumExercises = parseInt(event.target.value);
    setNumExercises(newNumExercises);
    if (newNumExercises >= 1) {
      setExerciseForms(
        
        Array(newNumExercises).fill({
          title: "",
          sets: 3,
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
    console.log("🚀 ~ handleExerciseImage ~ exerciseIndex:", exerciseIndex)
    const updatedForms = [...exerciseForms];
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    // URL for the image preview
    const imagePreviewUrl = URL.createObjectURL(file);
    updatedForms[exerciseIndex].imagePreview = imagePreviewUrl;

    try{
      updatedForms[exerciseIndex].loading = true;
      updatedForms[exerciseIndex].error = false;
      const {data} = await axios.post("media/upload/image", formData)
      if(data.status === 200){
        updatedForms[exerciseIndex] = {
          ...updatedForms[exerciseIndex],
          image: data?.data?.fileAddress,
        };
        updatedForms[exerciseIndex].loading = false;
        updatedForms[exerciseIndex].error = false;
        setExerciseForms(updatedForms);
      }
    }
    catch(err){
      updatedForms[exerciseIndex].error = true;
      updatedForms[exerciseIndex].loading = false;
      console.log("🚀 ~ handleExerciseImage ~ err:", err)
    }
    finally{
      setExerciseForms(updatedForms);
    }
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

  const removeExerciseField = (id) => {
    const updatedExerciseList = exerciseList.filter(
      (exercise, index) => index+1 !== id
    );
    setExerciseList(updatedExerciseList);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submit Handle===")
    if (!selectedCategory) {
      setCategoryErr("Please select a category.");
      return;
    }
    if ((selectedCategory === "Lifting" || selectedCategory === "Cardio") && !selectedSubCategory) {
      setSubCategoryErr("Please select a sub-category.");
      return;
    }
    if (selectedSubCategory === "Free Weight" || selectedSubCategory === "Gym") {
      if (!selectedBodyPart) {
        SetBodyErr("Please select a body part.");
        return;
      }
    }
    
    const workoutData = {
      category: selectedCategory,
      title: workoutTitle,
      subCategory: subCategory,
      bodyPart: selectedBodyPart || "Chest", 
      description: workoutDescription,
      sets: 3, 
      totalTime: duration,
      breakTime: restBetween,
      calorieburn: calorieBurn,
      thumbnail: imgAddress,
      exercises: exerciseForms.map(({ title, sets, time, reps, image }) => ({
        "name":title,
        "sets":3,
        // time,
        ...(reps ? { "reps": +reps } : { "time": +time }),
        "url":image,
        "category": "Legs",
        "calorieburn":100,
        "isActive": true,
      }))
    };
    console.log("🚀 ~ handleSubmit ~ workoutData:", workoutData)

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
        setImgLoading(true);
  
        const {data} = await axios.post("media/upload/image", formData,);
        if(data?.status === 200){
          setImgAddress(data?.data?.fileAddress);
          setImgLoading(false);
        }
      } catch (error) {
        setImgLoading(false);
        console.error("Error->", error.message);
      }
    }
  };

  return (
    <div className="w-full bg-white rounded-xl p-6">
      <form
        onSubmit={(e)=>handleSubmit(e)}
        className="w-full flex flex-col items-start gap-4"
      >
        <div className="w-full">
          {imgLoading ? (
            <div
            onClick={handleProfileImg}
            className="w-full h-60 md:h-80 bg-white border border-[#eaeaea] cursor-pointer rounded-xl flex flex-col gap-1 justify-center items-center"
          >
            <Loader />
          </div>
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
              {imgAddress ? (
                <img
                  src={imgAddress}
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
            {categoryErr && <p className="text-[12px] text-red-700">{categoryErr}</p>}
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-start gap-1">
            <label className="text-sm font-medium">Sub-Category</label>
            <select
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              value={selectedSubCategory}
              onChange={(e) => handleSubCategory(e)}
            >
              <option value="">Select Subcategory</option>
              {subCategories.map((subCategory) => (
                <option key={subCategory} value={subCategory}>
                  {subCategory}
                </option>
              ))}
            </select>
            {subCategoryErr && <p className="text-[12px] text-red-700">{subCategoryErr}</p>}
          </div>
        </div>

        {selectedSubCategory === "Free Weight" ||
        selectedSubCategory === "Gym" ? (
          <div className="w-full">
            <div className="w-full flex flex-col items-start gap-1">
              <label className="text-sm font-medium">Sub-category</label>
              <select
                className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                value={selectedBodyPart}
                onChange={(e) => {setSelectedBodyPart(e.target.value); SetBodyErr(null)}}
              >
                <option value="">Select Body Part</option>
                <option value="Biceps">Biceps</option>
                <option value="Triceps">Triceps</option>
                <option value="Chest">Chest</option>
                <option value="Back">Back</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Legs">Legs</option>
              </select>
              {bodyErr && <p className="text-[12px] text-red-700">{bodyErr}</p>}
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
              onChange={(e)=>handleNumExercisesChange(e)}
              min={1}
            />
          </div>
          <div className="w-full col-span-2 md:col-span-1 flex flex-col gap-1 items-start">
            <label className="text-sm font-medium">Rest Between Sets</label>
            <input
              type="number"
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              id="restBetween"
              placeholder="Enter time in seconds"
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
                      onClick={() => removeExerciseField(index)}
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
                disabled
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
                      {exercise.loading ? (
                        <div>uploading...</div>
                      ) : (
                        <>
                        {exercise.error ?
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
