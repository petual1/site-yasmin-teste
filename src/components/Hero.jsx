import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import logoFull from '../assets/logo-full.png';
import logoIcon from '../assets/logo-icon.png';
import { CONTACT_INFO, WHATSAPP_LINK } from '../constants';

const Hero = () => {
  const desktopButtonWrapper = "group relative rounded-full shadow-lg border border-white/60 bg-white/40 backdrop-blur-md overflow-hidden cursor-pointer hover:shadow-2xl hover:bg-white/60 transition-all duration-300 w-64 h-14 2xl:w-80 2xl:h-16";
  
  const sliderContainer = "absolute w-full h-[200%] top-0 flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2";
  
  const desktopHalfButton = "w-full h-1/2 flex items-center justify-center font-bold text-yasmin-olive text-base 2xl:text-lg";
  
  const fixedPrimaryButton = "flex items-center justify-center w-full h-14 bg-yasmin-olive text-white rounded-full shadow-lg hover:bg-yasmin-olive/90 transition-colors duration-300 gap-2 text-lg font-bold font-sans";
  const fixedSecondaryButton = "flex items-center justify-center w-full h-14 bg-white/60 backdrop-blur-md border border-white/80 text-yasmin-rose rounded-full shadow-md hover:bg-white transition-colors duration-300 gap-2 text-lg font-bold font-sans";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 md:py-0 bg-gradient-to-br from-yasmin-sage/30 via-[#FCFDF5] to-yasmin-rose/30">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
         <img 
            src={logoIcon} 
            alt="Marca D'água" 
            className="w-[150%] md:w-[80%] opacity-[0.03]" 
         />
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="hidden md:block absolute -top-60 -left-60 w-[70rem] h-[70rem] bg-yasmin-sage/50 rounded-full filter blur-[200px] opacity-70 animate-blob"></div>
        <div className="hidden md:block absolute -top-40 -right-60 w-[60rem] h-[60rem] bg-yasmin-rose/50 rounded-full filter blur-[200px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-60 -left-20 w-[40rem] h-[40rem] bg-yasmin-sage/50 rounded-full filter blur-[100px] opacity-70 md:hidden animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-[40rem] h-[40rem] bg-yasmin-rose/50 rounded-full filter blur-[100px] opacity-70 md:hidden animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center w-full max-w-7xl mx-auto flex flex-col items-center justify-center md:h-screen">
        
        <div className="w-full px-4 mb-8 md:mb-14 flex justify-center">
            <img 
                src={logoFull} 
                alt="Yasmin Mello Psicóloga" 
                className="w-full max-w-xs md:max-w-4xl mx-auto h-auto object-contain drop-shadow-sm animate-fade-in-up" 
            />
        </div>
        
        {/* -mobile buttons- */}
        <div className="flex flex-col w-full max-w-sm gap-4 lg:hidden animate-fade-in-up animation-delay-300 px-4 mb-8">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className={fixedPrimaryButton}
            >
                <MessageCircle size={22} fill="currentColor" />
                <span>Falar no WhatsApp</span>
            </a>

            <a 
              href="#sobre" 
              className={fixedSecondaryButton}
            >
                <span>Sobre Mim</span>
                <ArrowDown size={20} />
            </a>

            <p className="text-xs text-yasmin-olive/60 mt-2 font-medium tracking-widest uppercase font-sans">
                Atendimento Online e Presencial
            </p>
        </div>

        {/* -desktop buttons- */}
        <div className="hidden lg:flex flex-row gap-4 2xl:gap-6 w-full justify-center items-center animate-fade-in-up animation-delay-300 pb-20">
          
          <div className={desktopButtonWrapper}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                <div className={sliderContainer}>
                    <div className={`${desktopHalfButton}`}>Agendar Primeira Sessão</div>
                    
                    <div className={`${desktopHalfButton} text-yasmin-olive gap-2 font-sans`}>
                        <MessageCircle size={22} className="fill-current" />
                        <span className="font-sans font-bold tracking-wide text-lg 2xl:text-xl">
                          {CONTACT_INFO.whatsappDisplay}
                        </span>
                    </div>
                </div>
            </a>
          </div>

          <div className={desktopButtonWrapper}>
            <a href="#sobre" className="block w-full h-full relative">
                <div className={sliderContainer}>
                    <div className={`${desktopHalfButton}`}>Sobre Mim</div>
                    <div className={`${desktopHalfButton} text-yasmin-rose`}>
                        <ArrowDown size={28} className="animate-bounce 2xl:w-8 2xl:h-8" />
                    </div>
                </div>
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#FCFDF5] via-[#FCFDF5]/30 to-transparent pointer-events-none z-20"></div>

    </section>
  );
};

export default Hero;