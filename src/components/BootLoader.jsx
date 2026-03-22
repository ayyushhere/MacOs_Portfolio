import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Compass } from 'lucide-react';

const BootLoader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const iconRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => onComplete(), 100);
            }
        });

        // 1. Icon drops in
        tl.fromTo(iconRef.current, {
            y: -60,
            opacity: 0,
            scale: 0.4,
            rotation: -45
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.4)"
        });

        // 2. Pulse effect happens continuously over 1 second independently
        gsap.to(iconRef.current, {
            scale: 1.08,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // 3. Progress bar filling up dramatically
        tl.to(progressRef.current, {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut"
        });

        // 4. Container slides up and out
        tl.to(containerRef.current, {
            y: "-100%",
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
            delay: 0.3
        });

    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[9999] bg-[#0c0c0c]/90 backdrop-blur-3xl flex flex-col items-center justify-center select-none overflow-hidden">
            
            <div ref={iconRef} className="bg-white/5 p-8 rounded-full border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-12 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl animate-pulse"></div>
                <Compass className="w-24 h-24 text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] relative z-10" strokeWidth={1.2} />
            </div>

            <div className="w-72 h-1.5 bg-gray-800/80 rounded-full overflow-hidden border border-white/5 relative mb-8 shadow-inner">
                <div 
                    ref={progressRef} 
                    className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]"
                />
            </div>
            
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase animate-pulse">Establishing Connection...</p>
        </div>
    );
};

export default BootLoader;
