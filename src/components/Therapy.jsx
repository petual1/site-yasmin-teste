// -imports-
import React, { useEffect, useState, useRef } from 'react';
import { Brain, Heart, Sparkles, ArrowDown } from 'lucide-react';

// -component-
const Therapy = () => {
  // -states-
  const [isVisible, setIsVisible] = useState(false);
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

  // -data-
  const benefits = [
    {
      icon: <Brain size={28} className="lg:w-8 lg:h-8" />, 
      title: "Consciência",
      desc: "Entenda os gatilhos por trás das suas emoções e retome o controle das suas reações."
    },
    {
      icon: <Heart size={28} className="lg:w-8 lg:h-8" />,
      title: "Autoestima",
      desc: "Construa uma relação mais gentil consigo mesma, diminuindo a autocrítica excessiva."
    },
    {
      icon: <Sparkles size={28} className="lg:w-8 lg:h-8" />,
      title: "Autonomia",
      desc: "Aprenda ferramentas práticas para lidar com crises e desafios sem depender da terapia para sempre."
    }
  ];

  // -jsx-
  return (
    <section id="aterapia" className="py-24 lg:py-24 2xl:py-32 relative bg-yasmin-olive text-yasmin-base overflow-hidden w-full max-w-[100vw]">
      
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] border border-white/30 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] border border-white/30 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 relative z-10 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 2xl:gap-20 items-start">
          
          <div className="lg:sticky lg:top-32 text-center lg:text-left">
            <span className="text-yasmin-cream/80 font-bold tracking-[0.2em] text-sm uppercase mb-6 block">
              Minha Abordagem
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-serif leading-tight mb-8">
              <span className="text-yasmin-cream italic font-medium">Terapia</span> Cognitivo-Comportamental
            </h2>
            
            <div className="w-20 h-px bg-yasmin-cream/50 mb-8 mx-auto lg:mx-0"></div>

            <p className="text-yasmin-base/80 text-lg 2xl:text-xl font-light leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
              A TCC é uma ciência prática. Juntos, mapeamos seus padrões e criamos estratégias reais para mudar como você se sente e age.
            </p>

            <div className="mb-12 p-6 border-l-2 border-yasmin-cream/30 bg-white/5 rounded-r-2xl text-left">
              <p className="font-serif italic text-lg 2xl:text-xl text-yasmin-cream text-center lg:text-left">
                "Você merece cuidar de si, aliviar o peso emocional e viver com mais equilíbrio."
              </p>
            </div>

            <a 
              href="#contato"
              className="inline-flex items-center gap-3 bg-yasmin-cream text-yasmin-olive px-8 2xl:px-10 py-3 2xl:py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:-translate-y-1 mx-auto lg:mx-0 text-base 2xl:text-lg"
            >
              <span>Agendar Sessão</span>
              <ArrowDown size={20} className="animate-bounce" />
            </a>

          </div>

          <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-0">
             {benefits?.map((item, idx) => (
               <div 
                 key={idx} 
                 style={{ transitionDelay: `${idx * 150}ms` }} 
                 className="group flex flex-col md:flex-row gap-6 p-6 2xl:p-8 rounded-[2rem] border border-white/10 bg-white/5 hover:bg-white/10 hover:border-yasmin-cream/30 transition-all duration-500 backdrop-blur-sm items-center md:items-start text-center md:text-left"
               >
                 <div className="flex-shrink-0">
                   <div className="w-14 h-14 2xl:w-16 2xl:h-16 rounded-2xl bg-yasmin-base/10 text-yasmin-cream flex items-center justify-center group-hover:bg-yasmin-cream group-hover:text-yasmin-olive transition-colors duration-500">
                     {item.icon}
                   </div>
                 </div>
                 
                 <div>
                   <h3 className="text-xl 2xl:text-2xl font-serif mb-2 2xl:mb-3 text-white group-hover:text-yasmin-cream transition-colors">
                     {item.title}
                   </h3>
                   <p className="text-yasmin-base/70 font-light leading-relaxed text-base 2xl:text-lg">
                     {item.desc}
                   </p>
                 </div>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Therapy;