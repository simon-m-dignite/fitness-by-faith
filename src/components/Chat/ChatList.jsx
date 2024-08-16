import React, { Fragment } from "react";
import { ImagePlaceHolder } from "../../assets/export";

const ChatList = ({chatCollection, setChatId, chatId, setChatUser}) => {

  return (
    <Fragment>
      <div className="w-full bg-white lg:h-[85vh] rounded-xl">
        <div className="w-full h-[13%] border-b flex flex-col items-start justify-center gap-1 px-4">
          <h1 className="text-base font-semibold">Chats</h1>
          <input
            type="text"
            className="border py-1.5 px-3 rounded-lg w-full text-sm outline-none bg-gray-50"
            placeholder="Search"
          />
        </div>
        {chatCollection.length > 0 ? (
          <div className="w-full max-h-[87%] overflow-y-scroll message-container pb-2">
            {chatCollection?.map((chat) => (
              <div
                onClick={() => {setChatId(chat?.chatId); setChatUser({ image: chat?.chatData?.userProfile || "",
                  name: chat?.chatData?.userName || "" })}}
                key={chat?.chatId}
                className={`w-full flex border-b py-4 px-4 gap-3 cursor-pointer transition-all duration-300 ${
                  chatId === chat?.chatId ? "bg-gray-200" : "hover:bg-gray-50"
                }`}
              >
                {!chat?.chatData?.userProfile ? (
                  <img
                    src={ImagePlaceHolder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <img
                    src={chat?.chatData?.userProfile}
                    alt="chat"
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <div className="flex flex-col overflow-x-hidden">
                  <h1 className="text-sm font-medium">
                    {chat?.chatData?.userName}
                  </h1>
                  <p className="text-xs font-normal text-gray-400">
                    {chat?.messages?.[0]?.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center pt-8">
            <p>No Chat Found</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ChatList;
