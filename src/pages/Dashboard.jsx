import React from 'react'
import Analytics from '../components/Dashbaord/Analytics'
import AnalyticalChart from '../components/Dashbaord/AnalyticalChart'
import RecentUsersList from '../components/Dashbaord/RecentUsersList'

const Dashboard = () => {
  return (
    <div className='flex flex-col items-start gap-6'>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <Analytics/>
      <AnalyticalChart/>
      <RecentUsersList/>
    </div>
  )
}

export default Dashboard

// total users, total revenue, total meal plans sold, total workout plans sold