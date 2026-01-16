import React from 'react';
import {
    Bot, Database, Cpu, Search, Phone, Filter, Tag, Share2,
    BarChart3, Globe, Zap, Workflow,
    Target, CloudCog, ArrowDown, Radio,
    BookOpen, Layers, Store, Link, Server,
    Sparkles, CheckCircle2, Palette,
    Activity, Network,
    ShieldCheck, Users, MessageSquare,
    Eye, Mic, ScanFace, Clapperboard, Globe2,
    GitMerge, Box, Fingerprint, Cable,
    BrainCircuit, Radar, Megaphone, Wand2,
    Lock, Sliders, Waypoints,
    Signal, Rss, Terminal, Sparkle, Command,
    ChevronsDown, TrendingUp, ZapIcon,
    LayoutDashboard, Shuffle, ShieldAlert, FileCheck,
    Facebook, Youtube, Instagram, Twitter, Video, Tv,
    Music, Film, Smartphone, ArrowRight, ArrowLeft,
    Car, PhoneCall, UserCog, Settings, Play, Hexagon,
    Aperture, Star, Router, Plug, AudioWaveform, Link2,
    Ticket, AlertTriangle, Scale
} from 'lucide-react';
import GlassCard from './GlassCard';

// --- CUSTOM BRAND ICONS (SVG PATHS) ---
// Note: Icons designed to be white on colored backgrounds (mostly)
const BrandIcon = ({ name, size = 20, className = "" }: { name: string, size?: number, className?: string }) => {
    const icons: Record<string, React.ReactNode> = {
        // International
        tiktok: (
            <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
        ),
        facebook: (
            <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        instagram: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        ),
        youtube: (
            <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
        // Domestic Social
        douyin: (
            <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
        ),
        wechat: (
            <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
                <path d="M8.5 13.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4.5-1c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm2.6 1.8c.2.6.4 1.2.9 1.6.4.4.9.6 1.5.6.9 0 1.7-.5 2.2-1.2.3-.4.5-.9.5-1.4 0-1.8-1.7-3.3-3.9-3.3-2.1 0-3.9 1.5-3.9 3.3 0 .2 0 .4.1.6.2.7.6 1.4 1.3 1.9.4.3.9.5 1.4.5.3 0 .6-.1.9-.2-.3-.6-.6-1.3-1-2.4zm-7.6 1.3C3.6 15.6 1 12.8 1 9.3c0-3.7 3.3-6.8 7.3-6.8 4 0 7.3 3.1 7.3 6.8 0 .5-.1 1-.2 1.5C14.7 9.8 13.7 9 12.5 9c-3.1 0-5.6 2.1-5.6 4.8 0 .6.1 1.2.4 1.8z" />
            </svg>
        ),
        xiaohongshu: (
            <div className={`flex items-center justify-center font-bold text-[9px] ${className}`} style={{ width: size, height: size }}>
                RED
            </div>
        ),
        bilibili: (
            <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
                <path d="M18.7 7.7c.6 0 1.1.2 1.5.6.4.4.6.9.6 1.5v8.3c0 .6-.2 1.1-.6 1.5-.4.4-.9.6-1.5.6H5.3c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5V9.8c0-.6.2-1.1.6-1.5.4-.4.9-.6 1.5-.6h13.4zM8 2.6c.2-.2.6-.2.8 0l2.5 2.5h1.4L15.2 2.6c.2-.2.6-.2.8 0 .2.2.2.6 0 .8L13.7 5.7h2.6v-.1h.1c.4 0 .7.1 1 .4.3.3.4.6.4 1v.1H6.2V7c0-.4.1-.7.4-1 .3-.3.6-.4 1-.4h.1V5.7h2.6L8 3.4c-.2-.2-.2-.6 0-.8z" />
            </svg>
        ),
        // Auto Vertical
        autohome: (
            <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H12c-.2 0-.4.2-.4.4V11h2.2c2 0 3.4.7 3.4 1.5v4.5h1.8zM5 17h2v-4.5c0-.8 1.4-1.5 3.4-1.5H12V7.4c0-.2-.2-.4-.4-.4H9.8C9.1 7 8.5 7.3 8 7.7 7.1 8.6 5.8 10 5.8 10S3.1 10.6 1.5 11.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2v5h2v-5zm14 5h2v-5h-2v5z" />
            </svg>
        ),
        dongchedi: (
            <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
                <path d="M12 2L2 19h20L12 2zm1 14h-2v-2h2v2zm0-4h-2V8h2v4z" />
            </svg>
        ),
        yiche: (
            <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
                <circle cx="12" cy="12" r="10" />
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">易</text>
            </svg>
        )
    };
    return <>{icons[name] || <Globe size={size} />}</>;
};

const ArchitectureDiagram: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full bg-[#f0f4f8] text-slate-900 p-4 md:p-8 overflow-x-hidden flex flex-col items-center font-sans selection:bg-indigo-100">

            {/* --- Ambient Background (Reduced visual noise) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Architectural Grid - Very subtle */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15]"></div>

                {/* Functionally colored orbs - slightly softer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[600px] bg-gradient-to-b from-slate-100 to-transparent"></div>
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-sky-200/40 blur-[120px] rounded-full mix-blend-multiply opacity-50"></div>
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-100/50 blur-[140px] rounded-full mix-blend-multiply opacity-50"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-fuchsia-200/40 blur-[120px] rounded-full mix-blend-multiply opacity-50"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1480px] flex flex-col items-center pb-24">

                {/* 1. Header: Value Proposition */}
                <header className="text-center relative z-20 space-y-6 mb-16 mt-12 flex flex-col items-center">
                    <div className="animate-fade-in-up flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:scale-105 transition-transform cursor-default ring-1 ring-white/20">
                        <TrendingUp size={16} className="text-amber-400" />
                        <span className="text-sm font-bold tracking-wide">AI 驱动全渠道营销，降本提效 <span className="text-amber-400 font-black text-lg ml-1">200%</span></span>
                    </div>

                    <div className="relative">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 drop-shadow-sm leading-tight mt-4 px-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 block md:inline">A.M.A</span>
                            <span className="text-slate-800 ml-0 md:ml-4 font-extrabold block md:inline mt-2 md:mt-0">智能营销云</span>
                        </h1>
                    </div>

                    <div className="text-slate-500 font-medium text-sm md:text-lg max-w-3xl mt-6 leading-relaxed bg-white/70 px-4 md:px-8 py-3 rounded-2xl md:rounded-full backdrop-blur-md border border-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-center gap-2 md:gap-6 w-11/12 md:w-auto">
                        <span className="flex items-center gap-2"><Cpu size={16} className="text-indigo-600" /> <span className="font-bold text-slate-700">AI Agent 驱动</span></span>
                        <span className="hidden md:block w-px h-4 bg-slate-300"></span>
                        <span className="flex items-center gap-2"><Network size={16} className="text-sky-600" /> <span className="font-bold text-slate-700">实时数智协同</span></span>
                        <span className="hidden md:block w-px h-4 bg-slate-300"></span>
                        <span className="flex items-center gap-2"><TrendingUp size={16} className="text-fuchsia-600" /> <span className="font-bold text-slate-700">全域转化闭环</span></span>
                    </div>
                </header>

                {/* --- MAIN ARCHITECTURE FLOW --- */}
                <div className="relative flex flex-col w-full items-center gap-4 md:gap-0">

                    {/* ==================== ZONE 1: INPUT (GLOBAL MEDIA) ==================== */}
                    <div className="relative z-30 w-full max-w-[1200px]">
                        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-sky-100 shadow-[0_20px_40px_-15px_rgba(14,165,233,0.08)] overflow-hidden relative group">

                            {/* Body - 3 Columns Layout */}
                            <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 relative items-start">

                                {/* Column 1: Overseas Social Media */}
                                <div className="flex flex-col gap-4 items-center relative group/col">
                                    <div className="flex items-center gap-2 mb-1 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 shadow-sm">
                                        <Globe2 size={18} className="text-indigo-600" />
                                        <h4 className="text-base font-bold text-indigo-900">海外社媒</h4>
                                    </div>
                                    <div className="flex gap-4 flex-wrap justify-center w-full px-2">
                                        <TechMediaSlot brand="tiktok" label="TikTok" bg="bg-black" />
                                        <TechMediaSlot brand="facebook" label="Facebook" bg="bg-[#1877F2]" />
                                        <TechMediaSlot brand="instagram" label="Instagram" bg="bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]" />
                                        <TechMediaSlot brand="youtube" label="YouTube" bg="bg-[#FF0000]" />
                                    </div>
                                    {/* Divider - Hidden on mobile */}
                                    <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-slate-200"></div>
                                </div>

                                {/* Column 2: Domestic New Media */}
                                <div className="flex flex-col gap-4 items-center relative group/col">
                                    <div className="flex items-center gap-2 mb-1 px-3 py-1.5 rounded-lg bg-pink-50 border border-pink-100 shadow-sm">
                                        <Smartphone size={18} className="text-pink-600" />
                                        <h4 className="text-base font-bold text-pink-900">国内新媒体</h4>
                                    </div>
                                    <div className="flex gap-4 flex-wrap justify-center w-full px-2">
                                        <TechMediaSlot brand="douyin" label="抖音" bg="bg-black" />
                                        <TechMediaSlot brand="xiaohongshu" label="小红书" bg="bg-[#FF2442]" />
                                        <TechMediaSlot brand="wechat" label="微信" bg="bg-[#07C160]" />
                                        <TechMediaSlot brand="bilibili" label="B站" bg="bg-[#23ADE5]" />
                                    </div>
                                    {/* Divider - Hidden on mobile */}
                                    <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-slate-200"></div>
                                </div>

                                {/* Column 3: Auto Verticals */}
                                <div className="flex flex-col gap-4 items-center">
                                    <div className="flex items-center gap-2 mb-1 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 shadow-sm">
                                        <Car size={18} className="text-blue-600" />
                                        <h4 className="text-base font-bold text-blue-900">汽车垂媒</h4>
                                    </div>
                                    <div className="flex gap-4 flex-wrap justify-center w-full px-2">
                                        <TechMediaSlot brand="autohome" label="汽车之家" bg="bg-[#3B5998]" />
                                        <TechMediaSlot brand="dongchedi" label="懂车帝" bg="bg-[#FFD700]" iconColor="text-black" />
                                        <TechMediaSlot brand="yiche" label="易车" bg="bg-[#0052D9]" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* CONNECTOR: Dynamic Flow (Hidden on Mobile) */}
                    <div className="hidden md:flex w-full relative z-20 flex-col items-center -my-5">
                        {/* Top Flow */}
                        <div className="w-full h-20 flex justify-center">
                            <svg className="w-full h-full max-w-[600px]" viewBox="0 0 600 80" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                                    </linearGradient>
                                </defs>
                                <path d="M150,0 C150,40 280,20 300,80" fill="none" stroke="url(#flowGradient)" strokeWidth="3" />
                                <path d="M450,0 C450,40 320,20 300,80" fill="none" stroke="url(#flowGradient)" strokeWidth="3" />

                                {/* Animated particles */}
                                <circle r="3" fill="#6366f1">
                                    <animateMotion dur="2s" repeatCount="indefinite" path="M150,0 C150,40 280,20 300,80" />
                                </circle>
                                <circle r="3" fill="#6366f1">
                                    <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M450,0 C450,40 320,20 300,80" />
                                </circle>
                            </svg>
                        </div>

                        {/* DATA CLEANING NODE */}
                        <div className="relative z-30 bg-white/90 backdrop-blur border border-indigo-100 shadow-xl shadow-indigo-100/50 rounded-2xl p-2 flex items-center gap-4 pr-6 animate-fade-in ring-1 ring-white">
                            <div className="bg-indigo-50 w-10 h-10 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-800 leading-tight">实时数据清洗 / 校验</span>
                                <span className="text-xs text-slate-500 font-medium font-mono">ID Mapping • ETL</span>
                            </div>
                            <div className="h-8 w-px bg-slate-200"></div>
                            <div className="flex items-center gap-1.5 opacity-80">
                                <GitMerge size={14} className="text-indigo-500" />
                                <span className="text-xs font-black text-indigo-900 tracking-widest uppercase">FUSION</span>
                            </div>
                        </div>

                        {/* Bottom Flow */}
                        <div className="w-full h-16 flex justify-center -mt-1">
                            <svg className="w-full h-full max-w-[600px]" viewBox="0 0 600 64" preserveAspectRatio="none">
                                <line x1="300" y1="0" x2="300" y2="64" stroke="url(#flowGradient)" strokeWidth="3" />
                                <circle r="2" fill="#6366f1">
                                    <animateMotion dur="1.5s" repeatCount="indefinite" path="M0,0 L0,64" />
                                </circle>
                            </svg>
                        </div>
                    </div>

                    {/* Mobile Connector Placeholder */}
                    <div className="flex md:hidden flex-col items-center py-4 text-slate-300">
                        <ArrowDown size={24} />
                    </div>

                    {/* ==================== ZONE 2: PROCESSING (CORE + SATELLITES) ==================== */}
                    <div className="relative z-20 w-full max-w-[1440px]">

                        {/* The Main Board - Responsive Grid */}
                        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-6 xl:gap-10 items-stretch relative">

                            {/* LEFT: BI UNIT -> Global Intelligence Hub (REFACTORED: TRANSLATION-BASED ARC LAYOUT) */}
                            <div className="xl:col-span-3 flex flex-col gap-0 relative group pt-0 xl:pt-12 order-2 xl:order-1">
                                {/* Explicit Connection Arrow: Desktop Only */}
                                <div className="hidden xl:flex absolute top-1/2 -right-10 z-20 text-indigo-500">
                                    <ArrowRight size={40} strokeWidth={4} />
                                </div>

                                <div className="flex items-center gap-3 mb-4 pl-0 xl:pl-2 justify-center xl:justify-start">
                                    <div className="p-2 rounded-lg bg-emerald-100/50 text-emerald-700 ring-1 ring-emerald-100"><BarChart3 size={18} /></div>
                                    <h3 className="font-extrabold text-base text-indigo-900 tracking-tight">全域决策情报</h3>
                                </div>

                                {/* Removed overflow-hidden to allow arc cards to extend if needed, added padding to container */}
                                <div className="flex-1 bg-gradient-to-b xl:bg-gradient-to-r from-white/90 to-emerald-50/50 border border-emerald-200/80 rounded-[2.5rem] p-6 shadow-xl hover:shadow-emerald-200/50 transition-all flex flex-col items-center relative z-10 group/leftpanel">
                                    {/* TECH BACKGROUND DECORATION */}
                                    <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent pointer-events-none"></div>

                                    {/* Gradient Glow Border (Top/Bottom) */}
                                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
                                    <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>

                                    {/* THE ARC LINE (SVG Background) - Desktop Only */}
                                    <div className="hidden xl:block absolute top-10 bottom-10 right-6 w-px pointer-events-none">
                                        <svg className="h-full w-24 overflow-visible" preserveAspectRatio="none">
                                            <path d="M 14,0 Q -36,300 14,600" fill="none" stroke="#6ee7b7" strokeWidth="6" strokeOpacity="0.3" className="animate-pulse" />
                                            <path d="M 14,0 Q -36,300 14,600" fill="none" stroke="url(#emeraldGrad)" strokeWidth="2" strokeDasharray="8 4" />
                                            <defs>
                                                <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#34d399" />
                                                    <stop offset="50%" stopColor="#10b981" />
                                                    <stop offset="100%" stopColor="#34d399" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    {/* NODES in Arc Arrangement (Right Aligned Column) */}
                                    {/* 
                         Updated Strategy (9 Items):
                         More complex arc translation to fit 9 items smoothly.
                         Values tailored to create a smooth convex curve.
                      */}
                                    <div className="w-full flex flex-col gap-3 xl:gap-3 relative z-10 items-center xl:items-end xl:pr-4">

                                        {/* 1. Omni-domain Dashboard - Shifted Far Left */}
                                        <div className="w-full xl:translate-x-[-20px] transition-transform duration-500">
                                            <TechRow
                                                icon={<LayoutDashboard size={18} />}
                                                title="全域数据看板 | 全域营销全景"
                                                theme="emerald"
                                                highlight
                                                className="w-full bg-white/80 border-emerald-200 shadow-md"
                                            />
                                        </div>

                                        {/* 2. Signal - Shifted Left */}
                                        <div className="w-full xl:translate-x-[-12px] transition-transform duration-500">
                                            <TechRow icon={<Radio size={18} />} title="实时信号捕捉" theme="emerald" highlight className="w-full" />
                                        </div>

                                        {/* 3. VOC - Shifted Slight Left */}
                                        <div className="w-full xl:translate-x-[-6px] transition-transform duration-500">
                                            <TechRow icon={<AudioWaveform size={18} />} title="VOC / 听觉感知" theme="emerald" highlight className="w-full" />
                                        </div>

                                        {/* 4. OneID - Center of Arc (Closest to Core) - No Shift */}
                                        <div className="w-full xl:translate-x-[0px] transition-transform duration-500">
                                            <TechRow icon={<Fingerprint size={18} />} title="OneID 跨越身份" theme="emerald" highlight className="w-full" />
                                        </div>

                                        {/* 5. MTA - Shifted Slight Left */}
                                        <div className="w-full xl:translate-x-[-6px] transition-transform duration-500">
                                            <TechRow icon={<Waypoints size={18} />} title="MTA 多点归因" theme="emerald" highlight className="w-full" />
                                        </div>

                                        {/* 6. CDP - Shifted Left */}
                                        <div className="w-full xl:translate-x-[-12px] transition-transform duration-500">
                                            <TechRow icon={<Database size={18} />} title="CDP 客户数据平台" theme="emerald" highlight className="w-full" />
                                        </div>

                                        {/* 7. Behavior - Shifted Far Left */}
                                        <div className="w-full xl:translate-x-[-16px] transition-transform duration-500">
                                            <TechRow icon={<ScanFace size={18} />} title="全触点行为捕捉" theme="emerald" highlight className="w-full" />
                                        </div>

                                        {/* 8. Supply-Demand Matching - New - Shifted Farther Left */}
                                        <div className="w-full xl:translate-x-[-18px] transition-transform duration-500">
                                            <TechRow icon={<Scale size={18} />} title="供需语义匹配" theme="emerald" highlight className="w-full" />
                                        </div>

                                        {/* 9. Content Fatigue - New - Shifted Max Left */}
                                        <div className="w-full xl:translate-x-[-20px] transition-transform duration-500">
                                            <TechRow icon={<AlertTriangle size={18} />} title="内容疲劳度预警" theme="emerald" highlight className="w-full" />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* CENTER: CORE ENGINE -> Mid-Grey Background */}
                            <div className="xl:col-span-6 relative z-30 order-1 xl:order-2 mb-6 xl:mb-0">
                                <GlassCard variant="dark" className="h-full min-h-auto xl:min-h-[600px] flex flex-col" noPadding>

                                    {/* 1. Circuit Texture Background (Subtle Grid) - Reduced Opacity */}
                                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0">
                                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                            <pattern id="circuit-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                                <path d="M0 0h80v80h-80z" fill="none" />
                                                <path d="M20 0v20h-20 M60 80v-20h20" stroke="currentColor" strokeWidth="0.5" className="text-indigo-300" />
                                                <path d="M40 40h20v20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-300" />
                                                <circle cx="60" cy="60" r="1.5" fill="currentColor" className="text-indigo-200" />
                                            </pattern>
                                            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
                                        </svg>
                                    </div>

                                    {/* 2. Radial Gradient Background (Center Bright, Edge Dark) */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,rgba(15,23,42,0.8)_80%)] pointer-events-none z-0"></div>

                                    {/* Core Header */}
                                    <div className="p-6 md:p-8 border-b border-indigo-500/10 flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-4">
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-300 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                                                <Cpu size={28} />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-xl md:text-2xl tracking-tight leading-none mb-2 flex flex-wrap items-center gap-3">
                                                    A.M.A Core
                                                    <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono tracking-wider">V3.0 NEURAL</span>
                                                </div>
                                                <div className="text-slate-400 text-xs font-medium uppercase tracking-wide">神经符号 AI 编排引擎</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-1 self-end md:self-auto">
                                            <div className="px-3 py-1 rounded-full bg-slate-950/50 border border-indigo-500/30 text-[10px] text-emerald-400 font-mono flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                                ONLINE
                                            </div>
                                        </div>
                                    </div>

                                    {/* Core Body */}
                                    <div className="p-6 md:p-8 flex-1 flex flex-col gap-10 relative z-10">

                                        {/* 1. ASYMMETRICAL WORKFLOW (Particle Light Bands) */}
                                        <div className="relative h-auto md:h-44 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
                                            {/* Dynamic SVG Streamlines - Hidden on Mobile */}
                                            <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 600 160" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="particleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
                                                        <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
                                                        <stop offset="100%" stopColor="#c084fc" stopOpacity="1" />
                                                    </linearGradient>
                                                    <filter id="glowLine">
                                                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                                        <feMerge>
                                                            <feMergeNode in="coloredBlur" />
                                                            <feMergeNode in="SourceGraphic" />
                                                        </feMerge>
                                                    </filter>
                                                </defs>
                                                {/* Left to Center (Dimmer to Bright) */}
                                                <path d="M 120,60 Q 200,30 300,80" fill="none" stroke="url(#particleGrad)" strokeWidth="3" filter="url(#glowLine)" opacity="0.6" />
                                                {/* Center to Right (Brightest) */}
                                                <path d="M 300,80 Q 400,130 480,60" fill="none" stroke="url(#particleGrad)" strokeWidth="3" filter="url(#glowLine)" opacity="0.9" />

                                                {/* Moving Particles */}
                                                <circle r="2" fill="#fff">
                                                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 120,60 Q 200,30 300,80" />
                                                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                                                </circle>
                                                <circle r="2.5" fill="#fff" filter="url(#glowLine)">
                                                    <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s" path="M 300,80 Q 400,130 480,60" />
                                                </circle>
                                            </svg>

                                            {/* Mobile Flow Connectors */}
                                            <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500/10 via-indigo-500/50 to-indigo-500/10 -translate-x-1/2 -z-10"></div>

                                            {/* Perception Node - Responsive Position */}
                                            <div className="relative md:absolute md:left-2 md:top-0 transform md:-rotate-1">
                                                <StepNode label="感知" desc="Perception" techSpec="（多源异构数据采集）" icon={<ScanFace size={16} />} shape="left-cut" style="glass" />
                                            </div>

                                            {/* Mobile Down Arrow */}
                                            <ArrowDown className="block md:hidden text-indigo-500/50" size={20} />

                                            {/* DECISION Node - Centered, Holographic */}
                                            <div className="relative z-20 transform scale-110">
                                                {/* Holographic Outer Glow */}
                                                <div className="absolute inset-[-20%] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl animate-pulse"></div>
                                                <StepNode label="决策" desc="Decision" techSpec="（多目标约束优化）" icon={<BrainCircuit size={20} />} active shape="hexagon" style="hologram" />
                                            </div>

                                            {/* Mobile Down Arrow */}
                                            <ArrowDown className="block md:hidden text-indigo-500/50" size={20} />

                                            {/* Action Node - Responsive Position */}
                                            <div className="relative md:absolute md:right-2 md:top-0 transform md:rotate-1">
                                                <StepNode label="执行" desc="Action" techSpec="（全渠道 API 网关调度）" icon={<ZapIcon size={16} />} shape="right-cut" style="glass" />
                                            </div>
                                        </div>

                                        {/* 2. CAPABILITIES ORBIT (Responsive Grid) */}
                                        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 h-full relative">

                                            {/* LEFT GROUP: Knowledge Base */}
                                            <div className="flex-1 relative p-2 rounded-2xl border border-amber-200/10 bg-amber-500/5">
                                                <div className="relative p-2 flex flex-col gap-5">
                                                    <LabelSmall icon={<BookOpen size={14} />} text="知识基座 (Knowledge Base)" color="text-amber-400" />

                                                    <div className="flex flex-col gap-4 pl-0 md:pl-2">
                                                        {/* Responsive Transforms */}
                                                        <div className="md:transform md:translate-x-3">
                                                            <CrystalNode title="车型配置图谱" techSpec="（实体关系抽取）" icon={<Network size={16} />} glowing />
                                                        </div>
                                                        <div className="md:transform md:translate-x-0">
                                                            <CrystalNode title="汽车知识图谱" techSpec="（多模态向量存储）" icon={<BookOpen size={16} />} glowing />
                                                        </div>
                                                        <div className="md:transform md:translate-x-5 opacity-100">
                                                            <CrystalNode title="营销语料库" techSpec="（垂类 Prompt 模板）" icon={<Command size={16} />} glowing />
                                                        </div>
                                                        <div className="md:transform md:translate-x-2 opacity-100">
                                                            <CrystalNode title="销售 SOP" techSpec="（流程化工具封装）" icon={<FileCheck size={16} />} glowing />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CENTER/RIGHT GROUP: Reasoning Engine (CSS Grid for Stability) */}
                                            <div className="flex-1 relative flex flex-col items-center p-2 rounded-2xl border border-fuchsia-200/10 bg-fuchsia-500/5">
                                                {/* Connector Lines to Decision Node (Desktop only) */}
                                                <svg className="hidden md:block absolute -top-16 w-full h-24 pointer-events-none opacity-30" viewBox="0 0 200 60">
                                                    <path d="M 20,60 Q 60,30 100,0" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 3" />
                                                    <path d="M 180,60 Q 140,30 100,0" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 3" />
                                                    <path d="M 100,60 L 100,20" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 3" />
                                                </svg>

                                                <LabelSmall icon={<BrainCircuit size={14} />} text="AI 推理引擎 (Reasoning)" color="text-fuchsia-400" />

                                                {/* Responsive Grid Arrangement - REBUILT */}
                                                <div className="w-full relative mt-2 grid grid-cols-2 gap-3 md:gap-2 auto-rows-min">
                                                    {/* Row 1: Multimodal + RAG */}
                                                    <div className="col-span-1">
                                                        <CrystalNode title="多模态 AIGC" techSpec="（跨模态生成 Pipeline）" icon={<Sparkle size={16} />} active />
                                                    </div>
                                                    <div className="col-span-1">
                                                        <CrystalNode title="RAG 检索增强" techSpec="（垂类增量向量索引）" icon={<Search size={16} />} active />
                                                    </div>

                                                    {/* Row 2: Brand LoRA + CoT (NEW) */}
                                                    <div className="col-span-1">
                                                        <CrystalNode title="Brand LoRA" techSpec="（品牌风格微调）" icon={<Aperture size={16} />} active />
                                                    </div>
                                                    <div className="col-span-1">
                                                        <CrystalNode title="CoT 思维链" techSpec="（多步推理规划）" icon={<Link2 size={16} />} active />
                                                    </div>

                                                    {/* Row 3: RLHF (Centered) */}
                                                    <div className="col-span-2 flex justify-center">
                                                        <div className="w-full md:w-2/3">
                                                            <CrystalNode title="RLHF 对齐" techSpec="（垂类反馈微调）" icon={<Sliders size={16} />} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 3. AGENT SWARM (Grid with Transforms) */}
                                        <div className="pt-8 border-t border-indigo-500/20 mt-auto relative pb-8">
                                            <div className="flex items-center justify-between mb-4 px-1">
                                                <div className="flex items-center gap-2 text-indigo-300/80 text-xs font-bold tracking-wide">
                                                    <Bot size={14} /> 智能体蜂群 (Agent Swarm)
                                                </div>
                                            </div>

                                            {/* Responsive Grid with Staggered Transforms */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative items-start">
                                                {/* Agent 1 - Up */}
                                                <div className="relative z-10 md:translate-y-0">
                                                    <AgentBox icon={<Target size={20} />} label="投放优化" techSpec="（容器化任务调度）" variant="primary" decoration="gear" />
                                                </div>

                                                {/* Agent 2 - Down */}
                                                <div className="relative z-0 md:translate-y-8">
                                                    <AgentBox icon={<ScanFace size={18} />} label="直播调控" techSpec="（实时流控 Agent）" variant="secondary" />
                                                </div>

                                                {/* Agent 3 - Up */}
                                                <div className="relative z-10 md:translate-y-0">
                                                    <AgentBox icon={<Wand2 size={20} />} label="创意生成" techSpec="（多模态工具链调用）" variant="primary" decoration="star" />
                                                </div>

                                                {/* Agent 4 - Down */}
                                                <div className="relative z-0 md:translate-y-8">
                                                    <AgentBox icon={<MessageSquare size={18} />} label="金牌销售" techSpec="（对话策略执行 Agent）" variant="secondary" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </div>

                            {/* RIGHT: LEADS UNIT -> Full-Lifecycle Growth (REFACTORED: TRANSLATION-BASED ARC LAYOUT) */}
                            <div className="xl:col-span-3 flex flex-col gap-0 relative group pt-0 xl:pt-12 order-3">
                                {/* Explicit Connection Arrow: Desktop Only */}
                                <div className="hidden xl:flex absolute top-1/2 -left-10 z-20 text-indigo-500">
                                    <ArrowRight size={40} strokeWidth={4} />
                                </div>

                                <div className="flex items-center gap-3 mb-4 pl-0 xl:pl-2 justify-center xl:justify-start">
                                    <div className="p-2 rounded-lg bg-purple-100/50 text-purple-700 ring-1 ring-purple-100"><Target size={18} /></div>
                                    <h3 className="font-extrabold text-base text-indigo-900 tracking-tight">全域转化闭环</h3>
                                </div>

                                {/* Removed overflow-hidden */}
                                <div className="flex-1 bg-gradient-to-b xl:bg-gradient-to-r from-white/90 to-purple-50/50 border border-purple-200/80 rounded-[2.5rem] p-4 shadow-xl hover:shadow-purple-200/50 transition-all flex flex-col items-center relative py-8 xl:py-12 z-10 group/rightpanel">
                                    {/* TECH BACKGROUND DECORATION */}
                                    <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent pointer-events-none"></div>

                                    {/* Gradient Glow Border (Top/Bottom) */}
                                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
                                    <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

                                    {/* THE ARC LINE (SVG Background) - Desktop Only */}
                                    <div className="hidden xl:block absolute top-10 bottom-10 left-6 w-px pointer-events-none">
                                        <svg className="h-full w-24 overflow-visible" preserveAspectRatio="none">
                                            {/* A pulsing glow line behind the main curve */}
                                            <path d="M 10,0 Q 60,300 10,600" fill="none" stroke="#d8b4fe" strokeWidth="6" strokeOpacity="0.3" className="animate-pulse" />
                                            {/* The main tech dash curve */}
                                            <path d="M 10,0 Q 60,300 10,600" fill="none" stroke="url(#purpleGrad)" strokeWidth="2" strokeDasharray="8 4" />
                                            <defs>
                                                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#c084fc" />
                                                    <stop offset="50%" stopColor="#9333ea" />
                                                    <stop offset="100%" stopColor="#c084fc" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    {/* NODES in Arc Arrangement (Left Aligned Column) */}
                                    {/* Using items-start and TranslateX for Arc */}
                                    <div className="w-full flex flex-col gap-4 xl:gap-5 relative z-10 xl:pl-4 items-center xl:items-start">

                                        {/* 1. Cleaning - Shifted Right (Away from core) */}
                                        <div className="w-full xl:translate-x-[12px] transition-transform duration-500">
                                            <ProcessNode number="01" title="多源线索清洗" icon={<Filter size={20} />} theme="purple" className="w-full" large />
                                        </div>

                                        {/* 2. Prediction - Shifted Slightly Right */}
                                        <div className="w-full xl:translate-x-[6px] transition-transform duration-500">
                                            <ProcessNode number="02" title="高意向潜客预测" icon={<Tag size={20} />} theme="purple" className="w-full" large />
                                        </div>

                                        {/* 3. Call - Center of Arc (Closest to Core) - Shift Left */}
                                        <div className="w-full xl:translate-x-[0px] transition-transform duration-500">
                                            <ProcessNode number="03" title="AI 自动外呼" icon={<PhoneCall size={20} />} theme="purple" className="w-full" large highlight />
                                        </div>

                                        {/* 4. Operation - Center of Arc - Shift Left */}
                                        <div className="w-full xl:translate-x-[0px] transition-transform duration-500">
                                            <ProcessNode number="04" title="私域用户运营" icon={<UserCog size={20} />} theme="purple" className="w-full" large highlight />
                                        </div>

                                        {/* 5. Equity - New - Shifted Slightly Right */}
                                        <div className="w-full xl:translate-x-[6px] transition-transform duration-500">
                                            <ProcessNode number="05" title="全渠道权益/核销" icon={<Ticket size={20} />} theme="purple" className="w-full" large />
                                        </div>

                                        {/* 6. LTV - Shifted Right */}
                                        <div className="w-full xl:translate-x-[12px] transition-transform duration-500">
                                            <ProcessNode number="06" title="LTV 价值预测" icon={<TrendingUp size={20} />} theme="purple" className="w-full" large />
                                        </div>

                                        {/* 7. RPA - Shifted Far Right */}
                                        <div className="w-full xl:translate-x-[16px] transition-transform duration-500">
                                            <ProcessNode number="07" title="RPA 自动分发" icon={<Share2 size={20} />} theme="purple" className="w-full" large />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Foundation Footer - Structural Base (ENHANCED) */}
                        <div className="mt-10 mx-auto w-full md:max-w-[90%] relative group cursor-default">
                            {/* Structural Shape */}
                            <div className="absolute inset-0 bg-slate-200/50 transform md:skew-x-12 rounded-lg translate-y-2 opacity-50"></div>
                            <div className="relative bg-gradient-to-r from-slate-100 via-white to-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between shadow-sm gap-6">

                                {/* Left: Model Base */}
                                <div className="flex flex-col md:flex-row items-center gap-6 pl-0 md:pl-4 text-center md:text-left">
                                    <div className="text-[11px] font-bold text-slate-500 tracking-widest flex items-center gap-3 md:border-r border-slate-200 pr-0 md:pr-6">
                                        <Layers size={16} className="text-indigo-400" />
                                        <span className="uppercase">底层大模型基座</span>
                                    </div>
                                    <div className="flex gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-wide font-mono">
                                        <span className="flex items-center gap-2 hover:text-indigo-500 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>GENIE 2.5</span>
                                        <span className="flex items-center gap-2 hover:text-indigo-500 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>GPT-4o</span>
                                        <span className="flex items-center gap-2 hover:text-indigo-500 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>HUNYUAN</span>
                                        <span className="flex items-center gap-2 hover:text-indigo-500 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>LLAMA 3</span>
                                    </div>
                                </div>

                                {/* Middle: Model Router */}
                                <div className="flex items-center gap-3 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full">
                                    <Router size={14} className="text-indigo-500" />
                                    <span className="text-[10px] font-bold text-indigo-700">Model Router 智能路由</span>
                                    <span className="text-[9px] text-indigo-400 bg-white px-1.5 rounded-md border border-indigo-100">Cost-Effective</span>
                                </div>

                                {/* Right: Plugin Ecosystem */}
                                <div className="flex items-center gap-4 pr-0 md:pr-4">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-2">
                                        <Plug size={14} /> Plugin Ecosystem
                                    </div>
                                    <div className="px-2 py-0.5 bg-slate-100 rounded text-[9px] font-bold text-slate-600">WEB APP</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CONNECTOR: Dark Indigo -> Middle Layer -> Fuchsia */}
                    <div className="w-full h-16 relative z-0 flex justify-center -my-1 opacity-60">
                        <svg className="w-full h-full max-w-[1000px]" viewBox="0 0 1000 64" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="distGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#d946ef" stopOpacity="1" />
                                </linearGradient>
                            </defs>
                            <path d="M500,0 C500,32 500,32 500,64" stroke="url(#distGrad)" strokeWidth="3" strokeDasharray="8 4" fill="none" />
                            <path d="M500,0 C500,40 200,20 200,64" stroke="url(#distGrad)" strokeWidth="2" strokeDasharray="8 4" fill="none" />
                            <path d="M500,0 C500,40 800,20 800,64" stroke="url(#distGrad)" strokeWidth="2" strokeDasharray="8 4" fill="none" />
                        </svg>
                    </div>

                    {/* ==================== MIDDLE LAYER: COORDINATION & COMPLIANCE ==================== */}
                    <div className="relative z-20 w-full max-w-[1000px] flex flex-col md:flex-row gap-4 md:gap-6 mb-6">

                        <div className="flex-1 bg-white/60 border border-indigo-100 rounded-xl p-3 flex items-center justify-between shadow-sm backdrop-blur-sm hover:bg-white/80 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="bg-indigo-50 p-2 rounded text-indigo-600"><Shuffle size={16} /></div>
                                <div className="text-xs font-bold text-slate-700">资源自动编排</div>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse delay-75"></div>
                            </div>
                        </div>

                        <div className="flex-1 bg-white/60 border border-slate-200 rounded-xl p-3 flex items-center justify-between shadow-sm backdrop-blur-sm hover:bg-white/80 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="bg-slate-100 p-2 rounded text-slate-600"><ShieldAlert size={16} /></div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-700">全域风险管控</span>
                                    <span className="text-[10px] text-slate-500 font-medium">Privacy Compliance 风险扫描</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded text-[9px] font-bold text-green-700 border border-green-100">
                                <FileCheck size={10} /> PASSED
                            </div>
                        </div>

                    </div>

                    {/* ==================== ZONE 3: OUTPUT (SAAS APPS) - STAGGERED MICRO-ARC ==================== */}
                    <div className="relative z-10 w-full max-w-[1280px]">
                        {/* Use flex with gap and transforms. Mobile: Vertical Stack (no transform). Desktop: Horizontal Arc */}
                        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 h-auto md:h-32">

                            {/* Card 1 - Far Left (Lower) */}
                            <div className="w-full md:w-1/5 md:transform md:translate-y-6">
                                <SaaSAppCard title="直投一体化" icon={<Megaphone size={24} />} color="sky" subtitle="广告技术" />
                            </div>

                            {/* Card 2 - Left (Higher) */}
                            <div className="w-full md:w-1/5 md:transform md:translate-y-2">
                                <SaaSAppCard title="智配本地推" icon={<Target size={24} />} color="emerald" subtitle="本地生活" />
                            </div>

                            {/* Card 3 - Center (Highest - Top of Arc?) */}
                            <div className="w-full md:w-1/5 md:transform md:translate-y-0">
                                <SaaSAppCard title="门店私域通" icon={<Store size={24} />} color="indigo" subtitle="门店管理" />
                            </div>

                            {/* Card 4 - Right (Higher) */}
                            <div className="w-full md:w-1/5 md:transform md:translate-y-2">
                                <SaaSAppCard title="KOX 达人运营" icon={<Users size={24} />} color="purple" subtitle="达人营销" />
                            </div>

                            {/* Card 5 - Far Right (Lower) */}
                            <div className="w-full md:w-1/5 md:transform md:translate-y-6">
                                <SaaSAppCard title="AIGC 内容工厂" icon={<Palette size={24} />} color="rose" subtitle="内容生产" />
                            </div>

                        </div>
                    </div>

                </div>

                <div className="text-center text-slate-400 text-[10px] py-16 font-mono flex flex-col items-center gap-3 mt-8 opacity-60">
                    <div className="w-8 h-px bg-slate-300"></div>
                    A.M.A INTELLIGENT MARKETING CLOUD © 2024
                </div>

            </div>
        </div>
    );
};

