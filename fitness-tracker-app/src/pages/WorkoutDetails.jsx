import React from 'react'
import { useParams, Outlet } from 'react-router-dom'
import { WorkoutData } from '../data/WorkoutData'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const WorkoutDetails = () => {
    const { id } = useParams()
    const workout = WorkoutData.find(w => w.id === Number(id))
    const navigate = useNavigate();

    if (!workout) {
        return <div className="m-4">Workout not found.</div>
    }

    return (
        <div className="m-5">
            <Link 
                to="/"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition"
                >
                <FaArrowLeft className="w-5 h-5" />
                <span className="">Back</span>
                </Link>

            <div className="m-4 p-5 mx-auto mt-10 h-auto w-220 bg-gray-50 rounded border-solid  shadow">
                <h2 className="font-bold text-3xl mb-8">{workout.name}</h2>
            <img src={workout.imagePath} alt={workout.name} className="w-110 mx-auto h-50 rounded mb-3" />
            <p className="mb-2 mt-6 text-lg font-bold">{workout.description}</p>
            <p className="mb-2 font-bold text-lg">Type: {workout.type.toLocaleUpperCase()}</p>
            <div className="mb-2">
                <span className="font-bold text-lg">Logs:</span>
                <ul className="list-disc ml-6 text-lg font-semibold">
                    {workout.logs.map((log, idx) => (
                        <li key={idx}>
                            {Object.entries(log).map(([key, value]) => (
                                <span key={key} className="mr-2">{key}: {value}</span>
                            ))}
                        </li>
                    ))}
                </ul>
                </div>

                <button onClick={() => navigate(`/workouts/${workout.id}/logs`)}>Start Workout</button>

            </div>
            <Outlet/>
        </div>
    )
}

export default WorkoutDetails