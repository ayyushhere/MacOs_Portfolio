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
            style={{ fontFeatureSettings: `'wght' ${baseWeight}` }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

const setupTextHover = (container, type) => {
    if (!container) return () => { };

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration, ease: 'power2.out',
            fontVariationSettings: `'wght' ${weight}`,
        });
    };

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000);

            animateLetter(letter, base + (max - min) * intensity);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => {
            animateLetter(letter, base, 0.3);
        });
    };


    return () => {
        container.addEventListener("mouseleave", handleMouseLeave);
        container.addEventListener("mousemove", handleMouseMove);
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