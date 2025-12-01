import React from 'react'
import { Route, Routes, Router } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import RegistartionForm from './Auth/Register'
import LoginForm from './Auth/Login'

const App = () => {
  return (

    <Routes>

      <Route path='/' element={<MainLayout />}>


        {/* Default Page (Home) */}
        <Route index element={<Home />} />
        <Route path='/register' element={<RegistartionForm/>} />
        <Route path='/login' element={<LoginForm/>} />
      </Route>

    </Routes>

  )
}

export default App