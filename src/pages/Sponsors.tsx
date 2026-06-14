import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Shield, 
  Briefcase, 
  Zap, 
  Crown, 
  Gem, 
  Globe, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  X,
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Sponsors() {
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const tiers = [
    {
      category: "Title Sponsor",
      name: "The Imperial House",
      benefits: ["Main Stage Branding", "Global Media Cycle Priority", "Backstage Access", "Category Exclusivity"],
      icon: <Crown className="text-gold" size={32} />,
      size: "large"
    },
    {
      category: "Powered By",
      name: "Thar Digital Alliance",
      benefits: ["Strategic Mobile Integration", "Tech Activation Zone", "Livestream Credits"],
      icon: <Shield className="text-gold" size={32} />,
      size: "medium"
    },
    {
      category: "Gold Partner",
      name: "Sam Sand Resorts",
      benefits: ["Hospitality Partner", "VIP Lounge Branding", "Invitation Cycle"],
      icon: <Gem className="text-gold" size={32} />,
      size: "small"
    }
  ];

  const benefits = [
    { title: "Branding Opportunities", desc: "Immense physical and digital footprint across all 5 regal venues in Jaipur.", icon: Globe },
    { title: "Advertisement Space", desc: "Prime ad placements in the official Season 2026 Lookbook and Event App.", icon: Smartphone },
    { title: "Stage Branding", desc: "Dynamic LED visuals and physical logo placement on the Imperial Runway.", icon: Zap }
  ];

  const handleInquiry = (e: FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setShowInquiry(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen pt-24 bg-transparent">
      {/* Header */}
      <section className="py-40 bg-transparent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_70%)]" />
        <div className="container mx-auto px-6 text-center max-w-6xl relative z-10 pt-20">
          <span className="text-gold font-black uppercase tracking-[1em] text-[0.7rem] block mb-10 underline underline-offset-[16px] decoration-gold/20">Alliance Ecosystem</span>
          <h1 className="text-7xl md:text-[10rem] mb-12 uppercase font-black tracking-tighter leading-[0.85] italic">Empire <br /><span className="text-gold not-italic">Sponsors</span></h1>
          <p className="text-white/30 text-2xl leading-relaxed font-light max-w-3xl mx-auto italic mt-12">
            "Architecting synergy between heritage legacy and global commerce."
          </p>
          <div className="mt-20 flex flex-wrap justify-center gap-8">
             <button onClick={() => setShowInquiry(true)} className="px-16 py-8 bg-gold text-premium-white font-black uppercase tracking-[0.8em] text-[0.7rem] hover:bg-royal-dark/40 backdrop-blur-md transition-all shadow-2xl">
               Become a Partner
             </button>
             <button className="px-16 py-8 border border-gold/20 text-white font-black uppercase tracking-[0.8em] text-[0.7rem] hover:border-gold hover:text-gold transition-all flex items-center">
               <Download size={16} className="mr-6" /> Download Deck
             </button>
          </div>
        </div>
      </section>

      {/* Tiers Showcase */}
      <section className="py-40 bg-royal-dark/40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="mb-24 text-center">
             <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-8">Season 2026 Guild</span>
             <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-premium-white">The Imperial <br /><span className="text-gold not-italic">Roster</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {tiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`border border-gold/20 p-12 md:p-20 flex flex-col justify-between group hover:shadow-2xl transition-all duration-700 bg-royal-dark/40 backdrop-blur-md/30 ${
                  tier.size === 'large' ? 'lg:col-span-12' : 'lg:col-span-6'
                }`}
              >
                <div>
                   <div className="flex justify-between items-start mb-12">
                      <div>
                        <span className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem] block mb-4">{tier.category}</span>
                        <h3 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter text-premium-white leading-none ${tier.size === 'large' ? 'md:text-8xl' : ''}`}>{tier.name}</h3>
                      </div>
                      <div className="w-20 h-20 bg-royal-dark/40 backdrop-blur-md shadow-xl flex items-center justify-center border border-gold/20 group-hover:scale-110 transition-transform">
                        {tier.icon}
                      </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      {tier.benefits.map((b, i) => (
                        <div key={i} className="flex items-center space-x-6 text-white/60">
                           <CheckCircle2 size={16} className="text-gold shrink-0" />
                           <span className="text-[0.65rem] font-black uppercase tracking-[0.2em]">{b}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="flex justify-end">
                   <button className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white flex items-center group-hover:text-gold transition-colors">
                      Profile archive <ChevronRight size={14} className="ml-4" />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 grayscale opacity-20 hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
             {["Media Partner", "Associate", "Silver", "Tech Partner", "Travel", "Media"].map((p, i) => (
               <div key={i} className="py-12 border border-gold/20 flex items-center justify-center text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/40 italic">
                  Brand {i + 1}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-40 bg-[#0e0e0e] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {benefits.map((b, i) => (
              <div key={i} className="space-y-8 group">
                 <div className="w-16 h-16 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-premium-white transition-all">
                    <b.icon size={24} />
                 </div>
                 <h4 className="text-2xl font-black uppercase tracking-tighter italic">{b.title}</h4>
                 <p className="text-white/30 text-[0.75rem] font-black uppercase tracking-[0.1em] leading-relaxed italic">{b.desc}</p>
                 <div className="w-12 h-[1px] bg-gold/30 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Modal */}
      <AnimatePresence>
        {showInquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-transparent/98 backdrop-blur-3xl"
          >
             <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="w-full max-w-2xl bg-royal-dark/40 backdrop-blur-md p-12 md:p-24 shadow-[-40px_0_80px_rgba(212,175,55,0.1)] relative"
            >
              <button 
                onClick={() => setShowInquiry(false)}
                className="absolute top-8 right-8 text-premium-white/20 hover:text-premium-white transition-colors"
                disabled={inquirySuccess}
              >
                <X size={28} />
              </button>

              {inquirySuccess ? (
                <div className="text-center py-20">
                   <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-12">
                      <CheckCircle2 size={48} className="text-gold" />
                   </div>
                   <h3 className="text-4xl font-black uppercase tracking-tighter text-premium-white mb-8">Proposition Transmitted</h3>
                   <p className="text-white/60 italic text-xl mb-16">Our Alliance Directorate will review your brand profile and initiate contact within 48 hours for Season 2026 onboarding.</p>
                   <button onClick={() => setShowInquiry(false)} className="px-16 py-6 bg-transparent text-white font-black uppercase tracking-[0.6em] text-[0.7rem]">Done</button>
                </div>
              ) : (
                <div className="space-y-16">
                   <div>
                      <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-6">Imperial Alliance Portal</span>
                      <h3 className="text-5xl font-black uppercase tracking-tighter text-premium-white">Brand <span className="text-gold italic font-display lowercase pl-2">Inquiry</span></h3>
                   </div>

                   <form onSubmit={handleInquiry} className="space-y-10">
                      <div className="space-y-3">
                         <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Company / Brand Name</label>
                         <input required type="text" className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black" placeholder="EX: GLOBAL LUXE INC" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Brand Category</label>
                           <select className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black appearance-none">
                              <option>Luxury Lifestyle</option>
                              <option>Technology & Digital</option>
                              <option>Hospitality & Travel</option>
                              <option>Automotive</option>
                              <option>Media & Broadcast</option>
                           </select>
                        </div>
                        <div className="space-y-3">
                           <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Investment Tier</label>
                           <select className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black appearance-none">
                              <option>Title Partnership</option>
                              <option>Associate Lead</option>
                              <option>Category Partner</option>
                           </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                         <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Manifesto (Brief)</label>
                         <textarea className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black h-32 resize-none" placeholder="HOW DOES YOUR BRAND ALIGN WITH OUR HERITAGE?"></textarea>
                      </div>

                      <button type="submit" className="w-full py-8 bg-transparent text-white font-black uppercase tracking-[1em] text-[0.8rem] hover:bg-gold transition-all shadow-2xl flex items-center justify-center group">
                         Submit Proposition <ArrowRight size={20} className="ml-8 group-hover:translate-x-4 transition-transform" />
                      </button>
                   </form>
                </div>
              )}
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
