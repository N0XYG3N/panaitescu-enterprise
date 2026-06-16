import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Ecosystem from './components/Ecosystem';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Legacy', href: '#vision' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Advisory', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#050505] text-[#F0F0F0] selection:bg-[#D4AF37] selection:text-black font-sans"
    >
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          isScrolled ? 'bg-[#050505]/95 backdrop-blur-md pt-6 pb-4 shadow-2xl' : 'bg-transparent pt-10 pb-6'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 flex justify-between items-end ${isScrolled ? '' : 'border-b border-white/10 pb-6'}`}>
          <div 
            className="cursor-pointer" 
            onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
          >
             <h1 className="text-xl md:text-2xl font-extrabold tracking-[0.3em] gold-gradient uppercase leading-none">PANAITESCU</h1>
             <p className="text-[8px] md:text-[9px] tracking-[0.5em] text-white/40 uppercase mt-2 hidden md:block">Enterprise & Strategic Directives</p>
          </div>
          
          <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest text-white/60 font-semibold items-center">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button 
            className="md:hidden text-white cursor-pointer z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} className="text-white/60" /> : <Menu size={24} className="text-white/60" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-lg font-bold tracking-[0.3em] text-white/60 uppercase font-sans hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <Vision />
        <Ecosystem />
        <Expertise />
        <Contact />
      </main>
    </motion.div>
  );
}
