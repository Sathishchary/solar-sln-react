
import QuoteButton from './QuoteButton';

interface HeroSectionProps {
    onRequestDemo: () => void;
}

export default function HeroSection({ onRequestDemo }: HeroSectionProps) {
    return (
        <section
            className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-yellow-200 via-orange-100 to-pink-200"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/60 via-orange-400/40 to-pink-400/30 z-0" />
            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center w-full mb-8">
                        <div className="bg-white rounded-full shadow-2xl border-8 border-yellow-400 flex items-center justify-center mx-auto p-2 sm:p-6 w-full max-w-2xl aspect-square">
                            <img
                                src="/src/assets/solar-bg.svg"
                                alt="Solar Energy"
                                className="w-full h-full object-contain block"
                                style={{ margin: '0 auto', maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 px-8 py-6 mb-8 shadow-xl backdrop-blur-md text-center">
                        Harness the Power of the Sun
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <QuoteButton
                            variant="primary"
                            size="lg"
                            className="text-xl px-8 py-4 rounded-2xl shadow-xl"
                        >
                            Get Free Solar Quote
                        </QuoteButton>
                        <button
                            className="bg-pink-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-yellow-400 hover:text-pink-600 transition-all duration-200 text-xl"
                            onClick={onRequestDemo}
                        >
                            Request Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
