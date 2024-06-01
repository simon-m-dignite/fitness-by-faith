import React from 'react'
import MealDetailsSection from '../components/MealDetails/MealDetailsSection'

const MealDetails = () => {
  return (
    <div className='flex flex-col gap-6 min-h-screen'>
      <h1 className='text-xl font-semibold'>Meal Details</h1>
      <MealDetailsSection/>
    </div>
  )
}

export default MealDetails
