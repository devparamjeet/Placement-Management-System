import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { LiaIndustrySolid } from "react-icons/lia";
import { CgFormatColor } from "react-icons/cg";
import { RiShieldUserLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';

export default function UserNavbar() {
    const location = useLocation();

    return (
        <div className="h-full bg-white p-5">
            {/* Logo Section */}
            <div className="flex justify-center items-center py-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-blue-600">LOGO</h1>
            </div>

            {/* Navigation Links */}
            <nav className="mt-8 space-y-2">
                <NavLink to="/dashboard" active={location.pathname === '/dashboard'}>
                    <RxDashboard className="text-xl" />
                    <span>Dashboard</span>
                </NavLink>
                
                <NavLink to="/dashboard/company" active={location.pathname === '/dashboard/company'}>
                    <LiaIndustrySolid className="text-xl" />
                    <span>All Companies</span>
                </NavLink>
                
                <NavLink to="/dashboard/applied" active={location.pathname === '/dashboard/applied'}>
                    <CgFormatColor className="text-xl" />
                    <span>Applied Companies</span>
                </NavLink>
                
                <NavLink to="/dashboard/profile" active={location.pathname === '/dashboard/profile'}>
                    <RiShieldUserLine className="text-xl" />
                    <span>Profile</span>
                </NavLink>
                
                <NavLink to="/dashboard/setting" active={location.pathname === '/dashboard/setting'}>
                    <IoSettingsOutline className="text-xl" />
                    <span>Setting</span>
                </NavLink>

                {/* Logout at the bottom */}
                <div className="absolute bottom-8 w-[calc(100%-40px)]">
                    <NavLink to="/logout" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        <AiOutlineLogout className="text-xl" />
                        <span>Logout</span>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

// Helper component for consistent nav links
const NavLink = ({ children, to, active, className = '' }) => (
    <Link 
        to={to}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
            ${active 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            } ${className}`}
    >
        {children}
    </Link>
)
