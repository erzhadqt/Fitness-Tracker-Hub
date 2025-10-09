import React from 'react'
import { Routes, Route, Link, NavLink } from "react-router-dom";
import UserTheme from '../components/UserTheme';
import Workouts from './Workouts';



const Dashboard = ({title}) => {
  return (
    <div className="navLinks">
        <h1 className="font-arial text-4xl font-medium text-center mt-10 mb-1 dark:text-white">{title}</h1>
        <p className="text-black dark:text-white text-center"><em>“Push yourself, because no one else will.”</em></p>
      <Workouts />
    </div>
  )
}

export default Dashboard