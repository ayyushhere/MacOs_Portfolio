import React from 'react';
import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import { locations } from '#constants';
import useWindowStore from '#store/Windows';
import { Search, Trophy, ExternalLink, Image as ImageIcon, FileText } from 'lucide-react';

const Certificates = () => {
    const { openWindow } = useWindowStore();
    const certificates = locations.certificates.children;

    const openCertificate = (cert) => {
        if (cert.fileType === 'img') {
            openWindow('imgfile', cert);
        } else {
            // Default to opening PDF link
            window.open(cert.imageUrl || cert.href, '_blank');
        }
    };

    return (
        <div className="flex flex-col h-full bg-[#111111]/95 text-white">
            <div id="window-header" className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/20">
                <div className="flex items-center gap-4">
                    <WindowControls target="certificates" />
                    <div className="h-4 w-[1px] bg-white/10 mx-2" />
                    <h2 className="text-[13px] font-semibold tracking-wide flex items-center gap-2 text-gray-300">
                        <Trophy className="w-4 h-4 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                        Certifications Showcase
                    </h2>
                </div>
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search achievements..." 
                        className="bg-white/5 hover:bg-white/10 focus:bg-white/15 border border-white/5 rounded-full py-1 pl-9 pr-4 text-[11px] outline-none transition-all w-56 placeholder:text-gray-600"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-10 select-none">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {certificates.map((cert) => (
                        <div 
                            key={cert.id}
                            className="group relative bg-[#1c1c1c] hover:bg-[#252525] border border-white/5 hover:border-white/20 rounded-2xl p-4 transition-all duration-500 hover:scale-[1.02] cursor-pointer shadow-2xl overflow-hidden"
                            onClick={() => openCertificate(cert)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-60 group-hover:opacity-80 transition-opacity" />
                            
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center mb-4 transition-all duration-500 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                {cert.fileType === 'img' ? (
                                    <img 
                                        src={cert.imageUrl} 
                                        alt={cert.name} 
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105" 
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-colors">
                                            <FileText className="w-6 h-6 text-blue-400 opacity-60 group-hover:opacity-100 transition-all" />
                                        </div>
                                    </div>
                                )}
                                
                                <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-md border border-white/5 text-[9px] font-bold text-gray-400 tracking-wider">
                                    {cert.fileType.toUpperCase()}
                                </div>
                                
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="px-4 py-2 bg-blue-600/90 backdrop-blur-md rounded-lg shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                                        <span className="text-[11px] font-bold tracking-tight">VIEW CREDENTIAL</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative space-y-1">
                                <h3 className="text-[12px] font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-1">
                                    {cert.name}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] font-medium text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-widest">
                                        Achievement
                                    </span>
                                    {cert.kind === 'file' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />}
                                </div>
                            </div>

                            <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WindowWrapper(Certificates, 'certificates');
