import { X } from 'lucide-react';
import React from 'react';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    positionClass?: string;
}

const Modal: React.FC<ModalProps> = ({
    title,
    isOpen,
    onClose,
    children,
    positionClass = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-[100]">
            <div className={`bg-white rounded-xl p-6 md:p-8 shadow-2xl w-full max-w-md transition-all duration-300 ${positionClass}`}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition">
                        <X className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;