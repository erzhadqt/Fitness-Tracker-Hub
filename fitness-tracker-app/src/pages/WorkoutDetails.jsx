import React from 'react'
import Dashboard from './Dashboard';
import { useParams, Outlet, useLocation } from 'react-router-dom'
import { WorkoutData } from '../data/WorkoutData'
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const WorkoutDetails = () => {
    const { id } = useParams()
    const workout = WorkoutData.find(w => w.id === Number(id))
    const navigate = useNavigate();
    const location = useLocation();
    const search = location.search || "";


    if (!workout) {
        return <div className="m-4">Workout not found.</div>
    }

    return (
        <div className="m-5">
            <NavLink to={`/${search}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition dark:text-white">
            <FaArrowLeft className="w-6 h-6" />
            <span className="font-bold text-xl">Back to Dashboard</span>
            </NavLink>

            <div className="m-4 p-5 mx-auto mt-10 h-auto w-220 bg-zinc-300 rounded border-solid  shadow">
                <h2 className="font-bold text-3xl mb-8">{workout.name}</h2>
            <img src={workout.imagePath} alt={workout.name} className="w-full h-auto object-cover object-center rounded mb-3" />
            <p className="mb-2 mt-6 text-lg font-bold">{workout.description}</p>
            <p className="mb-2 font-bold text-lg">Type: {workout.type.toLocaleUpperCase()}</p>
            

                <button onClick={() => navigate(`/workouts/${workout.id}/logs${search}`)} className="cursor-pointer flex font-semibold place-self-center m-5 bg-red-600 dark:text-white p-2 rounded-2xl w-50 justify-center shadow-md border transform hover:scale-110 bg-red-700  duration-300">
                    Start Workout
                    </button>


            </div>

            <Outlet/>
        </div>
    )
}

export default WorkoutDetails