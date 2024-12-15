import React from 'react'
import { FaGraduationCap, FaBuilding, FaHandshake, FaChalkboardTeacher } from 'react-icons/fa'

function Services() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Placement Services
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Service Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Student Training
          </h3>
          <p className="text-gray-600 text-center">
            Comprehensive training programs including mock interviews, resume building, and soft skills development.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <FaBuilding className="text-5xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Company Collaborations
          </h3>
          <p className="text-gray-600 text-center">
            Partnerships with top companies across various industries for campus recruitment drives.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <FaHandshake className="text-5xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Placement Assistance
          </h3>
          <p className="text-gray-600 text-center">
            End-to-end support for placement process, from company registration to offer letter generation.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <FaChalkboardTeacher className="text-5xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Career Counseling
          </h3>
          <p className="text-gray-600 text-center">
            Professional guidance for career path selection and industry-specific preparation.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Why Choose Our Placement Services?
        </h2>
        <ul className="space-y-4">
          {[
            'Proven track record of successful placements',
            'Network of 500+ hiring companies',
            'Dedicated placement coordinators',
            'Regular workshops and training sessions',
            'Comprehensive interview preparation'
          ].map((item, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services
