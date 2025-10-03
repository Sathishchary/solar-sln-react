import { Award, Briefcase, DollarSign, Phone, Send, Users } from 'lucide-react';
import React from 'react';

const DealerOpportunitySection: React.FC = () => (
    <section className="py-16 md:py-24 bg-white min-h-screen">
        <div className="container mx-auto px-4">
            <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Dealer / Business Opportunity</h3>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="p-8 bg-blue-50 rounded-xl shadow-xl">
                    <h4 className="text-2xl font-bold text-blue-600 mb-6">Benefits of Partnering with SLN</h4>
                    <ul className="space-y-4">
                        {[
                            { icon: DollarSign, text: 'High Margin Products: Access premium solar products at competitive dealer pricing.' },
                            { icon: Award, text: 'Authorized Dealer Status: Official certification and branding support from SLN Enterprises.' },
                            { icon: Briefcase, text: 'Comprehensive Training: Full technical, sales, and installation training for your team.' },
                            { icon: Users, text: 'Marketing & Lead Support: Receive marketing collateral and qualified leads in your territory.' },
                            { icon: Phone, text: 'Dedicated Support: Direct access to our expert technical support team.' },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <li key={index} className="flex items-start space-x-3 text-gray-700">
                                    <Icon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                    <span>{item.text}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
                    <h4 className="text-2xl font-bold mb-4 text-gray-800">Join as an Authorized Dealer</h4>
                    <p className="text-gray-600 mb-6">Take the next step in the renewable energy market. Fill out the form below to begin your inquiry.</p>
                    <form className="space-y-4">
                        <input type="text" placeholder="Company Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        <input type="text" placeholder="Contact Person Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        <input type="email" placeholder="Business Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        <textarea placeholder="Service Area / Current Business Profile" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center">
                            <Send className="w-5 h-5 mr-2" /> Submit Dealer Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default DealerOpportunitySection;