import { CheckCircle, Clock } from 'lucide-react';
import React, { useState } from 'react';
import Modal from './Modal';

interface RequestDemoModalAppProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

const RequestDemoModalApp: React.FC<RequestDemoModalAppProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDemoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionStatus('submitting');
        setTimeout(() => {
            console.log('Demo Request Submitted:', formData);
            setSubmissionStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', phone: '' });
            setTimeout(() => {
                onClose();
                setSubmissionStatus(null);
            }, 3000);
        }, 1500);
    };

    return (
        <Modal
            title="Request a Demo"
            isOpen={isOpen}
            onClose={onClose}
            positionClass="fixed top-20 right-4 md:right-10 max-w-sm"
        >
            {submissionStatus === 'success' ? (
                <div className="text-center py-10">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-700">Your request is submitted!</p>
                    <p className="text-gray-500">We will get back to you soon.</p>
                </div>
            ) : (
                <form className="space-y-4" onSubmit={handleDemoSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <button
                        type="submit"
                        disabled={submissionStatus === 'submitting'}
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold disabled:bg-green-400 flex items-center justify-center"
                    >
                        {submissionStatus === 'submitting' ? (
                            <span className="flex items-center"><Clock className="w-5 h-5 mr-2 animate-spin" /> Submitting...</span>
                        ) : (
                            'Submit Request'
                        )}
                    </button>
                </form>
            )}
        </Modal>
    );
};

export default RequestDemoModalApp;