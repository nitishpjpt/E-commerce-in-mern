import React from 'react'
import { Route, Routes, Router } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'

const App = () => {
  return (

    <Routes>

      <Route path='/' element={<MainLayout />}>


        {/* Default Page (Home) */}
        <Route index element={<Home />} />
      </Route>

    </Routes>

  )
}

export default App