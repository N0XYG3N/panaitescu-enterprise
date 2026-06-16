import { motion } from 'motion/react';

const BOUTIQUES = [
  {
    name: "Fondator Oficial & Director Executiv (Lansat în 2022)",
    brand: "WAYZZY RACING",
    description: "„WAYZZY RACING nu este doar un brand de haine sau un concept de motorsport; este o declarație de identitate pentru o comunitate globală care trăiește pentru viteză, adrenalină și excelență. Indexat masiv de Google ca un etalon în nișa sa, brandul reunește rideri de top și o cultură vizuală unică. Coordonat în întregime de la nivel de concept, design de colecție și strategie de marketing, WAYZZY reprezintă fuziunea perfectă dintre streetwear premium și cultura racing.”",
    accent: "gold"
  },
  {
    name: "Co-Fondator & Arhitect de Sisteme",
    brand: "SOVEREIGN ORDER",
    description: "„O platformă exclusivistă de educație aplicată și mentorat strategic. SOVEREIGN ORDER a fost creată cu un scop clar: maparea succesului și decodificarea eșecului. Un cerc exclusiv condus de profesori și lideri de business din America, Suedia, Germania și România, axat strict pe rezultate, nu pe teorie. Aici, transformăm experiențele brute, pierderile și victoriile din lumea reală a afacerilor în strategii clare pentru oameni care refuză mediocritatea. Învățăm comunitatea cum să gândească, cum să execute și cum să își protejeze interesele într-o economie digitală hiper-competitivă.”",
    accent: "silver"
  }
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 md:py-32 px-6 bg-transparent border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16 flex flex-col"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4 block font-bold">Portofoliu & Brands</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase leading-[0.9]">
            Ecosistemul <span className="font-serif italic font-normal text-[#D4AF37] lowercase">Privat</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BOUTIQUES.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-card p-8 md:p-10 flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-colors cursor-pointer min-h-[280px]"
            >
              <div>
                <span className="font-serif font-normal text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{item.name}</span>
                <h4 className="text-xl md:text-2xl font-bold mt-2 mb-4 tracking-tight text-white uppercase">{item.brand}</h4>
                <p className="text-xs text-white/70 leading-relaxed font-sans max-w-sm">
                  {item.description}
                </p>
              </div>
              <div className="text-[#D4AF37] text-[10px] font-bold tracking-widest mt-8 flex items-center gap-2 uppercase">
                {idx === 0 ? 'Explore Asset' : 'Enter Portal'} <span className="text-lg leading-none ml-1 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
