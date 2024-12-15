import React from 'react'
import { FaInstagram, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-4 px-6">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-gray-600 text-sm text-center sm:text-left">
                    &copy; 2024 - PTSManage. All rights reserved 
                    <NavLink to="/privacy-policy" className="ml-2 text-blue-600 hover:text-blue-800 underline">
                        Privacy Policy
                    </NavLink>
                </div>
                <div className='flex items-center gap-6'>
                    <NavLink to="/" className="text-gray-600 hover:text-gray-800 text-xl transition-colors">
                        <FaInstagram />
                    </NavLink>
                    <NavLink to="/" className="text-gray-600 hover:text-gray-800 text-xl transition-colors">
                        <CiLinkedin />
                    </NavLink>
                    <NavLink to="/" className="text-gray-600 hover:text-gray-800 text-xl transition-colors">
                        <FaGithub />
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}
