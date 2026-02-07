import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/Windows'
import React from 'react'
import dayjs from 'dayjs'
import useThemeStore from '../store/Theme'
import { Sun, Moon, Wifi, RotateCcw } from 'lucide-react'

const Navbar = () => {

    const { openWindow } = useWindowStore();
    const { wallpaper, toggleWallpaper } = useThemeStore();

    return (
        <nav className="text-white">
            <div>
                <img src="/images/logo.svg" alt="logo" className="w-5 h-5" />
                <p className='font-bold ml-2'>Ayush's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={toggleWallpaper}
                    className="p-1.5 rounded-md hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95 group"
                    title={`Switch to ${wallpaper === 'light' ? 'Dark' : 'Light'} Wallpaper`}
                >
                    {wallpaper === 'light' ? (
                        <Moon size={18} className="text-gray-900 group-hover:text-white transition-colors" />
                    ) : (
                        <Sun size={18} className="text-white" />
                    )}
                </button>

                <ul className="flex items-center gap-2">
                    {navIcons.map(({ id, img }) => (
                        <li key={id} className="p-1.5 rounded-md hover:bg-white/10 transition-colors duration-200 cursor-default">
                            <img src={img} className='size-4 invert brightness-0' alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>

                <time className="ml-2 text-sm font-medium text-white/90 cursor-default hover:text-white transition-colors">
                    {dayjs().format("ddd MMM D h:mm A")}
                </time>
            </div>
        </nav>
    )
}

export default Navbar