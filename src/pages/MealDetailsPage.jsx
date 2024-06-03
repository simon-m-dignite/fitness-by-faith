import React, { useRef, useState } from "react";
import { styles } from "../styles/styles";
import { LuImagePlus } from "react-icons/lu";

const MealDetailsPage = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const [instructions, setInstructions] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add new instruction to the list
    if (inputValue.trim() !== "") {
      setInstructions([...instructions, inputValue]);
      setInputValue("");
    }
  };
  const [mealDetails, setMealDetails] = useState({
    title: "Sample Meal",
    description: "Lorem ipsum dolor sit amet",
    category: "Select Category",
    carbs: 0,
    fat: 0,
    protein: 0,
    calories: 0,
    prepTime: 0,
    servingSize: 0,
    numberOfServings: 0,
    ingredients: [],
    instructions: [],
  });

  const [editable, setEditable] = useState(false);

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMealDetails({
      ...mealDetails,
      [name]: value,
    });
  };

  const handleUpdateMeal = () => {
    console.log("Meal updated:", mealDetails);
    setEditable(false);
  };

  return (
    <div className="">
      {editable ? (
        <h1 className="text-xl font-semibold mb-4">Edit Meal</h1>
      ) : (
        <h1 className="text-xl font-semibold mb-4">Meal Details</h1>
      )}
      <form className="w-full bg-white p-6 rounded-xl">
        <div className="w-full">
          {editable ? (
            <div
              onClick={handleProfileImg}
              className="w-full h-60 md:h-96 mb-6 bg-white border border-[#eaeaea] cursor-pointer rounded-xl flex flex-col gap-1 justify-center items-center"
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
                    Please provide the Image in jpg or png format.
                  </span>
                </div>
              )}
            </div>
          ) : (
            <img
              src="https://images.unsplash.com/photo-1576064535185-9f6e3f24b63e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-auto md:h-[50vh] rounded-xl mb-6"
            />
          )}
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="col-span-2 lg:col-span-1">
            <label className="text-sm font-medium">Meal Title</label>
            <input
              type="text"
              name="title"
              value={mealDetails.title}
              onChange={handleChange}
              className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
                !editable && "bg-gray-50"
              }`}
              disabled={!editable}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="text-sm font-medium">Meal Category</label>
            <select
              name="category"
              value={mealDetails.category}
              onChange={handleChange}
              className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
                !editable && "bg-gray-50"
              }`}
              disabled={!editable}
            >
              <option value="Select Category">Select Category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="text-sm font-medium">Carbs (g)</label>
            <input
              type="number"
              name="carbs"
              value={mealDetails.carbs}
              onChange={handleChange}
              className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
                !editable && "bg-gray-50"
              }`}
              disabled={!editable}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="text-sm font-medium">Fat (g)</label>
            <input
              type="number"
              name="fat"
              value={mealDetails.fat}
              onChange={handleChange}
              className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
                !editable && "bg-gray-50"
              }`}
              disabled={!editable}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="text-sm font-medium">Protein (g)</label>
            <input
              type="number"
              name="protein"
              value={mealDetails.protein}
              onChange={handleChange}
              className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
                !editable && "bg-gray-50"
              }`}
              disabled={!editable}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="text-sm font-medium">Calories</label>
            <input
              type="number"
              name="calories"
              value={mealDetails.calories}
              onChange={handleChange}
              className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
                !editable && "bg-gray-50"
              }`}
              disabled={!editable}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="text-sm font-medium">Prep. Time (min)</label>
            <input
              type="number"
              name="prepTime"
              value={mealDetails.prepTime}
              onChange={handleChange}
              className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
                !editable && "bg-gray-50"
              }`}
              disabled={!editable}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="text-sm font-medium">Serving Size</label>
            <input
              type="number"
              name="servingSize"
              value={mealDetails.servingSize}
              onChange={handleChange}
              className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
                !editable && "bg-gray-50"
              }`}
              disabled={!editable}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="text-sm font-medium">No. of Servings</label>
            <input
              type="number"
              name="numberOfServings"
              value={mealDetails.numberOfServings}
              onChange={handleChange}
              className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
                !editable && "bg-gray-50"
              }`}
              disabled={!editable}
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="text-sm font-medium">Ingredients</label>
          <textarea
            name="ingredients"
            value={mealDetails.ingredients}
            onChange={handleChange}
            className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
              !editable && "bg-gray-50"
            }`}
            disabled={!editable}
          />
        </div>
        <div className="mb-6">
          <label className="text-sm font-medium">Instructions</label>
          <textarea
            name="instructions"
            value={mealDetails.instructions}
            onChange={handleChange}
            className={`appearance-none w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC] ${
              !editable && "bg-gray-50"
            }`}
            disabled={!editable}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full">
            {editable ? (
              <button
                type="button"
                className={`${styles.bgColor} text-white font-medium py-2 px-4 rounded-lg text-sm focus:outline-none focus:shadow-outline`}
                onClick={handleUpdateMeal}
              >
                Update Meal
              </button>
            ) : (
              <button
                type="button"
                className={`${styles.bgColor} text-white font-medium py-2 px-4 rounded-lg text-sm focus:outline-none focus:shadow-outline`}
                onClick={toggleEditable}
              >
                Edit Meal
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default MealDetailsPage;
