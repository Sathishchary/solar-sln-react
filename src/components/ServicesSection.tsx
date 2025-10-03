import { Award, Briefcase, Settings, Zap } from 'lucide-react';
import React from 'react';

interface Service {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    desc: string;
}

const ServicesSection: React.FC = () => {
    const services: Service[] = [
        { title: 'Solar Installation', icon: Zap, color: 'green', desc: 'Professional, certified installation of residential, commercial, and industrial solar systems. We handle all planning and execution.' },
        { title: 'Maintenance & AMC', icon: Settings, color: 'blue', desc: 'Annual Maintenance Contracts (AMC) and periodic check-ups to ensure your system maintains peak efficiency and longevity.' },
        { title: 'Solar Consultancy', icon: Award, color: 'yellow', desc: 'Expert guidance on system size, financial feasibility (ROI), government subsidies, and optimal design for your location.' },
        { title: 'Dealer Support', icon: Briefcase, color: 'red', desc: 'Dedicated technical and sales support for our authorized dealer network, including training and marketing materials.' },
    ];

    return (
        <section className="py-16 md:py-24 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Our Comprehensive Services</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <div key={idx} className="bg-gray-50 border-t-4 border-green-500 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.02]">
                                <Icon className={`w-10 h-10 text-${service.color}-600 mb-3`} />
                                <h4 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h4>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;