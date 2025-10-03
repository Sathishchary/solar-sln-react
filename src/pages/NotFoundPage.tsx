import { Home } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
            <div className="text-center px-4">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-gray-300">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                        Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                    </p>
                </div>

                <div className="space-y-4">
                    <Link
                        to="/"
                        className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition shadow-md font-semibold"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Go Home
                    </Link>

                    <div className="flex justify-center space-x-4 text-sm">
                        <Link to="/about" className="text-green-600 hover:text-green-800 transition">About Us</Link>
                        <Link to="/products" className="text-green-600 hover:text-green-800 transition">Products</Link>
                        <Link to="/services" className="text-green-600 hover:text-green-800 transition">Services</Link>
                        <Link to="/contact" className="text-green-600 hover:text-green-800 transition">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;