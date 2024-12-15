import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/auth';
import { redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { VscThreeBars } from 'react-icons/vsc';
import UserNavbar from '../Components/UserNavbar';

export default function UserProfile() {

    const [userData, setUserData] = useState({
        username: '',
        year: '',
        email: '',
        semester: '',
        phone: '',
        college: '',
        branch: '',
    });
    const [userD, setUserD] = useState(true);

    const { authorizationToken } = useAuth();
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
                setUserData(data.userData);
            }
        } catch (error) {
            console.log(`Error in Fetching Data Authentication: ${error}`);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, [])

    const handleInput = (e) => {
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUserData({
            ...userData,
            [name]: value,
        });
    };

    // handle form on submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        toast.dismiss();
        toast.success("Profile Updated Successfull")
        window.setTimeout(() => {
            navigate("/dashboard")
        }, 2000)
        // toast.loading("Checking.....");
        // try {
        //     const response = await fetch(`http://localhost:5000/api/admin/users/update/${userData._id}`, {
        //         method: "PATCH",
        //         headers: {
        //             Authorization: authorizationToken,
        //         },
        //         body: JSON.stringify(userData),
        //     });

        //     if (response.ok) {
        //         const responseData = await response.json();
        //         // console.log("after login: ", responseData);
        //         toast.success(responseData.message);
        //     } else {
        //         return toast.error(response.statusText);
        //     }
        // } catch (error) {
        //     toast.alert(error.message);
        // }
    };


    return (
        <section className="min-h-screen bg-gray-50 py-8">
            {/* Sidebar Toggle Button */}
            <button 
                className="fixed top-4 left-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#userDashboard" 
                aria-controls="userDashboard"
            >
                <VscThreeBars className="text-xl" />
            </button>

            {/* Sidebar */}
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="userDashboard" aria-labelledby="userDashboardLabel">
                <UserNavbar />
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Update Your Profile</h3>
                    
                    {/* Basic Information */}
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input
                                required
                                type="text"
                                id="username"
                                name="username"
                                value={userData.username}
                                onChange={handleInput}
                                placeholder="Enter Your name..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                            <input
                                required
                                type="text"
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleInput}
                                placeholder="Enter Your email..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Your Phone</label>
                            <input
                                required
                                type="text"
                                id="phone"
                                name="phone"
                                value={userData.phone}
                                onChange={handleInput}
                                placeholder="Enter Your Phone..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">Your Branch</label>
                            <input
                                required
                                type="text"
                                id="branch"
                                name="branch"
                                value={userData.branch}
                                onChange={handleInput}
                                placeholder="Enter Your branch..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">Your Semester</label>
                            <input
                                required
                                type="text"
                                id="semester"
                                name="semester"
                                value={userData.semester}
                                onChange={handleInput}
                                placeholder="Enter Your semester..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">Your College</label>
                            <input
                                required
                                type="text"
                                id="college"
                                name="college"
                                value={userData.college}
                                onChange={handleInput}
                                placeholder="Enter Your college..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* 10th Qualification Section */}
                    <h4 className="text-xl font-semibold mt-10 mb-6">10th Qualification</h4>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                            <input
                                required
                                type="text"
                                id="schoolName"
                                name="schoolName"
                                placeholder="Enter Your School name..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Address Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                <input
                                    required
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder="State"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <input
                                    required
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                                <input
                                    required
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    placeholder="Pincode"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 12th Qualification Section */}
                    <h4 className="text-xl font-semibold mt-10 mb-6">12th / Higher Education</h4>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="qualificationName" className="block text-sm font-medium text-gray-700 mb-1">Qualification Name</label>
                            <input
                                required
                                type="text"
                                id="qualificationName"
                                name="qualificationName"
                                placeholder="Enter Your Higher Qualification"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="institiuteName" className="block text-sm font-medium text-gray-700 mb-1">Institute name</label>
                            <input
                                required
                                type="text"
                                id="institiuteName"
                                name="institiuteName"
                                placeholder="Enter Your Institute name..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                <input
                                    required
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder="State"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <input
                                    required
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                                <input
                                    required
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    placeholder="Pincode"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8">
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Update Now
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}
