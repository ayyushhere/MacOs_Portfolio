import React, { useRef, useState, useMemo } from 'react'
import { gallery } from '#constants'
import WindowWrapper from '../hoc/WindowWrapper'
import { WindowControls } from '#components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx'
import { Search, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Heart, Share, Play } from 'lucide-react'

// Simulate a larger gallery
const extendedGallery = Array.from({ length: 24 }).map((_, i) => ({
    ...gallery[i % gallery.length],
    id: i + 1,
    title: `Photo ${i + 1}`,
    date: new Date(2024, Math.floor(i / 5), (i % 28) + 1).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
    location: ['Paris, France', 'Kyoto, Japan', 'New York, USA', 'London, UK'][i % 4]
}));

const SidebarItem = ({ icon, label, active, onClick, count }) => (
    <li
        onClick={onClick}
        className={clsx(
            "flex items-center gap-3 px-3 py-1.5 rounded-md cursor-pointer transition-colors text-sm select-none",
            active ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/5 active:bg-white/10"
        )}
    >
        <img src={icon} alt={label} className={clsx("size-4 transition-all", active ? "brightness-0 invert" : "invert opacity-70")} />
        <span className="flex-1 truncate font-medium">{label}</span>
        {count !== undefined && <span className={clsx("text-xs opacity-70", active ? "text-white" : "text-gray-400")}>{count}</span>}
    </li>
);

