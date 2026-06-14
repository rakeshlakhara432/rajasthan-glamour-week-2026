import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 bg-transparent">
      <section className="py-40 bg-transparent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 items-start">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <span className="text-gold font-black uppercase tracking-[1em] text-[0.6rem] mb-12 block underline underline-offset-[16px] decoration-gold/20">The Royal Concierge</span>
                  <h1 className="text-4xl md:text-[6rem] mb-16 leading-[0.8] uppercase font-black tracking-tighter mix-blend-difference">Direct <br /><span className="italic font-normal text-gold">Access</span></h1>
                  <p className="text-white/30 mb-20 md:mb-24 leading-relaxed font-light text-xl md:text-2xl italic border-l border-gold/30 pl-10">
                    "Architecting legendary collaborations for the global imperial elite."
                  </p>
                </motion.div>

                <div className="space-y-12 md:space-y-16">
                  <div className="flex items-start space-x-12 group">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-royal-dark/40 backdrop-blur-md/5 flex items-center justify-center shrink-0 border border-gold/10 transition-all duration-700 group-hover:bg-gold group-hover:scale-110 shadow-2xl">
                      <Phone className="text-gold transition-colors group-hover:text-premium-white" size={28} />
                    </div>
                    <div className="space-y-3">
                      <p className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.5em] text-white/30 font-black">Direct Channel 01</p>
                      <p className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white group-hover:text-gold transition-colors">9001793537</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-12 group">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-royal-dark/40 backdrop-blur-md/5 flex items-center justify-center shrink-0 border border-gold/10 transition-all duration-700 group-hover:bg-gold group-hover:scale-110 shadow-2xl">
                      <Phone className="text-gold transition-colors group-hover:text-premium-white" size={28} />
                    </div>
                    <div className="space-y-3">
                      <p className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.5em] text-white/30 font-black">Direct Channel 02</p>
                      <p className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white group-hover:text-gold transition-colors">9352694689</p>
                    </div>
                  </div>



                  <div className="flex items-start space-x-12 group">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-royal-dark/40 backdrop-blur-md/5 flex items-center justify-center shrink-0 border border-gold/10 transition-all duration-700 group-hover:bg-gold group-hover:scale-110 shadow-2xl">
                      <Instagram className="text-gold transition-colors group-hover:text-premium-white" size={28} />
                    </div>
                    <div className="space-y-3">
                      <p className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.5em] text-white/30 font-black">Digital Presence</p>
                      <p className="text-xl md:text-2xl font-black uppercase tracking-tighter text-gold italic group-hover:tracking-[0px] transition-all duration-500">@rajasthan_glamour_week</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="bg-royal-dark/40 backdrop-blur-md/5 p-12 md:p-24 border border-gold/10 backdrop-blur-3xl shadow-[0_100px_200px_-50px_rgba(0,0,0,0.6)] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] group-hover:bg-gold/10 transition-colors" />
                <form className="space-y-10 md:space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                    <div className="group/field">
                      <label className="block text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.4em] font-black text-white/20 mb-4 group-focus-within/field:text-gold transition-colors">First Identity</label>
                      <input type="text" className="w-full bg-transparent border-b border-gold/10 px-0 py-4 outline-none focus:border-gold transition-all text-white placeholder:text-white/5 font-light text-xl" placeholder="Imperial" />
                    </div>
                    <div className="group/field">
                      <label className="block text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.4em] font-black text-white/20 mb-4 group-focus-within/field:text-gold transition-colors">Last Identity</label>
                      <input type="text" className="w-full bg-transparent border-b border-gold/10 px-0 py-4 outline-none focus:border-gold transition-all text-white placeholder:text-white/5 font-light text-xl" placeholder="Visionary" />
                    </div>
                  </div>
                  <div className="group/field">
                    <label className="block text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.4em] font-black text-white/20 mb-4 group-focus-within/field:text-gold transition-colors">Digital Channel</label>
                    <input type="email" className="w-full bg-transparent border-b border-gold/10 px-0 py-4 outline-none focus:border-gold transition-all text-white placeholder:text-white/5 font-light text-xl" placeholder="lux@empire.com" />
                  </div>
                  <div className="group/field">
                    <label className="block text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.4em] font-black text-white/20 mb-4 group-focus-within/field:text-gold transition-colors">Subject of Inquiry</label>
                    <select className="w-full bg-transparent border-b border-gold/10 px-0 py-4 outline-none focus:border-gold transition-all text-white/40 appearance-none cursor-pointer font-light text-xl">
                      <option className="bg-transparent">Elite Residency</option>
                      <option className="bg-transparent">Brand Synergy</option>
                      <option className="bg-transparent">Global Press</option>
                    </select>
                  </div>
                  <div className="group/field">
                    <label className="block text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.4em] font-black text-white/20 mb-4 group-focus-within/field:text-gold transition-colors">Vision Manifest</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-gold/10 px-0 py-4 outline-none focus:border-gold transition-all text-white placeholder:text-white/5 font-light text-xl" placeholder="Describe your creative intention..."></textarea>
                  </div>
                  <button className="w-full py-8 bg-gold text-premium-white font-black uppercase tracking-[0.8em] text-[0.7rem] flex items-center justify-center space-x-8 hover:bg-royal-dark/40 backdrop-blur-md hover:text-premium-white transition-all shadow-2xl group/btn overflow-hidden relative">
                    <span className="relative z-10">Dispatch Dossier</span>
                    <Send size={18} className="relative z-10 group-hover/btn:translate-x-4 transition-transform duration-500" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Experience */}
      <section className="h-[500px] md:h-[600px] bg-transparent flex items-center justify-center relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-[3s] group">
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
            <img src="/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" alt="Map Overlay" />
        </div>
        <div className="relative z-10 text-center px-6">
            <span className="text-gold font-black uppercase tracking-[1em] text-[0.55rem] md:text-[0.6rem] mb-10 block">Global Headquarters</span>
            <p className="font-display italic text-white text-4xl md:text-6xl mb-12 tracking-tight">Experience the Empire</p>
            <div className="w-24 h-[1px] bg-gold/50 mx-auto" />
            <button className="mt-12 px-10 py-5 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 text-white text-[0.6rem] uppercase tracking-[0.5em] hover:bg-royal-dark/40 backdrop-blur-md hover:text-premium-white transition-all shadow-2xl">
                Secure Navigation
            </button>
        </div>
      </section>
    </div>
  );
}
