import React from 'react'
import { Routes, Route, Link, NavLink } from "react-router-dom";
import UserTheme from '../components/UserTheme';
import Workouts from './Workouts';



const Dashboard = ({title}) => {
  return (
    <div className="navLinks">
        <h1 className="font-arial text-4xl font-medium text-center mt-10 mb-15 dark:text-white">{title}</h1>
      
      <Workouts />
    </div>
  )
}

export default Dashboard