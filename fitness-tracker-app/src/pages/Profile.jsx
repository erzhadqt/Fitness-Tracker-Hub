import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Profile = ({ userTheme }) => {
  const location = useLocation();
  const search = location.search || "";

  // --- 🧠 State for the name ---
  const [userName, setUserName] = useState('');

  // Load the name from localStorage when component mounts
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // Save the name to localStorage every time it changes
  useEffect(() => {
    if (userName.trim() !== '') {
      localStorage.setItem('userName', userName);
    }
  }, [userName]);

  return (
    <div className="m-5">
      <NavLink to={`/${search}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition dark:text-white">
        <FaArrowLeft className="w-6 h-6" />
        <span className="font-bold text-xl flex items-center gap-2 text-gray-700 hover:text-blue-500 transition dark:text-white">
          Back
        </span>
      </NavLink>

      <div className="mt-15 mx-auto text-black dark:text-white w-150 h-90 border border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-md rounded">
        <span className="justify-center text-center w-full flex text-2xl font-bold">
          User Profile
        </span>
        <br />

        {/* --- 🧾 Input with saved name --- */}
        <input
          type="text"
          name="name"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="p-2 bg-red-500 dark:bg-gray-800 mb-5 mt-1 w-139 h-10 rounded font-bold text-lg"
        />

        <hr />
        <span className="justify-center text-center w-full flex text-2xl font-bold mt-10">
          Theme
        </span>

        <div className="flex justify-center mt-5">
          <button className="m-3 p-3 rounded-full bg-gray-200 dark:bg-gray-700 transition hover:scale-105">
            <FaSun className="text-yellow-400" size={22} />
          </button>
          <button className="m-3 p-3 rounded-full bg-gray-200 dark:bg-gray-700 transition hover:scale-105">
            <FaMoon className="text-gray-800" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
