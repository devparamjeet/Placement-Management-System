import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {/* Top Navbar */}
            <nav className={`fixed top-0 ${isOpen ? 'left-64' : 'left-0'} right-0 bg-white shadow-sm border-b z-10 transition-all duration-300`}>
                <div className="px-4 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        {!isOpen && (
                            <button 
                                onClick={() => setIsOpen(true)}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        )}
                        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-2">
                            <img src="https://via.placeholder.com/32" alt="Profile" className="w-8 h-8 rounded-full" />
                            <span className="text-gray-700">Admin User</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Side Navbar */}
            <section className={`bg-gray-800 h-screen w-64 fixed left-0 top-0 text-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='p-4 flex justify-between items-center border-b border-gray-700'>
                    <span className='text-2xl font-bold'>LOGO</span>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className='p-2 rounded-lg hover:bg-gray-700 transition-colors'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className='mt-6'>
                    <ul className='space-y-2'>
                        <li>
                            <Link to="/admin" 
                                className='flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors'>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/company"
                                className='flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors'>
                                All Companies
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/add-company"
                                className='flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors'>
                                Add Companies
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout"
                                className='flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors'>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}
