import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const UserTheme = () => {
  const location = useLocation();
  const search = location.search || "";

  return (
    <NavLink to={`/profile/${search}`}>
      <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        <FaUser className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      </div>
    </NavLink>
  )
}

export default UserTheme