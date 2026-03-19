import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { socials } from '#constants';
import { WindowControls } from '#components';

const Contact = ({ windowKey }) => {
  return (
    <div className="flex flex-col h-full text-gray-200">
        <div id="window-header">
            <WindowControls target={windowKey} />
            <h2>Contact me</h2>
        </div>

        <div className='flex-1 flex flex-col p-8 space-y-6 items-center text-center'>
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img src="images/Ayush.jpeg" alt="Ayush" className='relative w-24 h-24 object-cover rounded-full border border-white/20 shadow-2xl'/>
            </div>

            <div className="space-y-2">
                <h3 className='text-3xl font-bold tracking-tight text-white drop-shadow-md'>Let's Connect</h3>
                <p className="text-gray-400 max-w-[280px] mx-auto leading-relaxed">Got an idea? A bug to squash? Or just wanna talk? I'm in.</p>
                <div className="inline-block mt-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-sm font-medium text-gray-300">ayushkumar0211a@gmail.com</p>
                </div>
            </div>

            <ul className='grid grid-cols-2 gap-4 w-full mt-6'>
                {socials.map(({id, bgClass, link, icon, text}) => (
                    <li key={id} className={`rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:scale-105 transition-all duration-300 ${bgClass}`}>
                        <a href={link} target='_blank' rel='noopener noreferrer' className="flex flex-col items-center justify-center gap-3 p-5 h-full">
                            <img src={icon} alt={text} className='w-8 h-8 drop-shadow-lg'/>
                            <p className="font-semibold text-sm text-white tracking-wide">{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;