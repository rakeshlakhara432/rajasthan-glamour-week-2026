import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X, Upload, Video } from 'lucide-react';
import React, { useState, FormEvent } from 'react';

export default function Models() {
  const [showRegForm, setShowRegForm] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  const images = {
    model1: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png",
    model2: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png",
    model3: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png",
    featured: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png"
  };

  const members = [
    "713763898_18084231050160283_7783501389353645024_n..jpg",
    "713983690_18084233618160283_6107113930437736616_n..jpg",
    "714716615_18084229031160283_1404923630616934883_n..jpg",
    "714737920_18084234161160283_1941035954667678306_n..jpg",
    "714737932_18084234722160283_2098788392766831914_n..jpg",
    "714748938_18084233333160283_308155537505856214_n..jpg",
    "714759329_18084230216160283_4149130923804390072_n..jpg",
    "714773920_18084323201160283_4573542496855824090_n..jpg",
    "714822462_18084608492160283_607015030871107808_n..jpg",
    "714822499_18084232028160283_6712104928233826015_n..jpg",
    "715020302_18084238205160283_4725724166415631483_n..jpg",
    "716470704_18084081410160283_6924609008221177542_n..heic.jpg",
    "719172525_18084830597160283_3222696344912154076_n..jpg",
    "719251898_18084634361160283_6388705463344467252_n..jpg",
    "719463132_18084965339160283_3694828407693425451_n..jpg",
    "719491018_18085066931160283_1882839929496687293_n..jpg",
    "719828405_18084671213160283_3838396923776626968_n..jpg",
    "719919247_18085257110160283_5221205691948901855_n..jpg",
    "720086644_18084740177160283_5620933501686627357_n..jpg",
    "720126473_18085066490160283_6509778018986387322_n..jpg",
    "720206732_18085257215160283_4519357012034317982_n..jpg",
    "720219015_18085257140160283_1087106806644468896_n..jpg",
    "720387007_18085257119160283_4219505321127854496_n..jpg",
    "720398842_18085366397160283_7829854020945139250_n..jpg",
    "720449229_18084967784160283_4456125686465575863_n..jpg",
    "720874124_18085365545160283_2711994577341169596_n..jpg",
    "721011023_18085278902160283_4672174404623295681_n..heic.jpg",
    "721266167_18085257272160283_5716869140073855656_n..jpg",
    "721310299_18085639781160283_3114507014742182413_n..jpg",
    "721310299_18085647536160283_3824797210050577101_n..jpg",
    "721382914_18085178390160283_776753193691238350_n..jpg",
    "721625393_18085258376160283_1697078598971805942_n..jpg",
    "721816926_18085178993160283_7227395715841978318_n..jpg",
    "721950618_18085338035160283_712841465643585514_n..jpg",
    "722036687_18085670603160283_2240335323042027585_n..jpg",
    "722075470_18085878839160283_3221546905713657446_n..jpg",
    "722147546_18085500059160283_3735574124844661922_n..jpg",
    "722217854_18085890581160283_2037553242670683136_n..heic.jpg",
    "722753006_18085995584160283_7154082775302097132_n..jpg",
    "722934762_18085461977160283_2380273855003158852_n..jpg",
    "722956300_18085316687160283_2915051675724914328_n..jpg",
    "723110923_18085618238160283_6767039719693179415_n..jpg",
    "724004909_18085678529160283_7313326225199712868_n..jpg",
    "724004994_18085484819160283_4919830604172467334_n..jpg",
    "724685164_18085754561160283_2358706889935656694_n..jpg",
  ];

  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const nextMember = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedMember !== null) setSelectedMember((selectedMember + 1) % members.length);
  };
  const prevMember = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedMember !== null) setSelectedMember((selectedMember - 1 + members.length) % members.length);
  };

  const handleRegistration = (e: FormEvent) => {
    e.preventDefault();
    setRegSuccess(true);
  };

  return (
    <div className="min-h-screen pt-24 bg-transparent">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.model3} className="w-full h-full object-cover grayscale opacity-30 scale-110" alt="Models Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-gold font-black uppercase tracking-[1em] text-[0.6rem] mb-12 block underline underline-offset-[16px] decoration-gold/20">Elite Talent Guild</span>
            <h1 className="text-6xl md:text-9xl text-white font-black tracking-tighter uppercase leading-[0.8] italic mb-12">
              Imperial <br /><span className="text-gold not-italic">Profiles</span>
            </h1>
            <div className="flex flex-wrap gap-8">
              <button 
                onClick={() => setShowRegForm(true)}
                className="px-12 py-6 bg-gold text-premium-white font-black uppercase tracking-[0.6em] text-[0.7rem] hover:bg-royal-dark/40 backdrop-blur-md transition-all shadow-2xl"
              >
                Join Casting
              </button>
              <button className="px-12 py-6 border border-gold/20 text-white font-black uppercase tracking-[0.6em] text-[0.7rem] hover:border-gold hover:text-gold transition-all">
                Agency Portal
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Participating Members Gallery */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-6 block underline underline-offset-[12px] decoration-gold/20">The Talents</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-premium-white">Participating <br />Members</h2>
            <p className="text-white/30 mt-6 font-light text-lg">{members.length} Selected Talents — Season 2026</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {members.map((filename, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="group cursor-pointer relative"
                onClick={() => setSelectedMember(idx)}
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-gold/10 group-hover:border-gold/50 transition-all duration-500 bg-black">
                  <img
                    src={`/rajasthan-glamour-week-2026/images/participate-members/${filename}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                    loading="lazy"
                    alt={`Member ${idx + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-gold text-[0.5rem] font-black uppercase tracking-[0.3em]">View Photo</span>
                  </div>
                </div>
                <div className="absolute -bottom-3 inset-x-2 h-8 bg-gold/10 blur-xl -z-10 group-hover:bg-gold/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Lightbox */}
      <AnimatePresence>
        {selectedMember !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/96 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selectedMember}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={`/rajasthan-glamour-week-2026/images/participate-members/${members[selectedMember]}`}
                alt={`Member ${selectedMember + 1}`}
                className="max-w-[85vw] max-h-[80vh] object-contain shadow-2xl border-2 border-gold/30 rounded-lg"
              />
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedMember(null); }}
                className="absolute -top-5 -right-5 md:-top-6 md:-right-6 text-white z-[110] flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full border-2 border-white/50 hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              >
                <span className="text-[0.6rem] font-black uppercase tracking-[0.2em]">Close</span>
                <X size={20} strokeWidth={3} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gold/60 text-[0.6rem] font-black uppercase tracking-[0.3em]">
                {selectedMember + 1} / {members.length}
              </div>
            </div>
            <button
              onClick={prevMember}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-[110] bg-black/50 rounded-full border border-white/10"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={nextMember}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-[110] bg-black/50 rounded-full border border-white/10"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Registration Form Modal */}
      <AnimatePresence>
        {showRegForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-transparent/98 backdrop-blur-3xl"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="w-full max-w-3xl bg-royal-dark/40 backdrop-blur-md p-12 md:p-20 shadow-[-40px_0_80px_rgba(212,175,55,0.1)] relative"
            >
              <button 
                onClick={() => setShowRegForm(false)}
                className="absolute top-8 right-8 text-premium-white/40 hover:text-premium-white transition-colors"
                disabled={regSuccess}
              >
                <X size={24} />
              </button>

              {regSuccess ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-10">
                    <CheckCircle size={48} className="text-gold" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-premium-white mb-6">Talent Transmitted</h3>
                  <p className="text-white/60 italic text-xl mb-12">Your profile is now under review by our imperial board. Expect a response within 96 hours.</p>
                  <button onClick={() => setShowRegForm(false)} className="px-16 py-6 bg-transparent text-white font-black uppercase tracking-[0.6em] text-[0.7rem]">Back to Hub</button>
                </div>
              ) : (
                <div className="space-y-12">
                   <div>
                      <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-6">Season 2026 Talent Search</span>
                      <h3 className="text-4xl font-black uppercase tracking-tighter text-premium-white">Casting <span className="text-gold italic font-display lowercase pl-2">application</span></h3>
                   </div>

                   <form onSubmit={handleRegistration} className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Full Name</label>
                           <input required type="text" className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black" placeholder="EX: ANANYA RAO" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Category</label>
                           <select className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black appearance-none">
                              <option>Female Portfolio</option>
                              <option>Male Portfolio</option>
                              <option>Kids Portfolio</option>
                           </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="space-y-3">
                            <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Height (CM)</label>
                            <input required type="text" className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black" placeholder="178" />
                         </div>
                         <div className="space-y-3">
                            <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Bust/Chest</label>
                            <input required type="text" className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black" placeholder="34" />
                         </div>
                         <div className="space-y-3">
                            <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Waist</label>
                            <input required type="text" className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black" placeholder="24" />
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border-2 border-dashed border-stone-200 hover:border-gold transition-colors text-center cursor-pointer group">
                           <Upload size={24} className="mx-auto mb-4 text-stone-300 group-hover:text-gold" />
                           <p className="text-[0.55rem] font-black uppercase tracking-[0.4em] text-white/40">Portfolio PDF (MAX 50MB)</p>
                        </div>
                        <div className="p-8 border-2 border-dashed border-stone-200 hover:border-gold transition-colors text-center cursor-pointer group">
                           <Video size={24} className="mx-auto mb-4 text-stone-300 group-hover:text-gold" />
                           <p className="text-[0.55rem] font-black uppercase tracking-[0.4em] text-white/40">Walk Video Link / Upload</p>
                        </div>
                      </div>

                      <button type="submit" className="w-full py-8 bg-transparent text-white font-black uppercase tracking-[1em] text-[0.8rem] hover:bg-gold transition-all shadow-2xl">
                        Finalize Submission
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
