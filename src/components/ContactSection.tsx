import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React from 'react';

const ContactSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
            <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Get in Touch with SLN</h3>
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1 space-y-8">
                    <h4 className="text-2xl font-bold text-green-600">Head Office Details</h4>

                    <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md">
                        <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-lg">Hyderabad Office</p>
                            <p className="text-gray-600 text-sm">Flat 606, Adithya Enclave, Beside Ameerpet Metro Station, Ameerpet, Hyderabad - 500038</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md">
                        <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-lg">Kurnool Office</p>
                            <p className="text-gray-600 text-sm">H. No. 12-32, Ashok Nagar, Near Sai Baba Temple, Kurnool, Andhra Pradesh - 518001</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold">Call Us / WhatsApp</p>
                                <p className="text-gray-600 font-mono">77939 37979</p>
                                <p className="text-gray-600 font-mono">94942 42942</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold">Email</p>
                                <p className="text-gray-600">contact@slnenterprises.com</p>
                                <p className="text-gray-600 text-sm italic">Contact: Eravelli Saikumar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-xl">
                    <h4 className="text-2xl font-bold mb-4 text-gray-800">Send Us a Message</h4>
                    <form className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </div>
                        <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        <textarea placeholder="Your Message or Inquiry Details" rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
                        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold flex items-center justify-center">
                            <Send className="w-5 h-5 mr-2" /> Submit Inquiry
                        </button>
                    </form>
                    <div className="mt-8">
                        <h4 className="text-xl font-bold mb-3 text-gray-800">Find Us on the Map</h4>
                        <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 border border-gray-300">
                            [Google Map Embed Placeholder]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;