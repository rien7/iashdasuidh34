import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { id: 'home', label: '首页', to: '/' },
  { id: 'xiaofeilun', label: '小飞轮', to: '/xiaofeilun' },
  { id: 'qiankunta', label: '乾坤塔', to: '/qiankunta' },
  { id: 'huojianqiang', label: '火尖枪', to: '/huojianqiang' },
  { id: 'wenwo', label: '问我', to: '/wenwo' },
  { id: 'about', label: '关于我们', to: '/about' },
];

export default function Navigation() {
  const [scrollY, setScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState('home');
  const [capsuleStyle, setCapsuleStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentLink = navLinks.find((link) => link.to === location.pathname) ?? navLinks[0];
    setActiveLink(currentLink.id);
  }, [location.pathname]);

  useEffect(() => {
    const updateCapsulePosition = () => {
      const activeElement = linksRef.current[activeLink];
      const navElement = navRef.current;

      if (activeElement && navElement) {
        const navRect = navElement.getBoundingClientRect();
        const linkRect = activeElement.getBoundingClientRect();

        setCapsuleStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        });
      }
    };

    updateCapsulePosition();
    window.addEventListener('resize', updateCapsulePosition);

    return () => window.removeEventListener('resize', updateCapsulePosition);
  }, [activeLink]);

  const borderRadius = Math.min(scrollY / 5, 40);

  const topGap = Math.min(scrollY / 10, 20);

  const bgOpacity = Math.min(scrollY / 200, 1);

  return (
    <nav 
      className="fixed z-50 left-0 right-0 flex items-center justify-between px-8 lg:px-12 py-4 border border-white/10 backdrop-blur-md transition-all duration-300"
      style={{
        top: `${topGap}px`,
        borderRadius: `${borderRadius}px`,
        backgroundColor: `rgba(10, 14, 39, ${bgOpacity})`,
        margin: topGap > 0 ? '0 20px' : '0',
        width: topGap > 0 ? 'calc(100% - 40px)' : '100%',
      }}
    >
      {/* Logo */}
      <div className="flex items-center text-white text-lg lg:text-xl">
        <span className="text-red-500 font-semibold">A.M.A</span>
        <span className="ml-2">砹脉营销</span>
      </div>

      {/* Navigation Links */}
      <div ref={navRef} className="hidden lg:flex items-center gap-8 text-white/80 text-sm relative">
        {/* Animated Capsule Background */}
        <div 
          className="absolute h-10 bg-red-500/20 rounded-full transition-all duration-300 ease-out -z-10"
          style={{
            left: `${capsuleStyle.left}px`,
            width: `${capsuleStyle.width}px`,
            transform: 'translateY(-50%)',
            top: '50%',
          }}
        />
        
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            ref={(el) => (linksRef.current[link.id] = el)}
            to={link.to}
            end={link.to === '/'}
            onClick={() => setActiveLink(link.id)}
            className={`flex items-center gap-2 px-4 py-2 transition-colors relative ${
              activeLink === link.id ? 'text-white' : 'hover:text-white'
            }`}
          >
            {activeLink === link.id && (
              <span className="w-2 h-2 rounded-full border-2 border-red-500"></span>
            )}
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* CTA Button */}
      <button 
        className="hidden lg:block px-6 py-2.5 rounded-full text-white text-sm hover:bg-white/10 transition-all duration-300 relative"
        style={{
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(rgba(10, 14, 39, 1), rgba(10, 14, 39, 1)), linear-gradient(to right, #ef4444, #f59e0b)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        加入我们
      </button>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}