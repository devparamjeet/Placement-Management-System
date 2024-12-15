import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 font-bold text-xl">
                        CarrerArc
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <NavLink to="/" className={({ isActive }) => 
                            `text-gray-600 hover:text-gray-900 ${isActive ? 'text-blue-600 font-semibold' : ''}`
                        }>Home</NavLink>
                        <NavLink to="/companies" className={({ isActive }) => 
                            `text-gray-600 hover:text-gray-900 ${isActive ? 'text-blue-600 font-semibold' : ''}`
                        }>All Companies</NavLink>
                        <NavLink to="/about" className={({ isActive }) => 
                            `text-gray-600 hover:text-gray-900 ${isActive ? 'text-blue-600 font-semibold' : ''}`
                        }>About Us</NavLink>
                        <NavLink to="/services" className={({ isActive }) => 
                            `text-gray-600 hover:text-gray-900 ${isActive ? 'text-blue-600 font-semibold' : ''}`
                        }>Services</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => 
                            `text-gray-600 hover:text-gray-900 ${isActive ? 'text-blue-600 font-semibold' : ''}`
                        }>Contact Us</NavLink>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink to="/login" className={({ isActive }) => 
                            `px-4 py-2 text-gray-600 hover:text-gray-900 ${isActive ? 'text-blue-600 font-semibold' : ''}`
                        }>Login</NavLink>
                        <NavLink to="/signup" className={({ isActive }) => 
                            `px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`
                        }>Signup for free</NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={handleNav} className="text-gray-600 hover:text-gray-900">
                            {isOpen ? (
                                <i className="ri-close-circle-line text-2xl"></i>
                            ) : (
                                <i className="ri-menu-3-line text-2xl"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <NavLink to="/" className={({ isActive }) => 
                        `block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${isActive ? 'bg-gray-50 text-blue-600 font-semibold' : ''}`
                    }>Home</NavLink>
                    <NavLink to="/companies" className={({ isActive }) => 
                        `block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${isActive ? 'bg-gray-50 text-blue-600 font-semibold' : ''}`
                    }>All Companies</NavLink>
                    <NavLink to="/about-us" className={({ isActive }) => 
                        `block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${isActive ? 'bg-gray-50 text-blue-600 font-semibold' : ''}`
                    }>About Us</NavLink>
                    <NavLink to="/services" className={({ isActive }) => 
                        `block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${isActive ? 'bg-gray-50 text-blue-600 font-semibold' : ''}`
                    }>Services</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => 
                        `block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${isActive ? 'bg-gray-50 text-blue-600 font-semibold' : ''}`
                    }>Contact Us</NavLink>
                </div>
                <div className="px-4 py-3 space-y-3">
                    <NavLink to="/login" className={({ isActive }) => 
                        `block w-full text-center px-4 py-2 text-gray-600 hover:text-gray-900 ${isActive ? 'text-blue-600 font-semibold' : ''}`
                    }>Login</NavLink>
                    <NavLink to="/signup" className={({ isActive }) => 
                        `block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`
                    }>Signup for free</NavLink>
                </div>
            </div>
        </nav>
    )
}
