import React from 'react'
import ChatBox from '../components/Chat/ChatBox'
import ChatList from '../components/Chat/ChatList'

const Chat = () => {
  return (
    <div className='w-full lg:h-[85vh] overflow-hidden'>
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
