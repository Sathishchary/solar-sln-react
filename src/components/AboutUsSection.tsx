import { Award, Briefcase, Sun, Users } from 'lucide-react';
import React from 'react';

const AboutUsSection: React.FC = () => {
    const founderImageUrl = './Sravan.jpg';

    return (
        <section className="py-16 md:py-24 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">About SLN Enterprises</h3>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h4 className="text-2xl font-bold text-green-600 mb-4">Our Story: A Decade of Sustainable Power</h4>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            SLN Enterprises has been at the forefront of the solar revolution for over a decade. Since our inception, we have been committed to delivering <strong>reliable, high-quality solar solutions</strong> that empower homes and businesses across Telangana, Andhra Pradesh, and Karnataka. As an authorized dealer, we ensure every installation meets the highest industry standards.
                        </p>
                        <h4 className="text-2xl font-bold text-blue-600 mb-4">Mission & Vision</h4>
                        <div className="space-y-4 text-gray-700">
                            <p className="flex items-start">
                                <Sun className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span><strong>Mission:</strong> To make solar energy accessible, affordable, and impactful for every customer, contributing significantly to energy independence and a greener environment.</span>
                            </p>
                            <p className="flex items-start">
                                <Award className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span><strong>Vision:</strong> To be the leading and most trusted solar solution provider in South India, recognized for our commitment to quality, customer service, and environmental stewardship.</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className="p-6 bg-green-50 rounded-xl shadow-lg">
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Certifications & Partnerships</h4>
                        <p className="text-sm text-gray-600 mb-4">Proudly partnered with and certified by leading organizations and government bodies.</p>
                        <div className="space-y-4">
                            <button
                                onClick={() => window.open('/Form-C-Certificate.jpg', '_blank')}
                                className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all w-full text-left cursor-pointer"
                            >
                                <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                                <div className="flex-1">
                                    <span className="font-semibold text-gray-700 block">Government Registration</span>
                                    <span className="text-xs text-gray-500">AP Labour Department - Form C</span>
                                </div>
                            </button>
                            
                            <button
                                onClick={() => window.open('/TGREDCO-Certificate.jpg', '_blank')}
                                className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all w-full text-left cursor-pointer"
                            >
                                <Users className="w-6 h-6 text-blue-500 flex-shrink-0" />
                                <div className="flex-1">
                                    <span className="font-semibold text-gray-700 block">TS REDCO Registered Vendor</span>
                                    <span className="text-xs text-gray-500">Telangana Renewable Energy</span>
                                </div>
                            </button>
                            
                            <button
                                onClick={() => window.open('/Udyam-Certificate.jpg', '_blank')}
                                className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all w-full text-left cursor-pointer"
                            >
                                <Briefcase className="w-6 h-6 text-red-500 flex-shrink-0" />
                                <div className="flex-1">
                                    <span className="font-semibold text-gray-700 block">MSME Udyam Registration</span>
                                    <span className="text-xs text-gray-500">Ministry of MSME, Govt of India</span>
                                </div>
                            </button>
                            
                            <button
                                onClick={() => window.open('/TATA-Certificate.jpg', '_blank')}
                                className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all w-full text-left cursor-pointer"
                            >
                                <Award className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <div className="flex-1">
                                    <span className="font-semibold text-gray-700 block">TATA Authorized Partner</span>
                                    <span className="text-xs text-gray-500">TATA Power Solar Rooftop</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <h4 className="text-2xl font-bold mb-4">Meet the Founder</h4>
                    <div
                        className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500 bg-cover bg-center"
                        style={{ backgroundImage: `url(${founderImageUrl})` }}
                    >
                        {!founderImageUrl && "Founder Photo"}
                    </div>
                    <p className="font-semibold text-lg text-gray-800">Sravan Eravelli</p>
                    <p className="text-green-600">B.Tech and MS in Australia</p>
                    <p className="text-green-600">Managing Director, SLN Enterprises</p>
                </div>
            </div>
        </section>
    );
}

export default AboutUsSection;
