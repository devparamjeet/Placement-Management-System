import React, { useEffect, useState } from 'react'
// Importing icons

import { MdFoundation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoMdShare } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import { useAuth } from '../auth/auth';
import { toast } from 'react-toastify';



export default function AllCompanies() {

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
        }
    ]);
    const { authorizationToken } = useAuth();

    const getAllCompany = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/allCompanies", {
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

    useEffect(() => {
        getAllCompany()
    }, [])

    const deleteCompany = async (id) => {
        // console.log(id)
        try {
            const response = await fetch(`http://localhost:5000/api/admin/allCompanies/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            console.log(response);
            if (response.ok) {
                toast.success("User Deleted Successfully");
            }
            toast.error("Something Went Wrong ||");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='flex min-h-screen bg-gray-50'>
            {/* Left Sidebar */}
            <div className="w-72 p-4 bg-white border-r border-gray-200">
                <div className='flex justify-between items-center mb-4'>
                    <span className='text-gray-600'>{companyData.length} Companies matched</span>
                    <button className='text-blue-600 hover:text-blue-800'>Clear filters</button>
                </div>
                
                <input 
                    type="search" 
                    placeholder='Search here' 
                    className='w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />

                <div className='space-y-3 mb-4'>
                    {/* Convert each checkbox - showing first two as example */}
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-gray-700">Web Development</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-gray-700">Android Development</span>
                    </label>
                    {/* ... other checkboxes follow same pattern ... */}
                </div>

                <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                    Apply
                </button>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 p-6">
                <div className="grid grid-cols-1 gap-6 pt-14">
                    {companyData.map((val, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <div className='flex justify-between items-center'>
                                <h2 className='text-2xl font-semibold'>{val.companyName}</h2>
                                <div className='flex gap-4 text-gray-600'>
                                    <IoMdShare className="cursor-pointer hover:text-gray-800" />
                                    <LuInfo className="cursor-pointer hover:text-gray-800" />
                                    <MdDelete 
                                        className="cursor-pointer hover:text-red-600" 
                                        onClick={() => deleteCompany(val._id)}
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-3 gap-4 mt-4 text-gray-600'>
                                <div className='flex items-center gap-2'>
                                    <MdFoundation /> {val.jobType}
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaLocationDot /> {val.companyAddress}
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsFillCalendarDateFill /> {val.date}
                                </div>
                            </div>

                            <hr className='my-4' />

                            <div className="space-y-2">
                                <p className='text-lg'>{val.companyDesc}</p>
                                <div className='text-gray-700'>Experience: {val.experience}</div>
                                <div className='text-gray-700'>Minimum Eligibility: {val.eligibility}</div>
                                <div className='text-gray-700'>Package: {val.package}</div>
                                <div className='text-gray-700'>No of Seats: {val.vacancy}</div>
                            </div>

                            <div className='mt-4'>
                                <button className='bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors'>
                                    Show Applied Students
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
