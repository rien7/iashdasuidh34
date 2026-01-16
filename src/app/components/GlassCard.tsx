import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'cyan' | 'blue' | 'purple' | 'indigo' | 'emerald' | 'sky' | 'fuchsia' | 'default' | 'featured' | 'solid' | 'dark' | 'tech' | 'media' | 'crystal';
  hoverEffect?: boolean;
  noPadding?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  hoverEffect = true,
  noPadding = false
}) => {
  
  const variants = {
    // Standard sleek glass
    default: 'bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]',
    
    // Tech stack variations (subtle tints for functional groups)
    cyan: 'bg-gradient-to-br from-cyan-50/80 to-white/60 border border-cyan-100/50 shadow-sm',
    blue: 'bg-gradient-to-br from-blue-50/80 to-white/60 border border-blue-100/50 shadow-sm',
    purple: 'bg-gradient-to-br from-purple-50/80 to-white/60 border border-purple-100/50 shadow-sm',
    indigo: 'bg-gradient-to-br from-indigo-50/80 to-white/60 border border-indigo-100/50 shadow-sm',
    
    // New Functional Colors
    emerald: 'bg-gradient-to-br from-emerald-50/90 to-teal-50/60 border border-emerald-100/60 shadow-sm', // Data/Growth
    sky: 'bg-gradient-to-br from-sky-50/90 to-blue-50/60 border border-sky-100/60 shadow-sm', // Media/Input
    fuchsia: 'bg-gradient-to-br from-fuchsia-50/90 to-pink-50/60 border border-fuchsia-100/60 shadow-sm', // SaaS/Output

    // The "Deep Space Glass" Engine -> Updated to "Mid-Grey" Tech style (lighter than before)
    dark: 'bg-slate-800/90 backdrop-blur-xl border border-indigo-400/30 shadow-[0_20px_50px_-10px_rgba(30,41,59,0.5)] ring-1 ring-white/10',
    
    // Internal "Floating Crystal" Nodes
    crystal: 'bg-indigo-500/10 backdrop-blur-md border border-indigo-400/20 hover:bg-indigo-500/20 hover:border-indigo-400/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300',

    // Featured container (The Big Cloud)
    featured: 'bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]',
    
    // Foundation / SaaS
    solid: 'bg-white/95 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]',

    // Technical Module (chips inside the engine)
    tech: 'bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/60 hover:border-indigo-400/40 transition-all duration-300',
    
    // Unified Media Icon Container
    media: 'bg-white border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300'
  };

  const selectedVariant = variants[variant] || variants.default;

  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl
        transition-all duration-500 ease-out
        ${selectedVariant}
        ${hoverEffect ? 'hover:-translate-y-1 hover:shadow-lg' : ''}
        ${noPadding ? '' : 'p-6'}
        ${className}
      `}
    >
      {/* Subtle shine effect for light cards */}
      {['default', 'featured', 'solid', 'cyan', 'blue', 'emerald', 'sky', 'fuchsia', 'media'].includes(variant) && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60"></div>
      )}
      
      {/* Subtle inner glow for dark cards */}
      {['dark', 'crystal'].includes(variant) && (
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      )}

      {children}
    </div>
  );
};

export default GlassCard;