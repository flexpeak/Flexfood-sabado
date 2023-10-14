import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from './pages/error404/Error404'
import Home from "./pages/home/Home"

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}
export default Rotas