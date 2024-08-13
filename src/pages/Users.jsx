import React, { useEffect, useState } from 'react'
import UserCard from '../components/Users/UserCard'
import { ErrorToaster } from '../components/Global/Toaster'
import Axios from "../axios"

const Users = () => {

  const [usersData, setUsersData] = useState([])
  console.log("🚀 ~ Users ~ usersData:", usersData)
  const [pageDetails, setPageDetails] = useState({})
  const [loading, setLoading] = useState(false)

  const getAllUsers = async (pageNumber = 1, rows = 10) => {
    console.log("🚀 ~ getWorkouts ~ pageNumber: ", pageNumber, "🚀 rows: ",rows)
    try {
      setLoading(true);
      const { data } = await Axios.get(`users/getAll`);
      console.log("🚀 ~ getAllUsers ~ data:", data)

      setUsersData(data?.data);
      // setPageDetails(data?.data?.pageDetails);
    } catch (error) {
      ErrorToaster(error?.message)
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    getAllUsers()
  },[])
  return (
    <div className='flex flex-col gap-6 min-h-screen'>
      <h1 className='text-xl font-semibold'>Users</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {usersData.map((user, index)=>(
          <UserCard key={index} fullName={user?.fullName} email={user?.email} image={user?.profilePicture} target={user?.target} />
        ))}
      </div>
    </div>
  )
}

export default Users
