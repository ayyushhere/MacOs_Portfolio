import WindowWrapper from '#hoc/WindowWrapper'
import { WindowControls } from '#components';
import useWindowStore from '#store/Windows';
import React from 'react'

const Image = ({ windowKey }) => {
    const { windows } = useWindowStore();
    const win = windows[windowKey];
    const data = win?.data;

    // Even if no data, we might want to render an empty state or just return null
    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden">
            <div id="window-header">
                <WindowControls target={windowKey} />
                <h2 className="ml-4 font-semibold text-gray-700">{name}</h2>
            </div>

            <div className="flex-1 flex items-center justify-center p-4 bg-gray-100/50">
                <img
                    src={imageUrl}
                    alt={name}
                    className="max-w-full max-h-full object-contain rounded-md shadow-sm"
                />
            </div>
        </div>
    )
}

// Ensure 'imgfile' matches the key in WINDOW_CONFIG in store/Windows.js
const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;
