import React from 'react'
import UserProfileDetails from '../components/UserDetails/UserProfileDetails'

const UserDetails = () => {
  return (
    <div className='min-h-screen flex flex-col gap-6'>
      <h1 className='text-xl font-semibold'>User Profile</h1>
      <UserProfileDetails/>
    </div>
  )
}

export default UserDetails
