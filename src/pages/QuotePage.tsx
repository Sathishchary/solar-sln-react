import { Calculator, CheckCircle, Shield, Zap } from 'lucide-react';
import React, { useState } from 'react';
import GetQuoteModal from '../components/GetQuoteModal';

const QuotePage: React.FC = () => {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const benefits = [
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "Instant Quote Generation",
            description: "Get a detailed solar quote in minutes, not days. Our advanced system calculates your potential savings immediately."
        },
        {
            icon: <Shield className="w-8 h-8 text-green-500" />,
            title: "No Hidden Costs",
            description: "Transparent pricing with detailed breakdown. What you see is what you get - no surprises later."
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
            title: "Expert Consultation",
            description: "Free consultation with our solar experts to optimize your system design and maximize savings."
        },
        {
            icon: <Calculator className="w-8 h-8 text-purple-500" />,
            title: "ROI Calculator",
            description: "See your return on investment, payback period, and 25-year savings projection."
        }
    ];

    const steps = [
        {
            step: "1",
            title: "Property Assessment",
            description: "Tell us about your property, roof type, and current energy consumption."
        },
        {
            step: "2",
            title: "System Design",
            description: "Our experts design a custom solar solution based on your specific needs."
        },
        {
            step: "3",
            title: "Quote Generation",
            description: "Receive a detailed quote with pricing, specifications, and savings projections."
        },
        {
            step: "4",
            title: "Site Visit",
            description: "Schedule a free site assessment to finalize system design and installation timeline."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
            <GetQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
                        Get Your Free Solar Quote
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Discover how much you can save with solar energy. Get a personalized quote in just 3 simple steps
                        and start your journey towards energy independence today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200 text-xl flex items-center"
                        >
                            <Calculator className="w-6 h-6 mr-3" />
                            Start Your Free Quote
                        </button>
                        <p className="text-sm text-gray-500">No credit card required • 100% Free • 2-minute setup</p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                        Why Choose Our Solar Quote System?
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        We've simplified the solar quote process to give you accurate, transparent pricing
                        and professional guidance every step of the way.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="flex justify-center mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                        Simple 4-Step Process
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        From initial quote to installation, we make going solar easy and stress-free.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Savings Calculator Preview */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                            See Your Potential Savings
                        </h2>
                        <p className="text-gray-600 text-center mb-12">
                            Based on average customer data in Telangana and Andhra Pradesh
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl">
                                <h3 className="text-3xl font-bold text-orange-600 mb-2">₹2.5L - ₹15L</h3>
                                <p className="text-gray-700 font-semibold mb-2">Total Savings</p>
                                <p className="text-sm text-gray-600">Over 25 years</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl">
                                <h3 className="text-3xl font-bold text-green-600 mb-2">3-7 Years</h3>
                                <p className="text-gray-700 font-semibold mb-2">Payback Period</p>
                                <p className="text-sm text-gray-600">System pays for itself</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl">
                                <h3 className="text-3xl font-bold text-blue-600 mb-2">70-90%</h3>
                                <p className="text-gray-700 font-semibold mb-2">Bill Reduction</p>
                                <p className="text-sm text-gray-600">Monthly electricity savings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Go Solar?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Join thousands of satisfied customers who are already saving money with solar energy.
                        Get your personalized quote today!
                    </p>
                    <button
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-gray-100 transition-all duration-200 text-xl flex items-center mx-auto"
                    >
                        <Calculator className="w-6 h-6 mr-3" />
                        Get Your Free Quote Now
                    </button>
                    <p className="text-sm mt-4 opacity-75">
                        🔒 Your information is secure and will never be shared
                    </p>
                </div>
            </section>
        </div>
    );
};

export default QuotePage;