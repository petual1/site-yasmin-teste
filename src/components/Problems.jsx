// -imports-
import React, { useEffect, useState, useRef } from 'react';

// -component-
const Problems = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // -data-
  const problems = [
    { 
      id: "01",
      title: "Ansiedade Constante", 
      text: "Sensação de esgotamento e preocupação excessiva que dificulta o dia a dia e traz desconforto, impedindo que você aproveite o momento presente." 
    },
    { 
      id: "02",
      title: "Pensamentos Repetitivos", 
      text: "Preocupação com o futuro, insegurança nas decisões ou revivendo situações do passado, criando um ciclo mental exaustivo." 
    },
    { 
      id: "03",
      title: "Autocrítica Intensa", 
      text: "Sentimento de culpa ou sensação de incapacidade constante. Uma voz interna exigente que torna a rotina mais pesada do que deveria ser." 
    }
  ];

  // -jsx-
  return (
    <section id="terapia" className="py-24 md:py-32 px-6 relative bg-yasmin-base overflow-hidden z-20 w-full max-w-[100vw]">
      
      {/* -background- */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#FCFDF5] via-[#FCFDF5]/60 to-transparent pointer-events-none z-20"></div>

      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
         <div className="absolute top-0 -left-[20rem] w-[50rem] h-[50rem] bg-yasmin-sage/30 rounded-full filter blur-[150px] opacity-60 animate-blob"></div>
         <div className="absolute bottom-0 -right-[20rem] w-[50rem] h-[50rem] bg-yasmin-rose/30 rounded-full filter blur-[150px] opacity-60 animate-blob animation-delay-2000"></div>
      </div>

      <svg className="absolute top-[60%] left-0 w-full h-[500px] -translate-y-1/2 text-yasmin-sage/40 pointer-events-none hidden md:block z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 160 C 200 160, 400 60, 720 160 C 1040 260, 1240 160, 1540 160" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10"/>
      </svg>

      {/* -content- */}
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto relative z-30 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        
        <div className="text-center mb-20">
          <span className="text-yasmin-rose font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Identificação
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-yasmin-olive mb-6">
            Por que buscar <span className="text-yasmin-rose italic font-medium">terapia</span> agora?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Muitas vezes, a correria do dia a dia faz com que a gente se desconecte de si mesmo. Reconhecer esses sinais é o primeiro passo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {problems.map((item, idx) => (
            <div 
                key={idx} 
                style={{ transitionDelay: `${idx * 150}ms` }}
                className="group relative bg-white/80 backdrop-blur-sm p-10 pt-12 rounded-[2.5rem] border border-yasmin-olive/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full flex flex-col"
            >
              <span className="absolute -top-4 -right-4 text-[8rem] font-serif text-yasmin-sage/30 font-bold leading-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-yasmin-rose/30">
                {item.id}
              </span>

              <div className="mb-6 relative">
                  <div className="w-12 h-12 bg-yasmin-olive/10 text-yasmin-olive rounded-full flex items-center justify-center group-hover:bg-yasmin-rose group-hover:text-white transition-colors duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="transform group-hover:rotate-180 transition-transform duration-700">
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" fillOpacity="0.2"/>
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="currentColor"/>
                    </svg>
                  </div>
              </div>

              <h3 className="text-2xl font-serif text-yasmin-olive mb-4 relative z-10">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans font-light relative z-10 flex-grow">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yasmin-rose to-yasmin-base group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Problems;