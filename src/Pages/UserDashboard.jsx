import React, { useEffect, useState } from 'react'
import UserNavbar from '../Components/UserNavbar';
import { useAuth } from '../auth/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { VscThreeBars } from "react-icons/vsc";
import UserGraphDashboard from '../Graphs/Line';
import Dashboard from './Dashboard';

export default function UserDashboard() {

    const [user, setUser] = useState({})
    const [companyData, setCompanyData] = useState({})
    const { isLoggedIn, authorizationToken } = useAuth();
    const navigate = useNavigate();

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            }
        } catch (error) {
            console.log(`Error in Fetching Data Authentication: ${error}`);
        }
    };

    const getAllCompany = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/allCompany", {
                method: "GET",
            });
            const data = await response.json();
            setCompanyData(data.response);
            // Check The Response message
            // console.log(data.response)
            if (data.message === "Access denied") {
                // return navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // console.log(isLoggedIn)
        // if (!isLoggedIn) {
        //     return navigate("/login")
        // }
        userAuthentication();
        getAllCompany();
    }, [isLoggedIn])


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar Toggle Button */}
            <button 
                className="fixed top-4 left-4 z-50 p-2.5 rounded-lg bg-white shadow-md 
                           hover:shadow-lg text-gray-700 hover:text-blue-600 
                           transition-all duration-200 lg:hidden
                           border border-gray-100 hover:border-blue-100" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#userDashboard" 
                aria-controls="userDashboard"
            >
                <VscThreeBars className="w-5 h-5" />
            </button>

            {/* Sidebar */}
            <div 
                className="fixed top-0 left-0 h-full offcanvas offcanvas-start shadow-xl 
                           lg:!relative lg:!translate-x-0 lg:!w-80 lg:!block
                           border-r border-gray-200 bg-white" 
                data-bs-scroll="true" 
                tabIndex="-1" 
                id="userDashboard" 
                aria-labelledby="userDashboardLabel"
            >
                <UserNavbar />
            </div>

            {/* Main Content */}
            <div className="p-4 lg:p-6 lg:ml-80">
                <div className="w-full rounded-xl bg-white shadow-md hover:shadow-lg
                               transition-shadow duration-200 p-5">
                    <Dashboard userData={user} companyData={companyData} />
                </div>
            </div>
        </div>
    )
}
