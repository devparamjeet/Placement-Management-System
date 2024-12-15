import React from 'react'
import { VscThreeBars } from 'react-icons/vsc'
import UserNavbar from '../Components/UserNavbar'
import { IoSettingsSharp } from "react-icons/io5";

export default function UserSettings() {
    return (
        <section>
            <button 
                className="p-3 bg-primary text-white rounded-lg hover:bg-primary-dark focus:ring-2 focus:ring-primary-light" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#userDashboard" 
                aria-controls="userDashboard"
            >
                <VscThreeBars className="text-xl" />
            </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="userDashboard" aria-labelledby="userDashboardLabel">
                <UserNavbar />
            </div>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <h3 className="text-2xl font-semibold underline mb-8 text-center">USER SETTINGS</h3>
                
                <div className="space-y-4">
                    {/* Setting Items */}
                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-100 rounded-full">
                                <IoSettingsSharp className="text-2xl text-gray-600" />
                            </div>
                            <div>
                                <p className="font-medium text-lg">General</p>
                                <p className="text-gray-600 text-sm">View and update your personal details</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-100 rounded-full">
                                <IoSettingsSharp className="text-2xl text-gray-600" />
                            </div>
                            <div>
                                <p className="font-medium text-lg">Account Setting</p>
                                <p className="text-gray-600 text-sm">View and update your Account setting</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-100 rounded-full">
                                <IoSettingsSharp className="text-2xl text-gray-600" />
                            </div>
                            <div>
                                <p className="font-medium text-lg">Change Password</p>
                                <p className="text-gray-600 text-sm">Update your password to secure your Account</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-100 rounded-full">
                                <IoSettingsSharp className="text-2xl text-gray-600" />
                            </div>
                            <div>
                                <p className="font-medium text-lg">Two-Step Verification</p>
                                <p className="text-gray-600 text-sm">Set-up or Disable Two Step Verification</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
