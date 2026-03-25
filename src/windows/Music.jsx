import React, { useRef, useState, useEffect } from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import { Play, Pause, SkipBack, SkipForward, Music as MusicIcon } from 'lucide-react';

const SONGS = [
  {
    title: "Rasputin",
    artist: "Boney M.",
    src: "/music/rasputin.mp3",
    color: "from-indigo-400 via-purple-600 to-indigo-900"
  },
  {
    title: "All The Stars",
    artist: "Kendrick Lamar, SZA",
    src: "/music/All The Stars.mp3",
    color: "from-blue-500 via-cyan-500 to-teal-500"
  }
];

const Music = ({ windowKey }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef(null);

  const activeTrack = SONGS[currentSong];

  // Force play transition when switching songs
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(e => console.error("Playback failed: ", e));
    }
  }, [currentSong, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed: ", e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % SONGS.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSong((prev) => (prev - 1 + SONGS.length) % SONGS.length);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col h-full bg-[#18181b] text-gray-200 shadow-2xl overflow-hidden rounded-xl font-sans relative">
      
      {/* Immersive Glassmorphism Background reflecting active track colors */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className={`absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br ${activeTrack.color} blur-3xl transition-all duration-[4000ms] ${isPlaying ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}`} />
      </div>

      {/* MacOS Title Bar */}
      <div id="window-header" className="relative z-10 bg-black/20 backdrop-blur-md border-b border-black/50 py-3 pointer-events-auto flex items-center">
        <WindowControls target={windowKey} />
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <MusicIcon size={14} className="text-gray-400" />
            <h2 className="text-gray-300 font-semibold text-xs tracking-wider uppercase m-0">Music</h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-transparent to-[#09090b] relative z-10">
        
        {/* Dynamic Rotating Vinyl CD */}
        <div className={`relative w-40 h-40 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-[6px] border-[#111] overflow-hidden flex items-center justify-center z-10 transition-transform duration-[3000ms] ease-linear bg-[#1a1a1a] ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
          
          {/* Seamless Vinyl Grooves Textures */}
          <div className="absolute inset-0 rounded-full border border-white/5 m-2 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full border border-white/5 m-6 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full border border-white/10 m-10 pointer-events-none"></div>
          
          {/* Dynamic Center Record Label aligned to track color */}
          <div className={`w-14 h-14 bg-gradient-to-br ${activeTrack.color} rounded-full z-10 flex items-center justify-center drop-shadow-2xl border-[3px] border-[#181818] transition-colors duration-1000`}>
             <div className="w-3 h-3 bg-[#09090b] rounded-full drop-shadow-inner border border-black backdrop-blur-md"></div>
          </div>
          
          {/* Glossy Overlay Reflection */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-white/5 z-20 pointer-events-none rounded-full transform -rotate-45"></div>
        </div>
        
        {/* Drop shadow underneath spinning record */}
        <div className={`absolute top-48 left-1/2 -translate-x-1/2 w-28 h-4 bg-black/60 blur-lg rounded-[100%] transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-40'}`}></div>

        {/* Track Metadata */}
        <div className="mt-8 text-center space-y-1 w-full max-w-[280px]">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 drop-shadow-md tracking-tight truncate px-2">{activeTrack.title}</h3>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-1 truncate px-2">{activeTrack.artist}</p>
        </div>

        {/* Refined Media Controls */}
        <div className="mt-6 flex items-center justify-center gap-6 w-full max-w-[240px]">
          <button onClick={handlePrev} className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 active:scale-90">
            <SkipBack size={20} className={isPlaying ? 'animate-pulse' : ''} />
          </button>
          
          <button onClick={togglePlay} className="w-14 h-14 bg-white hover:bg-gray-200 text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-95 duration-300 group">
            {isPlaying ? 
              <Pause size={24} className="fill-black group-hover:scale-95 transition-transform" /> : 
              <Play size={24} className="fill-black ml-1 group-hover:scale-105 transition-transform" />
            }
          </button>
          
          <button onClick={handleNext} className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 active:scale-90">
            <SkipForward size={20} className={isPlaying ? 'animate-pulse' : ''} />
          </button>
        </div>

        {/* Hidden Audio Emitter */}
        <audio 
          ref={audioRef} 
          src={activeTrack.src} 
          onEnded={handleNext}
        />
      </div>
    </div>
  );
};

export default WindowWrapper(Music, 'music');
