import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getWorkouts } from '../utils/storage';



// Pictures



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
          
          <ul className="m-10 p-3 h-auto grid grid-cols-3 gap-4">
              {filtered.map((w) => (
                  <li key={w.id} className="rounded border-2 shadow shadow-black justify-items-center rounded text-center h-55">
                    <img 
                      src={w.imagePath}
                      className="w-99 h-40 rounded mb-3"
                    />
                  <Link to={`/workouts/${w.id}`}>
                      <span className="font-extrabold text-lg">{w.name}</span>
                      <span className="font-semibold text-base"> ({w.type})</span>
                    </Link>
                </li>
                
              ))}
          </ul>
      </div>
    )
}

export default Workouts