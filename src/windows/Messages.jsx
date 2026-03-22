import React, { useState, useRef, useEffect } from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Send, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const systemPrompt = `You are Ayush-AI, a highly intelligent virtual assistant residing inside Ayush Kumar's macOS-styled portfolio website. Your sole purpose is to represent Ayush, answer questions about his skills, experience, and projects, and convince recruiters to hire him.

Ayush Kumar is a Frontend Developer focused on creating premium, high-performance web experiences.
Key Info:
- Skills: React.js, Next.js, TypeScript, Tailwind CSS, Node.js, PHP, MongoDB.
- Projects: 
  1. Agrifield (A comprehensive platform for farmers).
  2. Clothify (E-commerce aesthetic clothing platform).
  3. macOS Portfolio (This extremely highly-detailed interactive operating system portfolio).
- Education: B.Tech CSE at Lovely Professional University (2023-Present) with 7.65 CGPA.
- Experience: AI Trainer at Outlier, evaluating AI models in Java/JavaScript.

Personality: Professional, enthusiastic, concise, and slightly witty. 
Formatting: Always use clean formatting (bullet points, bold text for emphasis). Keep it brief, don't write huge essays. Speak in the first person representing Ayush's automated clone (e.g. "I am Ayush's AI assistant...").`;

const Messages = ({ windowKey }) => {
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Ayush-AI. I know everything about Ayush's experience, projects, and skills. What would you like to know?", isBot: true }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
        setInput("");
        setLoading(true);

        try {
            if (!apiKey) {
                setTimeout(() => {
                    setMessages(prev => [...prev, { text: "**API Key Missing!** Please ensure you have added `VITE_GEMINI_API_KEY` to your Netlify Environment Variables.", isBot: true }]);
                    setLoading(false);
                }, 1000);
                return;
            }

            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: systemPrompt });
            const chatHistory = messages.slice(1).map(m => ({
                role: m.isBot ? "model" : "user",
                parts: [{ text: m.text }]
            }));
            
            const chat = model.startChat({ history: chatHistory });
            const result = await chat.sendMessage(userMsg);
            
            setMessages(prev => [...prev, { text: result.response.text(), isBot: true }]);
        } catch (error) {
            console.error("Gemini API Error:", error);
            
            let errorText = "Sorry, I encountered an error. Please try again later.";
            if (error.message && error.message.includes("API key not valid")) {
                errorText = "API Key Error: Your VITE_GEMINI_API_KEY is invalid. Please double-check it!";
            } else if (error.message) {
                errorText = `Error: ${error.message}`;
            }

            setMessages(prev => [...prev, { text: errorText, isBot: true }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full flex bg-transparent overflow-hidden rounded-lg">
            {/* Sidebar */}
            <div className="w-1/3 max-w-[250px] border-r border-black/20 bg-[#252525]/90 backdrop-blur-3xl flex flex-col">
                <div id="window-header" className="!bg-transparent !border-b-0 h-14 shrink-0">
                    <WindowControls target={windowKey} />
                </div>
                
                <div className="p-3">
                    <div className="flex items-center gap-2 p-2 rounded-md bg-[#2d5be3]/80 text-white cursor-default drop-shadow-md">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center shadow-inner">
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Ayush AI</p>
                            <p className="text-xs text-white/70 line-clamp-1">Virtual Assistant</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e]/80 backdrop-blur-3xl relative">
                <div className="h-14 border-b border-white/10 flex items-center px-6 shrink-0 bg-white/5 backdrop-blur-md z-10">
                    <p className="text-sm font-semibold text-gray-200">To: <span className="text-gray-400">Ayush AI</span></p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
                    <div className="flex flex-col items-center justify-center my-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg mb-3">
                            <Bot className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-200">Ayush AI</h2>
                        <p className="text-xs text-gray-400">iMessage</p>
                    </div>

                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex w-full ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl shadow-md text-sm leading-relaxed ${
                                msg.isBot 
                                ? 'bg-[#2a2a2a] text-gray-200 rounded-tl-sm border border-white/5' 
                                : 'bg-blue-600 text-white rounded-tr-sm'
                            }`}>
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <ReactMarkdown>
                                        {msg.text}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {loading && (
                        <div className="flex w-full justify-start">
                             <div className="bg-[#2a2a2a] text-gray-400 px-4 py-3 rounded-2xl rounded-tl-sm border border-white/5 shadow-md flex gap-1 items-center">
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                            </div>
                        </div>
                    )}
                    <div ref={endRef} />
                </div>

                <div className="p-4 bg-transparent shrink-0">
                    <form onSubmit={handleSend} className="relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="iMessage..."
                            className="w-full bg-[#3a3a3a]/80 text-gray-200 text-sm rounded-full py-2.5 pl-5 pr-12 outline-none border border-white/10 focus:border-white/20 transition-all shadow-inner placeholder:text-gray-500"
                            disabled={loading}
                        />
                        <button 
                            type="submit" 
                            disabled={!input.trim() || loading}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:bg-gray-600 transition-colors"
                        >
                            <Send className="w-3.5 h-3.5 -ml-0.5" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const MessagesWindow = WindowWrapper(Messages, 'messages');
export default MessagesWindow;
