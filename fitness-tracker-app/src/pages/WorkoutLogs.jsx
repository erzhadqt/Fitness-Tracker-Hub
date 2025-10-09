import React from "react";
import { useParams, useSearchParams, useLocation, NavLink } from "react-router-dom";
import { WorkoutData } from "../data/WorkoutData";


const WorkoutLogs = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const day = searchParams.get("day") || "";

  const workout = WorkoutData.find((w) => w.id === Number(id));
  if (!workout) {
    return <div className="m-4">Workout not found.</div>;
  }

  const logs = day
    ? workout.logs.filter((log) =>
        log.day?.toLowerCase() === day.toLowerCase()
      ) : workout.logs;

  return (
    <div className="m-6 sm:m-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto w-full place-self-center">
  
      <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-6 text-center text-gray-900 dark:text-white">
        Workout {id} Logs
        </h3>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
        <label className="font-semibold text-gray-800 dark:text-gray-200">
          Filter by Day:
          </label>

        <select value={day} onChange={(e) => setSearchParams({ day: e.target.value })} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition">
          <option value="">All</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
          </select>
        </div>

      <div className="text-center my-8">
        <ul className="space-y-3 text-lg sm:text-xl font-medium text-gray-900 dark:text-gray-100">
          <li>{workout.descriptionList1}</li>
          <li>{workout.descriptionList2}</li>
          <li>{workout.descriptionList3}</li>
          <li>{workout.descriptionList4}</li>
        </ul>
        </div>

      <ul className="m-6 space-y-3 text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">
        {logs.length > 0 ? (
          logs.map((log, idx) => (
            <li key={idx} className="p-3 rounded-lg bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-700">
              {Object.entries(log).map(([key, value]) => (
                <span key={key} className="mr-2">
                  {key}: {value} |
                </span>
              ))}
            </li>
          ))
        ) : (
          <li className="italic text-gray-600 dark:text-gray-400">No logs for {day || "this workout"}.</li>
        )}
      </ul>
    </div>

  );
};

export default WorkoutLogs;
