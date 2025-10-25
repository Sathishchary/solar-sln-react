import { Calculator, Sun, Zap } from 'lucide-react';
import React, { useState } from 'react';

const SolarCalculator: React.FC = () => {
    const [formData, setFormData] = useState({
        purpose: '',
        usageKW: '',
        roofArea: '',
        monthlyBill: '',
        location: ''
    });

    const [result, setResult] = useState<{
        systemSize: number;
        estimatedCost: number;
        monthlySavings: number;
        paybackPeriod: number;
        yearlyProduction: number;
    } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const calculateSolar = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic calculation logic
        const usage = parseFloat(formData.usageKW) || 0;
        const bill = parseFloat(formData.monthlyBill) || 0;

        // Estimate system size (rough calculation)
        const systemSize = Math.ceil(usage / 4);
        
        // Estimate cost (₹50,000 per kW on average)
        const estimatedCost = systemSize * 50000;
        
        // Estimate monthly savings (70-80% of bill)
        const monthlySavings = bill * 0.75;
        
        // Payback period in years
        const paybackPeriod = Math.round(estimatedCost / (monthlySavings * 12 * 10)) / 10;
        
        // Yearly production (kWh)
        const yearlyProduction = systemSize * 1500;

        setResult({
            systemSize,
            estimatedCost,
            monthlySavings,
            paybackPeriod,
            yearlyProduction
        });
    };

    const resetCalculator = () => {
        setFormData({
            purpose: '',
            usageKW: '',
            roofArea: '',
            monthlyBill: '',
            location: ''
        });
        setResult(null);
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <Calculator className="w-12 h-12 text-green-600 mr-3" />
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                            Solar Calculator
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Calculate your solar system requirements and potential savings
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Calculator Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <Sun className="w-6 h-6 text-yellow-500 mr-2" />
                                Enter Your Details
                            </h3>
                            
                            <form onSubmit={calculateSolar} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Select Purpose *
                                    </label>
                                    <select
                                        name="purpose"
                                        value={formData.purpose}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">-- Select Purpose --</option>
                                        <option value="residential">Residential</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="industrial">Industrial</option>
                                        <option value="agricultural">Agricultural</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Average Usage (in kW) *
                                    </label>
                                    <input
                                        type="number"
                                        name="usageKW"
                                        value={formData.usageKW}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 5"
                                        step="0.1"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Monthly Electricity Bill (₹) *
                                    </label>
                                    <input
                                        type="number"
                                        name="monthlyBill"
                                        value={formData.monthlyBill}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 5000"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Available Roof Area (sq.ft)
                                    </label>
                                    <input
                                        type="number"
                                        name="roofArea"
                                        value={formData.roofArea}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 500"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Location
                                    </label>
                                    <select
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="">-- Select Location --</option>
                                        <option value="hyderabad">Hyderabad</option>
                                        <option value="kurnool">Kurnool</option>
                                        <option value="bangalore">Bangalore</option>
                                    </select>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition font-bold text-lg shadow-lg flex items-center justify-center"
                                    >
                                        <Calculator className="w-5 h-5 mr-2" />
                                        Calculate
                                    </button>
                                    <button
                                        type="button"
                                        onClick={resetCalculator}
                                        className="px-6 bg-gray-200 text-gray-700 py-4 rounded-lg hover:bg-gray-300 transition font-semibold"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Results Display */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <Zap className="w-6 h-6 text-green-600 mr-2" />
                                Your Solar Estimate
                            </h3>

                            {!result ? (
                                <div className="flex flex-col items-center justify-center h-64 text-center">
                                    <Sun className="w-20 h-20 text-gray-300 mb-4" />
                                    <p className="text-gray-500 text-lg">
                                        Fill in the form to see your solar estimate
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-6">
                                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Recommended System Size</h4>
                                        <p className="text-4xl font-bold text-green-600">{result.systemSize} kW</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-yellow-50 rounded-xl p-4">
                                            <h4 className="text-xs font-semibold text-gray-600 mb-1">Estimated Cost</h4>
                                            <p className="text-2xl font-bold text-gray-800">₹{result.estimatedCost.toLocaleString()}</p>
                                        </div>
                                        <div className="bg-green-50 rounded-xl p-4">
                                            <h4 className="text-xs font-semibold text-gray-600 mb-1">Monthly Savings</h4>
                                            <p className="text-2xl font-bold text-green-600">₹{Math.round(result.monthlySavings).toLocaleString()}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-blue-50 rounded-xl p-4">
                                            <h4 className="text-xs font-semibold text-gray-600 mb-1">Payback Period</h4>
                                            <p className="text-2xl font-bold text-blue-600">{result.paybackPeriod} years</p>
                                        </div>
                                        <div className="bg-orange-50 rounded-xl p-4">
                                            <h4 className="text-xs font-semibold text-gray-600 mb-1">Yearly Production</h4>
                                            <p className="text-2xl font-bold text-orange-600">{result.yearlyProduction.toLocaleString()} kWh</p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
                                        <h4 className="text-sm font-semibold mb-2">25-Year Savings</h4>
                                        <p className="text-3xl font-bold">₹{Math.round(result.monthlySavings * 12 * 25).toLocaleString()}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolarCalculator;
