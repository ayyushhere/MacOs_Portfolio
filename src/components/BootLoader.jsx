import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const BootLoader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => onComplete(), 100);
            }
        });

        // 1. Progress bar filling up smoothly
        tl.to(progressRef.current, {
            width: "100%",
            duration: 2.5,
            ease: "power1.inOut"
        });

        // 2. Container fades out abruptly yet smoothly like MacOS
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
            delay: 0.2
        });

    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center select-none overflow-hidden">
            
            <div className="flex flex-col items-center justify-center space-y-4 mb-20 translate-y-10">
                
                {/* Authentic Apple/Portfolio OS Logo mapped from system SVG */}
                <img src="/macbook.png" alt="System Logo" className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-2" />

                <h1 className="text-xl md:text-2xl font-semibold tracking-wider text-[#f5f5f7]">AYUSH OS</h1>

                <div className="w-64 h-1 mt-10 bg-[#333] rounded-full overflow-hidden">
                    <div ref={progressRef} className="h-full w-0 bg-white rounded-full" />
                </div>

                <p className="mt-4 text-[11px] font-medium tracking-wide text-[#8a8a8e]">Establishing connection...</p>
            </div>
        </div>
    );
};

export default BootLoader;
