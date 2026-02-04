import WindowWrapper from '#hoc/WindowWrapper'
import { WindowControls } from '#components';
import useWindowStore from '#store/Windows';
import React from 'react'

const Text = ({ windowKey }) => {
    const { windows } = useWindowStore();
    const win = windows[windowKey];
    const data = win?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden">
            <div id="window-header">
                <WindowControls target={windowKey} />
                <h2 className="ml-4 font-semibold text-gray-700">{name}</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-6 text-gray-800">
                {image && (
                    <div className="mb-6 flex justify-center">
                        <img
                            src={image}
                            alt={name}
                            className="rounded-lg shadow-md max-h-64 object-cover"
                        />
                    </div>
                )}

                {subtitle && (
                    <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                        {subtitle}
                    </h3>
                )}

                <div className="space-y-4">
                    {description && Array.isArray(description) && description.map((paragraph, index) => (
                        <p key={index} className="text-lg leading-relaxed text-gray-700">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;
