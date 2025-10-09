import React from 'react'
import Workouts from './Workouts';

const Dashboard = ({ title }) => {
  return (
    <div className="w-full px-4 flex flex-col items-center text-center">
      <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-2 text-gray-900 dark:text-white tracking-wide">
        {title}
      </h1>

      <p className="font-body text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300 italic mb-6 max-w-2xl">
        “Push yourself, because no one else will.”
      </p>
      
      <Workouts />
    </div>
  )
}

export default Dashboard;
