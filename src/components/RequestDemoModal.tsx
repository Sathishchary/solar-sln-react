
interface RequestDemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    formData: {
        name: string;
        email: string;
        phone: string;
        company: string;
        message: string;
    };
    setFormData: (data: {
        name: string;
        email: string;
        phone: string;
        company: string;
        message: string;
    }) => void;
    isSubmitted: boolean;
    handleSubmit: () => void;
}

export default function RequestDemoModal({ isOpen, onClose, formData, setFormData, isSubmitted, handleSubmit }: RequestDemoModalProps) {
    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-end">
            <div className="bg-gradient-to-br from-gray-900 to-black w-full max-w-md h-full overflow-y-auto shadow-2xl border-l border-gray-800">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-white">Request Demo</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition"
                        >
                            &times;
                        </button>
                    </div>
                    {!isSubmitted ? (
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm font-medium">Company Name</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
                                    placeholder="Your Company (Optional)"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition resize-none"
                                    placeholder="Tell us about your solar needs..."
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105 transition duration-300"
                            >
                                Submit Request
                            </button>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <span className="w-20 h-20 text-green-400 mx-auto mb-4">✔️</span>
                            <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
                            <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
