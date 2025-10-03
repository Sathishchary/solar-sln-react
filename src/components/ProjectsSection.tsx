import { MapPin, Package, Zap } from 'lucide-react';
import React from 'react';

interface Project {
    city: string;
    installations: string;
    capacity: string;
    caseStudy: string;
}

const ProjectsSection: React.FC = () => {
    const projects: Project[] = [
        { city: 'Kurnool', installations: '1200+', capacity: '1.5 MW+', caseStudy: 'Residential housing colony achieved 80% power bill reduction.' },
        { city: 'Hyderabad', installations: '2500+', capacity: '3.0 MW+', caseStudy: 'Commercial rooftop installation for a major IT park with zero downtime.' },
        { city: 'Andhra Pradesh (AP)', installations: '1500+', capacity: '2.0 MW+', caseStudy: 'Successful implementation of solar solutions for various small and medium enterprises (SME).' },
        { city: 'Karnataka (Bangalore)', installations: '800+', capacity: '1.0 MW+', caseStudy: 'Remote farm electrification project providing 24/7 power access.' },
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Completed Projects Gallery</h3>
                <div className="grid md:grid-cols-4 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-xl border-b-4 border-blue-500">
                            <div className="h-40 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                                <MapPin className="w-12 h-12 text-white mr-2" />
                                <span className="text-2xl font-bold text-white">{project.city}</span>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold mb-3 text-gray-800">{project.city} Case Study</h4>
                                <p className="text-sm text-gray-600 mb-4 italic">"{project.caseStudy}"</p>
                                <div className="flex justify-between text-sm font-semibold text-gray-700 pt-2 border-t border-gray-100">
                                    <span><Package className="w-4 h-4 inline mr-1 text-green-600" /> {project.installations} Installs</span>
                                    <span><Zap className="w-4 h-4 inline mr-1 text-blue-600" /> {project.capacity} Capacity</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <h4 className="text-2xl font-bold mb-4 text-gray-800">Customer Testimonial</h4>
                    <blockquote className="italic text-lg text-gray-600 max-w-3xl mx-auto">
                        "SLN Enterprises provided an excellent on-grid solution. Our electricity bill has dropped to almost zero! Professional service and outstanding follow-up support."
                    </blockquote>
                    <p className="mt-2 font-semibold text-green-600">- Mrs. L. Rao, Jubilee Hills, Hyderabad</p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;