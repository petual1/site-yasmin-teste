// -imports-
import React, { useEffect, useState, useRef } from 'react';
import fotoYasmin from '../assets/yasmin-sofa.jpg';

// -component-
const About = () => {
  // -states-
  const [isVisible, setIsVisible] = useState(false);
  
  // -refs-
  const sectionRef = useRef(null);

  // -effects-
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

  // -jsx-
  return (
    <section id="sobre" className="py-16 md:py-32 relative overflow-hidden bg-yasmin-base">
       
       {/* -background- */}
       <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#FCFDF5] via-[#FCFDF5]/60 to-transparent pointer-events-none z-20"></div>
       <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-yasmin-base via-yasmin-base/80 to-transparent pointer-events-none z-10"></div>
       
       <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] bg-yasmin-sage/15 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none mix-blend-multiply z-0"></div>
       <div className="absolute top-1/2 right-0 w-[50rem] h-[50rem] bg-yasmin-rose/10 rounded-full blur-[120px] translate-x-1/3 pointer-events-none mix-blend-multiply z-0"></div>

       <svg className="absolute top-10 left-0 w-[30rem] h-[40rem] text-yasmin-olive/20 transform -translate-x-10 pointer-events-none z-0 overflow-visible" viewBox="0 0 400 600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path d="M-50 500 C 50 400, 150 200, 200 50" stroke="currentColor" strokeWidth="2" fill="none"/>
           <path d="M-50 400 C 0 350, 100 250, 250 150" stroke="currentColor" strokeWidth="2" fill="none"/>
           <ellipse cx="200" cy="50" rx="20" ry="60" transform="rotate(15 200 50)" fill="currentColor" opacity="0.6"/>
           <ellipse cx="250" cy="150" rx="25" ry="70" transform="rotate(30 250 150)" fill="currentColor" opacity="0.6"/>
           <ellipse cx="100" cy="300" rx="15" ry="40" transform="rotate(-10 100 300)" fill="currentColor" opacity="0.5"/>
       </svg>

       <svg className="absolute bottom-40 right-0 w-[35rem] h-[35rem] text-yasmin-sage/30 transform translate-x-10 pointer-events-none z-0 overflow-visible" viewBox="0 0 600 600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path d="M550 550 C 450 450, 200 350, 150 150" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.5"/>
           <path d="M550 550 C 450 450, 350 250, 400 100" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.5"/>
           <path d="M150 150 Q 100 100 150 50 Q 200 100 150 150 Z" fill="currentColor" opacity="0.7"/>
           <path d="M400 100 Q 350 50 400 0 Q 450 50 400 100 Z" fill="currentColor" opacity="0.7"/>
           <path d="M250 300 Q 200 250 250 200 Q 300 250 250 300 Z" fill="currentColor" opacity="0.6"/>
       </svg>

      {/* -content- */}
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-stretch relative z-30 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        
        <div className="order-1 relative group flex justify-center md:justify-start h-full pt-10">
           <div className="relative w-full max-w-sm md:max-w-md mx-auto md:mx-0">
               <div className="absolute inset-0 border-[2px] border-yasmin-olive/20 rounded-[3rem] transform translate-x-5 translate-y-5 transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-3"></div>
               <div className="relative rounded-[3rem] overflow-hidden shadow-xl border-[6px] border-white h-full bg-white aspect-[3/4]">
                   <img 
                    src={fotoYasmin} 
                    alt="Yasmin no sofá" 
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-yasmin-olive/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               </div>
           </div>
        </div>
        
        <div className="order-2 relative flex flex-col justify-start md:justify-between h-full py-2 md:pt-10">
          
          <div className="mb-8 md:mb-16 relative z-20 mx-auto md:mx-0 w-full max-w-sm md:max-w-none text-center md:text-left"> 
              <span className="text-yasmin-olive/80 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-3 block flex items-center gap-2 justify-center md:justify-start">
                <span className="w-8 h-px bg-yasmin-olive"></span> Psicóloga Clínica
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-yasmin-olive leading-tight">
                Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-yasmin-olive to-yasmin-sage">Yasmin Mello</span>
              </h2>
          </div>

          <div className="md:mt-auto bg-white/70 backdrop-blur-xl border border-white/80 p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-500 z-10 mx-auto md:mx-0 w-full max-w-sm md:max-w-none text-left">
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                <div className="h-px w-10 bg-yasmin-rose"></div>
                <span className="text-yasmin-olive font-semibold tracking-widest text-sm font-sans">CRP 15/8552</span>
            </div>
            <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed font-sans font-light relative z-10">
                <p>
                Sou psicóloga formada pelo Centro Universitário Cesmac e atuo com a <strong className="text-yasmin-olive font-semibold">Terapia Cognitivo-Comportamental (TCC)</strong>. Atualmente, aprofundo meus estudos com a pós-graduação em TCC pelo InTCC.
                </p>
                <p>
                No consultório, meu foco é oferecer um espaço seguro, guiado por acolhimento, onde você possa falar sobre o que sente sem pressões.
                </p>
                <p>
                Minha proposta é caminhar ao seu lado, ajudando você a desenvolver consciência emocional e construir novas formas de enfrentar o dia a dia com <span className="italic text-yasmin-rose font-serif font-medium text-2xl">equilíbrio, autonomia e leveza</span>.
                </p>
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-white via-white/50 to-transparent rounded-full blur-2xl pointer-events-none opacity-60"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;