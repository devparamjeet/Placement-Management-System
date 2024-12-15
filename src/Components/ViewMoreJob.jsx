import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewMoreJob() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                    <i className="ri-arrow-left-s-line text-xl"></i>
                    <span className="text-lg font-medium ml-2">Back to Upcoming Jobs</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mt-4 md:mt-0">Gravity Coding Agency</h1>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                        <img 
                            src="https://i.pinimg.com/originals/be/cb/ca/becbca09cc81c9ecd1ce133c836b3f25.gif" 
                            alt="Company Logo"
                            className="max-w-[200px] h-auto"
                        />
                    </div>
                    <p className="text-lg text-gray-600">Gravity Coding Agency</p>
                    <h3 className="text-2xl font-bold text-gray-900">Full Stack Web Developer</h3>
                    <div className="flex flex-wrap gap-3">
                        {['JavaScript', 'UI/UX Design', 'Backend'].map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="md:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                        <div className="space-y-4">
                            {[
                                { label: 'Website', value: <Link to="/" className="text-blue-600 hover:text-blue-800">Gravity Coding</Link> },
                                { label: 'Last Date', value: '12/05/2024' },
                                { label: 'Package', value: '15LPA - 18LPA' },
                                { label: 'Experience', value: '0 Years' },
                                { label: 'Job Type', value: 'Remote' },
                                { label: 'No. of Opening', value: '10' },
                            ].map((item) => (
                                <div key={item.label} className="flex border-b border-gray-200 pb-4">
                                    <span className="w-1/3 font-medium text-gray-600">{item.label}</span>
                                    <span className="w-2/3 text-gray-900">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">About</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minus fugiat ipsum rerum aut illum dignissimos velit quasi exercitationem voluptatem ea, itaque architecto mollitia quos nesciunt asperiores voluptatibus consectetur! Ipsam corporis cumque non error ullam doloribus, unde natus nisi. Quo sit ad, repudiandae mollitia nulla amet omnis architecto aspernatur aliquid! Animi tempore amet, a maxime vitae minima eveniet veritatis sequi cupiditate illo beatae magnam dignissimos veniam cum, consequuntur pariatur rem alias quos nesciunt blanditiis perspiciatis in facilis. Eligendi itaque ratione dolores porro cumque unde id atque sunt expedita ullam velit quos, totam est quisquam debitis sapiente modi consequuntur numquam neque laborum aliquam facere aspernatur cupiditate. Porro assumenda, deserunt mollitia, aliquam quae cum magnam, id sint delectus quam adipisci voluptatibus esse.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
