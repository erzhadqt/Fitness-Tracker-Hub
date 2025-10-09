import React from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { getWorkouts } from '../utils/storage';

const Workouts = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q") || "";
    const type = searchParams.get("type") || "";
    const workouts = getWorkouts();
    const workoutType = [...new Set(workouts.flatMap(workout => workout.type))]

    const filtered = workouts.filter((w) => {
      return (
        w.name.toLowerCase().includes(q.toLowerCase()) && 
        (type ? w.type === type : true)
      )
    })

    const updateParam = (key, value) => {
      const params = new URLSearchParams(searchParams);
      if(value){
        params.set(key, value)
      }
      else{
        params.delete(key)
      }
      return setSearchParams(params)
    }
      
    return (
      <div className="w-full h-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <input 
            className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2 rounded-lg font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition" type="text" placeholder="Search workouts..." value={q} onChange={(e) => updateParam('q', e.target.value)}/>
            <select className="w-full sm:w-1/3 lg:w-1/4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition" value={type} onChange={(e) => updateParam('type', e.target.value)}>
              <option value="">Type Of Workout</option>

              {workoutType.map((wType, index) => (

                <option key={index} value={wType.toLowerCase()}>{wType}</option>
              ))}

            </select>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((w) => (
                <li 
                  key={w.id} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg text-center p-5 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                  <img
                    src={w.imagePath}
                    alt={w.name}
                    className="w-full h-64 object-cover object-center rounded-lg mb-4"/>
                  <NavLink to={`/workouts/${w.id}?${searchParams.toString()}`} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition">
                    <span className="block font-bold text-lg">{w.name}</span>
                    <span className="block font-medium text-sm">({w.type.toUpperCase()})</span>
                  </NavLink>
                  </li>
                ))}
                </ul>
        </div>
    )
}

export default Workouts