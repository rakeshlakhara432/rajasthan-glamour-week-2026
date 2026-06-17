import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

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
  "724685164_18085754561160283_2358706889935656694_n..jpg"
];

export default function ParticipateMembers() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % members.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + members.length) % members.length);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-6 block underline underline-offset-[12px] decoration-gold/20">Our Talents</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-premium-white mb-6">
            Participating <br /><span className="text-gold not-italic">Members</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Meet the exceptional individuals who bring their unique flair and charisma to Rajasthan Glamour Week 2026.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {members.map((filename, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 10) * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedIdx(idx)}
            >
              <div className="aspect-[3/4] overflow-hidden mb-4 grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 border border-gold/10 relative">
                <img 
                  src={`/rajasthan-glamour-week-2026/images/participate-members/${filename}`} 
                  alt={`Participating Member ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <Camera size={16} className="text-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedIdx(null)}
            >
              <button 
                onClick={() => setSelectedIdx(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
              >
                <X size={32} />
              </button>

              <button 
                onClick={prevImage}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50 bg-black/50 rounded-full"
              >
                <ChevronLeft size={40} />
              </button>

              <button 
                onClick={nextImage}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50 bg-black/50 rounded-full"
              >
                <ChevronRight size={40} />
              </button>

              <motion.img
                key={selectedIdx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={`/rajasthan-glamour-week-2026/images/participate-members/${members[selectedIdx]}`}
                alt={`Participating Member ${selectedIdx + 1}`}
                className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-gold/20"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
