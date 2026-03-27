import React, { useEffect, useState } from 'react'
import { Navbar, Welcome, Dock, BootLoader } from '#components'
import { Finder, Resume, Safari, Terminal, Text, Image as ImageWindow, Contact, Home, Photos, Music, Certificates } from '#windows';
import useThemeStore from './store/Theme';
import useWindowStore from './store/Windows';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';


gsap.registerPlugin(Draggable);

const App = () => {
  const { setIsMobile } = useWindowStore();
  const { wallpaper } = useThemeStore();
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);

  useEffect(() => {
    // Enforce dark mode
    document.documentElement.classList.add('dark');

    // Update wallpaper
    document.body.style.backgroundImage = `url('/images/wallpaper-${wallpaper === 'light' ? 'light.png' : 'dark.jpg'}')`;
  }, [wallpaper]);

  // Preload images
  useEffect(() => {
    const img1 = new Image();
    img1.src = '/images/wallpaper-light.png';
    const img2 = new Image();
    img2.src = '/images/wallpaper-dark.jpg';
  }, []);

  return (
    <main className="w-full h-dvh overflow-hidden text-white selection:bg-pink-500/30 relative">
      {isBooting && <BootLoader onComplete={() => setIsBooting(false)} />}
      <Navbar />
      <section className='relative h-[calc(100dvh-80px)] w-full'>
        <Welcome />
        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <ImageWindow />
        <Photos />
        <Contact />
        <Music windowKey="music" />
        <Certificates />
        <Home />
      </section>
      <Dock />
    </main>
  )
}

export default App