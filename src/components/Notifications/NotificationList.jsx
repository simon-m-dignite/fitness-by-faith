import React from 'react'
import NotificationCard from './NotificationCard'

const NotificationList = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg'>
      <NotificationCard/>
      <NotificationCard/>
      <NotificationCard/>
      <NotificationCard/>
      <NotificationCard/>
      <NotificationCard/>
    </div>
  )
}

export default NotificationList
