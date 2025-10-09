import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";


const Profile = ({ userTheme }) => {
  const location = useLocation();
  const search = location.search || "";

  return (
    <div className="m-5">
      <NavLink to={`/${search}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition dark:text-white">
            <FaArrowLeft className="w-6 h-6" />
            <span className="font-bold text-xl flex items-center gap-2 text-gray-700 hover:text-blue-500 transition dark:text-white">Back</span>
            </NavLink>
      <div className="text-center mt-30 mx-auto font-bold text-black dark:text-white text-2xl">
          {userTheme}
      </div>
    </div>
  )
}

export default Profile