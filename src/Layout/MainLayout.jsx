import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/Home'

const MainLayout = () => {
    return (
        <>
            <div className="flex  flex-col min-h-screen bg-gray-50">

                {/* Navbar always visible */}
                <Navbar />

                {/* All pages render here */}
                <main className="flex-1 z-0">
                    <Outlet />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default MainLayout