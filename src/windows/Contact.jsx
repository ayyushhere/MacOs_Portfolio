import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { socials } from '#constants';
import { WindowControls } from '#components';

const Contact = ({ windowKey }) => {
  return (
    <>
        <div id="window-header">
            <WindowControls target={windowKey} />
            <h2>Contact me</h2>
        </div>

        <div className='p-5 space-y-5'>
            <img src="images/Ayush.jpeg" alt="Ayush" className='w-20 rounded-full border-2 border-black'/>

            <h3 className='text-xl font-bold'>Let's Connect</h3>
            <p>Got an idea? A bug to squash? or just wanna talk? I'm in</p>
            <p>ayushkumar0211a@gmail.com</p>

            <ul className='space-y-3'>
                {socials.map(({id, bg, link, icon, text}) => (
                    <li key={id} style={{backgroundColor: bg}}>
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            <img src={icon} alt={text}  className='size-5'/>
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;