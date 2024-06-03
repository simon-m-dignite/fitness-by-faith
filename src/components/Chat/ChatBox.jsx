import React from "react";
import { IoSend } from "react-icons/io5";
import { styles } from "../../styles/styles";
import { BsEmojiSmile } from "react-icons/bs";

const ChatBox = () => {
  return (
    <div className="flex-1 justify-between flex flex-col h-[85vh] bg-white rounded-xl">
      <div className="flex items-center justify-start gap-2 py-3 px-4 border-b border-gray-200">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-9 h-9 rounded-full" />
        <h1 className="text-sm font-medium">John Doe</h1>
      </div>
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto message-container"
      >
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-0 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F7F7F7] text-black">
                  Can be verified on any platform using docker
                </span>
              </div>
              <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#64B5AC] text-white ">
                  Your error message says permission denied, npm global installs
                  must be given root privileges.
                </span>
              </div>
              <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-[#F7F7F7] text-black">
                  Command was run with root privileges. I'm sure about that.
                </span>
                <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-[#F7F7F7] text-black">
                  I've update the description so it's more obviously now
                </span>
                <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F7F7F7] text-black">
                  Check the line above (it ends with a # so, I'm running it as
                  root )<pre># npm install -g @vue/devtools</pre>
                </span>
                <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#64B5AC] text-white ">
                  Any updates on this issue? I'm getting the same error when
                  trying to install devtools. Thanks
                </span>
              </div>
              <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F7F7F7] text-black">
                  Thanks for your message David. I thought I'm alone with this
                  issue. Please, ? the issue to support it :)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-[#64B5AC] text-white ">
                  Are you using sudo?
                </span>
              </div>
              <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#64B5AC] text-white ">
                  Run this command sudo chown -R `whoami` /Users/ /.npm-global/
                  then install the package globally without using sudo
                </span>
                <span className='text-[10px] text-[#5C5C5C] float-end'>10:09</span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-[#F7F7F7] text-black">
                  It seems like you are from Mac OS world. There is no /Users/
                  folder on linux ?
                </span>
              </div>
              <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F7F7F7] text-black">
                  I have no issue with any other packages installed with root
                  permission globally.
                </span>
              </div>
              <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#64B5AC] text-white ">
                  yes, I have a mac. I never had issues with root permission as
                  well, but this helped me to solve the problem
                </span>
              </div>
              <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-[#F7F7F7] text-black">
                  I get the same error on Arch Linux (also with sudo)
                </span>
              </div>
              <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-[#F7F7F7] text-black">
                  I also have this issue, Here is what I was doing until now:
                  #1076
                </span>
              </div>
              <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F7F7F7] text-black">
                  even i am facing
                </span>
              </div>
              <span className='text-[10px] text-[#5C5C5C]'>10:09</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 p-2 mb-2 sm:mb-0 flex items-center gap-2 border-t">
        <div className="w-full flex items-center justify-between bg-gray-100 px-4 rounded-full h-[50px]">
          
          <input type="text" className="w-full h-full bg-transparent outline-none px-3 text-xs text-[#5C5C5C]" placeholder="Message"/>
        
        </div>
        <button className={`h-[50px] w-[50px] flex items-center justify-center px-4 rounded-full ${styles.bgColor}`}>
            <IoSend className="w-5 h-5 text-white"/>
          </button>
      </div>
    </div>
  );
};

export default ChatBox;
