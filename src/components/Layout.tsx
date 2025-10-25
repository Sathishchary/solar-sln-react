import { Calculator, Clock, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RequestDemoModalApp from '../components/RequestDemoModalApp';
import { ROUTES } from '../utils/routes';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const location = useLocation();

    // Menu items WITHOUT Calculator
    const menuItems = [
        { name: 'Home', path: ROUTES.HOME },
        { name: 'About Us', path: ROUTES.ABOUT },
        { name: 'Products', path: ROUTES.PRODUCTS },
        { name: 'Services', path: ROUTES.SERVICES },
        { name: 'Projects', path: ROUTES.PROJECTS },
        { name: 'Dealer Opportunity', path: ROUTES.DEALER },
        { name: 'Contact', path: ROUTES.CONTACT }
    ];

    return (
        <div className="min-h-screen bg-white font-inter">
            <RequestDemoModalApp isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />

            <header className="fixed top-0 w-full bg-white shadow-lg z-50">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center space-x-2 focus:outline-none">
                            <img src="/sln-logo.jpg" alt="SLN Enterprises Logo" className="w-12 h-12 object-contain" />
                            <div>
                                <h1 className="text-xl font-bold text-gray-800">SLN Enterprises</h1>
                                <p className="text-xs text-gray-600">Solar Solutions</p>
                            </div>
                        </Link>

                        <div className="hidden lg:flex items-center space-x-6">
                            {menuItems.map(item => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-gray-700 hover:text-green-600 transition font-medium ${location.pathname === item.path ? 'text-green-600 border-b-2 border-green-600 pb-1' : ''
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            
                            {/* SOLAR CALCULATOR BUTTON - Separate and Highlighted */}
                            <Link
                                to={ROUTES.CALCULATOR}
                                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-2.5 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition shadow-md font-bold flex items-center"
                            >
                                <Calculator className="w-4 h-4 mr-2" />
                                Solar Calculator
                            </Link>

                            <button
                                onClick={() => setIsDemoModalOpen(true)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-md font-semibold flex items-center"
                            >
                                Request Demo
                            </button>
                            
                            <Link
                                to={ROUTES.QUOTE}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-md font-semibold"
                            >
                                Get Free Quote
                            </Link>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="lg:hidden mt-4 pb-4 space-y-3 border-t pt-4">
                            {menuItems.map(item => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block w-full text-left text-gray-700 hover:text-green-600 py-2 px-3 rounded-lg ${location.pathname === item.path ? 'bg-green-50 text-green-600 font-semibold' : ''
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            
                            {/* SOLAR CALCULATOR BUTTON - Mobile */}
                            <Link
                                to={ROUTES.CALCULATOR}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-3 rounded-lg font-bold text-center flex items-center justify-center"
                            >
                                <Calculator className="w-5 h-5 mr-2" />
                                Solar Calculator
                            </Link>

                            <button
                                onClick={() => {
                                    setIsDemoModalOpen(true);
                                    setMobileMenuOpen(false);
                                }}
                                className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
                            >
                                Request Demo
                            </button>
                            
                            <Link
                                to={ROUTES.QUOTE}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
                            >
                                Get Free Quote
                            </Link>
                        </div>
                    )}
                </nav>
            </header>

            <main className="pt-16">
                {children}
            </main>

            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-10 mb-8 border-b border-gray-800 pb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <img src="/sln-logo.jpg" alt="SLN Enterprises Logo" className="w-10 h-10 object-contain" />
                                <div>
                                    <h4 className="font-bold text-lg">SLN Enterprises</h4>
                                    <p className="text-sm text-gray-400">Solar Solutions</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">Building a brighter and greener future with clean solar energy.</p>
                            <button
                                onClick={() => setIsDemoModalOpen(true)}
                                className="mt-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition shadow-md font-semibold flex items-center text-sm"
                            >
                                <Clock className="w-4 h-4 mr-2" /> Request Demo
                            </button>
                        </div>

                        <div>
                            <h5 className="font-bold mb-4 border-l-4 border-green-500 pl-3">Quick Links</h5>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {menuItems.map(item => (
                                    <li key={item.path}>
                                        <Link to={item.path} className="hover:text-white transition">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link to={ROUTES.CALCULATOR} className="hover:text-white transition text-yellow-400 font-semibold">
                                        Solar Calculator
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-bold mb-4 border-l-4 border-green-500 pl-3">Contact Details</h5>
                            <div className="space-y-3 text-sm text-gray-400">
                                <p className="flex items-center"><MapPin className="w-4 h-4 mr-3 text-green-500" /> Hyderabad & Kurnool, India</p>
                                <p className="flex items-center"><Phone className="w-4 h-4 mr-3 text-green-500" /> 77939 37979 / 94942 42942</p>
                                <p className="flex items-center"><Mail className="w-4 h-4 mr-3 text-green-500" />slnpowersolutions.com</p>
                            </div>
                        </div>

                        <div>
                            <h5 className="font-bold mb-4 border-l-4 border-green-500 pl-3">Service Areas</h5>
                            <p className="text-gray-400 text-sm">Telangana | Andhra Pradesh | Karnataka</p>
                            <p className="text-gray-400 text-sm mt-2">Kurnool • Hyderabad • Bangalore</p>
                        </div>
                    </div>
                    <div className="text-center text-sm text-gray-400">
                        <p>&copy; 2025 SLN Enterprises. All rights reserved. | Powered by Renewable Energy</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
