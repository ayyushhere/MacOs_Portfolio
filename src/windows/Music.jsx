import React, { useRef, useState, useEffect } from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import { Play, Pause, SkipBack, SkipForward, Music as MusicIcon, ListMusic } from 'lucide-react';

const Music = ({ windowKey }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed: ", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-gray-200 overflow-hidden rounded-xl font-sans relative">
      
      {/* Immersive Glassmorphism Background representing album colors */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className={`absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-indigo-900 via-purple-900 to-[#1e1e1e] blur-3xl transition-transform duration-[4000ms] ${isPlaying ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}`} />
      </div>

      {/* Clean MacOS App Header */}
      <div id="window-header" className="relative z-10 bg-black/20 backdrop-blur-md border-b border-white/5 py-3 pointer-events-auto flex items-center">
        <WindowControls target={windowKey} />
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <MusicIcon size={14} className="text-gray-400" />
            <span className="text-gray-300 font-medium text-xs tracking-wider uppercase">Music</span>
        </div>
      </div>

      {/* Main Player UI */}
      <div className="flex-1 flex flex-col pt-12 pb-8 px-10 items-center justify-between relative z-10">
        
        {/* Sleek Minimalist Rotating Record */}
        <div className="relative group perspective-1000">
            <div className={`relative w-48 h-48 rounded-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden flex items-center justify-center bg-[#111] transition-all duration-[3000ms] ease-linear transform-gpu ${isPlaying ? 'animate-[spin_5s_linear_infinite] scale-105' : 'scale-100'}`}>
                
                {/* Hyper-realistic Grooves */}
                <div className="absolute inset-0 rounded-full border border-white/[0.03] m-2"></div>
                <div className="absolute inset-0 rounded-full border border-white/[0.02] m-6"></div>
                <div className="absolute inset-0 rounded-full border border-white/[0.05] m-[42px]"></div>
                
                {/* Vintage Center Label */}
                <div className="w-[72px] h-[72px] bg-indigo-500 rounded-full z-10 flex items-center justify-center drop-shadow-2xl border-[4px] border-[#0a0a0a] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400 via-purple-600 to-indigo-900 shadow-inner">
                    {/* Spindle hole */}
                    <div className="w-[14px] h-[14px] bg-[#1a1a1a] rounded-full drop-shadow-inner border border-black/50"></div>
                </div>

                {/* Glass Light Reflection */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20 mix-blend-overlay rounded-full transform -rotate-45 block"></div>
            </div>
            {/* Dropped shadow below record */}
            <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/60 blur-xl rounded-[100%] transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-40'}`}></div>
        </div>

        {/* Clean Typography Track Info */}
        <div className="mt-12 text-center w-full max-w-[280px]">
          <h3 className="text-[22px] font-semibold text-white tracking-tight drop-shadow-md truncate">Rasputin</h3>
          <p className="text-[13px] text-gray-400 font-medium tracking-wide uppercase mt-1.5 opacity-80 truncate">Boney M.</p>
        </div>

        {/* Premium Media Controls */}
        <div className="mt-10 flex items-center justify-between w-full max-w-[240px]">
          <button className="p-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">
            <SkipBack size={20} className={isPlaying ? 'opacity-100' : 'opacity-60'} />
          </button>
          
          <button onClick={togglePlay} className="w-16 h-16 bg-white hover:bg-gray-200 hover:scale-105 active:scale-95 text-black rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20">
            {isPlaying ? 
              <Pause size={24} className="fill-black shadow-sm" /> : 
              <Play size={24} className="fill-black ml-1.5 shadow-sm" />
            }
          </button>
          
          <button className="p-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">
            <SkipForward size={20} className={isPlaying ? 'opacity-100' : 'opacity-60'} />
          </button>
        </div>

        {/* Hidden Audio Emitter */}
        <audio 
          ref={audioRef} 
          src="/music/rasputin.mp3" 
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

export default WindowWrapper(Music, 'music');
