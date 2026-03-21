import React, { useState } from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import { locations, certifications } from '#constants';
import { FolderGit2, Award, ExternalLink } from 'lucide-react';
import clsx from 'clsx';

const Showcase = ({ windowKey }) => {
    const [activeTab, setActiveTab] = useState('projects');
    const projects = locations.work.children;

    return (
        <div className="h-full flex bg-[#1e1e1e]/60 backdrop-blur-2xl rounded-lg overflow-hidden text-gray-200">
            {/* Sidebar */}
            <div className="w-1/4 min-w-[200px] border-r border-white/10 bg-black/20 p-4 flex flex-col gap-2 relative z-10 pt-10">
                <div className="absolute top-2 left-3">
                    <WindowControls target={windowKey} />
                </div>
                <div className="mb-4 pl-2 font-bold text-gray-400 text-xs tracking-widest uppercase mt-4">Showcase</div>
                <button 
                    onClick={() => setActiveTab('projects')}
                    className={clsx("flex items-center gap-3 px-3 py-2 rounded-lg transition-all", activeTab === 'projects' ? "bg-blue-600/60 text-white shadow-lg shadow-blue-900/40" : "hover:bg-white/5")}
                >
                    <FolderGit2 size={18} />
                    <span className="font-medium text-sm">Projects</span>
                </button>
                <button 
                    onClick={() => setActiveTab('certifications')}
                    className={clsx("flex items-center gap-3 px-3 py-2 rounded-lg transition-all", activeTab === 'certifications' ? "bg-orange-600/60 text-white shadow-lg shadow-orange-900/40" : "hover:bg-white/5")}
                >
                    <Award size={18} />
                    <span className="font-medium text-sm">Certifications</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative w-3/4 overflow-y-auto">                
                <div className="p-8">
                    {activeTab === 'projects' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project) => {
                                const txtFile = project.children.find(c => c.fileType === 'txt');
                                const urlFile = project.children.find(c => c.fileType === 'url');
                                const imgFile = project.children.find(c => c.fileType === 'img');
                                
                                return (
                                    <div key={project.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20">
                                        <div className="h-44 overflow-hidden flex items-center justify-center bg-black/40 p-0 relative">
                                            {imgFile ? <img src={imgFile.imageUrl} alt={project.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" /> : <FolderGit2 size={48} className="text-gray-500" />}
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col relative z-20">
                                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{project.name}</h3>
                                            <p className="text-xs text-gray-400 mb-6 flex-1 line-clamp-4 leading-relaxed tracking-wide">
                                                {txtFile?.description?.join(' ')}
                                            </p>
                                            <div className="flex items-center justify-end gap-3 mt-auto">
                                                <a href={urlFile?.href || '#'} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold backdrop-blur-md transition-colors shadow-lg pointer-events-auto">
                                                    <ExternalLink size={14} /> Open Project
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                    
                    {activeTab === 'certifications' && (
                        <div className="flex flex-col gap-4">
                            {certifications.map(cert => (
                                <div key={cert.id} className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-orange-900/10 transition-all cursor-default relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    <div className="w-16 h-16 bg-white flex items-center justify-center shrink-0 p-2 shadow-inner rounded-md">
                                        {cert.icon ? <img src={cert.icon} alt={cert.issuer} className="w-full h-full object-contain" /> : <Award className="text-yellow-500" size={32} />}
                                    </div>
                                    <div className="flex-1 overflow-hidden z-10">
                                        <h3 className="text-lg font-bold text-white truncate my-1 hover:text-orange-400 transition-colors">{cert.title}</h3>
                                        <p className="text-sm text-gray-400 font-medium tracking-wide">{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const ShowcaseWindow = WindowWrapper(Showcase, 'showcase');
export default ShowcaseWindow;
