import { techStack } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper'
import { Check, Flag } from 'lucide-react';
import { WindowControls } from '#components';
import React from 'react'

const Terminal = ({ windowKey }) => {
    return (
        <>
            <div id="window-header">
                <WindowControls target={windowKey} />
                <h2>Tech Stack</h2>
            </div>

            <div className='techstack'>
                <p>
                    <span className='font-bold'>@ayush %</span>
                    show tech stack
                </p>

                <div className='label'>
                    <p className='w-32'>Category</p>
                    <p>Technologies</p>
                </div>

                <ul className='content'>
                    {techStack.map(({ category, items }) => (
                        <li key={category} className='flex items-start mb-4'>
                            <div className='flex items-center mt-1.5'>
                                <Check className="text-green-500 w-5 flex-shrink-0" size={20} />
                                <h3 className='font-semibold text-green-500 w-32 ms-5 flex-shrink-0'>{category}</h3>
                            </div>
                            <ul className='flex items-center gap-3 flex-wrap flex-1 ml-4'>
                                {items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all cursor-default shadow-lg group">
                                        <img src={item.icon} alt={item.name} className="w-4 h-4 object-contain drop-shadow group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-300 font-medium text-xs tracking-wide">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check size={20} /> 5 of 5 stacks loaded successfully(100%)
                    </p>

                    <p className='text-black'>
                        <Flag size={15} fill='black' />
                        Render time:6ms
                    </p>
                </div>
            </div>
        </>
    )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;