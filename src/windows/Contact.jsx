import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { socials } from '#constants';
import { WindowControls } from '#components';

const Contact = ({ windowKey }) => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");

        // WARNING: Replace with actual Web3Forms Access Key
        const formData = new FormData(event.target);
        formData.append("access_key", "bd532c95-679a-4b56-ad08-e03c409ac85a");
        
        // Custom Email Formatting
        formData.append("subject", "New Message from Portfolio OS ✨");
        formData.append("from_name", "Portfolio Notifications");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Sent Successfully! ✅");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (err) {
            setResult("Failed to send message.");
        }

        setIsSubmitting(false);
    };

    return (
        <div className="flex flex-col h-full text-gray-200">
            <div id="window-header">
                <WindowControls target={windowKey} />
                <h2>Contact me</h2>
            </div>

            <div className='flex-1 flex flex-col md:flex-row p-10 overflow-y-auto gap-12'>

                {/* Left Box: Profile & Socials */}
                <div className="md:w-5/12 flex flex-col items-center text-center space-y-6 md:border-r border-white/5 pr-4">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <img src="images/Ayush.jpeg" alt="Ayush" className='relative w-32 h-32 object-cover rounded-full border border-white/20 shadow-2xl' />
                    </div>

                    <div className="space-y-3">
                        <h3 className='text-3xl font-bold tracking-tight text-white drop-shadow-md'>Let's Connect</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">Got an idea? A bug to squash? Or just wanna talk? I'm in.</p>
                        <div className="inline-block mt-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <p className="text-xs font-medium text-gray-300">ayushkumar0211a@gmail.com</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 gap-3 w-full mt-4'>
                        {socials.map(({ id, bgClass, link, icon, text }) => (
                            <a key={id} href={link} target='_blank' rel='noopener noreferrer' title={text} className={`p-3 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center ${bgClass}`}>
                                <img src={icon} alt={text} className='w-6 h-6 drop-shadow-lg' />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Box: Direct Email Form */}
                <div className="md:w-7/12 flex flex-col pt-2">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Send a Direct Message</h3>

                    <form onSubmit={onSubmit} className="flex flex-col space-y-5">
                        {/* Security Honeypot */}
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                        <div className="space-y-1">
                            <label className="text-xs font-medium text-gray-400 ms-1">Name</label>
                            <input type="text" name="name" required placeholder="e.g. Elon Musk" className="w-full bg-[#111111]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium text-gray-400 ms-1">Email</label>
                            <input type="email" name="email" required placeholder="elon@spacex.com" className="w-full bg-[#111111]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium text-gray-400 ms-1">Message</label>
                            <textarea name="message" required rows="4" placeholder="Type your message here..." className="w-full bg-[#111111]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"></textarea>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <span className={`text-xs font-medium ${result.includes('Success') ? 'text-green-400' : 'text-gray-400'}`}>{result}</span>
                            <button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact');
export default ContactWindow;