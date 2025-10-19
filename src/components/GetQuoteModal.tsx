import { ArrowLeft, ArrowRight, Calculator, CheckCircle2, Home, Sun, User, X, Zap } from 'lucide-react';
import React, { useState } from 'react';

interface GetQuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface QuoteFormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    propertyType: string;
    roofType: string;
    monthlyBill: string;
    energyUsage: string;
    installationType: string;
    budget: string;
    timeline: string;
    additionalRequirements: string;
}

const STEP_LABELS = [
    {
        id: 1,
        title: 'Personal Profile',
        description: 'Share your basic contact details so our solar experts can reach you quickly.'
    },
    {
        id: 2,
        title: 'Property Insights',
        description: 'Tell us about your property and energy consumption to tailor the system design.'
    },
    {
        id: 3,
        title: 'Energy & Budget',
        description: 'Set expectations around budget, timelines, and any special requirements.'
    }
];

const HIGHLIGHT_POINTS = [
    {
        title: 'Custom Solar Blueprint',
        description: 'Receive system sizing, component recommendations, and installation roadmap.'
    },
    {
        title: 'Savings Forecast',
        description: 'Understand lifetime savings, payback period, and subsidy eligibility.'
    },
    {
        title: 'Dedicated Consultant',
        description: 'Connect with a solar specialist within 24 hours for a guided consultation.'
    }
];

