import React from 'react';
import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import { CERTIFICATES_LOCATION } from '#constants';
import useWindowStore from '#store/Windows';
import { Search, Trophy, ExternalLink, FileText, ShieldCheck } from 'lucide-react';

const Certificates = () => {
    const { openWindow, isMobile } = useWindowStore();
    const certificates = CERTIFICATES_LOCATION.children;

    const getOrgBranding = (name) => {
        const n = name.toLowerCase();
        
        // Specific Mappings from User (Matching actual filenames in constants/index.js)
        if (n.includes('unstop') || n.includes('codefiesta') || n.includes('hackathon')) return { 
            logo: '/icons/unstop.png', 
            theme: 'from-blue-400/5 to-transparent',
            accent: 'text-blue-400'
        };
        if (n.includes('ayush--certificate')) return { 
            logo: '/icons/Disha ai.png', 
            theme: 'from-cyan-400/5 to-transparent',
            accent: 'text-cyan-400'
        };
        if (n.includes('expert-session-participant')) return { 
            logo: '/icons/Pod.png', 
            theme: 'from-indigo-400/5 to-transparent',
            accent: 'text-indigo-400'
        };
        if (n.includes('pathsala')) return { 
            logo: '/icons/Cse Pathsala.png', 
            theme: 'from-emerald-400/5 to-transparent',
            accent: 'text-emerald-400'
        };
        if (n.includes('computation theory') || n.includes('infosys')) return { 
            logo: '/icons/Infosys.png', 
            theme: 'from-blue-500/5 to-transparent',
            accent: 'text-blue-500'
        };
        if (n.includes('intro to fe developnment') || n.includes('meta')) return { 
            logo: '/icons/Meta.png', 
            theme: 'from-blue-600/5 to-transparent',
            accent: 'text-blue-400'
        };
        if (n.includes('devtown')) return { 
            logo: '/icons/Devtown.png', 
            theme: 'from-orange-400/5 to-transparent',
            accent: 'text-orange-400'
        };
        if (n.includes('python for begginers') || n.includes('simplilearn')) return { 
            logo: '/icons/Simplilearn.png', 
            theme: 'from-blue-600/5 to-transparent',
            accent: 'text-blue-500'
        };
        if (n.includes('building web application') || n.includes('digital system ogic') || n.includes('the bits and bytes')) return { 
            logo: 'https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg', 
            theme: 'from-blue-700/5 to-transparent',
            accent: 'text-blue-500'
        };
        if (n.includes('neocolab') || n.includes('lpu')) return { 
            logo: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png', 
            theme: 'from-orange-500/5 to-transparent',
            accent: 'text-orange-500'
        };

        // General / Fallback Mappings
        if (n.includes('google')) return { 
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg', 
            theme: 'from-blue-600/5 to-transparent',
            accent: 'text-blue-400'
        };
        if (n.includes('coursera')) return { 
            logo: 'https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg', 
            theme: 'from-blue-700/5 to-transparent',
            accent: 'text-blue-500'
        };
        if (n.includes('udemy')) return { 
            logo: '/icons/Udemy_Logo_1.png', 
            theme: 'from-purple-600/5 to-transparent',
            accent: 'text-purple-400'
        };
        if (n.includes('ibm')) return { 
            logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg', 
            theme: 'from-blue-800/5 to-transparent',
            accent: 'text-blue-600'
        };
        if (n.includes('freecodecamp')) return { 
            logo: 'https://www.vectorlogo.zone/logos/freecodecamp/freecodecamp-icon.svg', 
            theme: 'from-emerald-700/5 to-transparent',
            accent: 'text-emerald-500'
        };
        if (n.includes('linkedin')) return { 
            logo: '/icons/linkedin.svg', 
            theme: 'from-blue-500/5 to-transparent',
            accent: 'text-blue-400'
        };
        if (n.includes('nptel')) return { 
            logo: '/icons/NPTEL.png', 
            theme: 'from-amber-600/5 to-transparent',
            accent: 'text-amber-500'
        };
        if (n.includes('cipherschool')) return { 
            logo: '/icons/cipherschool.png', 
            theme: 'from-blue-600/5 to-transparent',
            accent: 'text-blue-400'
        };
        
        return { 
            logo: null, 
            theme: 'from-gray-600/5 to-transparent',
            accent: 'text-gray-400'
        };
    };

    const openCertificate = (cert) => {
        if (cert.fileType === 'img') {
            openWindow('imgfile', cert);
        } else {
            window.open(cert.imageUrl || cert.href, '_blank');
        }
    };

    return (
        <div className="flex flex-col h-full bg-transparent text-white selection:bg-blue-500/30">
            <div id="window-header" className="!justify-center relative">
                <div className="absolute left-4">
                    <WindowControls target="certificates" />
                </div>
                <h2 className="text-[13px] font-black tracking-[-0.01em] text-white/40 premium-heading uppercase">
                    Certificates
                </h2>
            </div>

            <div className={`flex-1 overflow-y-auto ${isMobile ? 'p-6' : 'p-12'} custom-scrollbar select-none bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.05),transparent)]`}>
                <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
                    {certificates.map((cert) => {
                        const brand = getOrgBranding(cert.name);

                        return (
                            <div 
                                key={cert.id}
                                className="group relative rounded-3xl p-4 transition-all duration-700 hover:scale-[1.03] cursor-pointer overflow-hidden bg-white/[0.02] border border-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 focus-within:ring-2 focus-within:ring-white/10 outline-none"
                                onClick={() => openCertificate(cert)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${brand.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                                
                                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center mb-6 transition-all duration-700 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                                    {cert.fileType === 'img' ? (
                                        <img 
                                            src={cert.imageUrl} 
                                            alt={cert.name} 
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" 
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-tr from-white/2 via-transparent to-white/2">
                                            {brand.logo ? (
                                                <img 
                                                    src={brand.logo} 
                                                    alt="Organization" 
                                                    className="w-16 h-16 object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-700 transform group-hover:scale-110" 
                                                />
                                            ) : (
                                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-all duration-500">
                                                    <FileText className="w-6 h-6 text-white/20 group-hover:text-white/60 transition-colors" />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="px-5 py-2.5 bg-blue-600/90 backdrop-blur-xl rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] transform scale-90 group-hover:scale-100 transition-all duration-500">
                                            <span className="text-[10px] font-black tracking-[0.2em] text-white flex items-center gap-2">
                                                VIEW CREDENTIAL <ExternalLink className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute top-4 left-4 px-2 py-0.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/5 text-[8px] font-black text-white/40 tracking-widest uppercase">
                                        {cert.fileType}
                                    </div>
                                </div>

                                <div className="relative space-y-2 px-1">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className={`w-3 h-3 ${brand.accent} opacity-40 group-hover:opacity-100 transition-all text-glow`} />
                                        <span className={`text-[9px] font-black ${brand.accent} group-hover:opacity-100 opacity-60 transition-colors uppercase tracking-[0.2em] text-glow`}>Official Verified</span>
                                    </div>
                                    <h3 className="text-[13px] font-bold text-white/80 group-hover:text-white transition-colors line-clamp-1 leading-snug premium-heading">
                                        {cert.name}
                                    </h3>
                                </div>

                                {/* Minimal Glint Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WindowWrapper(Certificates, 'certificates');
