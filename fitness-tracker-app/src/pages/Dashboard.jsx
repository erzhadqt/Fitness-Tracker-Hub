import React from 'react'
import { Routes, Route, Link, NavLink } from "react-router-dom";
import UserTheme from '../components/UserTheme';
import Workouts from './Workouts';



const Dashboard = ({title}) => {
  return (
    <div className="navLinks">
        {/* <nav>
          <NavLink to="/" end></NavLink>
        </nav> */}
        <h1 className="font-arial text-2xl font-medium text-center mt-2">{title}</h1>
      <UserTheme />
      <Workouts />
    </div>
  )
}

export default Dashboard