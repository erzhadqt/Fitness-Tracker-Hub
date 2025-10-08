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
      <div className="ml-4 mt-4 p-1">
          
          <input className="bg-gray-200 p-2 w-150 rounded font-bold" type="text" placeholder='Searh workouts...' value={q} onChange={(e) => updateParam("q", e.target.value)} />
          <div className="mt-4">
            <select className="p-2 bg-gray-200 rounded" value={type} onChange={(e) => updateParam("type", e.target.value)}>
              <option value="">Type Of Workout</option>
              {
                workoutType.map((wType, index) => (
                  <option key={index} value={wType.toLowerCase()}>{wType}</option>
                ))
              }
            </select>
          </div>
          
          <ul className="m-4 p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {filtered.map((w) => (
                  <li key={w.id} className="rounded border-2 shadow shadow-black text-center h-auto dark:border-white p-5 flex flex-col items-center">
                    <img 
                      src={w.imagePath}
                      alt="niqqa"
                      className="w-full h-auto object-cover object-center rounded mb-3"
                    />
                  <NavLink to={`/workouts/${w.id}?${searchParams.toString()}`} className="">
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