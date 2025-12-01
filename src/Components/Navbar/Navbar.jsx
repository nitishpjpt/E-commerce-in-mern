import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 top-0 start-0">
      {/* Top Bar */}
      <nav className="bg-gray-200">
        <div className="max-w-screen-xl mx-auto p-3 flex flex-wrap justify-between items-center text-sm">
          <a href="tel:9871785113" className="text-body hover:underline">
            <span className="font-bold">Call us:</span> 9871785113
          </a>

          <h4 className="hidden sm:block">Claim Your Discount up to 50% OFF</h4>

          <a href="#" className="text-blue-600 hover:underline">
            New User? Sign Up
          </a>
        </div>
      </nav>

      {/* Main Menu */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Logo"
            />
            <span className="text-xl font-semibold">Shopee</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
          </ul>

          {/* Login Button (Desktop) */}
          <div className="hidden md:block bg-blue-500 px-8 py-2 rounded-3xl text-white">
            <button>Login</button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col text-sm py-4 px-6 space-y-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Company</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
            </ul>

            <div className="px-6 pb-4">
              <button className="w-full bg-blue-500 text-white py-2 rounded-xl">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
