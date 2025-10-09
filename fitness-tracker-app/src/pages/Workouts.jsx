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
      <div className=" p-1 w-auto h-auto">
          <div className="mt-4 flex  gap-x-5 ml-7">
            <input className="bg-gray-200 p-2 max-w-200 min-w-150 max-h-10 rounded font-bold" type="text" placeholder='Searh workouts...' value={q} onChange={(e) => updateParam("q", e.target.value)} />
            <select className="p-2 bg-gray-200 rounded" value={type} onChange={(e) => updateParam("type", e.target.value)}>
              <option value="">Type Of Workout</option>
              {
                workoutType.map((wType, index) => (
                  <option key={index} value={wType.toLowerCase()}>{wType}</option>
                ))
              }
            </select>
          </div>
          
          <ul className="m-4 p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filtered.map((w) => (
                  <li key={w.id} className="rounded border-2 shadow shadow-black text-center dark:border-white p-5 flex flex-col items-center transform hover:translate-y-[-20px] duration-300">
                    <img 
                      src={w.imagePath}
                      alt="niqqa"
                      className="w-full h-[300px] object-cover object-center rounded mb-3"
                    />

                  <NavLink to={`/workouts/${w.id}?${searchParams.toString()}`} className="bg-red-600 p-1 rounded-lg w-full text-center">
                      <span className="font-bold text-lg dark:text-white">{w.name}</span>
                      <span className="font-semibold text-base dark:text-white"> ({w.type.toUpperCase()})</span>
                  </NavLink>
                </li>
                
              ))}
          </ul>
      </div>
    )
}

export default Workouts