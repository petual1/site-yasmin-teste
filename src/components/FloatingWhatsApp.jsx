import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAltColor, setIsAltColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsVisible(scrollY > 500);

      const targetSection = document.getElementById('aterapia');
      
      if (targetSection) {
        const rect = targetSection.getBoundingClientRect();
        const buttonTriggerPoint = windowHeight - 100; 

        if (rect.top <= buttonTriggerPoint && rect.bottom >= buttonTriggerPoint) {
            setIsAltColor(true); 
        } else {
            setIsAltColor(false); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const colorClasses = isAltColor 
    ? "bg-[#FCFDF5] text-yasmin-olive shadow-xl hover:bg-white" 
    : "bg-yasmin-olive text-white shadow-xl hover:bg-yasmin-olive/90";

  return (
    <div 
        className={`fixed bottom-6 right-6 z-[60] lg:bottom-8 lg:right-8 2xl:bottom-10 2xl:right-10 print:hidden transition-all duration-500 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
    >
      <a 
        href="https://wa.me/5582982171705" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`group flex items-center justify-start overflow-hidden 
                   rounded-full
                   transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                   
                   ${colorClasses}

                   h-14 lg:h-14 2xl:h-16
                   w-auto
                   max-w-[3.5rem] lg:max-w-[3.5rem] 2xl:max-w-[4rem]
                   hover:max-w-[17rem] lg:hover:max-w-[16rem] 2xl:hover:max-w-[19rem]`}
      >
        
        <div className="flex-shrink-0 w-14 lg:w-14 2xl:w-16 h-full flex items-center justify-center relative">
            <MessageCircle className="relative z-10 w-6 h-6 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7" strokeWidth={1.5} />
            
            <span className={`absolute top-3 right-3 lg:top-3 lg:right-3 2xl:top-4 2xl:right-4 w-3 h-3 rounded-full animate-pulse border-2 ${
                isAltColor ? 'bg-red-500 border-[#FCFDF5]' : 'bg-red-400 border-yasmin-olive'
            }`}></span>
        </div>

        <div className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col items-start leading-tight pr-6 lg:pr-6 2xl:pr-8 pl-0">
            <span className="text-[10px] lg:text-[10px] 2xl:text-[11px] uppercase tracking-[0.15em] opacity-80 font-sans font-medium mb-0.5">
                Falar Agora
            </span>
            <span className="font-sans font-bold text-lg lg:text-lg 2xl:text-xl tracking-wide">
                (82) 98217-1705
            </span>
        </div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;