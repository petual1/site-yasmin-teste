import React, { useEffect, useState, useRef } from 'react';
import { MessageCircle, Instagram, MapPin, ArrowUp, Mail } from 'lucide-react';
import logoFull from '../assets/logo-full.png';
import logoIcon from '../assets/logo-icon.png';
import { CONTACT_INFO, WHATSAPP_LINK } from '../constants'; 

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const desktopButtonWrapper = "group relative rounded-full shadow-xl bg-yasmin-olive overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mx-auto w-64 lg:w-64 2xl:w-80 h-14 lg:h-14 2xl:h-16";
  const sliderContainer = "absolute w-full h-[200%] top-0 flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2";
  const sliderHalfButton = "w-full h-1/2 flex items-center justify-center text-base 2xl:text-lg font-bold font-sans gap-3";
  const fixedMobileButton = "flex items-center justify-center w-full h-14 bg-yasmin-olive text-white rounded-full shadow-xl hover:bg-yasmin-olive/95 transition-colors duration-300 gap-2 text-lg font-bold font-sans";
  const cardBaseStyle = "group flex flex-col items-center justify-start h-full w-full p-8 lg:p-8 2xl:p-10 rounded-3xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300";

  return (
    <footer id="contato" className="relative min-h-screen flex flex-col pt-12 pb-8 overflow-hidden bg-yasmin-base max-w-[100vw]">
      
      <div className="absolute top-0 left-0 w-full h-48 md:h-64 bg-gradient-to-b from-[#FCFDF5] via-[#FCFDF5]/80 to-transparent pointer-events-none z-30"></div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03]">
         <img src={logoIcon} alt="" className="w-[100%] md:w-[60%] object-contain" />
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="hidden md:block absolute -bottom-[24rem] -left-[20rem] w-[80rem] h-[80rem] bg-yasmin-sage/40 rounded-full filter blur-[180px] opacity-60 animate-blob"></div>
        <div className="hidden md:block absolute -bottom-[16rem] -right-[20rem] w-[70rem] h-[70rem] bg-yasmin-rose/40 rounded-full filter blur-[180px] opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20rem] -left-20 w-[45rem] h-[45rem] bg-yasmin-sage/40 rounded-full filter blur-[100px] opacity-60 md:hidden animate-blob"></div>
        <div className="absolute -bottom-[10rem] -right-20 w-[45rem] h-[45rem] bg-yasmin-rose/40 rounded-full filter blur-[100px] opacity-60 md:hidden animate-blob animation-delay-2000"></div>
      </div>
      
      <div 
        ref={sectionRef}
        className={`w-full max-w-6xl mx-auto px-6 relative z-40 flex-grow transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        
        <div className="text-center mb-12 mt-4 md:mt-8">
          <span className="text-yasmin-rose font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Vamos conversar?
          </span>
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-serif text-yasmin-olive mb-6 leading-tight">
             Você merece viver com mais 
             <span className="text-yasmin-rose italic font-medium"> leveza </span> 
             e equilíbrio
          </h2>
          <p className="text-gray-600 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed font-sans">
            A terapia é um espaço de acolhimento e transformação. Verifique a disponibilidade e comece sua jornada.
          </p>

          <div className="mx-auto w-full max-w-xs md:max-w-md">
            <div className={`hidden md:block ${desktopButtonWrapper}`}>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                    <div className={sliderContainer}>
                        <div className={`${sliderHalfButton} text-white`}>
                            <MessageCircle size={22} />
                            <span>Agendar Sessão</span>
                        </div>
                        
                        <div className={`${sliderHalfButton} text-white font-sans`}>
                            <MessageCircle size={22} className="fill-current" />
                            <span className="font-sans font-bold tracking-wide text-lg 2xl:text-xl">
                              {CONTACT_INFO.whatsappDisplay}
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`md:hidden ${fixedMobileButton} w-full`}
            >
                <MessageCircle size={22} />
                <span className="font-sans font-bold tracking-wide text-lg">
                  {CONTACT_INFO.whatsappDisplay}
                </span>
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-400 font-light tracking-wide uppercase font-sans">
            Retorno em horário comercial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 2xl:gap-8 mb-12 items-stretch">
            
            <a href={CONTACT_INFO.instagramLink} target="_blank" rel="noopener noreferrer" className={cardBaseStyle}>
                <div className="mb-4 p-3 bg-white rounded-full text-yasmin-rose shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                    <Instagram size={24} className="2xl:w-7 2xl:h-7" />
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-light mb-2 font-sans">Instagram</span>
                <span className="text-base 2xl:text-lg font-serif text-yasmin-olive">{CONTACT_INFO.instagramDisplay}</span>
            </a>

            <a href={`mailto:${CONTACT_INFO.email}`} className={cardBaseStyle}>
                <div className="mb-4 p-3 bg-white rounded-full text-yasmin-rose shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail size={24} className="2xl:w-7 2xl:h-7" />
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-light mb-2 font-sans">Email</span>
                <span className="text-sm 2xl:text-base font-serif text-yasmin-olive break-all text-center">{CONTACT_INFO.email}</span>
            </a>

            <a 
               href={CONTACT_INFO.address.mapsLink}
               target="_blank"
               rel="noopener noreferrer"
               className={cardBaseStyle}
            >
                <div className="mb-4 p-3 bg-white rounded-full text-yasmin-rose shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin size={24} className="2xl:w-7 2xl:h-7" />
                </div>
                
                <span className="text-xs text-gray-500 uppercase tracking-wider font-light mb-2 font-sans">Atendimento</span>
                <span className="text-base 2xl:text-lg font-serif text-yasmin-olive text-center leading-tight mb-4">Online & Presencial</span>
                
                <div className="text-center font-sans text-sm text-gray-600 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    <p>{CONTACT_INFO.address.street}</p>
                    <p>{CONTACT_INFO.address.district}</p>
                    <p className="text-xs font-semibold text-yasmin-olive mt-2 tracking-wide uppercase">{CONTACT_INFO.address.building}</p>
                </div>
            </a>
        </div>

      </div>

      <div className="w-full max-w-6xl mx-auto px-6 relative z-40 mt-auto">
        <div className="border-t border-yasmin-olive/10 pt-8">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-4">
                
                <div className="text-xs text-gray-500 font-light text-center md:text-left order-2 md:order-1 flex-1 font-sans">
                   <p>© {new Date().getFullYear()} Yasmin Mello.</p>
                   <p className="text-yasmin-olive font-medium mt-1">{CONTACT_INFO.crp}</p>
                </div>

                <div className="order-1 md:order-2 flex justify-center flex-1">
                    <img 
                      src={logoFull} 
                      alt="Yasmin Mello Psicologia" 
                      className="h-16 lg:h-20 2xl:h-24 w-auto object-contain hover:opacity-90 transition-opacity block" 
                    />
                </div>

                <div className="order-3 flex justify-center md:justify-end flex-1">
                    <button 
                      onClick={scrollToTop}
                      className="flex items-center gap-2 text-yasmin-olive hover:text-yasmin-rose transition-colors font-bold uppercase tracking-widest text-xs bg-white/50 px-5 py-3 rounded-full hover:bg-white shadow-sm font-sans"
                    >
                      Voltar ao topo
                      <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

            </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;