import { Calculator } from 'lucide-react';
import React, { useState } from 'react';
import GetQuoteModal from './GetQuoteModal';

interface QuoteButtonProps {
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
}

const QuoteButton: React.FC<QuoteButtonProps> = ({
    className = '',
    variant = 'primary',
    size = 'md',
    children
}) => {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const baseClasses = 'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantClasses = {
        primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-md hover:shadow-lg',
        secondary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg',
        outline: 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500'
    };

    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base'
    };

    const iconSizes = {
        sm: 'w-4 h-4',
        md: 'w-4 h-4',
        lg: 'w-5 h-5'
    };

    return (
        <>
            <button
                onClick={() => setIsQuoteModalOpen(true)}
                className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            >
                <Calculator className={`${iconSizes[size]} mr-2`} />
                {children || 'Get Free Quote'}
            </button>
            <GetQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    );
};

export default QuoteButton;