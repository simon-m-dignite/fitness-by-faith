import React from 'react'
import UserCard from '../components/Users/UserCard'

const Users = () => {
  return (
    <div className='flex flex-col gap-6 min-h-screen'>
      <h1 className='text-xl font-semibold'>Users</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
      </div>
    </div>
  )
}

export default Users
