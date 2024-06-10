import React, { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { styles } from "../../styles/styles";
import { FiTrash } from "react-icons/fi";

const VideoWorkoutForm = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [exerciseName, setExerciseName] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [instructions, setInstructions] = useState([
    { title: "", content: "" },
  ]);

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

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleVideoChange = (event) => {
    setVideoFile(event.target.files[0]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log({
      videoTitle,
      videoDescription,
      thumbnail,
      videoFile,
      instructions,
    });
  };

  return (
    <div className="w-full p-6 bg-white rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-start gap-4"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full flex flex-col items-start gap-1">
            <label className="text-sm font-medium">Video Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
            />
            {thumbnail && (
              <img
                className="mt-2 w-40"
                src={URL.createObjectURL(thumbnail)}
                alt="Thumbnail Preview"
              />
            )}
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label className="text-sm font-medium">Workout video</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
            />
            {videoFile && (
              <video className="mt-2" width="320" height="240" controls>
                <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full flex flex-col items-start gap-1">
            <label className="text-sm font-medium">Video Title</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label className="text-sm font-medium">Exercise Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
              value={exerciseName}
              onChange={(e) => setExerciseName(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-start gap-1">
            <label className="text-sm font-medium">Video Category</label>
            <select
              name="subCategory"
              id="subCategory"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
            >
              <option value="">Select Category</option>
              {Object.keys(categories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label htmlFor="subCategory" className="text-sm font-medium">
              Video Sub-Category:
            </label>
            <select
              name="subCategory"
              id="subCategory"
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
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

        {selectedSubCategory === "free weight" || selectedSubCategory === "gym" ? (
          <div className="w-full">
            <div className="w-full flex flex-col items-start gap-1">
              <label className="text-sm font-medium">Sub-category</label>
              <select className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]">
                <option value="">Select Category</option>
                <option value="">Bicep</option>
                <option value="">Tricep</option>
                <option value="">Chest</option>
                <option value="">Back</option>
                <option value="">Shoulders</option>
              </select>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm font-medium">Video Description</label>
          <textarea
            className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
            value={videoDescription}
            rows={"5"}
            onChange={(e) => setVideoDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm font-medium">Video Instructions</label>

          {instructions.map((instruction, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between gap-6 lg:gap-3"
            >
              <input
                type="text"
                placeholder="Instruction Title"
                className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                value={instruction.title}
                onChange={(e) =>
                  handleInstructionChange(index, "title", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Instruction Content"
                className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
                value={instruction.content}
                onChange={(e) =>
                  handleInstructionChange(index, "content", e.target.value)
                }
              />
              {index === 0 ? (
                <button
                  type="button"
                  disabled
                  className="bg-red-100 text-white font-medium py-2.5 px-4 text-sm rounded-lg cursor-not-allowed"
                  onClick={() => removeInstructionField(index)}
                >
                  <FiTrash className="text-lg text-red-600" />
                </button>
              ) : (
                <button
                  type="button"
                  className="bg-red-100 text-white font-medium py-2.5 px-4 text-sm rounded-lg"
                  onClick={() => removeInstructionField(index)}
                >
                  <FiTrash className="text-lg text-red-600" />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className={`${styles.bgColor} text-white font-medium mt-1 py-2 px-3 rounded-lg text-[10px]`}
          onClick={addInstructionField}
        >
          Add Instruction
        </button>
        <div className="w-full py-4">
          <button
            type="submit"
            className={`${styles.bgColor} float-end text-white font-medium py-2.5 px-4 rounded-lg text-sm`}
          >
            Create Workout
          </button>
        </div>
      </form>
    </div>
  );
};

export default VideoWorkoutForm;
