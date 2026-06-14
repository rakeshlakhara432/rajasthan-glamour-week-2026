import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
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
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-15T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

export default function Home() {
  const containerRef = useRef(null);
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
    <div className="overflow-hidden bg-[#0a0a0a]">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-110 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-[3s]"
            poster={images.hero}
          >
            <source src={images.videoPlaceholder} type="video/mp4" />
          </video>
          <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />
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
              <h1 id="hero-title" className="text-5xl sm:text-[6vw] lg:text-[4rem] xl:text-[5.5rem] font-bold mb-8 md:mb-12 leading-[0.9] tracking-tighter uppercase font-black mix-blend-difference drop-shadow-2xl">
                ROYALTY <br />
                <span className="italic font-normal text-gold block lg:inline">MEETS</span> RUNWAY
              </h1>
              
              <div className="flex flex-wrap gap-8 md:gap-16 mt-12 md:mt-20 pb-12 border-b border-white/5 lg:w-fit">
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
                <Link to="/contact" className="group px-10 py-5 bg-gold text-[#0a0a0a] font-black tracking-[0.4em] uppercase text-[0.65rem] flex items-center justify-center transition-all hover:bg-white hover:text-[#0a0a0a] shadow-2xl">
                  Register Now
                  <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={14} />
                </Link>
                <div className="flex items-center space-x-4 pl-4 border-l border-white/5">
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

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 relative bg-[#0a0a0a] overflow-hidden">
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
      {/* Fashion Week Highlights */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50/50 -z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-8 underline underline-offset-[16px] decoration-gold/20">The Archive</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none text-[#0a0a0a]">Season <br /><span className="text-gold not-italic">Highlights</span></h2>
            </div>
            <Link to="/gallery" className="mt-8 md:mt-0 px-8 py-4 border border-[#0a0a0a]/10 text-[#0a0a0a] text-[0.6rem] font-black uppercase tracking-[0.4em] hover:bg-[#0a0a0a] hover:text-white transition-all">
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
      <section className="py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
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
                className="p-12 md:p-16 border border-white/5 bg-white/5 backdrop-blur-3xl relative group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8 border border-gold/20 group-hover:bg-gold group-hover:scale-110 transition-all duration-700">
                    <role.icon size={24} className="text-gold group-hover:text-[#0a0a0a]" />
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
      <section className="py-24 bg-white relative overflow-hidden border-b border-stone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-6 block underline underline-offset-[12px] decoration-gold/20">The Guest List</span>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-[#0a0a0a]">Imperial <br />Guests</h2>
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
                <h3 className="text-2xl font-black uppercase tracking-tighter text-[#0a0a0a]">{celeb.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor/Partnership Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem] mb-4 block">Strategic Guilds</span>
            <p className="text-[#0a0a0a]/30 text-[0.55rem] font-black uppercase tracking-[0.2em]">Our Exclusive Partners</p>
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
      <section className="py-40 bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-24 border-b border-white/5 pb-12">
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
                className="group border-b border-white/5 pb-12"
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
      <section className="py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/5 pb-12">
            <div className="max-w-2xl">
              <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-8 underline underline-offset-[16px] decoration-gold/20">The Visionaries</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Architecting <br /><span className="text-gold not-italic">The Future</span></h2>
            </div>
            <div className="mt-8 md:mt-0 text-right">
                <p className="text-white/30 text-sm font-black tracking-[0.2em] uppercase">Leadership Council • 2026 Session</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* Founder */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="group relative"
            >
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <img src={images.backstage} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Founder" />
                </div>
                <div className="absolute -bottom-12 -right-12 bg-gold p-12 shadow-2xl transition-transform group-hover:-translate-y-4">
                    <p className="text-white font-black uppercase tracking-[0.4em] text-[0.6rem] mb-2">The Founder</p>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-premium-black">Prince Laxkar</h3>
                </div>
                <div className="mt-20 max-w-sm">
                    <p className="text-white/40 text-sm italic leading-relaxed">
                        Envisioning a global platform that preserves the heritage of Rajasthan while embracing contemporary high-fashion ideals.
                    </p>
                </div>
            </motion.div>

            {/* Organiser */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="group relative md:mt-40"
            >
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <img src={images.runway} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Organiser" />
                </div>
                <div className="absolute -bottom-12 -left-12 bg-white p-12 shadow-2xl transition-transform group-hover:-translate-y-4 border border-stone-100">
                    <p className="text-premium-black/40 font-black uppercase tracking-[0.4em] text-[0.6rem] mb-2">The Organiser</p>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-premium-black">Naksh Lakhara</h3>
                </div>
                <div className="mt-20 max-w-sm ml-auto text-right">
                    <p className="text-white/40 text-sm italic leading-relaxed">
                        Curating a seamless confluence of talent, resources, and royal aesthetics to execute India's most prestigious fashion week.
                    </p>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rewards & Opportunities Section */}
      <section className="py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.1),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.7rem] block mb-10 underline underline-offset-[16px] decoration-gold/20">Elite Incentives</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.85]">★ Exciting Rewards <br /><span className="text-gold font-sans not-italic">For The Winner ★</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-10 md:p-16 border border-white/5 bg-white/5 backdrop-blur-3xl relative group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="text-gold mb-8 md:mb-10 text-3xl md:text-4xl italic font-display">01</div>
                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-[0.2em]">Montrose Runway <br /> Fashion Week</h3>
                <p className="text-white/30 leading-relaxed font-light text-base md:text-lg">Direct entry to showcase on the international Montrose stage, gaining global designer exposure.</p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="p-10 md:p-16 border border-white/5 bg-white/5 backdrop-blur-3xl relative group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="text-gold mb-8 md:mb-10 text-3xl md:text-4xl italic font-display">02</div>
                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-[0.2em]">Goa Luxury <br /> Beach Experience</h3>
                <p className="text-white/30 leading-relaxed font-light text-base md:text-lg">An all-expenses-paid premium Goa trip featuring luxury stay and exclusive networking events.</p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="p-10 md:p-16 border border-white/5 bg-white/5 backdrop-blur-3xl relative group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="text-gold mb-8 md:mb-10 text-3xl md:text-4xl italic font-display">03</div>
                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-[0.2em]">Bollywood & <br /> Digital Entry</h3>
                <p className="text-white/30 leading-relaxed font-light text-base md:text-lg">Direct opportunities to work in Bollywood movies, music videos, and trending web series projects.</p>
            </motion.div>
          </div>

          <div className="mt-20 md:mt-32 p-12 md:p-24 border border-gold/20 bg-gold/5 backdrop-blur-3xl text-center relative overflow-hidden group">
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
      <section className="py-24 bg-premium-white border-y border-stone-100">
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
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-stone-50 -z-10 hidden md:block" />
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
              <p className="text-stone-500 mb-8 leading-relaxed font-light">
                Rajasthan Glamour Week is more than just a fashion show. It is a dedicated platform that bridges the gap between rural master artisans and urban global runways. We provide a space where the intricate Gota Patti, Zardosi, and Hand-block printing techniques find their voice in modern garment silhouettes.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="border-l-2 border-gold pl-6">
                  <h4 className="text-stone-950 font-bold text-2xl mb-1">50+</h4>
                  <p className="text-stone-400 text-[0.65rem] uppercase tracking-widest">Designers Showcased</p>
                </div>
                <div className="border-l-2 border-gold pl-6">
                  <h4 className="text-stone-950 font-bold text-2xl mb-1">12K+</h4>
                  <p className="text-stone-400 text-[0.65rem] uppercase tracking-widest">Annual Visitors</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-[0.65rem] font-bold tracking-[0.3em] uppercase hover:text-gold transition-colors">
                Discover Our Story <ChevronRight className="ml-2 text-gold" size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote/Trust Section - Refined with New Leadership */}
      <section className="py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
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
                <p className="text-gold uppercase tracking-[0.6em] font-black text-[0.7rem] mb-2">Prince Laxkar</p>
                <p className="text-white/20 text-[0.55rem] uppercase tracking-[0.4em] font-medium">Founder & Primary Visionary</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-[1px] bg-gold mb-6 opacity-30" />
                <p className="text-gold uppercase tracking-[0.6em] font-black text-[0.7rem] mb-2">Naksh Lakhara</p>
                <p className="text-white/20 text-[0.55rem] uppercase tracking-[0.4em] font-medium">Chief Organiser & Curator</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