// --- COMPONENT LIBRARY (Refined) ---

// Updated Crystal Node - Better legibility and mobile sizing
const CrystalNode = ({ title, icon, active, fullWidth, dashed, glowing, techSpec }: { title: string, icon: any, active?: boolean, fullWidth?: boolean, dashed?: boolean, glowing?: boolean, techSpec?: string }) => (
    <div className={`
        group flex flex-col items-start gap-1 p-3 rounded-xl backdrop-blur-md transition-all duration-300 w-full cursor-pointer relative overflow-hidden
        ${fullWidth ? 'col-span-2' : 'col-span-1'}
        ${active || glowing
            ? 'bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
            : 'bg-white/5 hover:bg-white/10'}
        ${dashed ? 'border border-dashed border-indigo-400/30' : 'border border-transparent'}
    `}>
        {/* Gradient Border (for non-dashed) */}
        {!dashed && (
            <div className={`absolute inset-0 rounded-xl border border-transparent [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] z-0 ${active || glowing ? 'bg-gradient-to-r from-indigo-400/60 to-purple-400/60' : 'bg-gradient-to-r from-slate-600/30 to-slate-700/30'}`} style={{ maskComposite: 'exclude' }}></div>
        )}

        {/* Glowing Aura for Primary Nodes */}
        {glowing && <div className="absolute inset-0 bg-indigo-500/10 blur-md"></div>}

        <div className="flex items-center gap-3 w-full relative z-10">
            <div className={`${active || glowing ? 'text-indigo-200' : 'text-indigo-400'} group-hover:text-white transition-colors`}>{icon}</div>
            <span className={`text-xs font-bold text-white tracking-tight leading-snug ${glowing ? 'drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]' : ''}`}>{title}</span>
        </div>

        {/* Tech Spec - Smaller line below */}
        {techSpec && (
            <div className="relative z-10 pl-8 -mt-1">
                <span className="text-[9px] text-indigo-300/80 font-mono tracking-tighter whitespace-nowrap scale-95 origin-left block">{techSpec}</span>
            </div>
        )}
    </div>
);