const GetQuoteModal: React.FC<GetQuoteModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<QuoteFormData>({
        name: '',
        email: '',
        phone: '',
        address: '',
        propertyType: '',
        roofType: '',
        monthlyBill: '',
        energyUsage: '',
        installationType: '',
        budget: '',
        timeline: '',
        additionalRequirements: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Quote form submitted:', formData);
            setSubmitSuccess(true);
            setTimeout(() => {
                setSubmitSuccess(false);
                setStep(1);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    propertyType: '',
                    roofType: '',
                    monthlyBill: '',
                    energyUsage: '',
                    installationType: '',
                    budget: '',
                    timeline: '',
                    additionalRequirements: ''
                });
                onClose();
            }, 3000);
        } catch (error) {
            console.error('Error submitting quote form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const isStep1Valid = formData.name && formData.email && formData.phone && formData.address;
    const isStep2Valid = formData.propertyType && formData.roofType && formData.monthlyBill;
    const progressPercentage = (step / 3) * 100;

    if (!isOpen) return null;

    if (submitSuccess) {
        return (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-blue-500 p-10 text-center text-white">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/20">
                            <Zap className="h-12 w-12" />
                        </div>
                        <h3 className="mt-8 text-3xl font-bold">Quote Request Submitted</h3>
                        <p className="mt-4 text-base text-white/80">
                            Thanks for sharing your details. Our solar concierge team is preparing a personalized proposal for you.
                        </p>
                    </div>
                    <div className="p-10 text-center">
                        <div className="rounded-2xl border border-green-100 bg-green-50/60 p-6">
                            <p className="text-sm text-green-700">
                                Your solar expert will connect within 24 hours with savings insights, system recommendations, and next steps for scheduling a site visit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-5xl">
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-600 shadow-md transition hover:bg-white"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <div className="grid gap-0 lg:grid-cols-[2fr_3fr]">
                        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-green-600 via-emerald-500 to-blue-600 p-10 text-white">
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="rounded-2xl bg-white/15 p-3">
                                        <Sun className="h-9 w-9 text-yellow-200" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">SLN Enterprises</p>
                                        <h3 className="mt-1 text-3xl font-bold leading-tight">Solar Quote Concierge</h3>
                                    </div>
                                </div>
                                <p className="mt-6 text-base leading-relaxed text-white/80">
                                    Build a tailored solar roadmap with real savings insights, curated hardware recommendations, and expert installation support.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {HIGHLIGHT_POINTS.map(item => (
                                    <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                        <div className="rounded-full bg-white/20 p-2">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-base font-semibold">{item.title}</p>
                                            <p className="mt-2 text-sm text-white/75">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Need help right away?</p>
                                <p className="mt-3 text-lg font-semibold">Call 77939 37979 / 94942 42942</p>
                            </div>
                        </div>
                        <div className="relative bg-white p-6 sm:p-10">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-600">Step {step} of 3</p>
                                    <h2 className="mt-3 text-3xl font-bold text-gray-900">Get Your Free Solar Quote</h2>
                                    <p className="mt-3 text-sm text-gray-500">
                                        Answer a few quick questions to unlock accurate pricing, savings projections, and a custom installation plan crafted by our solar experts.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 transition-all duration-300"
                                            style={{ width: `${progressPercentage}%` }}
                                        />
                                    </div>
                                    <div className="grid gap-3 sm:grid-cols-3">
                                        {STEP_LABELS.map(item => (
                                            <div
                                                key={item.id}
                                                className={`rounded-2xl border p-4 transition-all ${
                                                    step === item.id
                                                        ? 'border-green-200 bg-green-50'
                                                        : step > item.id
                                                            ? 'border-green-100 bg-green-50/50'
                                                            : 'border-gray-200 bg-gray-50'
                                                }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span
                                                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                                                            step >= item.id ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-gray-200 text-gray-500'
                                                        }`}
                                                    >
                                                        {item.id}
                                                    </span>
                                                    <span className={`${step >= item.id ? 'text-green-600' : 'text-gray-400'} text-xs font-semibold uppercase tracking-wide`}>
                                                        Step {item.id}
                                                    </span>
                                                </div>
                                                <p className="mt-3 text-sm font-semibold text-gray-800">{item.title}</p>
                                                <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                                {step === 1 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                                                <User className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Property Address *</label>
                                                <textarea
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    rows={3}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                    placeholder="Enter complete property address"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {step === 2 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                                                <Home className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-800">Property Details</h3>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Property Type *</label>
                                                <select
                                                    name="propertyType"
                                                    value={formData.propertyType}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                    required
                                                >
                                                    <option value="">Select property type</option>
                                                    <option value="residential">Residential</option>
                                                    <option value="commercial">Commercial</option>
                                                    <option value="industrial">Industrial</option>
                                                    <option value="agricultural">Agricultural</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Roof Type *</label>
                                                <select
                                                    name="roofType"
                                                    value={formData.roofType}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                    required
                                                >
                                                    <option value="">Select roof type</option>
                                                    <option value="concrete">Concrete/RCC</option>
                                                    <option value="tile">Tile Roof</option>
                                                    <option value="metal">Metal Sheet</option>
                                                    <option value="asbestos">Asbestos</option>
                                                    <option value="ground">Ground Mount</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Monthly Electricity Bill *</label>
                                                <select
                                                    name="monthlyBill"
                                                    value={formData.monthlyBill}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                    required
                                                >
                                                    <option value="">Select monthly bill range</option>
                                                    <option value="below-2000">Below ₹2,000</option>
                                                    <option value="2000-5000">₹2,000 - ₹5,000</option>
                                                    <option value="5000-10000">₹5,000 - ₹10,000</option>
                                                    <option value="10000-20000">₹10,000 - ₹20,000</option>
                                                    <option value="20000-50000">₹20,000 - ₹50,000</option>
                                                    <option value="above-50000">Above ₹50,000</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Average Monthly Energy Usage</label>
                                                <input
                                                    type="text"
                                                    name="energyUsage"
                                                    value={formData.energyUsage}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                    placeholder="e.g., 500 kWh"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {step === 3 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                                                <Calculator className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-800">Energy Requirements & Budget</h3>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Installation Type</label>
                                                <select
                                                    name="installationType"
                                                    value={formData.installationType}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                >
                                                    <option value="">Select installation type</option>
                                                    <option value="on-grid">On-Grid (Grid-Tied)</option>
                                                    <option value="off-grid">Off-Grid (Battery Backup)</option>
                                                    <option value="hybrid">Hybrid (Grid + Battery)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Budget Range</label>
                                                <select
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                >
                                                    <option value="">Select budget range</option>
                                                    <option value="below-2lakh">Below ₹2 Lakh</option>
                                                    <option value="2-5lakh">₹2 - ₹5 Lakh</option>
                                                    <option value="5-10lakh">₹5 - ₹10 Lakh</option>
                                                    <option value="10-20lakh">₹10 - ₹20 Lakh</option>
                                                    <option value="above-20lakh">Above ₹20 Lakh</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Installation Timeline</label>
                                                <select
                                                    name="timeline"
                                                    value={formData.timeline}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                >
                                                    <option value="">Select preferred timeline</option>
                                                    <option value="immediate">Immediate (Within 1 month)</option>
                                                    <option value="1-3months">1-3 months</option>
                                                    <option value="3-6months">3-6 months</option>
                                                    <option value="6-12months">6-12 months</option>
                                                    <option value="planning">Just planning/researching</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Additional Requirements</label>
                                                <textarea
                                                    name="additionalRequirements"
                                                    value={formData.additionalRequirements}
                                                    onChange={handleInputChange}
                                                    rows={4}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
                                                    placeholder="Share any specific requirements or questions"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="mt-8 flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                    <button
                                        type="button"
                                        onClick={handlePrevious}
                                        className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
                                            step === 1
                                                ? 'bg-gray-100 text-gray-400'
                                                : 'bg-white text-gray-600 shadow-sm ring-1 ring-gray-200 hover:text-gray-800'
                                        }`}
                                        disabled={step === 1}
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Previous
                                    </button>
                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold transition ${
                                                (step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)
                                                    ? 'bg-gray-200 text-gray-500'
                                                    : 'bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 text-white shadow-lg hover:from-green-500 hover:to-blue-500'
                                            }`}
                                            disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)}
                                        >
                                            Next
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`inline-flex items-center justify-center gap-3 rounded-xl px-10 py-3 text-sm font-semibold transition ${
                                                isSubmitting
                                                    ? 'bg-gray-200 text-gray-500'
                                                    : 'bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 text-white shadow-xl hover:from-green-500 hover:to-blue-500'
                                            }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                                                    Submitting
                                                </>
                                            ) : (
                                                <>
                                                    <Zap className="h-4 w-4" />
                                                    Get My Free Quote
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetQuoteModal;
