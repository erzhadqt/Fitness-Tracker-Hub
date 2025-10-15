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
        <div className="w-full px-4 sm:px-6 lg:px-8 my-6">
            <NavLink to={`/${search}`} className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors duration-200">
                <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-semibold text-lg sm:text-xl">Back to Dashboard</span>
            </NavLink>

            <div className="mt-8 mx-auto max-w-2xl bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6 text-gray-900 dark:text-white">
                    {workout.name}
                </h2>

                <img 
                    src={workout.imagePath} 
                    alt={workout.name} 
                    className="w-full h-64 sm:h-80 object-cover object-top rounded-lg mb-6"/>

                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                    {workout.description}
                </p>

                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    Type: {workout.type.toUpperCase()}
                </p>

                <button onClick={() => navigate(`/workouts/${workout.id}/logs${search}`)} className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105 mx-auto">
                    Start Workout
                </button>

            </div>

            <Outlet />
        </div>
    )
}

export default WorkoutDetails