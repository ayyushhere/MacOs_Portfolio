import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) => set((state) => {
           const win = state.windows[windowKey];
           win.isOpen = true;
           win.isMinimized = false;
           win.zIndex = state.nextZIndex; // Assign the current nextZIndex
           win.data = data ?? win.data;
           state.nextZIndex++;
        }),

        closeWindow: (windowKey) => set((state) => {
           const win = state.windows[windowKey];
           if(!win) return;
           win.isOpen = false;
           win.isMinimized = false;
           win.isMaximized = false;
           win.zIndex = INITIAL_Z_INDEX;
           win.data = null;
        }),

        minimizeWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if(!win) return;
            win.isMinimized = true;
            win.isOpen = false; // Effectively close/hide it, but distinction might be useful for dock indicators
        }),

        maximizeWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if(!win) return;
            win.isMaximized = !win.isMaximized;
            // Bring to front when maximizing
            if (win.zIndex !== state.nextZIndex - 1) {
                win.zIndex = state.nextZIndex++;
            }
        }),

        focusWindow: (windowKey) => set((state) => {
           const win = state.windows[windowKey];
           if (win.zIndex !== state.nextZIndex - 1) { // Only update if not already the top window
               win.zIndex = state.nextZIndex++;
           }
           // Also un-minimize if focused from dock
           if(win.isMinimized) {
               win.isMinimized = false;
               win.isOpen = true;
           }
        })
    }))
);

export default useWindowStore;