import React, { useState } from 'react'
import ChatBox from '../components/Chat/ChatBox'
import ChatList from '../components/Chat/ChatList'
import { TbMenu2 } from "react-icons/tb";
import MobileChatList from '../components/Chat/MobileChatList';

const Chat = () => {
  const [showChatList, setShowChatList] = useState(false);
  
  const handleShowList = ()=>{
    setShowChatList(!showChatList);
  }

  return (
    <div className='w-full relative lg:h-[85vh]'>
      {/* <button className='mb-4 float-end absolute top-[-22px] right-0' onClick={handleShowList}><TbMenu2 className='text-xl'/></button>
      <MobileChatList onclick={handleShowList} showChatList={showChatList}/> */}
      <div className="w-full h-full grid grid-cols-3 gap-6">
        <div className="col-span-3 lg:col-span-2">
            <ChatBox/>
        </div>
        <div className="col-span-0 lg:col-span-1 hidden lg:block">
            <ChatList/>
        </div>
      </div>
    </div>
  )
}

export default Chat
