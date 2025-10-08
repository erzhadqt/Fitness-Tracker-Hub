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
    <div className="m-10 p-5 bg-zinc-300 rounded shadow mx-auto w-200 ">
        <h3 className="font-bold text-2xl mb-4 text-center">Workout {id} Logs</h3>

        <label className="font-semibold mr-2">Filter by Day:</label>
        
        <select
            value={day}
            onChange={(e) => setSearchParams({ day: e.target.value })}
            className="border p-1 rounded">
            <option value="">All</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
        </select>

    <div className="text-center m-10 p-2">
        <ul className="list-disc text-2xl font-semibold list-none">
            <li>{workout.descriptionList1}</li>
            <li>{workout.descriptionList2}</li>
            <li>{workout.descriptionList3}</li>
            <li>{workout.descriptionList4}</li>

        </ul>
    </div>

    <ul className="list-disc m-10 text-lg font-semibold">
        
        {logs.length > 0 ? (
          logs.map((log, idx) => (
            <li key={idx}>
              {Object.entries(log).map(([key, value]) => (
                <span key={key} className="mr-2">
                     {key}: {value} |
                </span>
              ))}
            </li>
          ))
        ) : (
          <li>No logs for {day || "this workout"}.</li>
        )}
      </ul>
    </div>
  );
};

export default WorkoutLogs;
