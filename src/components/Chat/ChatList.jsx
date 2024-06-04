import React from "react";

const ChatList = () => {
  return (
    <div className="w-full bg-white lg:h-[85vh] rounded-xl">
      <div className="w-full h-[13%] border-b flex flex-col items-start justify-center gap-1 px-4">
        <h1 className="text-base font-semibold">Chats</h1>
        <input
          type="text"
          className="border py-1.5 px-3 rounded-lg w-full text-sm outline-none bg-gray-50"
          placeholder="Search"
        />
      </div>
      <div className="w-full max-h-[87%] overflow-y-scroll message-container pb-2">
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
        <div className="w-full flex border-b py-4 px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col overflow-x-hidden">
            <h1 className="text-sm font-medium">John Doe</h1>
            <p className="text-xs font-normal text-gray-400">
              I'm looking to work with a designer that can...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
