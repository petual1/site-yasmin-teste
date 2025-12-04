// -imports-
import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

// -component-
const FAQ = () => {
  // -states-
  const [openIndex, setOpenIndex] = useState(null);
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

  // -handlers-
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // -data-
  const faqs = [
    {
      question: "Como funciona a terapia?",
      answer: "A terapia é um espaço individual onde você pode falar sobre suas emoções, pensamentos e desafios. Juntos, vamos compreender padrões que impactam seu bem-estar e trabalhar estratégias para lidar com eles de forma saudável."
    },
    {
      question: "Qual é a duração das sessões?",
      answer: "As sessões costumam ter cerca de 50 minutos, com frequência definida conforme suas necessidades e disponibilidade."
    },
    {
      question: "Quem pode procurar a terapia?",
      answer: "Atendo adolescentes e adultos que buscam apoio para lidar com desafios emocionais, ansiedade, estresse, autocrítica ou dificuldades nos relacionamentos."
    },
    {
      question: "As sessões são sigilosas?",
      answer: "Sim. Tudo que você compartilha na terapia é confidencial, respeitando rigorosamente o Código de Ética do Psicólogo."
    },
    {
      question: "Preciso estar em crise para procurar terapia?",
      answer: "Não. A terapia é válida para qualquer momento, seja para enfrentar desafios atuais ou apenas para compreender melhor suas emoções e investir no seu autoconhecimento."
    },
    {
      question: "Como agendar uma sessão?",
      answer: "Você pode entrar em contato diretamente pelo WhatsApp para verificar a disponibilidade e escolher o melhor horário para você."
    }
  ];

  // -styles-
  const buttonWrapper = "group relative w-72 md:w-64 lg:w-64 2xl:w-80 h-16 md:h-14 lg:h-14 2xl:h-16 rounded-full shadow-lg bg-yasmin-olive overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300";
  
  const sliderContainer = "absolute w-full h-[200%] top-0 flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2";
  const halfButton = "w-full h-1/2 flex items-center justify-center text-base 2xl:text-lg font-bold gap-2";

  // -jsx-
  return (
    <section id="duvidas" className="pt-20 lg:pt-24 2xl:pt-32 pb-10 bg-[#FCFDF5] relative overflow-hidden z-10 w-full max-w-[100vw]">
      
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] border border-yasmin-olive/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-20 items-start relative z-10 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        
        <div className="lg:col-span-4 lg:sticky lg:top-32 text-center lg:text-left">
          <span className="text-yasmin-rose font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Tire suas dúvidas
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight text-yasmin-olive">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-700 font-sans font-light text-lg mb-10 leading-relaxed">
            Entender como funciona o processo é o primeiro passo para se sentir seguro. Se sua dúvida não estiver aqui, pode me chamar.
          </p>
          
          <div className={`${buttonWrapper} mx-auto lg:mx-0`}>
                <a href="https://wa.me/558282171705" target="_blank" className="block w-full h-full relative">
                    <div className={sliderContainer}>
                        <div className={`${halfButton} text-white`}>
                            <MessageCircle size={20} />
                            <span>Falar no WhatsApp</span>
                        </div>
                        <div className={`${halfButton} bg-yasmin-cream text-yasmin-olive`}>
                            <MessageCircle size={20} className="fill-current" />
                            <span className="font-mono tracking-tight text-sm 2xl:text-base">+55 82 98217-1705</span>
                        </div>
                    </div>
                </a>
          </div>

        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-yasmin-olive/10 border-t border-b border-yasmin-olive/10">
            {faqs.map((item, idx) => (
              <div key={idx} className="group">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 2xl:py-6 flex items-center justify-between text-left focus:outline-none group-hover:text-yasmin-rose transition-colors duration-300"
                >
                  <span className={`text-xl 2xl:text-2xl font-serif ${openIndex === idx ? 'text-yasmin-rose' : 'text-yasmin-olive'}`}>
                    {item.question}
                  </span>
                  <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-yasmin-rose' : 'text-yasmin-olive/40'}`}>
                    {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 font-sans font-light leading-relaxed text-base 2xl:text-lg pr-4 md:pr-10 text-left">
                    {item.answer}
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

export default FAQ;