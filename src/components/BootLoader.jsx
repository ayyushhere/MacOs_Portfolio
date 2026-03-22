import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const BootLoader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const progressRef = useRef(null);
    const iconRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => onComplete(), 100);
            }
        });

        // 1. Breathing Animation on Icon
        gsap.to(iconRef.current, {
            scale: 1.04,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // 2. Continuous gradient shine on Text
        gsap.to(textRef.current, {
            backgroundPosition: "200% center",
            duration: 3,
            repeat: -1,
            ease: "linear"
        });

        // 3. Progress bar filling up dramatically
        tl.to(progressRef.current, {
            width: "100%",
            duration: 2.8,
            ease: "power2.inOut"
        });

        // 4. Container fades out to reveal Desktop
        tl.to(containerRef.current, {
            opacity: 0,
            backdropFilter: "blur(0px)",
            duration: 0.8,
            ease: "power2.inOut",
            delay: 0.3
        });

    }, [onComplete]);

    return (
        <div 
            ref={containerRef} 
            className="fixed inset-0 z-[9999] bg-[#050914]/90 backdrop-blur-3xl flex flex-col items-center justify-center select-none overflow-hidden"
        >
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-1000" />
            
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6 mb-20 translate-y-10">
                
                {/* Glowing Icon Container */}
                <div ref={iconRef} className="relative flex justify-center items-center mb-6">
                    {/* Pulsing Aura */}
                    <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full scale-150 animate-pulse duration-700" />
                    
                    {/* Macbook icon */}
                    <img 
                        src="/macbook.png" 
                        alt="System Logo" 
                        className="w-24 h-24 object-contain relative drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]" 
                    />
                </div>

                {/* Shimmering Text */}
                <h1 
                    ref={textRef}
                    className="text-2xl md:text-3xl font-bold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400"
                    style={{ backgroundSize: "200% auto" }}
                >
                    AYUSH OS
                </h1>

                {/* Progress Bar Container */}
                <div className="w-64 h-1.5 mt-8 bg-gray-800/60 rounded-full overflow-hidden border border-white/5 shadow-inner backdrop-blur-md">
                    {/* Liquid Gradient Progress Fill */}
                    <div 
                        ref={progressRef} 
                        className="h-full w-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] relative"
                    >
                        {/* Highlights inside the progress bar */}
                        <div className="absolute inset-0 bg-white/20 w-full h-full" />
                    </div>
                </div>

                {/* Subtle loading text */}
                <p className="mt-4 text-[10px] font-medium tracking-[0.3em] text-blue-200/50 uppercase animate-bounce">
                    Initializing Core Systems...
                </p>
            </div>
        </div>
    );
};

export default BootLoader;
