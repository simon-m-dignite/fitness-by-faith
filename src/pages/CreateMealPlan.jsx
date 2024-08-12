import React, { useRef, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import TextField from "../components/Global/TextField";
import { styles } from "../styles/styles";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";

const CreateMealPlan = () => {
  // Image:
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const [instructions, setInstructions] = useState([
    { title: "", content: "" },
  ]);

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
    if (inputValue.trim() !== "") {
      setInstructions([...instructions, inputValue]);
      setIngredients([...ingredients, ingredient]);
      setInputValue("");
      setIngredient("");
    }
  };

  const handleInstructionChange = (index, field, value) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index][field] = value;
    setInstructions(updatedInstructions);
  };

  const addInstructionField = () => {
    setInstructions([...instructions, { title: "", content: "" }]);
  };

  const removeInstructionField = (index) => {
    const updatedInstructions = [...instructions];
    updatedInstructions.splice(index, 1);
    setInstructions(updatedInstructions);
  };

  //
  const [ingredients, setIngredients] = useState([{ title: "", content: "" }]);

  const handleIngredientChange = (index, field, value) => {
    const updatedInstructions = [...ingredients];
    updatedInstructions[index][field] = value;
    setIngredients(updatedInstructions);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, { title: "", content: "" }]);
  };

  const removeIngredientField = (index) => {
    const updatedInstructions = [...ingredients];
    updatedInstructions.splice(index, 1);
    setIngredients(updatedInstructions);
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-6 items-start">
      <h1 className="text-xl font-semibold">Create a Meal Plan</h1>
      <form
        onSubmit={handleFormSubmit}
        className="w-full bg-white p-6 rounded-xl flex flex-col gap-6 items-start"
      >
        <div className="w-full">
          <div
            onClick={handleProfileImg}
            className="w-full h-60 md:h-96 bg-white border border-[#eaeaea] cursor-pointer rounded-xl flex flex-col gap-1 justify-center items-center"
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
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <TextField
                inputType={"text"}
                label={"Meal Title"}
                placeholder={"Title"}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="meal-category" className="text-sm font-medium">
                Meal Category
              </label>
              <select
                name="meal-category"
                id="meal-category"
                className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              >
                <option selected value="">
                  Choose a category
                </option>
                <option value="Vegans">Vegans</option>
                <option value="LowCarbs">Low carbs</option>
                <option value="HighCarbs">High carbs</option>
                <option value="HighProtein">High Protein</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={"5"}
              placeholder="Write some description..."
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
            ></textarea>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <TextField
                inputType={"text"}
                label={"Prep. Time"}
                placeholder={"10 mins"}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <TextField
                inputType={"text"}
                label={"Serving Size"}
                placeholder={"1 Plate"}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <TextField
                inputType={"text"}
                label={"No. of Serving"}
                placeholder={"2,3,4..."}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <TextField
                inputType={"text"}
                label={"Enter Carbs"}
                placeholder={"31.1 g"}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <TextField
                inputType={"text"}
                label={"Enter Fat"}
                placeholder={"31.1g"}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <TextField
                inputType={"text"}
                label={"Enter Protien"}
                placeholder={"31.1g"}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full">
              <TextField
                inputType={"text"}
                label={"Enter Calories"}
                placeholder={"31.1g"}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full flex flex-col items-start gap-1">
              <div className="w-full flex items-center justify-between">
                <label className="text-sm font-medium">Instructions</label>
                <button
                  type="button"
                  className={`text-xs font-medium underline`}
                  onClick={addInstructionField}
                >
                  Add Instruction
                </button>
              </div>
              {instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between gap-6 lg:gap-3"
                >
                  <input
                    type="text"
                    placeholder="Instruction"
                    className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                    value={instruction.content}
                    onChange={(e) =>
                      handleInstructionChange(index, "content", e.target.value)
                    }
                  />
                  <div>
                    <button
                      type="button"
                      className="bg-red-100 text-white font-medium py-3 px-4 text-sm rounded-lg"
                      onClick={() => removeInstructionField(index)}
                    >
                      <FiTrash className="text-lg text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <div className="w-full flex items-center justify-between">
                <label className="text-sm font-medium">Ingredients</label>
                <button
                  type="button"
                  className={`text-xs font-medium underline`}
                  onClick={addIngredientField}
                >
                  Add Ingredient
                </button>
              </div>
              {ingredients.map((instruction, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between gap-6 lg:gap-3"
                >
                  <input
                    type="text"
                    placeholder="Instruction"
                    className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                    value={instruction.content}
                    onChange={(e) =>
                      handleIngredientChange(index, "content", e.target.value)
                    }
                  />
                  <div>
                    <button
                      type="button"
                      className="bg-red-100 text-white font-medium py-3 px-4 text-sm rounded-lg"
                      onClick={() => removeIngredientField(index)}
                    >
                      <FiTrash className="text-lg text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex items-center justify-end gap-4">
            <button
              className={`text-sm font-medium text-white ${styles.bgColor} rounded-lg px-4 py-2`}
            >
              Create Meal
            </button>
            <button
              className={`text-sm font-medium text-white bg-red-600 rounded-lg px-4 py-2`}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateMealPlan;
