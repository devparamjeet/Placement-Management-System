import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row p-6 md:p-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="flex-1 flex flex-col justify-center space-y-8 md:space-y-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          It's time to turn your
        </h1>
        
        <div className="flex items-center space-x-6 md:space-x-8">
          <div>
            <p className="flex flex-col space-y-3">
              <span className="text-3xl md:text-4xl font-semibold text-gray-700 hover:text-blue-600 transform hover:translate-x-2 transition-all duration-300">dream</span>
              <span className="text-3xl md:text-4xl font-semibold text-gray-700 hover:text-blue-600 transform hover:translate-x-2 transition-all duration-300">hardwork</span>
              <span className="text-3xl md:text-4xl font-semibold text-gray-700 hover:text-blue-600 transform hover:translate-x-2 transition-all duration-300">target</span>
            </p>
          </div>
          
          <i className="ri-arrow-right-line text-3xl md:text-4xl text-blue-600"></i>
          
          <div>
            <p className="flex flex-col space-y-3">
              <span className="text-3xl md:text-4xl font-semibold text-blue-600 transform hover:-translate-x-2 transition-all duration-300">reality</span>
              <span className="text-3xl md:text-4xl font-semibold text-blue-600 transform hover:-translate-x-2 transition-all duration-300">smartwork</span>
              <span className="text-3xl md:text-4xl font-semibold text-blue-600 transform hover:-translate-x-2 transition-all duration-300">careerArc</span>
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
          A "Placement Management System" automates tasks and provides a central platform for all stakeholders.​
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 text-lg">
            Upcoming Jobs 
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
          </button>
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            Login
          </button>
        </div>
      </div>

      <div className="flex-1 mt-12 md:mt-0" style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        {/* Right side content */}
      </div>
    </div>
  )
}
