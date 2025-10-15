import React from 'react';
import { FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Profile = ({ userName, setUserName }) => {
  const location = useLocation();
  const search = location.search || '';

  return (
    <div className="m-5">
      <NavLink to={`/${search}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition dark:text-white">
        <FaArrowLeft className="w-6 h-6" />
        <span className="font-bold text-xl">Back</span>
      </NavLink>

      <div className="mt-15 mx-auto text-black dark:text-white w-150 h-90 border border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-md rounded">
        <span className="justify-center text-center w-full flex text-2xl font-bold">
          User Profile
        </span>
        <br />

        <input type="text" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-800 mb-5 mt-1 w-full rounded font-bold text-lg text-center outline-none focus:ring-2 focus:ring-blue-400 transition"/>
        <hr className="my-5 border-gray-400 dark:border-gray-700" />

        <span className="justify-center text-center w-full flex text-2xl font-bold mt-10">
          Theme
        </span>

        <div className="flex justify-center mt-5">
          <button className="m-3 p-3 rounded-full bg-gray-200 dark:bg-gray-900 transition hover:scale-105">
            <FaSun className="text-yellow-400" size={22} />
          </button>
          <button className="m-3 p-3 rounded-full bg-gray-600 dark:bg-gray-700 transition hover:scale-105">
            <FaMoon className="text-gray-200" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
