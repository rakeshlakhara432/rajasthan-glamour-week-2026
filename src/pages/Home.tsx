import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  X, 
  Star, 
  Quote, 
  Clock, 
  Users, 
  Award, 
  TrendingUp, 
  Monitor, 
  Calendar, 
  Newspaper,
  Camera,
  Heart,
  Globe,
  Briefcase,
  Play
} from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-06-24T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setIsEnded(true);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isEnded) {
    return (
      <div className="flex flex-col items-center text-center animate-pulse py-4">
        <span className="text-lg md:text-2xl font-black text-premium-white uppercase tracking-[0.3em] mb-2">Welcome to</span>
        <span className="text-4xl md:text-6xl font-display italic text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">Rajasthan Glamour Week 2026</span>
      </div>
    );
  }

  return (
    <div className="flex space-x-4 md:space-x-8">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hrs', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Sec', value: timeLeft.seconds }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none mb-1">
            {item.value < 10 ? `0${item.value}` : item.value}
          </span>
          <span className="text-[0.55rem] uppercase tracking-[0.4em] text-gold font-bold">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const participateMembers = [
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

export default function Home() {
  const containerRef = useRef(null);
  const [selectedChiefGuestIdx, setSelectedChiefGuestIdx] = useState<number | null>(null);
  const chiefGuests = [
    "722447683_18032844623814341_5987592676423805600_n..jpg",
    "724045546_18085586246160283_5745320394201265792_n..jpg",
    "724257137_18085791458160283_2617155941372785964_n..jpg"
  ];

  const nextChiefGuest = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedChiefGuestIdx !== null) {
      setSelectedChiefGuestIdx((selectedChiefGuestIdx + 1) % chiefGuests.length);
    }
  };

  const prevChiefGuest = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedChiefGuestIdx !== null) {
      setSelectedChiefGuestIdx((selectedChiefGuestIdx - 1 + chiefGuests.length) % chiefGuests.length);
    }
  };

  const [selectedMemberIdx, setSelectedMemberIdx] = useState<number | null>(null);

  const nextMember = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedMemberIdx !== null) {
      setSelectedMemberIdx((selectedMemberIdx + 1) % participateMembers.length);
    }
  };

  const prevMember = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedMemberIdx !== null) {
      setSelectedMemberIdx((selectedMemberIdx - 1 + participateMembers.length) % participateMembers.length);
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const images = {
    hero: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png",
    runway: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png",
    detail: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png",
    backstage: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png",
    videoPlaceholder: "https://assets.mixkit.co/videos/preview/mixkit-fashion-show-on-the-runway-12561-large.mp4"
  };

  const highlights = [
    { title: "Imperial Silk Showcase", category: "Runway", image: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png" },
    { title: "Desert Twilight Gala", category: "Gala", image: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png" },
    { title: "Backstage Secrets", category: "Behind the Scenes", image: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png" }
  ];

  const celebrities = [
    { name: "Ananya Sharma", role: "Showstopper", image: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png" },
    { name: "Vikram Rathore", role: "Guest of Honor", image: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png" },
    { name: "Sanya Gupta", role: "Global Influencer", image: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png" }
  ];

  return (
    <div className="overflow-hidden bg-transparent">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0 group">
          <img 
            src={images.hero}
            alt="Rajasthan Glamour Week 2026"
            className="w-full h-full object-cover scale-110 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-[3s]"
          />
          <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-b from-[#030105]/80 via-transparent to-[#030105]" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 pt-32 md:pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-8 text-white"
            >
              <span className="text-gold font-black uppercase tracking-[1em] text-[0.6rem] mb-8 block">Inaugural Phase • October 2026</span>
              <h1 id="hero-title" className="text-5xl sm:text-[6vw] lg:text-[4rem] xl:text-[5.5rem] font-bold mb-4 md:mb-6 leading-[0.9] tracking-tighter uppercase font-black mix-blend-difference drop-shadow-2xl">
                ROYALTY <br />
                <span className="italic font-normal text-gold block lg:inline">MEETS</span> RUNWAY
              </h1>
              <p className="text-2xl md:text-4xl text-premium-white font-light tracking-[0.2em] mb-8 md:mb-12 uppercase drop-shadow-lg">
                Rajasthan Glamour Week 2026
              </p>
              
              <div className="flex flex-wrap gap-8 md:gap-16 mt-12 md:mt-20 lg:w-fit glass-panel rounded-3xl p-6 md:p-10 border border-white/10 glass-panel-hover">
                <div className="space-y-4">
                  <p className="text-[0.55rem] font-black uppercase tracking-[0.6em] text-white/20">The Countdown</p>
                  <CountdownTimer />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="lg:col-span-4 lg:mb-12"
            >
              <p className="text-white/30 text-lg leading-relaxed font-light mb-12 italic border-l border-gold/50 pl-8">
                "Behold the intersection of ancient heritage and modern global couture."
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/contact" className="group px-10 py-5 bg-gold text-premium-white font-black tracking-[0.4em] uppercase text-[0.65rem] flex items-center justify-center transition-all hover:bg-royal-dark/40 backdrop-blur-md hover:text-premium-white shadow-2xl">
                  Register Now
                  <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={14} />
                </Link>
                <div className="flex items-center space-x-4 pl-4 border-l border-gold/10">
                   <Play size={16} className="text-gold fill-gold" />
                   <span className="text-[0.55rem] uppercase tracking-[0.2em] font-black text-white/50">View Trailer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 flex space-x-12 text-white/20 text-[0.55rem] tracking-[0.4em] uppercase hidden lg:flex font-black vertical-text">
            <span>Scroll to Explore</span>
        </div>
      </section>

      {/* Event Banner Section */}
      <section className="py-12 bg-transparent border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="w-full overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="/rajasthan-glamour-week-2026/images/event_banner.jpg" 
              alt="Rajasthan Glamour Week Event Banner"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-gold/10 relative bg-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {[
              { label: "Elite Designers", value: "60+", icon: Award },
              { label: "Global Brands", value: "25+", icon: Globe },
              { label: "Elite Models", value: "150+", icon: Camera },
              { label: "VIP Visitors", value: "12K+", icon: Users }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-center space-x-5 mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                  <stat.icon size={16} className="text-gold" />
                  <span className="text-[0.6rem] font-black uppercase tracking-[0.4em]">{stat.label}</span>
                </div>
                <h4 className="text-4xl md:text-5xl font-black tracking-tighter text-white group-hover:text-gold transition-colors">{stat.value}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Special Chief Guest Section */}
      <section className="py-24 bg-transparent relative overflow-hidden border-b border-gold/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-6 block underline underline-offset-[12px] decoration-gold/20">Special Dignitaries</span>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-premium-white">Chief <br />Guests</h2>
          </div>

          <div className="flex flex-nowrap overflow-x-auto gap-8 pb-12 no-scrollbar">
            {chiefGuests.map((filename, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-[280px] md:w-[350px] group cursor-pointer"
                onClick={() => setSelectedChiefGuestIdx(idx)}
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-xl border border-white/10">
                    <img src={`/rajasthan-glamour-week-2026/images/special-chief-guest/${filename}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedChiefGuestIdx !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setSelectedChiefGuestIdx(null)}
              >
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <motion.img
                    key={selectedChiefGuestIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    src={`/rajasthan-glamour-week-2026/images/special-chief-guest/${chiefGuests[selectedChiefGuestIdx]}`}
                    alt={`Chief Guest ${selectedChiefGuestIdx + 1}`}
                    className="max-w-[85vw] max-h-[80vh] object-contain shadow-2xl border-2 border-gold/30 rounded-lg relative z-40"
                  />

                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedChiefGuestIdx(null); }}
                    className="absolute -top-5 -right-5 md:-top-6 md:-right-6 text-white transition-colors z-[110] flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full border-2 border-white/50 hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                  >
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.2em]">Close</span>
                    <X size={20} strokeWidth={3} />
                  </button>
                </div>

                <button 
                  onClick={prevChiefGuest}
                  className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-[110] bg-black/50 rounded-full border border-white/10"
                >
                  <ChevronLeft size={40} />
                </button>

                <button 
                  onClick={nextChiefGuest}
                  className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-[110] bg-black/50 rounded-full border border-white/10"
                >
                  <ChevronRight size={40} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Participating Members Slider Section */}
      <section className="py-24 glass-panel rounded-3xl relative overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
             <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-6 block underline underline-offset-[12px] decoration-gold/20">The Talents</span>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-premium-white">Participating <br />Members</h2>
          </div>

          <div className="flex flex-nowrap overflow-x-auto gap-6 pb-16 pt-8 px-4 no-scrollbar snap-x snap-mandatory">
            {participateMembers.map((filename, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15, rotate: 0, scale: 1.05 }}
                initial={{ rotate: idx % 2 === 0 ? 2 : -2 }}
                className="flex-shrink-0 w-[180px] md:w-[240px] snap-center group cursor-pointer relative"
                onClick={() => setSelectedMemberIdx(idx)}
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/10 relative z-10 group-hover:border-gold/40 transition-colors duration-500 bg-black">
                    <img 
                      src={`/rajasthan-glamour-week-2026/images/participate-members/${filename}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                      loading="lazy"
                      alt={`Member ${idx + 1}`}
                    />
                </div>
                <div className="absolute -bottom-4 inset-x-4 h-12 bg-gold/10 blur-xl -z-10 group-hover:bg-gold/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedMemberIdx !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setSelectedMemberIdx(null)}
              >
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <motion.img
                    key={selectedMemberIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    src={`/rajasthan-glamour-week-2026/images/participate-members/${participateMembers[selectedMemberIdx]}`}
                    alt={`Member ${selectedMemberIdx + 1}`}
                    className="max-w-[85vw] max-h-[80vh] object-contain shadow-2xl border-2 border-gold/30 rounded-lg relative z-40"
                  />

                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedMemberIdx(null); }}
                    className="absolute -top-5 -right-5 md:-top-6 md:-right-6 text-white transition-colors z-[110] flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full border-2 border-white/50 hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                  >
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.2em]">Close</span>
                    <X size={20} strokeWidth={3} />
                  </button>
                </div>

                <button 
                  onClick={prevMember}
                  className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-[110] bg-black/50 rounded-full border border-white/10"
                >
                  <ChevronLeft size={40} />
                </button>

                <button 
                  onClick={nextMember}
                  className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-[110] bg-black/50 rounded-full border border-white/10"
                >
                  <ChevronRight size={40} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Fashion Week Highlights */}
      <section className="py-40 glass-panel rounded-[3rem] relative overflow-hidden mx-4 my-12 shadow-[0_0_50px_rgba(229,193,88,0.05)]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 backdrop-blur-md/50 -z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-8 underline underline-offset-[16px] decoration-gold/20">The Archive</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none text-premium-white">Season <br /><span className="text-gold not-italic">Highlights</span></h2>
            </div>
            <Link to="/gallery" className="mt-8 md:mt-0 px-8 py-4 border border-[#0a0a0a]/10 text-premium-white text-[0.6rem] font-black uppercase tracking-[0.4em] hover:bg-transparent hover:text-white transition-all">
                Full Collection
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer relative aspect-[4/5] overflow-hidden shadow-2xl"
              >
                <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-x-8 bottom-8">
                    <span className="text-gold font-black uppercase tracking-[0.4em] text-[0.55rem] block mb-2">{item.category}</span>
                    <h3 className="text-2xl font-display italic text-white leading-tight">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement - Participants CTA */}
      <section className="py-40 bg-transparent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-10 block">Empire Alliance</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Join The <br /><span className="text-gold not-italic">Sovereign movement</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { label: "Designer", sub: "Master Couturier", icon: Briefcase, color: "gold" },
              { label: "Model", sub: "Empire Face", icon: Camera, color: "white" },
              { label: "Influencer", sub: "Digital Dignitary", icon: TrendingUp, color: "gold" }
            ].map((role, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="p-12 md:p-16 border border-white/10 glass-panel rounded-3xl relative group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:bg-gold group-hover:scale-110 transition-all duration-700">
                    <role.icon size={24} className="text-gold group-hover:text-premium-white" />
                </div>
                <h3 className="text-[0.6rem] font-black uppercase tracking-[0.6em] text-white/30 mb-2">{role.sub}</h3>
                <h4 className="text-3xl font-black uppercase tracking-tighter mb-10">{role.label}</h4>
                <Link to="/contact" className="inline-block py-4 px-8 border border-white/10 text-[0.6rem] font-black uppercase tracking-[0.4em] hover:bg-gold hover:border-gold transition-all">Apply Now</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrity Guest Showcase */}
      <section className="py-24 glass-panel rounded-[3rem] relative overflow-hidden border border-white/10 mx-4 my-12 shadow-[0_0_50px_rgba(229,193,88,0.05)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-6 block underline underline-offset-[12px] decoration-gold/20">The Guest List</span>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-premium-white">Imperial <br />Guests</h2>
          </div>

          <div className="flex flex-nowrap overflow-x-auto gap-8 pb-12 no-scrollbar">
            {celebrities.map((celeb, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-[280px] md:w-[350px] group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-xl">
                    <img src={celeb.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <span className="text-gold font-black uppercase tracking-[0.3em] text-[0.55rem] block mb-1">{celeb.role}</span>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-premium-white">{celeb.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor/Partnership Section */}
      <section className="py-24 glass-panel rounded-[3rem] mx-4 my-12 shadow-[0_0_50px_rgba(229,193,88,0.05)] border border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem] mb-4 block">Strategic Guilds</span>
            <p className="text-premium-white/30 text-[0.55rem] font-black uppercase tracking-[0.2em]">Our Exclusive Partners</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-40 grayscale">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                 <div className="h-8 w-32 bg-stone-300 rounded animate-pulse" />
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link to="/contact" className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-gold border-b border-gold/30 pb-2 hover:border-gold transition-all">Inquire For Partnership</Link>
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-40 bg-transparent text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-24 border-b border-gold/10 pb-12">
            <div>
              <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-8">The Chronicle</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Latest <br /><span className="text-gold not-italic">Updates</span></h2>
            </div>
            <div className="hidden md:block">
               <Newspaper className="text-gold opacity-20" size={48} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {[
              { date: "Oct 20, 2026", title: "Jaipur Palace Confirmed as Official Venue", desc: "The historic City Palace will host the grand finale of Season 2026.", cat: "Logistics" },
              { date: "Oct 12, 2026", title: "Global Designer Residency Open", desc: "Applications are now live for our prestigious international designer exchange program.", cat: "Opportunity" }
            ].map((news, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group border-b border-gold/10 pb-12"
              >
                <div className="flex items-center space-x-6 mb-6">
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-gold">{news.date}</span>
                    <span className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-white/20 border border-white/10 px-3 py-1">{news.cat}</span>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-gold transition-colors">{news.title}</h3>
                <p className="text-white/30 font-light italic leading-relaxed text-lg mb-8">{news.desc}</p>
                <div className="flex items-center text-[0.6rem] font-black tracking-[0.4em] uppercase text-white/50 group-hover:text-gold transition-colors">
                    Read Report <ArrowRight size={12} className="ml-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - The Visionaries */}
      <section className="py-40 bg-transparent text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-gold/10 pb-12">
            <div className="max-w-2xl">
              <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-8 underline underline-offset-[16px] decoration-gold/20">The Visionaries</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Architecting <br /><span className="text-gold not-italic">The Future</span></h2>
            </div>
            <div className="mt-8 md:mt-0 text-right">
                <p className="text-white/30 text-sm font-black tracking-[0.2em] uppercase">Leadership Council • 2026 Session</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* Organiser */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="group relative"
            >
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <img src={images.runway} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Organiser" />
                </div>
                <div className="absolute -bottom-12 -right-12 bg-gold p-12 shadow-2xl transition-transform group-hover:-translate-y-4">
                    <p className="text-white font-black uppercase tracking-[0.4em] text-[0.6rem] mb-2">The Organiser</p>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-premium-white">Naksh Lakhara</h3>
                </div>
                <div className="mt-20 max-w-sm">
                    <p className="text-white/40 text-sm italic leading-relaxed">
                        Curating a seamless confluence of talent, resources, and royal aesthetics to execute India's most prestigious fashion week.
                    </p>
                </div>
            </motion.div>

            {/* Founder */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="group relative md:mt-40"
            >
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <img src={images.backstage} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Founder" />
                </div>
                <div className="absolute -bottom-12 -left-12 bg-royal-dark/40 backdrop-blur-md p-12 shadow-2xl transition-transform group-hover:-translate-y-4 border border-white/10">
                    <p className="text-premium-white/40 font-black uppercase tracking-[0.4em] text-[0.6rem] mb-2">The Founder</p>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-premium-white">Prince Laxkar</h3>
                </div>
                <div className="mt-20 max-w-sm ml-auto text-right">
                    <p className="text-white/40 text-sm italic leading-relaxed">
                        Envisioning a global platform that preserves the heritage of Rajasthan while embracing contemporary high-fashion ideals.
                    </p>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rewards & Opportunities Section */}
      <section className="py-40 bg-transparent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.1),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.7rem] block mb-10 underline underline-offset-[16px] decoration-gold/20">Elite Incentives</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12">★ Exciting Rewards <br /><span className="text-gold font-sans not-italic">For The Winner ★</span></h2>
            <div className="max-w-4xl mx-auto p-8 border border-gold/30 bg-gold/5 backdrop-blur-md rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.1)]">
               <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                 इस कार्यक्रम के विजेताओं को भी बेहतरीन अवसर प्रदान किए जाएंगे, जिनमें मोंट्रोस रनवे फैशन शो गोवा में भाग लेने का मौका, Goa Trip, Media Coverage, Industry Connections तथा Bollywood Movie, Song और Web Series में काम करने का मौका देंगे ।।
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-10 md:p-16 border border-white/10 glass-panel rounded-3xl relative group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="text-gold mb-8 md:mb-10 text-3xl md:text-4xl italic font-display">01</div>
                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-[0.2em]">Montrose Runway <br /> Fashion Week</h3>
                <p className="text-white/30 leading-relaxed font-light text-base md:text-lg">Direct entry to showcase on the international Montrose stage, gaining global designer exposure.</p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="p-10 md:p-16 border border-white/10 glass-panel rounded-3xl relative group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="text-gold mb-8 md:mb-10 text-3xl md:text-4xl italic font-display">02</div>
                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-[0.2em]">Goa Luxury <br /> Beach Experience</h3>
                <p className="text-white/30 leading-relaxed font-light text-base md:text-lg">An all-expenses-paid premium Goa trip featuring luxury stay and exclusive networking events.</p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="p-10 md:p-16 border border-white/10 glass-panel rounded-3xl relative group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="text-gold mb-8 md:mb-10 text-3xl md:text-4xl italic font-display">03</div>
                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-[0.2em]">Bollywood & <br /> Digital Entry</h3>
                <p className="text-white/30 leading-relaxed font-light text-base md:text-lg">Direct opportunities to work in Bollywood movies, music videos, and trending web series projects.</p>
            </motion.div>
          </div>

          <div className="mt-20 md:mt-32 p-12 md:p-24 border border-white/10 bg-gold/5 backdrop-blur-3xl text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold/5 blur-[100px] -z-10" />
            <h4 className="text-2xl md:text-5xl font-display italic text-white mb-12 md:mb-16 tracking-tight">The Gateway to Industry Stardom</h4>
            <div className="flex flex-wrap justify-center gap-8 md:gap-24">
                <div className="flex flex-col items-center">
                    <span className="text-gold font-black text-xl md:text-2xl uppercase tracking-tighter mb-2">Talent Hunt</span>
                    <span className="text-[0.55rem] text-white/30 tracking-[0.4em] uppercase">Phase 2026</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gold font-black text-xl md:text-2xl uppercase tracking-tighter mb-2">Industry Connect</span>
                    <span className="text-[0.55rem] text-white/30 tracking-[0.4em] uppercase">Network Exposure</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gold font-black text-xl md:text-2xl uppercase tracking-tighter mb-2">Media Coverage</span>
                    <span className="text-[0.55rem] text-white/30 tracking-[0.4em] uppercase">Global Press</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gold font-black text-xl md:text-2xl uppercase tracking-tighter mb-2">Awards</span>
                    <span className="text-[0.55rem] text-white/30 tracking-[0.4em] uppercase">Recognition</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 glass-panel rounded-[3rem] mx-4 my-12 shadow-[0_0_50px_rgba(229,193,88,0.05)] border border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                <img 
                  src={images.detail} 
                  alt="Traditional Craft Detail" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-royal-dark/40 backdrop-blur-md -z-10 hidden md:block" />
              <div className="absolute -top-12 -left-12 font-display text-[10rem] text-stone-100/50 leading-none -z-10 select-none">
                ROYAL
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[0.65rem] block mb-4">The Essence of Style</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Elevating Traditional Artistry to New Horizons</h2>
              <p className="text-white/60 mb-8 leading-relaxed font-light">
                Rajasthan Glamour Week is more than just a fashion show. It is a dedicated platform that bridges the gap between rural master artisans and urban global runways. We provide a space where the intricate Gota Patti, Zardosi, and Hand-block printing techniques find their voice in modern garment silhouettes.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="border-l-2 border-gold pl-6">
                  <h4 className="text-gold font-bold text-2xl mb-1">50+</h4>
                  <p className="text-white/40 text-[0.65rem] uppercase tracking-widest">Designers Showcased</p>
                </div>
                <div className="border-l-2 border-gold pl-6">
                  <h4 className="text-gold font-bold text-2xl mb-1">12K+</h4>
                  <p className="text-white/40 text-[0.65rem] uppercase tracking-widest">Annual Visitors</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-[0.65rem] font-bold tracking-[0.3em] uppercase hover:text-gold transition-colors">
                Discover Our Story <ChevronRight className="ml-2 text-gold" size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Guilds / Partners Section */}
      <section className="py-32 bg-[#0a0a0a] border-y border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center mb-20">
          <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] mb-6 block underline underline-offset-[12px] decoration-gold/20">Our Exclusive Partners</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-premium-white">Strategic <br /><span className="text-gold not-italic">Guilds</span></h2>
        </div>

        <div className="container mx-auto px-6 mb-24 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-1000">
               {['VOGUE INDIA', 'SABYASACHI', 'GQ MAGAZINE', 'TAJ HOTELS', 'MANISH MALHOTRA'].map((partner, idx) => (
                 <div key={idx} className="p-4 group cursor-pointer text-center">
                    <span className="text-xl md:text-2xl font-display text-white/50 group-hover:text-gold transition-colors duration-500 tracking-widest uppercase block">{partner}</span>
                    <div className="w-0 h-[1px] bg-gold mx-auto mt-2 group-hover:w-full transition-all duration-500" />
                 </div>
               ))}
            </div>
        </div>

        <div className="flex justify-center relative z-10">
          <Link to="/contact" className="group flex items-center gap-6 bg-royal-dark/80 backdrop-blur-md px-10 py-5 border-2 border-gold/30 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 rounded-sm">
             <span className="text-[0.65rem] font-black uppercase tracking-[0.5em] text-white group-hover:text-gold transition-colors">Inquire For Partnership</span>
             <ChevronRight size={18} className="text-gold group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Quote/Trust Section - Refined with New Leadership */}
      <section className="py-40 bg-transparent text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0%,transparent_70%)]" />
        <Quote className="absolute top-10 right-10 text-white/5" size={250} />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} fill="#D4AF37" color="#D4AF37" className="mx-1" size={16} />
            ))}
          </div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-6xl font-display italic mb-20 max-w-5xl mx-auto leading-tight font-light"
          >
            "Fashion is the most potent teller of tradition. We don't just host a show; we preserve the soul of an empire through every stitch."
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
                <div className="w-16 h-[1px] bg-gold mb-6 opacity-30" />
                <p className="text-gold uppercase tracking-[0.6em] font-black text-[0.7rem] mb-2">Naksh Lakhara</p>
                <p className="text-white/20 text-[0.55rem] uppercase tracking-[0.4em] font-medium">Chief Organiser & Curator</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-[1px] bg-gold mb-6 opacity-30" />
                <p className="text-gold uppercase tracking-[0.6em] font-black text-[0.7rem] mb-2">Prince Laxkar</p>
                <p className="text-white/20 text-[0.55rem] uppercase tracking-[0.4em] font-medium">Founder & Primary Visionary</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
