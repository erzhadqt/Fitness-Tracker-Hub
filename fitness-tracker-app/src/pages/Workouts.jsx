import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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
      <div>
          <input type="text" placeholder='Searh workouts...' value={q} onChange={(e) => updateParam("q", e.target.value)} />
          <div>
            <select value={type} onChange={(e) => updateParam("type", e.target.value)}>
              <option value="">Type Of Workout</option>
              {
                workoutType.map((wType, index) => (
                  <option key={index} value={wType.toLowerCase()}>{wType}</option>
                ))
              }
            </select>
          </div>
          
          <ul>
              {filtered.map((w) => (
                <li key={w.id}>
                  <Link to={`/workouts/${w.id}`}>{w.name} ({w.type})</Link>
                </li>
              ))}
          </ul>
      </div>
    )
}

export default Workouts