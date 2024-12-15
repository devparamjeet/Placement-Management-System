import React, { useEffect, useState } from 'react'
// Importing icons

import { FaIndustry } from "react-icons/fa";
import { MdFoundation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoMdShare } from "react-icons/io";
import { LuInfo } from "react-icons/lu";
import { useAuth } from '../auth/auth';
import { VscThreeBars } from 'react-icons/vsc';
import UserNavbar from '../Components/UserNavbar';
import { toast } from 'react-toastify';


export default function UserCompany() {

    const [companyData, setCompanyData] = useState([
        {
            companyName: "SkillsVarz Gravity Coding PVT LTD",
            companyAddress: "Sagar, Madhya Pradesh",
            jobType: "Modern Web Development",
            date: "2024-01-01",
            companyDesc: "Gravity Coding Agency is a company that provides web development services.",
            experience: "2 years",
            eligibility: "B.Tech",
            package: "100000",
            vacancy: "10",
        },
        {
            companyName: "TCS",
            companyAddress: "Pune, Maharashtra",
            jobType: "Web Development",
            date: "2024-01-01",
            companyDesc: "TCS is a company that provides web development services.",
            experience: "2 years",
            eligibility: "B.Tech",
            package: "100000",
            vacancy: "10",
        },
        {
            companyName: "Wipro",
            companyAddress: "Mumbai, Maharashtra",
            jobType: "Web Development",
            date: "2024-01-01",
            companyDesc: "Wipro is a company that provides web development services.",
            experience: "2 years",
            eligibility: "B.Tech",
            package: "100000",
            vacancy: "10",
        }
    ]);
    const [check, setCheck] = useState(true);
    const [applyCompany, setApplyCompany] = useState([]);

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

    const handleApply = (id,) => {
        // console.log();
        // setApplyCompany(id);
        toast.dismiss()
        applyCompany.filter((val) => {
            console.log(val);
            if (val === "" || val === id) {
                // console.log(false);
                setCheck(false)
                return false
            }
        })
        // console.log(check);
        if (applyCompany.filter((val) => {
            return val === id
        })) {
            applyCompany.push(id)
            return toast("You Application has been Sumbitted")
        }
        else {
            return toast.warn("You are Alredy in")
        }
        // console.log(applyCompany);
    }

    useEffect(() => {
        getAllCompany()
    }, [])

    return (
        <>
            <button className="fixed top-4 left-4 p-2 bg-primary text-white rounded-md lg:hidden" type="button" data-bs-toggle="offcanvas" data-bs-target="#userDashboard" aria-controls="userDashboard">
                <VscThreeBars />
            </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="userDashboard" aria-labelledby="userDashboardLabel">
                <UserNavbar />
            </div>

            <section className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
                {/* Filter Sidebar */}
                <div className="w-full lg:w-1/4 p-4 bg-white shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">{companyData.length} Companies matched</span>
                        <button className="text-primary hover:text-primary-dark">Clear filters</button>
                    </div>
                    
                    <input type="search" placeholder="Search here" className="w-full p-2 border rounded-md mb-4" />
                    
                    <div className="space-y-3">
                        {/* Filter checkboxes */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check-webdevelopment" />
                            <label className="ml-2 text-gray-700" htmlFor="check-webdevelopment">
                                Web Development
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check-androiddevelopment" />
                            <label className="ml-2 text-gray-700" htmlFor="check-androiddevelopment">
                                Android Development
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check-database" />
                            <label className="ml-2 text-gray-700" htmlFor="check-database">
                                Database Management
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check-cloud" />
                            <label className="ml-2 text-gray-700" htmlFor="check-cloud">
                                Cloud Management
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check-aws" />
                            <label className="ml-2 text-gray-700" htmlFor="check-aws">
                                AWS Console
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check-hosting" />
                            <label className="ml-2 text-gray-700" htmlFor="check-hosting">
                                Hosting
                            </label>
                        </div>
                    </div>
                    
                    <button className="w-full mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary-dark">
                        Apply
                    </button>
                </div>

                {/* Main Content */}
                <div className="w-full lg:w-3/4 p-4">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        {companyData.map((val, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-semibold">{val.companyName}</h2>
                                    <div className="flex gap-4 text-gray-600">
                                        <IoMdShare className="cursor-pointer hover:text-primary" />
                                        <LuInfo className="cursor-pointer hover:text-primary" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <MdFoundation /> {val.jobType}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaLocationDot /> {val.companyAddress}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BsFillCalendarDateFill /> {val.date}
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <div className="space-y-2">
                                    <p className="text-gray-700">{val.companyDesc}</p>
                                    <div className="text-gray-600">Experience: {val.experience}</div>
                                    <div className="text-gray-600">Minimum Eligibility: {val.eligibility}</div>
                                    <div className="text-gray-600">Package: {val.package}</div>
                                    <div className="text-gray-600">No of Seats: {val.vacancy}</div>
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <button 
                                        onClick={() => handleApply(val._id)}
                                        className="flex-1 bg-primary text-white py-2 rounded-md hover:bg-primary-dark"
                                    >
                                        Apply Now
                                    </button>
                                    <button className="flex-1 border border-primary text-primary py-2 rounded-md hover:bg-primary hover:text-white">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
