import { motion } from 'motion/react';

const EXPERTISE = [
  {
    title: "Arhitectură Vizuală & Regie de Creație",
    text: "Transformarea materialelor video brute în active de marketing de mare conversie. Editare cinematografică, dinamică și optimizată pentru retenție maximă, dedicată brandurilor și personalităților de calibru.",
    number: "01"
  },
  {
    title: "Dezvoltare Digitală & Programare",
    text: "Crearea de soluții web și infrastructuri digitale solide, optimizate pentru motoarele de căutare (SEO) și capabile să susțină operațiuni comerciale complexe.",
    number: "02"
  },
  {
    title: "Monetizarea Proprietății Intelectuale",
    text: "Strategii avansate de generare a veniturilor prin drepturi de autor, branding propriu și sisteme automatizate care produc valoare independent de prezența fizică.",
    number: "03"
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16 flex flex-col"
        >
          <span className="font-serif font-normal text-sm tracking-[0.3em] uppercase text-[#D4AF37] mb-4 block">Expertiză și Arsenal Tehnic</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter uppercase leading-[1.1] max-w-4xl">
            Direcție Creativă, Inginerie Digitală <br className="hidden md:block" />
            <span className="font-serif italic font-normal text-[#D4AF37] lowercase">&</span> Proprietate Intelectuală
          </h2>
        </motion.div>

        <div className="bg-white/[0.02] border border-white/5 p-12 md:p-16">
          <h3 className="text-[11px] tracking-[0.4em] uppercase text-white/40 mb-12 text-center">Core Proficiencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            {EXPERTISE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="space-y-4"
              >
                <p className="text-2xl font-serif italic text-white/40">{item.number}</p>
                <h5 className="font-serif font-normal text-xs pt-2 tracking-[0.2em] uppercase text-[#D4AF37]">{item.title}</h5>
                <p className="text-xs text-white/70 pt-4 leading-relaxed mx-auto max-w-xs">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
