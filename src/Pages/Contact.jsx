import React from 'react'

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Section - Updated styling */}
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 backdrop-blur-sm bg-opacity-95">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Get in Touch</h1>
                            <p className="mt-3 text-lg text-gray-600">We'd love to hear from you. Let's build something amazing together.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-5 group hover:scale-105 transition-transform duration-300">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <i className="ri-mail-line text-blue-600 text-xl"></i>
                                </div>
                                <a href="mailto:parmjeetdell1@gmail.com" className="text-lg text-gray-700 hover:text-blue-600">parmjeetdell1@gmail.com</a>
                            </div>

                            <div className="flex items-center space-x-5 group hover:scale-105 transition-transform duration-300">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <i className="ri-phone-line text-blue-600 text-xl"></i>
                                </div>
                                <a href="tel:+916249097292" className="text-lg text-gray-700 hover:text-blue-600">+91 6249097292</a>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-8">
                            <blockquote className="italic text-lg text-gray-600">
                                "W&B is a key piece of our fast-paced, cutting-edge, large-scale
                                <span className="text-blue-600 font-medium not-italic"> research workflow: great flexibility, performance, and user experience."</span>
                            </blockquote>

                            <div className="mt-6 flex items-center space-x-4">
                                <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">T</div>
                                <div>
                                    <p className="font-semibold text-gray-900">Teams-Oreos</p>
                                    <p className="text-sm text-gray-500">Technology Partner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 backdrop-blur-sm bg-opacity-95">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <input 
                                type="text" 
                                id="address" 
                                placeholder="1234 Main St" 
                                className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="address2" className="block text-sm font-medium text-gray-700">Address 2</label>
                            <input 
                                type="text" 
                                id="address2" 
                                placeholder="Apartment, studio, or floor" 
                                className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                <input 
                                    type="text" 
                                    id="city" 
                                    className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                                <select 
                                    id="state" 
                                    className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                >
                                    <option value="">Select...</option>
                                    <option value="CA">California</option>
                                    <option value="TX">Texas</option>
                                    <option value="NY">New York</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP</label>
                                <input 
                                    type="text" 
                                    id="zip" 
                                    className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="terms" 
                                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                            />
                            <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
                                I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms and Conditions</a>
                            </label>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transform transition-all duration-200 hover:scale-[1.02]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}   
