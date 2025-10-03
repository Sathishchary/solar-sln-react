import { Award, Briefcase, Sun, Users } from 'lucide-react';
import React from 'react';

const AboutUsSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-white min-h-screen">
        <div className="container mx-auto px-4">
            <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">About SLN Enterprises</h3>

            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h4 className="text-2xl font-bold text-green-600 mb-4">Our Story: A Decade of Sustainable Power</h4>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        SLN Enterprises has been at the forefront of the solar revolution for over a decade. Since our inception, we have been committed to delivering **reliable, high-quality solar solutions** that empower homes and businesses across Telangana, Andhra Pradesh, and Karnataka. As an authorized dealer, we ensure every installation meets the highest industry standards.
                    </p>
                    <h4 className="text-2xl font-bold text-blue-600 mb-4">Mission & Vision</h4>
                    <div className="space-y-4 text-gray-700">
                        <p className="flex items-start">
                            <Sun className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            **Mission:** To make solar energy accessible, affordable, and impactful for every customer, contributing significantly to energy independence and a greener environment.
                        </p>
                        <p className="flex items-start">
                            <Award className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            **Vision:** To be the leading and most trusted solar solution provider in South India, recognized for our commitment to quality, customer service, and environmental stewardship.
                        </p>
                    </div>
                </div>
                <div className="p-6 bg-green-50 rounded-xl shadow-lg">
                    <h4 className="text-xl font-bold mb-4 text-gray-800">Certifications & Partnerships</h4>
                    <p className="text-sm text-gray-600 mb-4">Proudly partnered with and certified by leading global solar manufacturers.</p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                            <Award className="w-6 h-6 text-yellow-500" />
                            <span className="font-semibold text-gray-700">Authorized Channel Partner</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                            <Users className="w-6 h-6 text-blue-500" />
                            <span className="font-semibold text-gray-700">ISO 9001 Compliant</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                            <Briefcase className="w-6 h-6 text-red-500" />
                            <span className="font-semibold text-gray-700">Top Brand Dealer Status</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 text-center">
                <h4 className="text-2xl font-bold mb-4">Meet the Founder</h4>
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500">
                    [Founder Photo]
                </div>
                <p className="font-semibold text-lg text-gray-800">Eravelli Saikumar</p>
                <p className="text-green-600">Managing Director, SLN Enterprises</p>
            </div>
        </div>
    </section>
);

export default AboutUsSection;