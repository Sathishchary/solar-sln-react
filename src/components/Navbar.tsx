import { Bell, Menu, Plus, Sun, X } from 'lucide-react';

interface NavbarProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    setIsDemoModalOpen: (open: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen, setIsDemoModalOpen }: NavbarProps) {
    return (
        <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-3">
                        <Sun className="w-10 h-10 text-yellow-400" />
                        <span className="text-3xl font-bold text-white">SolarPro</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-gray-300 hover:text-yellow-400 transition text-lg">About</a>
                        <button onClick={() => setIsDemoModalOpen(true)} className="text-gray-300 hover:text-yellow-400 transition text-lg">Request Demo</button>
                        <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition text-lg">Contact</a>
                        <button className="p-2 text-gray-300 hover:text-yellow-400 transition"><Plus className="w-6 h-6" /></button>
                        <button className="p-2 text-gray-300 hover:text-yellow-400 transition relative"><Bell className="w-6 h-6" /><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span></button>
                    </div>
                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800">
                    <div className="px-4 py-3 space-y-3">
                        <a href="#about" className="block text-gray-300 hover:text-yellow-400">About</a>
                        <button onClick={() => { setIsDemoModalOpen(true); setIsMenuOpen(false); }} className="block text-gray-300 hover:text-yellow-400 w-full text-left">Request Demo</button>
                        <a href="#contact" className="block text-gray-300 hover:text-yellow-400">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
