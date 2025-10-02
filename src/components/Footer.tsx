
interface FooterProps {
    setIsDemoModalOpen: (open: boolean) => void;
}

export default function Footer({ setIsDemoModalOpen }: FooterProps) {
    return (
        <footer className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white py-12 mt-16 shadow-2xl border-t border-white/30">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-lg font-semibold flex items-center gap-2">
                    <span className="inline-block bg-white/30 rounded-xl px-4 py-2 shadow">SolarX</span>
                    <span className="ml-2">&copy; {new Date().getFullYear()} All rights reserved.</span>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-white text-pink-500 px-7 py-3 rounded-2xl font-extrabold shadow-2xl hover:bg-pink-500 hover:text-white transition-all duration-200 border-2 border-pink-500" onClick={() => setIsDemoModalOpen(true)}>Request Demo</button>
                </div>
            </div>
        </footer>
    );
}
