import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import MoneyFloat from './MoneyFloat';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToVision = () => {
    document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 px-6">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 w-full h-full">
        <MoneyFloat />
      </motion.div>
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter">
            PANAITESCU <br/> 
            <span className="font-serif italic font-normal text-[#D4AF37]">Enterprise.</span>
          </h2>
          
          <div className="flex justify-center my-8">
            <div className="h-[1px] w-20 bg-[#D4AF37]"></div>
          </div>

          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/60 uppercase mb-8">
            Strategie. Inovație. Performanță Digitală de Elită.
          </h3>

          <p className="text-lg md:text-xl font-serif italic text-white/70 leading-relaxed max-w-2xl mx-auto mt-6">
            „Dețin controlul absolut asupra ecosistemului meu de afaceri, de la prima linie de cod și regia vizuală, până la generarea profitului. Am sfidat sistemul clasic prin execuție brutală, iar acum, prin mentorat, ofer planul de evadare celor pregătiți să renunțe la scuze și să-și construiască propria realitate, prin propria mea comunitate privată SOVEREIGN ORDER”
          </p>
          
          <div className="pt-14">
             <button 
                onClick={scrollToVision}
                className="px-10 py-4 bg-[#D4AF37] text-black text-[11px] font-black tracking-[0.3em] uppercase hover:bg-white transition-colors cursor-pointer w-full md:w-auto"
              >
                Initiate Consultation
              </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
