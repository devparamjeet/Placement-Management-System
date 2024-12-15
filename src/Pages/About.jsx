import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2024, we are passionate about delivering exceptional services 
            to our customers. Our journey began with a simple idea: To provide a platform 
            where students can find the best companies and apply for jobs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We strive to provide a platform where students can find the best companies and apply for jobs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Paramjeet Chaudhary</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Harshit Kumar</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions? Reach out to us at:{' '}
            <a href="mailto:parmjeetdell1@gmail.com" className="text-blue-600 hover:underline">
              parmjeetdell1@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default About
