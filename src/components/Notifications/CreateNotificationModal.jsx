import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { styles } from "../../styles/styles";
import TextField from "../Global/TextField";

const CreateNotificationModal = ({ showModal, onclick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onclick();
  };

  return (
    showModal && (
      <div className="w-screen h-screen fixed top-0 bottom-0 right-0 left-0 px-4 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-[530px] p-4 lg:px-6 lg:py-5 h-[420px] bg-white rounded-lg relative flex flex-col justify-between"
        >
          <button className="absolute top-5 right-6" onClick={onclick}>
            <IoIosCloseCircle className="w-6 h-6 text-gray-400" />
          </button>
          <h1 className="font-semibold">Create Push Notification</h1>
          <TextField label={"Title"} inputType={"text"} />
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={"7"}
              className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
            ></textarea>
          </div>
          {/* <div className="w-full grid grid-cols-2">
            <div className="col-span-1 flex items-center gap-1">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-4 h-4 text-[#64B5AC] accent-[#64B5AC] bg-gray-100 border-gray-300 rounded focus:ring-[#64B5AC] dark:focus:ring-[#64B5AC] dark:ring-offset-gray-800 "
              />
              <label htmlFor="" className="text-sm font-normal">
                Send to All
              </label>
            </div>
            <div className="col-span-1 flex items-center gap-1">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-4 h-4 text-[#64B5AC] accent-[#64B5AC] bg-gray-100 border-gray-300 rounded focus:ring-[#64B5AC] dark:focus:ring-[#64B5AC] dark:ring-offset-gray-800 "
              />
              <label htmlFor="" className="text-sm font-normal">
                Send to Specific User
              </label>
            </div>
          </div> */}
          <div className="w-full">
            <button
              className={`${styles.bgColor} text-white font-medium text-sm rounded-lg w-full py-2.5`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default CreateNotificationModal;
