import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useThemeStore from '../store/Theme';

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 }
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

const setupTextHover = (container, type) => {
    if (!container) return () => { };

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];

    // Initialize all letters with base weight
    letters.forEach(letter => {
        letter.style.fontVariationSettings = `'wght' ${base}`;
    });

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const center = l - left + w / 2;
            const distance = Math.abs(mouseX - center);

            // Calculate intensity based on distance (Gaussian-like distribution)
            const intensity = Math.exp(-(distance ** 2) / 10000); // Adjusted sigma for better feel
            const targetWeight = base + (max - min) * intensity;

            gsap.to(letter, {
                fontVariationSettings: `'wght' ${targetWeight}`,
                duration: 0.2,
                ease: "power1.out",
                overwrite: "auto"
            });
        });
    };

    const handleMouseLeave = () => {
        gsap.to(letters, {
            fontVariationSettings: `'wght' ${base}`,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
            overwrite: "auto"
        });
    };

    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mousemove", handleMouseMove);
    };
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const { wallpaper } = useThemeStore();

    // Dark text for light wallpaper, Light text for dark wallpaper
    const textColor = wallpaper === 'light' ? 'text-gray-900' : 'text-gray-200';

    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, "title")
        const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle")

        return () => {
            subtitleCleanup();
            titleCleanup();
        }
    }, [])

    return (
        <section id='welcome'>
            <p ref={subtitleRef}>
                {renderText("Hey, I'm Ayush! Welcome to my",
                    `text-3xl font-georama ${textColor}`,
                    100)}
            </p>
            <h1 ref={titleRef} className='mt-7'>
                {renderText("portfolio", `text-9xl italic font-georama ${textColor}`)},
            </h1>

            <div>
                <p className='small-screen'>
                    This portfolio is designed for desktop/tablet screens
                </p>
            </div>
        </section>
    )
}

export default Welcome