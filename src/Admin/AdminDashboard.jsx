import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/auth';
import './AdminDashboard.css'
import { FaUsers } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { SiOnlyoffice } from "react-icons/si";
import { FaUsersRays } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


export default function AdminDashboard() {
    const [userData, setUserData] = useState([
        {
            username: "John Doe",
            email: "john.doe@example.com",
            phone: "1234567890",
            branch: "Computer Science",
            year: "2024",
        }   ,
        {
            username: "Rajesh Kumar",
            email: "rajesh.kumar@example.com",
            phone: "9895665456",
            branch: "Computer Science",
            year: "2024",
        },
        {
            username: "Ram Kumar",
            email: "ram.kumar@example.com",
            phone: "6546984885",
            branch: "Computer Science",
            year: "2024",
        }
    ]);
    const [companyData, setCompanyData] = useState([
        {
            companyName: "SkillsVarz Gravity Coding PVT LTD",
            jobType: "Modern Web Development",
            companyAddress: "Sagar, MP",
            package: "16 LPA",
            date: "2024-01-01",
        },
        {
            companyName: "TCS",
            jobType: "Software Developer",
            companyAddress: "Mumbai, India",
            package: "10 LPA",
            date: "2024-01-01",
        },
        {
            companyName: "Wipro",
            jobType: "Software Developer",
            companyAddress: "Pune, India",
            package: "12 LPA",
            date: "2024-02-15",
        },
        {
            companyName: "HCL",
            jobType: "Software Developer",
            companyAddress: "Noida, India",
            package: "11 LPA",
            date: "2024-03-20",
        },
        {
            companyName: "Infosys",
            jobType: "Software Developer",
            companyAddress: "Bangalore, India",
            package: "13 LPA",
            date: "2024-04-05",
        }
    ]);
    const { authorizationToken } = useAuth();
    const navigate = useNavigate();

    const getAllUserData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            setUserData(data);
            // Check The Response message
            // console.log(data)
            if (data.message === "Access denied") {
                return navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getAllCompany = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/allCompany", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
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
                console.log(data.userData);
            }
            else {
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(`Error in Fetching Data Authentication: ${error}`);
        }
    };

    useEffect(() => {
        userAuthentication();
        getAllUserData();
        getAllCompany()
    }, [])

    return (
        <section className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to the Admin Dashboard!</h1>
                <p className="text-gray-600 mb-8">Here you can view and manage all user accounts.</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
                        <div>
                            <h4 className="text-gray-600 text-sm font-medium">Total Users</h4>
                            <p className="text-2xl font-bold text-gray-800">{userData.length}</p>
                        </div>
                        <div className="text-blue-500 text-3xl">
                            <FaUsers />
                        </div>
                    </div>
                    
                    {/* Similar pattern for other stat boxes */}
                    {/* ... existing stats boxes with similar Tailwind classes ... */}
                </div>

                {/* Tables Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Users Table */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h4 className="text-xl font-semibold mb-4">Lists of Users</h4>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {userData.map((val, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{val.username}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.phone}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.branch}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.year}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button className="text-red-600 hover:text-red-900 transition-colors duration-200">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Companies Table */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h4 className="text-xl font-semibold mb-4">Lists of Companies</h4>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Address</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {companyData.map((val, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{val.companyName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.jobType}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.companyAddress}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.package}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button className="text-red-600 hover:text-red-900 transition-colors duration-200">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
