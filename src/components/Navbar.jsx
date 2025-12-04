import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoIcon from '../assets/logo-icon.png';
import { WHATSAPP_LINK } from '../constants'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navState, setNavState] = useState({
    opacity: 0,
    visibility: 1,
    translateY: 0
  });

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 1024; 
      
      const heroProgress = Math.min(1, scrollY / 150);
      
      let footerVisibility = 1;
      let translateVal = 0;

      if (!isMobile) {
        const footerElement = document.getElementById('contato');
        if (footerElement) {
          const footerRect = footerElement.getBoundingClientRect();
          const triggerPoint = 100; 

          if (footerRect.top < triggerPoint) {
              const dist = triggerPoint - footerRect.top;
              footerVisibility = Math.max(0, 1 - (dist / 100));
              translateVal = footerVisibility < 1 ? -20 : 0;
          }
        }
      }

      setNavState({
        opacity: heroProgress,
        visibility: isMobile ? 1 : footerVisibility, 
        translateY: isMobile ? 0 : translateVal      
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); 
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 1024;
  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1536;
  const baseLogoSize = isLargeScreen ? 96 : 72;
  
  const logoHeight = isDesktop ? baseLogoSize - (navState.opacity * (isLargeScreen ? 20 : 12)) : 48;
  const basePadding = isLargeScreen ? 24 : 16;
  const containerPadding = isDesktop ? basePadding - (navState.opacity * 8) : 16;

  const navStyle = {
    opacity: navState.visibility, 
    transform: `translateY(${navState.translateY}px)`,
    pointerEvents: 'auto',
    borderBottom: (navState.opacity > 0.1 && !isMenuOpen) ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent'
  };

  return (
    <>
      <nav 
          style={navStyle}
          className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-out"
      >
        <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-yasmin-sage/20 via-[#FCFDF5] to-yasmin-rose/20 backdrop-blur-md transition-opacity duration-300 pointer-events-none"
            style={{ opacity: isMenuOpen ? 0 : (navState.opacity * 0.95) }}
        ></div>

        <div 
          style={{ paddingTop: `${containerPadding}px`, paddingBottom: `${containerPadding}px` }}
          className="relative max-w-7xl mx-auto px-6 flex justify-between items-center"
        >
          
          <a 
              href="#" 
              className={`flex-shrink-0 flex items-center transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : (navState.opacity > 0.1 ? 'opacity-100' : 'opacity-0 lg:opacity-0')
              }`}
          >
              <img 
                  src={logoIcon} 
                  alt="Yasmin Mello" 
                  style={{ height: `${logoHeight}px` }}
                  className="object-contain transition-all duration-300"
              />
          </a>
          
          {/* -menu desktop- */}
          <div className="hidden lg:flex items-center space-x-2 2xl:space-x-4 text-xs 2xl:text-sm font-bold tracking-widest uppercase text-yasmin-olive transition-all duration-300">
            <a href="#sobre" className="px-4 2xl:px-5 py-2.5 rounded-full hover:bg-[#FCFDF5] hover:text-yasmin-rose transition-all duration-300 font-sans">
                Sobre Mim
            </a>
            
            <a href="#terapia" className="px-4 2xl:px-5 py-2.5 rounded-full hover:bg-[#FCFDF5] hover:text-yasmin-rose transition-all duration-300 font-sans">
                A Terapia
            </a> 

            <a href="#aterapia" className="px-4 2xl:px-5 py-2.5 rounded-full hover:bg-[#FCFDF5] hover:text-yasmin-rose transition-all duration-300 font-sans">
                Abordagem
            </a>

            <a href="#duvidas" className="px-4 2xl:px-5 py-2.5 rounded-full hover:bg-[#FCFDF5] hover:text-yasmin-rose transition-all duration-300 font-sans">
                Dúvidas
            </a>
            
            <a 
              href="#contato"
              className="ml-4 2xl:ml-6 px-6 2xl:px-8 py-2.5 2xl:py-3 bg-yasmin-olive text-white rounded-full hover:bg-yasmin-olive/90 shadow-md hover:shadow-lg transition hover:-translate-y-0.5 transform font-sans"
            >
              Agendar
            </a>
          </div>

          <button 
              className={`lg:hidden p-2 rounded-full transition-all duration-300 active:scale-95 z-[101] ${
                isMenuOpen 
                  ? 'text-yasmin-olive' 
                  : (navState.opacity > 0.5 ? 'text-yasmin-olive' : 'bg-white/90 backdrop-blur-md text-yasmin-olive shadow-sm')
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Alternar Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* -menu mobile- */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#FCFDF5] transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col items-center justify-center space-y-8 lg:hidden overflow-hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yasmin-sage/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yasmin-rose/20 rounded-full blur-[80px] pointer-events-none"></div>

          <img src={logoIcon} alt="Yasmin Mello" className="h-20 mb-4 opacity-80" />

          <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-8">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-yasmin-olive hover:text-yasmin-rose transition-colors">Sobre Mim</a>
            <a href="#terapia" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-yasmin-olive hover:text-yasmin-rose transition-colors">A Terapia</a> 
            <a href="#aterapia" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-yasmin-olive hover:text-yasmin-rose transition-colors">Abordagem</a>
            <a href="#duvidas" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-yasmin-olive hover:text-yasmin-rose transition-colors">Dúvidas</a>
            
            <div className="w-16 h-px bg-yasmin-olive/20 my-2"></div>

            <a 
              href="#contato" 
              onClick={() => setIsMenuOpen(false)} 
              className="w-full max-w-xs h-12 flex items-center justify-center bg-yasmin-olive text-white text-center text-lg font-bold font-sans tracking-wide rounded-full shadow-lg active:scale-95 transition-transform"
            >
              Agendar Sessão
            </a>
          </nav>
      </div>
    </>
  );
};

export default Navbar;