const Photos = () => {
    const [activeTab, setActiveTab] = useState('library');
    const [lightboxItem, setLightboxItem] = useState(null);
    const containerRef = useRef();

    useGSAP(() => {
        if (!containerRef.current) return;
        const images = containerRef.current.querySelectorAll('.gallery-item');

        gsap.fromTo(images,
            { opacity: 0, scale: 0.9, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.out"
            }
        );
    }, { scope: containerRef, dependencies: [activeTab] }); // Re-run when tab changes

    const handleNext = (e) => {
        e.stopPropagation();
        if (!lightboxItem) return;
        const currentIndex = extendedGallery.findIndex(item => item.id === lightboxItem.id);
        const nextItem = extendedGallery[(currentIndex + 1) % extendedGallery.length];
        setLightboxItem(nextItem);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        if (!lightboxItem) return;
        const currentIndex = extendedGallery.findIndex(item => item.id === lightboxItem.id);
        const prevItem = extendedGallery[(currentIndex - 1 + extendedGallery.length) % extendedGallery.length];
        setLightboxItem(prevItem);
    };

    return (
        <div className='size-full flex flex-col h-full bg-[#1e1e1e] select-none text-gray-200'>
            {/* Header / Toolbar */}
            <div id="window-header" className="!bg-[#2e2e2e] !border-b-black/20 !py-3 !px-4 z-20">
                <div className="flex w-20">
                    <WindowControls target="photos" />
                </div>

                <div className="flex-1 flex justify-center gap-4">
                    <div className="bg-black/20 p-0.5 rounded-md flex gap-1 shadow-inner border border-white/5">
                        {['Years', 'Months', 'Days', 'All Photos'].map((mode) => (
                            <button
                                key={mode}
                                className={clsx(
                                    "px-3 py-0.5 text-xs font-medium rounded-[4px] transition-all",
                                    mode === 'All Photos' ? "bg-[#3e3e3e] shadow-sm text-white" : "text-gray-400 hover:text-gray-200"
                                )}
                            >
                                {mode}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex w-20 justify-end gap-3 text-gray-400">
                    <Search size={16} />
                </div>
            </div>

            <div className='flex flex-1 overflow-hidden relative'>
                {/* Sidebar */}
                <div className="w-[220px] bg-[#252525]/95 backdrop-blur-xl border-r border-[#1a1a1a] flex flex-col pt-4 overflow-y-auto max-sm:hidden">

                    <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Photos</div>
                    <ul className="px-2 space-y-0.5 mb-6">
                        <SidebarItem
                            icon="/icons/gicon1.svg"
                            label="Library"
                            active={activeTab === 'library'}
                            onClick={() => setActiveTab('library')}
                            count={extendedGallery.length}
                        />
                        <SidebarItem
                            icon="/icons/gicon2.svg"
                            label="Memories"
                            active={activeTab === 'memories'}
                            onClick={() => setActiveTab('memories')}
                        />
                        <SidebarItem
                            icon="/icons/user.svg"
                            label="People"
                            active={activeTab === 'people'}
                            onClick={() => setActiveTab('people')}
                        />
                        <SidebarItem
                            icon="/icons/gicon4.svg"
                            label="Places"
                            active={activeTab === 'places'}
                            onClick={() => setActiveTab('places')}
                        />
                        <SidebarItem
                            icon="/icons/gicon5.svg"
                            label="Recents"
                            active={activeTab === 'recents'}
                            onClick={() => setActiveTab('recents')}
                        />
                    </ul>

                    <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Albums</div>
                    <ul className="px-2 space-y-0.5">
                        <SidebarItem icon="/icons/file.svg" label="Vacation 2024" onClick={() => { }} count={12} />
                        <SidebarItem icon="/icons/file.svg" label="Design Work" onClick={() => { }} count={8} />
                        <SidebarItem icon="/icons/file.svg" label="Family" onClick={() => { }} count={45} />
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#1e1e1e]">
                    {/* Toolbar inside content */}
                    <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-[#1e1e1e] z-10">
                        <span className="text-lg font-bold text-white">
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                        </span>
                        <div className="flex items-center gap-2">
                            <ZoomOut size={14} className="text-gray-500" />
                            <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
                                <div className="w-1/2 h-full bg-gray-400 rounded-full" />
                            </div>
                            <ZoomIn size={14} className="text-gray-500" />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-2 sm:p-6" ref={containerRef}>
                        {activeTab === 'memories' ? (
                            <div className="flex flex-col gap-8 items-center justify-center h-full text-gray-500">
                                <Play size={48} className="opacity-50" />
                                <p>No Memories yet</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 auto-rows-fr">
                                {extendedGallery.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => setLightboxItem(item)}
                                        className="gallery-item group relative aspect-square bg-gray-800 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 border border-white/5"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-between p-2 opacity-0 group-hover:opacity-100">
                                            <Heart size={16} className="text-white fill-white/50" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="h-10" /> {/* Bottom spacer */}
                    </div>
                </div>

                {/* Lightbox Overlay */}
                {lightboxItem && (
                    <div className="absolute inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col animate-in fade-in duration-200">
                        <div className="h-14 flex-none flex items-center justify-between px-6 bg-black/40 border-b border-white/10">
                            <span className="text-white/80 font-medium">{lightboxItem.date}</span>
                            <div className="flex gap-4">
                                <button className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><Heart size={18} /></button>
                                <button className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><Share size={18} /></button>
                                <button onClick={() => setLightboxItem(null)} className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><X size={18} /></button>
                            </div>
                        </div>

                        <div className="flex-1 flex items-center justify-center relative px-4 overflow-hidden">
                            <button onClick={handlePrev} className="absolute left-4 z-10 p-3 hover:bg-white/10 rounded-full text-white transition-colors">
                                <ChevronLeft size={32} />
                            </button>

                            <img
                                src={lightboxItem.img}
                                alt={lightboxItem.title}
                                className="w-auto h-auto max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                            />

                            <button onClick={handleNext} className="absolute right-4 z-10 p-3 hover:bg-white/10 rounded-full text-white transition-colors">
                                <ChevronRight size={32} />
                            </button>
                        </div>

                        <div className="h-14 flex-none flex items-center justify-center bg-black/40 text-white/60 text-sm border-t border-white/10">
                            <span className="truncate max-w-md">{lightboxItem.title} &bull; {lightboxItem.location}</span>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default WindowWrapper(Photos, 'photos');
