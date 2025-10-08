import React from 'react'
import { NavLink, useLocation } from "react-router-dom";

const UserTheme = () => {
  const location = useLocation();
  const search = location.search || "";

  return (
    <NavLink to={`/profile${search}`}>
      <span className="text-base font-bold h-10 p-2 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-700 text-black dark:text-white float-right mr-5 font-serif">User Theme</span>
    </NavLink>
  )
}

export default UserTheme