import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-16 px-6 bg-transparent border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="bg-card p-10 md:p-16 mb-24 relative overflow-hidden"
        >
          <div className="mb-16 relative z-10 text-center">
            <span className="font-serif font-normal text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4 block">Inițializare & Conexiune</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter uppercase leading-[0.9]">
              Contact <span className="font-serif italic font-normal text-[#D4AF37] lowercase">Privat</span>
            </h2>
          </div>

          <form className="space-y-10 font-sans relative z-10 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase">Nume / Entitate</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase">Adresă Email Oficială</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
                />
              </div>
            </div>
            
            <div className="space-y-2">
               <label className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase">Subiectul Interacțiunii</label>
               <input 
                 type="text" 
                 className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
               />
            </div>
            
            <div className="space-y-2">
               <label className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase">Detaliile Solicitării</label>
               <textarea 
                 rows={4}
                 className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none text-sm"
               ></textarea>
            </div>
            
            <div className="pt-8 flex justify-center">
              <button 
                type="button"
                className="px-10 py-5 font-serif font-normal bg-[#D4AF37] text-black text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors cursor-pointer w-full md:w-auto"
              >
                Initiate Consultation
              </button>
            </div>
          </form>
        </motion.div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-6 md:gap-0">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-sans">
            &copy; {new Date().getFullYear()} Panaitescu Enterprise. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-white/40 tracking-widest uppercase hover:text-[#D4AF37] transition-colors cursor-pointer">LinkedIn</span>
            <span className="text-[10px] text-white/40 tracking-widest uppercase hover:text-[#D4AF37] transition-colors cursor-pointer">Instagram</span>
            <span className="text-[10px] text-white/40 tracking-widest uppercase hover:text-[#D4AF37] transition-colors cursor-pointer">HQ / Bucharest</span>
          </div>
        </div>
      </div>
    </section>
  );
}
