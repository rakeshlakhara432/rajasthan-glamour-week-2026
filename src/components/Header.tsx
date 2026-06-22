import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navGroups = [
    { name: 'Home', path: '/' },
    { name: 'RGW 2026', path: '/rajasthan-glamour-week' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Designers', path: '/designers' },
    { name: 'Models', path: '/models' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact', path: '/contact' },
  ];

  const leftNav = navGroups.slice(0, 5);
  const rightNav = navGroups.slice(5);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-2 md:pt-6 px-2 md:px-8 pointer-events-none">
      {/* Primary Navigation Bar */}
      <div 
        className={cn(
          "transition-all duration-700 ease-in-out rounded-full mx-auto max-w-7xl pointer-events-auto",
          isScrolled || isOpen 
            ? "py-3 glass-panel px-6 md:px-10 border border-white/20" 
            : "py-4 bg-transparent border border-transparent px-6 md:px-10"
        )}
      >
        <div className="flex justify-between items-center">
          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1">
            {leftNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "nav-link",
                  location.pathname === item.path ? "text-gold" : "text-white/60 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Centered Logo */}
          <Link to="/" className="flex flex-col items-center mx-8 transform transition-transform hover:scale-105 duration-500">
            <span className="font-display text-lg md:text-2xl font-bold tracking-[-0.05em] leading-none text-white whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              RAJASTHAN
            </span>
            <div className="flex items-center w-full mt-0.5 opacity-80">
              <div className="h-[1px] flex-grow bg-gold/50" />
              <span className="text-[0.4rem] md:text-[0.5rem] tracking-[0.4em] uppercase font-bold text-gold px-2 whitespace-nowrap">
                Glamour Week
              </span>
              <div className="h-[1px] flex-grow bg-gold/50" />
            </div>
          </Link>

          {/* Desktop Right Nav */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-end">
            {rightNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "nav-link",
                  location.pathname === item.path ? "text-gold" : "text-white/60 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/20">
              <a href="https://www.instagram.com/rajasthan_glamour_week" target="_blank" rel="noopener noreferrer">
                <Instagram size={14} className="text-white/40 hover:text-gold transition-colors cursor-pointer" />
              </a>
              <a href="https://m.facebook.com/profile.php?id=1074510172421874" target="_blank" rel="noopener noreferrer">
                <Facebook size={14} className="text-white/40 hover:text-gold transition-colors cursor-pointer" />
              </a>
              <Twitter size={14} className="text-white/40 hover:text-gold transition-colors cursor-pointer" />
            </div>
          </nav>

          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden p-2 text-white transition-colors hover:text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Curtain Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-royal-dark z-40 flex flex-col pt-32"
          >
            <div className="flex-grow overflow-y-auto px-12 py-10">
              <div className="space-y-8">
                {navGroups.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-3xl font-display transition-colors block italic",
                        location.pathname === item.path ? "text-gold" : "text-white/30 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="p-12 border-t border-gold/10 bg-royal-dark/40 backdrop-blur-md/5 backdrop-blur-md">
              <div className="flex justify-between items-center">
                <span className="text-[0.6rem] tracking-[0.4em] uppercase text-white/60">Connect</span>
                <div className="flex space-x-8">
                  <a href="https://www.instagram.com/rajasthan_glamour_week" target="_blank" rel="noopener noreferrer">
                    <Instagram size={18} className="text-white/40 hover:text-gold transition-colors" />
                  </a>
                  <a href="https://m.facebook.com/profile.php?id=1074510172421874" target="_blank" rel="noopener noreferrer">
                    <Facebook size={18} className="text-white/40 hover:text-gold transition-colors" />
                  </a>
                  <Twitter size={18} className="text-white/40 hover:text-gold transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