// Updated StepNode - Added techSpec support
const StepNode = ({ label, desc, icon, active, shape, style = 'glass', techSpec }: { label: string, desc: string, icon?: any, active?: boolean, shape?: 'left-cut' | 'right-cut' | 'hexagon', style?: 'glass' | 'hologram', techSpec?: string }) => {

    // On mobile, force rounded-xl for simplicity, unless it's the hexagon
    const mobileShape = shape === 'hexagon' ? 'rounded-full aspect-square w-32 h-32 md:w-40 md:h-40 flex justify-center' : 'rounded-xl';

    // Desktop shapes
    const desktopShape = shape === 'left-cut' ? 'md:rounded-r-xl md:rounded-bl-xl md:rounded-tl-[2rem]'
        : shape === 'right-cut' ? 'md:rounded-l-xl md:rounded-br-xl md:rounded-tr-[2rem]'
            : ''; // Hexagon handled in mobileShape base

    return (
        <div className={`
            flex flex-col items-center justify-center gap-1 transition-all duration-500 relative overflow-hidden group
            ${shape === 'hexagon' ? 'p-0' : 'px-6 py-4 md:py-3 border w-full md:w-auto'}
            ${style === 'glass' ? 'bg-slate-900/40 backdrop-blur-md border-purple-300/30 hover:border-purple-300/50 hover:bg-slate-800/50 shadow-lg' : ''}
            ${style === 'hologram' ? 'shadow-[0_0_50px_rgba(99,102,241,0.5)] z-20' : ''}
            ${mobileShape} ${desktopShape}
        `}>
            {/* Holographic Specifics */}
            {style === 'hologram' && (
                <>
                    {/* Inner Dark Ring */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-950 to-purple-950 z-0"></div>
                    {/* Outer Gradient Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-indigo-500 to-purple-500 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]" style={{ maskComposite: 'exclude' }}></div>
                    {/* Inner Particle Texture */}
                    <div className="absolute inset-4 rounded-full opacity-30 z-0 overflow-hidden">
                        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
                    </div>
                </>
            )}

            <div className="relative z-10 flex flex-col items-center gap-0.5">
                <div className={`
                    p-2 rounded-full mb-1 flex items-center justify-center
                    ${style === 'hologram' ? 'bg-indigo-500/20 text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.6)]' : 'bg-white/5 text-indigo-200 shadow-[0_0_10px_rgba(255,255,255,0.1)]'}
                `}>
                    {icon}
                </div>
                <div className="flex flex-col items-center leading-none">
                    <span className={`
                        font-bold tracking-wide mb-1
                        ${style === 'hologram'
                            ? 'text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]'
                            : 'text-sm text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]'}
                    `}>{label}</span>
                    <span className={`text-[9px] font-mono uppercase tracking-widest mb-1 ${style === 'hologram' ? 'text-indigo-200' : 'text-indigo-300'}`}>{desc}</span>
                    {techSpec && (
                        <span className={`text-[8px] font-mono whitespace-nowrap opacity-80 scale-90 ${style === 'hologram' ? 'text-cyan-200' : 'text-slate-400'}`}>
                            {techSpec}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

// Updated TechMediaSlot to use Colored Backgrounds (App Style)
const TechMediaSlot = ({ brand, label, bg, iconColor = "text-white" }: { brand: string, label: string, bg: string, iconColor?: string }) => (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-slate-100/50 ${bg}`}>
            <div className={`${iconColor} transform group-hover:scale-110 transition-transform duration-300`}>
                <BrandIcon name={brand} size={26} />
            </div>
        </div>
        <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-700 transition-colors">{label}</span>
    </div>
);

// MODIFIED TechRow: Added support for highlight/large mode with green frames
const TechRow = ({ icon, title, theme = 'emerald', highlight, className }: { icon: any, title: string, theme?: 'emerald' | 'purple', highlight?: boolean, className?: string }) => {
    return (
        <div className={`
        flex items-center gap-4 rounded-2xl border transition-all duration-300 relative
        ${highlight
                ? 'p-4 border-emerald-300 bg-emerald-50/60 shadow-[0_4px_15px_-3px_rgba(16,185,129,0.15)] hover:shadow-emerald-200/40 hover:-translate-y-0.5'
                : 'p-2.5 bg-white border-slate-100 shadow-sm hover:shadow-md'}
        ${className}
      `}>
            {/* Glowing Base for Icon */}
            <div className={`
            rounded-xl flex items-center justify-center shrink-0 relative
            ${highlight ? 'w-10 h-10 bg-emerald-100 text-emerald-600' : 'p-1.5 bg-slate-50 text-slate-400'}
        `}>
                {/* Base Glow */}
                <div className="absolute inset-0 rounded-xl blur-[2px] bg-current opacity-20"></div>
                <div className="relative z-10">{icon}</div>
            </div>
            <span className={`
            font-bold tracking-tight 
            ${highlight ? 'text-base text-emerald-900' : 'text-xs text-slate-600'}
        `}>{title}</span>
        </div>
    );
};

// MODIFIED: BaseLayer - significantly larger when `large` prop is true
const BaseLayer = ({ label, theme = 'emerald', large }: { label: string, theme?: string, large?: boolean }) => {
    return (
        <div className={`
        w-full bg-white/60 rounded-xl text-center border border-slate-200 hover:bg-white/90 transition-all cursor-default 
        ${large ? 'py-5 shadow-lg border-b-4 border-b-slate-200/50' : 'py-2'}
      `}>
            <span className={`font-black text-slate-700 ${large ? 'text-lg tracking-wide' : 'text-[10px]'}`}>{label}</span>
        </div>
    );
};

const LabelSmall = ({ icon, text, color }: { icon: any, text: string, color: string }) => (
    <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider mb-2 px-1 ${color}`}>
        {icon} {text}
    </div>
);

// Updated Agent Box - Staggered layout and micro-animations - Added techSpec
const AgentBox = ({ icon, label, variant = 'primary', decoration, techSpec }: { icon: any, label: string, variant?: 'primary' | 'secondary', decoration?: 'gear' | 'star', techSpec?: string }) => {
    const isPrimary = variant === 'primary';
    return (
        <div className={`
        flex flex-col items-center justify-center gap-1 transition-all cursor-pointer text-center group border relative overflow-visible w-full md:w-auto
        ${isPrimary
                ? 'h-28 md:w-36 rounded-2xl bg-indigo-500/40 border-indigo-400/80 shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] p-2'
                : 'h-24 md:w-28 rounded-xl bg-slate-800/60 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:border-indigo-400/60 hover:bg-slate-700/60 p-2'}
      `}>
            {/* Decoration: Gear (Rotating) */}
            {decoration === 'gear' && (
                <div className="absolute -top-2 -right-2 opacity-60 text-cyan-300 animate-spin-slow">
                    <Settings size={16} />
                </div>
            )}
            {/* Decoration: Star (Blinking) */}
            {decoration === 'star' && (
                <div className="absolute -top-2 -right-1 text-purple-300 animate-pulse">
                    <Star size={12} fill="currentColor" />
                </div>
            )}

            <div className={`transform transition-transform duration-300 mb-1 ${isPrimary ? 'scale-110 group-hover:scale-125 text-white' : 'text-indigo-200 group-hover:text-white'}`}>
                {icon}
            </div>
            <span className={`
            font-bold leading-tight transition-colors
            ${isPrimary ? 'text-xs text-white' : 'text-[10px] text-indigo-200'}
        `}>{label}</span>

            {/* Tech Spec for Agent */}
            {techSpec && (
                <span className={`text-[8px] leading-tight mt-1 opacity-70 font-mono scale-90 ${isPrimary ? 'text-indigo-100' : 'text-indigo-300'}`}>
                    {techSpec}
                </span>
            )}
        </div>
    );
};

// MODIFIED ProcessNode: Larger, Tech style, supports Arc layout classes
const ProcessNode = ({
    number, title, icon, isLast, theme = 'purple', className, large, highlight
}: {
    number: string, title: string, icon: any, isLast?: boolean, theme?: string, className?: string, large?: boolean, highlight?: boolean
}) => (
    <div className={`
    flex items-center gap-4 relative z-10 bg-white/90 backdrop-blur rounded-2xl border transition-all duration-300 group cursor-pointer
    ${highlight
            ? 'border-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] bg-purple-50/50'
            : 'border-purple-100 hover:border-purple-300 hover:shadow-lg'}
    ${large ? 'p-4' : 'p-3'}
    ${className}
  `}>
        {/* Connector Dot - Hidden on Mobile to avoid clutter */}
        <div className={`hidden md:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm ${highlight ? 'bg-purple-500 animate-pulse' : 'bg-purple-300'}`}></div>

        <div className={`
        rounded-xl flex items-center justify-center border shrink-0 shadow-sm transition-all group-hover:scale-105 group-hover:rotate-3
        ${large ? 'w-12 h-12' : 'w-9 h-9'}
        ${highlight ? 'bg-purple-600 text-white border-purple-700' : 'bg-purple-50 text-purple-600 border-purple-100'}
    `}>
            {icon}
        </div>

        <div className="flex-1">
            <div className={`
        font-bold transition-colors
        ${large ? 'text-base' : 'text-sm'}
        ${highlight ? 'text-purple-900' : 'text-slate-700 group-hover:text-purple-900'}
      `}>{title}</div>
            {highlight && <div className="text-[10px] text-purple-600 font-bold uppercase tracking-wider">AI Powered</div>}
        </div>

        <div className={`
        font-black transition-colors font-mono
        ${large ? 'text-lg' : 'text-[10px]'}
        ${highlight ? 'text-purple-300' : 'text-purple-400 group-hover:text-purple-500'}
    `}>{number}</div>
    </div>
);

// REFACTORED SaaSAppCard for Minimalist Tech Style
const SaaSAppCard = ({ title, icon, color, subtitle, roi }: { title: string, icon: any, color: string, subtitle: string, roi?: string }) => {
    const colors: Record<string, string> = {
        sky: 'text-sky-600 hover:text-sky-700 shadow-[0_0_15px_rgba(14,165,233,0.3)]',
        emerald: 'text-emerald-600 hover:text-emerald-700 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
        indigo: 'text-indigo-600 hover:text-indigo-700 shadow-[0_0_15px_rgba(99,102,241,0.3)]',
        purple: 'text-purple-600 hover:text-purple-700 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
        rose: 'text-rose-600 hover:text-rose-700 shadow-[0_0_15px_rgba(244,63,94,0.3)]',
    };

    const selectedColor = colors[color] || colors.indigo;
    const lightBg = {
        sky: 'bg-sky-50', emerald: 'bg-emerald-50', indigo: 'bg-indigo-50', purple: 'bg-purple-50', rose: 'bg-rose-50'
    }[color] || 'bg-slate-50';

    return (
        <div className={`
      flex items-center gap-3 p-4 rounded-xl bg-white/80 backdrop-blur border border-white/60 shadow-md hover:shadow-xl transition-all cursor-pointer group h-full relative overflow-hidden ring-1 ring-slate-100 hover:ring-2 hover:ring-opacity-50
      hover:-translate-y-1 w-full
    `}>
            {/* Minimalist Icon with Glowing Base */}
            <div className={`relative ${selectedColor} transform group-hover:scale-110 transition-transform`}>
                {/* Glowing Base */}
                <div className="absolute inset-0 bg-current blur-[6px] opacity-20 rounded-full"></div>
                <div className="relative z-10">{icon}</div>
            </div>

            <div className="flex flex-col">
                <h4 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-slate-900">{title}</h4>
                <span className="text-[10px] text-slate-500 font-medium tracking-wide mt-0.5">{subtitle}</span>
            </div>

            {/* ROI Tag - Subtle Top Right */}
            {roi && (
                <div className="absolute top-0 right-0 px-2 py-0.5 bg-slate-100 text-[8px] font-bold text-slate-500 rounded-bl-lg opacity-80">
                    {roi}
                </div>
            )}
        </div>
    );
};

const MapPinCheck = (props: any) => <CheckCircle2 {...props} />;

export default ArchitectureDiagram;