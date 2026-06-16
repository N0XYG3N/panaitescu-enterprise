import { motion } from 'motion/react';

const VISION_PILLARS = [
  {
    title: "Independență Radicală",
    subtitle: "Ruperea de Ecosistemul Clasic",
    content: "„Sistemul educațional clasic oferă o traiectorie liniară, concepută pentru a crea executanți, nu lideri. Am refuzat să cred în promisiunea falsă că succesul depinde de parcurgerea unor etape rigide. În timp ce structurile clasice predicau siguranța mediocră, eu am ales riscul calculat și execuția masivă. Rezultatele: am generat peste 43.000€ dintr-un portofoliu diversificat de proprietate intelectuală, servicii media și programare, validându-mi propria direcție.”",
    colSpan: "md:col-span-2",
    delay: 0.1
  },
  {
    title: "Viziune & Dominație",
    subtitle: "Mentalitate de Elită",
    content: "„Foamea nativă de succes s-a manifestat de la 12-13 ani. În timp ce majoritatea își proiecta viitorul în limite standard, eu priveam către eșaloanele superioare: libertate totală, excelență și standarde de viață înalte. Viața este despre dominație și excelență pe toate planurile.”",
    colSpan: "md:col-span-1",
    delay: 0.2
  },
  {
    title: "Evoluție în Izolare",
    subtitle: "Etica Muncii",
    content: "„O decizie radicală: izolarea completă timp de un an. Am transformat acea perioadă într-un laborator de studiu intens și muncă brută, departe de zgomot. Mi-am dezvoltat o gândire hiper-analitică, abilități de a rezolva probleme complexe și un nivel nativ de engleză, transformând-o într-o armă de negociere internațională.”",
    colSpan: "md:col-span-1",
    delay: 0.3
  },
  {
    title: "Infrastructura Prezentului",
    subtitle: "Securizare & Alianțe",
    content: "„Astăzi, la 16 ani, centralizez o experiență de aproape 4 ani în afaceri high-end. Nu operez singur: mi-am securizat spatele cu parteneriate strategice, consultanță contabilă avansată și avocați de elită. Disciplina elimină orice barieră de vârstă.”",
    colSpan: "md:col-span-2",
    delay: 0.4
  }
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 md:py-32 px-6 bg-transparent relative">
      <div className="max-w-6xl mx-auto pt-12">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16 flex flex-col text-center items-center"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4 block font-bold">The Architect</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase leading-[0.9]">
            Arhitectura <span className="font-serif italic font-normal text-[#D4AF37] lowercase">Succesului</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] sm:text-xs mt-6 max-w-md mx-auto font-serif">
            Mentalitate • Execuție • Independență Radicală
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* Poza Fundatorului */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 bg-card border border-white/5 relative overflow-hidden aspect-[4/5] group flex flex-col justify-end min-h-[450px]"
          >
            <img 
              src="/profile.jpg" 
              alt="Robert Panaitescu - Panaitescu Enterprise"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-1000" 
            />
            
            <div className="relative z-10 p-8 border-t border-[#D4AF37]/20 bg-[#050505]/60 backdrop-blur-md flex flex-col gap-4">
               <div>
                 <h3 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-1">Robert Panaitescu</h3>
                 <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase">Fondator & Arhitect</p>
               </div>
               
               <a 
                 href="https://www.linkedin.com/in/robert-panaitescu-63712b416/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black font-serif font-normal text-xs tracking-[0.2em] uppercase transition-all border border-[#D4AF37]/30 hover:border-[#D4AF37] w-full mt-2"
               >
                 Connect on LinkedIn
                 <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.603 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                 </svg>
               </a>
            </div>
          </motion.div>

          {/* Grid-ul cu Pillars */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {VISION_PILLARS.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: pillar.delay }}
                className={`bg-card p-8 md:p-10 border-t border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors group flex flex-col justify-center min-h-[240px] ${pillar.colSpan}`}
              >
                <div className="mb-6 flex justify-between items-start">
                  <div>
                     <h3 className="text-lg md:text-xl font-serif italic font-normal tracking-widest text-[#D4AF37] uppercase">{pillar.title}</h3>
                     <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold mt-2 block">{pillar.subtitle}</span>
                  </div>
                  <span className="text-3xl font-serif italic text-white/5 opacity-50 group-hover:text-[#D4AF37]/20 transition-colors uppercase leading-none">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/70 font-sans italic">
                  {pillar.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
