import React from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';

const Music = ({ windowKey }) => {
  return (
    <div className="flex flex-col h-full bg-[#121212] overflow-hidden rounded-xl">
      <div id="window-header" className="bg-[#181818]/90 backdrop-blur-xl border-b border-black/50 py-3 pointer-events-auto">
        <WindowControls target={windowKey} />
        <h2 className="text-gray-200 font-semibold text-sm mx-auto tracking-wide">Spotify</h2>
      </div>

      <div className="flex-1 w-full bg-[#121212] overflow-hidden rounded-b-xl relative">
        <iframe
            title="Spotify Web Player"
            src={`https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="absolute inset-0 border-0 rounded-b-xl"
        />
      </div>
    </div>
  );
};

const MusicWindow = WindowWrapper(Music, 'music');
export default MusicWindow;
