import React, { useEffect } from 'react'
import { Navbar, Welcome, Dock } from '#components'
import { Finder, Resume, Safari, Terminal, Text, Image as ImageWindow, Contact, Home, Photos } from '#windows';
import useThemeStore from './store/Theme';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';


gsap.registerPlugin(Draggable);

const App = () => {
  const { wallpaper } = useThemeStore();

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
    <main className="w-full h-screen overflow-hidden text-white selection:bg-pink-500/30">
      <Navbar />
      <section className='relative h-[calc(100vh-80px)] w-full'>
        <Welcome />
        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <ImageWindow />
        <Photos />
        <Contact />
        <Home />
      </section>
      <Dock />
    </main>
  )
}

export default App