import React, { useEffect, useState } from 'react'
import './Company.css'
import companiesData from '../Data/companies.json'
// Importing icons

import { FaIndustry } from "react-icons/fa";
import { MdFoundation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdShare } from "react-icons/io";
import { LuInfo } from "react-icons/lu";
import { useAuth } from '../auth/auth';


export default function Company() {

    const [companyData, setCompanyData] = useState([
        {
            companyName: "Teams-Oreos",
            companyAddress: "New Delhi, India",
            jobType: "Web Development",
            date: "2024-01-01",
            companyDesc: "Teams-Oreos is a technology company that specializes in web development and cloud management.",
            experience: "2 years",
            eligibility: "B.Tech",
            package: "10 LPA",
            vacancy: "10"
        },
        {
            companyName: "SkillsVarz Gravity Coding PVT Ltd",
            companyAddress: "Sagar, Madhya Pradesh",
            jobType: "Modern Web Development",
            date: "2024-01-01",
            companyDesc: "SkillsVarz Gravity Coding PVT Ltd is a technology company that specializes in android development and cloud management.",
            experience: "2 years",
            eligibility: "B.Tech",
            package: "10 LPA",
            vacancy: "10"
        },
        {
            companyName: "Techpile Technology",
            companyAddress: "Sagar, Madhya Pradesh",
            jobType: "Android Development",
            date: "2024-01-01",
            companyDesc: "Techpile Technology is a technology company that specializes in android development and cloud management.",
            experience: "2 years",
            eligibility: "B.Tech",
            package: "10 LPA",
            vacancy: "10"
        },
        {
            companyName: "Techpile Technology",
            companyAddress: "Sagar, Madhya Pradesh",
            jobType: "Database Management",
            date: "2024-01-01",
            companyDesc: "Techpile Technology is a technology company that specializes in android development and cloud management.",
            experience: "2 years",
            eligibility: "B.Tech",
            package: "10 LPA",
            vacancy: "10"
        }
    ]);
    const navigate = useNavigate()

    const getAllCompany = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/allCompany", {
                method: "GET",
            });
            const data = await response.json();
            setCompanyData(data.response);
            // Check The Response messagel
            // console.log(data.response)
            if (data.message === "Access denied") {
                // return navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        // getAllCompany()
    }, [])

    return (
        <section className='flex flex-col md:flex-row min-h-screen bg-gray-100 p-6 gap-8'>
            {/* Filter Sidebar - updated styling */}
            <form className="w-full md:w-80 bg-white p-6 rounded-xl shadow-md h-fit border border-gray-100">
                <div className='flex justify-between items-center mb-6'>
                    <span className='text-gray-800 font-medium'>{companyData.length} Companies matched</span>
                    <button type='reset' className='text-blue-600 hover:text-blue-700 font-medium'>Clear filters</button>
                </div>

                <input 
                    type="search" 
                    placeholder='Search companies...' 
                    className='w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                />

                <div className='space-y-3'>
                    {/* Filter checkboxes */}
                    {['Web Development', 'Android Development', 'Database Management', 
                      'Cloud Management', 'AWS Console', 'Hosting'].map((item) => (
                        <div className="flex items-center" key={item}>
                            <input
                                type="checkbox"
                                value={item}
                                id={`check-${item.toLowerCase().replace(' ', '')}`}
                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <label className="ml-2 text-gray-700" htmlFor={`check-${item.toLowerCase().replace(' ', '')}`}>
                                {item}
                            </label>
                        </div>
                    ))}
                </div>

                <button className='w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors font-medium'>
                    Apply Filters
                </button>
            </form>

            {/* Company Cards - updated styling */}
            <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {companyData.map((val, index) => (
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100" key={index}>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-2xl font-semibold text-gray-800'>{val.companyName}</h2>
                                <Link className='text-gray-600 hover:text-blue-600 transition-colors' to={val.websiteLink}>
                                    <LuInfo className='text-2xl' />
                                </Link>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-gray-600'>
                                <div className='flex items-center gap-3 bg-gray-50 p-2 rounded-lg'>
                                    <MdFoundation className="text-blue-600" /> {val.jobType}
                                </div>
                                <div className='flex items-center gap-3 bg-gray-50 p-2 rounded-lg'>
                                    <FaLocationDot className="text-blue-600" /> {val.companyAddress}
                                </div>
                                <div className='flex items-center gap-3 bg-gray-50 p-2 rounded-lg'>
                                    <BsFillCalendarDateFill className="text-blue-600" /> {val.date}
                                </div>
                            </div>

                            <hr className='my-6 border-gray-200' />

                            <div className="space-y-4">
                                <p className='text-gray-700 leading-relaxed'>{val.companyDesc}</p>
                                <div className='grid grid-cols-2 gap-4 mt-4'>
                                    <div className='bg-gray-50 p-3 rounded-lg'>
                                        <span className='text-gray-500 block text-sm'>Experience</span>
                                        <span className='text-gray-800 font-medium'>{val.experience}</span>
                                    </div>
                                    <div className='bg-gray-50 p-3 rounded-lg'>
                                        <span className='text-gray-500 block text-sm'>Eligibility</span>
                                        <span className='text-gray-800 font-medium'>{val.eligibility}</span>
                                    </div>
                                    <div className='bg-gray-50 p-3 rounded-lg'>
                                        <span className='text-gray-500 block text-sm'>Package</span>
                                        <span className='text-gray-800 font-medium'>{val.package}</span>
                                    </div>
                                    <div className='bg-gray-50 p-3 rounded-lg'>
                                        <span className='text-gray-500 block text-sm'>Vacancies</span>
                                        <span className='text-gray-800 font-medium'>{val.vacancy}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-4 mt-8'>
                                <button 
                                    className='flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'
                                    onClick={() => navigate('/login')}
                                >
                                    Apply Now
                                </button>
                                <button 
                                    className='flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium'
                                    onClick={() => navigate('/view-more-job')}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
