import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from './pages/error404/Error404'
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Dashboard from './pages/dashboard/Dashboard'

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}
export default Rotas