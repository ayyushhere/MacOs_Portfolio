import React from 'react';
import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import { locations } from '#constants';
import useWindowStore from '#store/Windows';
import { Search, Trophy, ExternalLink, Image as ImageIcon, FileText } from 'lucide-react';

const Certificates = () => {
    const { openWindow } = useWindowStore();
    const certificates = locations.certificates.children;

    const getOrgLogo = (name) => {
        const n = name.toLowerCase();
        if (n.includes('google')) return 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg';
        if (n.includes('coursera')) return 'https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg';
        if (n.includes('udemy')) return 'https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg';
        if (n.includes('ibm')) return 'https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg';
        if (n.includes('freecodecamp')) return 'https://www.vectorlogo.zone/logos/freecodecamp/freecodecamp-icon.svg';
        if (n.includes('linkedin')) return 'https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg';
        if (n.includes('nptel')) return 'https://nptel.ac.in/assets/img/nptel_logo.png';
        if (n.includes('cipherschools')) return 'https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b3d9c7e.png';
        return null;
    };

    const openCertificate = (cert) => {
        if (cert.fileType === 'img') {
            openWindow('imgfile', cert);
        } else {
            window.open(cert.imageUrl || cert.href, '_blank');
        }
    };

    return (
        <div className="flex flex-col h-full bg-[#0a0a0a]/95 text-white selection:bg-blue-500/30">
            <div id="window-header" className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <WindowControls target="certificates" />
                    <div className="h-4 w-[1px] bg-white/10 mx-2" />
                    <h2 className="text-[13px] font-semibold tracking-wide flex items-center gap-2 text-gray-300">
                        <Trophy className="w-4 h-4 text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                        Achievements Gallery
                    </h2>
                </div>
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search certifications..." 
                        className="bg-white/5 hover:bg-white/10 focus:bg-white/15 border border-white/5 rounded-full py-1.5 pl-9 pr-4 text-[11px] outline-none transition-all w-64 placeholder:text-gray-600"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-12 custom-scrollbar select-none bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.1),transparent)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {certificates.map((cert) => {
                        const logo = getOrgLogo(cert.name);
                        return (
                            <div 
                                key={cert.id}
                                className="group relative bg-[#141414]/80 hover:bg-[#1a1a1a] border border-white/5 hover:border-white/20 rounded-3xl p-5 transition-all duration-700 hover:scale-[1.03] cursor-pointer shadow-2xl"
                                onClick={() => openCertificate(cert)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center mb-6 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-700">
                                    {cert.fileType === 'img' ? (
                                        <img 
                                            src={cert.imageUrl} 
                                            alt={cert.name} 
                                            className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all duration-1000 group-hover:scale-110" 
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/40 transition-all duration-500 group-hover:rotate-[5deg]">
                                                <FileText className="w-7 h-7 text-blue-400/70 group-hover:text-blue-400 transition-colors" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Organization Overlay */}
                                    {logo && (
                                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 p-2 flex items-center justify-center shadow-2xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            <img src={logo} alt="Org" className="w-full h-full object-contain filter drop-shadow-md" />
                                        </div>
                                    )}
                                    
                                    <div className="absolute top-4 left-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-[9px] font-black text-blue-400/80 tracking-widest uppercase">
                                        {cert.fileType}
                                    </div>
                                    
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="px-5 py-2.5 bg-blue-600/90 backdrop-blur-xl rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] transform scale-90 group-hover:scale-100 transition-all duration-500">
                                            <span className="text-[11px] font-black tracking-widest flex items-center gap-2">
                                                VIEW CREDENTIAL <ExternalLink className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative space-y-2">
                                    <h3 className="text-[13px] font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-2 leading-relaxed min-h-[40px]">
                                        {cert.name}
                                    </h3>
                                    <div className="flex items-center justify-between pt-1">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                            <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-[0.2em]">
                                                Verified
                                            </span>
                                        </div>
                                        <Trophy className="w-3.5 h-3.5 text-white/10 group-hover:text-amber-500/40 transition-all duration-700 group-hover:rotate-12" />
                                    </div>
                                </div>

                                {/* Animated Glass Shimmer */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shimmer" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WindowWrapper(Certificates, 'certificates');
