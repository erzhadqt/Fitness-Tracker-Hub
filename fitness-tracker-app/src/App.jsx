import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import WorkoutDetails from "./pages/WorkoutDetails";
import WorkoutLogs from "./pages/WorkoutLogs";
import Profile from "./pages/Profile";
import { getWorkouts, saveWorkouts } from "./utils/storage";
import { WorkoutData } from "./data/WorkoutData";
import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  useEffect(() => {
    if (userName.trim() !== '') {
      localStorage.setItem('userName', userName);
    }
  }, [userName]);

  useEffect(() => {
    const workouts = getWorkouts();
    const data = [...workouts];

    WorkoutData.forEach((wData) => {
      const exists = data.some(workout => workout.name === wData.name);
      if (!exists) {
        data.push(wData);
      }
    });

    if (data.length !== workouts.length) {
      saveWorkouts(data);
    }
  }, []);

  return (
    <>
      <Header />
        <Routes>
        <Route path="/" element={<Dashboard title={userName ? (
          <>
            Welcome{" "}
            <span className="text-red-700 font-bold dark:text-blue-800">
              {userName}
            </span>{", "}
            to Fitness Tracker Hub!
          </> ) : ("Welcome to Fitness Tracker Hub!") }/>
          }
        />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:id" element={<WorkoutDetails />}>
          <Route path="logs" element={<WorkoutLogs />} />
        </Route>
        <Route path="/profile" element={<Profile userName={userName} setUserName={setUserName} />} />
      </Routes>
    </>
  );
}

export default App;
