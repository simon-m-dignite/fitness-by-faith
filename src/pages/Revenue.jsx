import React from 'react'
import RevenueChart from '../components/Revenue/RevenueChart'
import List from '../components/Revenue/List'

const Revenue = () => {
  return (
    <div className='flex flex-col items-start gap-4'>
      <h1 className='text-xl font-semibold'>Revenue</h1>
      <RevenueChart/>
      <List/>
    </div>
  )
}

export default Revenue
