import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
    persist(
        (set) => ({
            wallpaper: 'dark', // default to dark wallpaper
            toggleWallpaper: () =>
                set((state) => ({
                    wallpaper: state.wallpaper === 'light' ? 'dark' : 'light',
                })),
            setWallpaper: (wallpaper) => set({ wallpaper }),
        }),
        {
            name: 'wallpaper-storage', // updated storage key
        }
    )
);

export default useThemeStore;
