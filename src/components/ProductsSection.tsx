import { Battery, ChevronRight, DollarSign, Droplet, Link, Settings, Sun, Zap } from 'lucide-react';
import React, { useState } from 'react';
import Modal from './Modal';

interface Product {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    desc: string;
    specs: string[];
}

const ProductsSection: React.FC = () => {
    const products: Product[] = [
        { name: 'Solar Panels', icon: Sun, color: 'green', desc: 'High-efficiency Monocrystalline & Polycrystalline Modules with 25-year warranty.', specs: ['Wattage: 400W - 600W', 'Technology: PERC/Half-Cut', 'Efficiency: Up to 22%'] },
        { name: 'Inverters', icon: Zap, color: 'blue', desc: 'Grid-tied and hybrid inverters for seamless power conversion and monitoring.', specs: ['Type: String/Micro Inverters', 'Capacity: 1kW - 100kW', 'Features: WiFi Monitoring'] },
        { name: 'Batteries', icon: Battery, color: 'yellow', desc: 'Deep-cycle Lithium-ion and robust Lead-Acid batteries for reliable backup power.', specs: ['Type: LiFePO4 / Tubular', 'Capacity: 100Ah - 500Ah', 'Lifespan: 10+ Years'] },
        { name: 'Solar Water Heaters', icon: Droplet, color: 'cyan', desc: 'Evacuated Tube Collector (ETC) systems for year-round hot water savings.', specs: ['Capacity: 100 LPD - 500 LPD', 'Tank Material: Stainless Steel', 'Insulation: PUF'] },
        { name: 'Off-grid Systems', icon: Settings, color: 'purple', desc: 'Complete power solutions for remote locations with no access to the utility grid.', specs: ['Includes: Panels, Batteries, Inverter, Wiring', 'Ideal for: Farms, Remote Homes', 'Key Benefit: Total Energy Independence'] },
        { name: 'On-grid Systems', icon: DollarSign, color: 'red', desc: 'Grid-tied systems designed for maximum ROI through net-metering benefits.', specs: ['Includes: Panels, Grid-Tied Inverter', 'Ideal for: Urban Homes, Commercial Buildings', 'Key Benefit: Lowest Payback Period'] },
    ];

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const ProductDetailModal = () => {
        if (!selectedProduct) return null;

        return (
            <Modal
                title={selectedProduct.name}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                positionClass="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg"
            >
                <div className="space-y-4">
                    <p className="text-lg text-gray-600 border-b pb-3">{selectedProduct.desc}</p>
                    <h5 className="font-bold text-gray-700">Key Specifications:</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        {selectedProduct.specs.map((spec, i) => (
                            <li key={i}>{spec}</li>
                        ))}
                    </ul>
                    <div className="flex justify-end pt-4 space-x-3">
                        <button className={`bg-${selectedProduct.color}-600 text-white px-4 py-2 rounded-lg hover:bg-${selectedProduct.color}-700 transition flex items-center font-semibold`}>
                            <Link className="w-5 h-5 mr-2" /> Download Brochure
                        </button>
                    </div>
                </div>
            </Modal>
        );
    };

    return (
        <section className="py-16 md:py-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Our Solar Products</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => {
                        const Icon = product.icon;
                        return (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-green-600 hover:shadow-2xl transition duration-300">
                                <div className={`bg-${product.color}-100 w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                                    <Icon className={`w-8 h-8 text-${product.color}-600`} />
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h4>
                                <p className="text-gray-600 mb-4 h-16 line-clamp-3">{product.desc}</p>
                                <button
                                    onClick={() => setSelectedProduct(product)}
                                    className="text-green-600 font-semibold hover:text-green-800 transition flex items-center"
                                >
                                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        );
                    })}
                </div>
                <ProductDetailModal />
            </div>
        </section>
    );
};

export default ProductsSection;