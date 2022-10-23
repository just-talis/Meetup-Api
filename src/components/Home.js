import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'


export const Home = () => {
    const navigate = useNavigate()
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}
