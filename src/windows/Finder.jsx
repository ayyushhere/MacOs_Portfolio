import { WindowControls } from '#components'
import { locations } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { Search } from 'lucide-react'
import { useLocationStore } from '#store/location'
import clsx from 'clsx'
import React from 'react'
import useWindowStore from '#store/Windows'

const Finder = () => {

    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => {
        if (item.fileType === 'pdf') return openWindow("resume");
        if (item.kind === "folder") return setActiveLocation(item);
        if (['fig', 'url'].includes(item.fileType) && item.href) return window.open(item.href, '_blank');

        if (item.fileType === 'txt') return openWindow("txtfile", item);
        if (item.fileType === 'img') return openWindow("imgfile", item);
        openWindow(`${item.fileType}${item.id}`, item)
    }

    const renderList = (name, items) =>
        <div>
            <h3>{name}</h3>

            <ul>
                {items?.filter(Boolean).map((item) => {
                    const isActive = activeLocation?.id === item?.id;
                    const activeClass = "bg-white/15 backdrop-blur-md border border-white/10 shadow-lg text-white";
                    const inactiveClass = "bg-transparent hover:bg-white/5 hover:text-white text-[#e6e6e6]/60 border border-transparent";

                    return (
                        <li key={item.id} onClick={() => {
                            if (item.kind === 'file') openItem(item);
                            else setActiveLocation(item);
                        }} className={clsx(`rounded-xl px-3 py-2 cursor-pointer flex items-center gap-3 transition-all duration-300`, isActive ? activeClass : inactiveClass)}>
                            <img src={item.icon} className='w-4' alt={item.name} />
                            <p className='text-sm font-medium truncate'>{item.name}</p>
                        </li>
                    )
                })}
            </ul>
        </div>

    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className='flex h-full'>
                <div className='sidebar overflow-y-auto'>
                    {renderList("Favorites", Object.values(locations))}
                    {renderList("Projects", locations.work.children)}
                </div>
                <ul className='content flex-1 p-6 flex flex-wrap gap-6 items-start content-start overflow-y-auto bg-transparent relative z-10'>
                    {activeLocation?.children?.map((item) => (
                        <li key={item.id} className="flex flex-col items-center gap-2 p-3 w-32 rounded-2xl border border-transparent hover:bg-white/10 hover:border-white/15 hover:shadow-2xl hover:backdrop-blur-md transition-all duration-300 cursor-pointer group" onClick={() => openItem(item)}>
                            <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                                <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain drop-shadow-md" />
                            </div>
                            <p className="text-xs text-center font-medium w-full leading-tight break-words whitespace-normal px-3 py-1.5 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-md text-gray-300 group-hover:bg-blue-600/60 group-hover:text-white group-hover:border-blue-500/50 transition-colors duration-300 max-h-12 overflow-hidden">{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;