import { ChevronRight, Sun } from 'lucide-react';
import React from 'react';

interface HomeSectionProps {
    scrollToSection: (section: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ scrollToSection }) => (
    <section className="pt-24 pb-16 relative min-h-screen-minus-header overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img
                src="/solar-farm-sunset.jpeg"
                alt="Solar Farm"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 to-green-900/85"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
                        Powering Kurnool & Hyderabad with <span className="text-green-300">Clean Solar Energy</span>
                    </h2>
                    <p className="text-lg text-gray-100 mb-8 drop-shadow">
                        With over **10 years of expertise**, delivering sustainable and reliable solar solutions across Telangana, Andhra Pradesh, and Bangalore.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button onClick={() => scrollToSection('products')} className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition flex items-center font-semibold">
                            Explore Products <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                        <button onClick={() => scrollToSection('dealer')} className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold">
                            Become a Dealer
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                        <Sun className="w-32 h-32 text-yellow-300 mx-auto mb-6 drop-shadow-lg" />
                        <div className="grid grid-cols-3 gap-4 text-white text-center">
                            {[
                                { count: '10+', label: 'Years Experience' },
                                { count: '5000+', label: 'Panels Installed' },
                                { count: '3+', label: 'States Served' },
                            ].map((stat, index) => (
                                <div key={index} className="p-3 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                                    <div className="text-3xl md:text-4xl font-bold whitespace-nowrap">{stat.count}</div>
                                    <div className="text-xs mt-1 font-medium leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HomeSection;