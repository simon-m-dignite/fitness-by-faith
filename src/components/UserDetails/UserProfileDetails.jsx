import React from "react";

const UserProfileDetails = () => {
  return (
    <div className="flex flex-col gap-6 bg-white p-6 lg:p-10 rounded-xl w-full lg:w-1/2">

      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="block rounded-full w-20 h-20"
        />
        <div className="w-full flex items-center justify-between">
        <h1 className="text-base font-medium">Jon Doe</h1>
        <span className="text-xs bg-emerald-100 px-3 py-1 rounded-full font-medium text-emerald-600">Standard Plan</span>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium">Name: </p>
            <div className="w-full py-3 rounded-lg bg-gray-50 text-center text-sm text-gray-400">
                John Doe
            </div>
        </div>
        <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium">Email: </p>
            <div className="w-full py-3 rounded-lg bg-gray-50 text-center text-sm text-gray-400">
                johndoe@gmail.com
            </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium">Gender: </p>
            <div className="w-full py-3 rounded-lg bg-gray-50 text-center text-sm text-gray-400">
                Male
            </div>
        </div>
        <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium">Age: </p>
            <div className="w-full py-3 rounded-lg bg-gray-50 text-center text-sm text-gray-400">
                27
            </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium">Weight: </p>
            <div className="w-full py-3 rounded-lg bg-gray-50 text-center text-sm text-gray-400">
                72 Kg
            </div>
        </div>
        <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium">Height: </p>
            <div className="w-full py-3 rounded-lg bg-gray-50 text-center text-sm text-gray-400">
                3.4 Ft
            </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium">Chest: </p>
            <div className="w-full py-3 rounded-lg bg-gray-50 text-center text-sm text-gray-400">
                27 cm
            </div>
        </div>
        <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium">Waist: </p>
            <div className="w-full py-3 rounded-lg bg-gray-50 text-center text-sm text-gray-400">
                3.4 cm
            </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium">Hip: </p>
            <div className="w-full py-3 rounded-lg bg-gray-50 text-center text-sm text-gray-400">
                27 cm
            </div>
        </div>
        <div className="col-span-2 md:col-span-1">
        </div>
      </div>

    </div>
  );
};

export default UserProfileDetails;
