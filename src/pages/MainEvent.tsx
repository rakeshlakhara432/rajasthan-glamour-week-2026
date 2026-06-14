import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Camera, 
  Newspaper, 
  Globe, 
  Play, 
  ArrowRight, 
  Mic2, 
  TrendingUp,
  Heart,
  Trophy,
  Activity,
  ChevronRight,
  Vote,
  Smartphone
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LiveTicker = () => {
  const updates = [
    "Next Show: Royal Indigo by Sabyasachi at 07:00 PM",
    "Celebrity Spotlight: Ananya Panday arrives at City Palace",
    "Theme Reveal: 'Desert Bloom' is the official motif for 2026",
    "Live Voting: Cast your vote for the Imperial Designer Award",
    "Venue Update: Nahargarh Fort Galaxy Lounge now open for VIPs"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % updates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gold py-3 overflow-hidden whitespace-nowrap">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white text-center flex items-center justify-center"
      >
        <Activity size={12} className="mr-3 animate-pulse" />
        {updates[index]}
      </motion.div>
    </div>
  );
};

export default function MainEvent() {
  const [votes, setVotes] = useState({ designerA: 42, designerB: 38, designerC: 20 });
  const [voted, setVoted] = useState(false);

  const images = {
    hero: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png",
    runway: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png",
    detail: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png",
    backstage: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png"
  };

  const schedule = [
    { day: "Day 01", title: "The Silk Opening", theme: "Imperial Indigo", time: "07:00 PM" },
    { day: "Day 02", title: "Desert Nomads", theme: "Sand & Gold", time: "06:30 PM" },
    { day: "Day 03", title: "Royal Regency", theme: "Zardozi Dreams", time: "08:00 PM" }
  ];

  const pressReleases = [
    { date: "Oct 10", title: "City Palace Confirmed as Venue", source: "Vogue India" },
    { date: "Oct 08", title: "Rajasthan Glamour Week sets Sustainability Record", source: "Business of Fashion" },
    { date: "Oct 05", title: "Exclusive: Leading International Models to walk for RGW", source: "Pinkvilla" }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Live Ticker */}
      <div className="pt-20">
        <LiveTicker />
      </div>

      {/* Hero: Theme Announcement */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.hero} className="w-full h-full object-cover scale-110 opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-black uppercase tracking-[1em] text-[0.6rem] mb-10 block"
            >
              The Official 2026 Theme
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-9xl font-display italic text-white leading-[0.8] tracking-tighter mb-12"
            >
              Desert <br />
              <span className="font-sans not-italic font-black text-gold uppercase tracking-[-0.05em]">Bloom</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/40 text-lg md:text-2xl font-light italic leading-relaxed max-w-2xl border-l border-gold/30 pl-10"
            >
              "Celebrating the resilience of beauty in the harshest landscapes. A tribute to the intricate flora and imperial history of the Thar."
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 flex space-x-12 text-white/20 text-[0.55rem] tracking-[0.4em] uppercase hidden lg:flex font-black vertical-text">
            <span>Scroll to Discover</span>
        </div>
      </section>

      {/* Event Overview & Calendar */}
      <section className="py-40 bg-royal-dark/40 backdrop-blur-md relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4">
              <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-8 block">Event Overview</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-premium-white mb-12">The <br /><span className="text-gold not-italic">Showdown</span></h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                Rajasthan Glamour Week (RGW) 2026 is an 8-day extravaganza featuring over 60 designers, international models, and the biggest names in Hollywood and Bollywood.
              </p>
              <div className="space-y-6">
                 <div className="flex items-center space-x-6 text-premium-white">
                    <MapPin className="text-gold" size={20} />
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.3em]">City Palace & Nahargarh Fort</span>
                 </div>
                 <div className="flex items-center space-x-6 text-premium-white">
                    <Calendar className="text-gold" size={20} />
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.3em]">Oct 15 - Oct 22, 2026</span>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-8">
               <div className="bg-transparent p-12 md:p-20 shadow-2xl skew-y-1">
                  <div className="flex justify-between items-end mb-16 border-b border-gold/10 pb-8">
                     <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Fashion Week Calendar</h3>
                     <span className="text-gold text-[0.55rem] font-black uppercase tracking-[0.4em]">Official Schedule</span>
                  </div>
                  <div className="space-y-12">
                     {schedule.map((item, idx) => (
                       <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group">
                          <div className="flex items-center space-x-8">
                             <span className="text-gold font-display italic text-4xl opacity-40 group-hover:opacity-100 transition-opacity">{item.day}</span>
                             <div>
                                <h4 className="text-white text-xl font-black uppercase tracking-tighter mb-2">{item.title}</h4>
                                <p className="text-white/30 text-[0.6rem] font-black uppercase tracking-[0.2em]">{item.theme}</p>
                             </div>
                          </div>
                          <div className="flex items-center space-x-4">
                             <Clock className="text-gold" size={14} />
                             <span className="text-white/40 text-[0.6rem] font-black uppercase tracking-[0.4em]">{item.time}</span>
                          </div>
                       </div>
                     ))}
                  </div>
                  <div className="mt-16 text-center">
                     <Link to="/events" className="inline-block py-4 px-10 border border-gold/20 text-[0.6rem] font-black uppercase tracking-[0.4em] text-white hover:bg-gold hover:text-premium-white transition-all">Full 8-Day Itinerary</Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrity & Venue Showcase */}
      <section className="py-40 bg-royal-dark/40 backdrop-blur-md border-y border-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-8">The Elite Guild</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-premium-white">Global <br /><span className="text-gold not-italic">Appearances</span></h2>
            </div>
            <p className="text-white/40 max-w-sm italic font-light text-lg mt-8 md:mt-0">
               Witness the convergence of heritage and Hollywood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="relative group overflow-hidden shadow-2xl aspect-video">
                <img src={images.runway} className="w-full h-full object-cover grayscale transition-transform duration-[3s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10">
                   <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Imperial Showcase</h3>
                   <p className="text-gold text-[0.6rem] font-black uppercase tracking-[0.4em]">Featuring Hollywood A-Listers</p>
                </div>
             </div>
             <div className="relative group overflow-hidden shadow-2xl aspect-video">
                <img src={images.backstage} className="w-full h-full object-cover grayscale transition-transform duration-[3s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10">
                   <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Backstage Access</h3>
                   <p className="text-gold text-[0.6rem] font-black uppercase tracking-[0.4em]">VIP Press Previews</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Live Features: Voting & updates */}
      <section className="py-40 bg-transparent text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] mb-10 block underline underline-offset-[16px] decoration-gold/20">Live Participation</span>
              <h2 className="text-4xl md:text-7xl font-display italic text-white tracking-tighter mb-12 leading-none">The People's <br /><span className="text-gold not-italic font-sans font-black uppercase">Imperial Vote</span></h2>
              <p className="text-white/30 text-lg italic font-light mb-12">
                 Cast your live vote for the "Emerging Visionary" of Season 2026. Your voice defines the future of desert luxury.
              </p>
              
              <div className="space-y-8">
                 {[
                   { id: 'designerA', name: 'Rohan Rathore • Eternal Sand', percent: votes.designerA },
                   { id: 'designerB', name: 'Leila Khan • Nomad Chic', percent: votes.designerB },
                   { id: 'designerC', name: 'Vikram Singh • Royal Silk', percent: votes.designerC }
                 ].map((d) => (
                   <div key={d.id} className="group">
                      <div className="flex justify-between items-center mb-4">
                         <span className="text-[0.65rem] font-black uppercase tracking-[0.2em]">{d.name}</span>
                         <span className="text-gold font-bold">{d.percent}%</span>
                      </div>
                      <button 
                        disabled={voted}
                        className="w-full h-4 bg-royal-dark/40 backdrop-blur-md/5 relative overflow-hidden"
                        onClick={() => {
                          setVoted(true);
                          // Simulating vote update
                          setVotes(prev => ({ ...prev, [d.id as keyof typeof prev]: prev[d.id as keyof typeof prev] + 1 }));
                        }}
                      >
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${d.percent}%` }}
                           className={`absolute inset-y-0 left-0 ${voted ? 'bg-gold' : 'bg-royal-dark/40 backdrop-blur-md/20 group-hover:bg-gold/50'}`}
                         />
                      </button>
                   </div>
                 ))}
                 {voted && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold text-[0.6rem] font-black uppercase tracking-[0.4em] text-center pt-8">
                       Thank you for your imperial contribution.
                    </motion.p>
                 )}
              </div>
            </div>

            <div className="space-y-12">
               <div className="flex items-center space-x-8 mb-12">
                  <div className="w-16 h-[1px] bg-gold" />
                  <span className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem]">Digital Chronicle</span>
               </div>
               
               <div className="bg-royal-dark/40 backdrop-blur-md/5 p-12 border border-gold/20 backdrop-blur-3xl">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-12">Live Feed Updates</h3>
                  <div className="space-y-12">
                    {[
                      { time: "10 mins ago", text: "Celebrity walk confirmed for the 9PM Desert Gala show." },
                      { time: "1 hour ago", text: "Limited edition RGW Collectibles now available at digital store." },
                      { time: "2 hours ago", text: "Imperial Lounge passes for Day 5 are now fully booked." }
                    ].map((update, i) => (
                      <div key={i} className="flex gap-8 group">
                         <span className="text-gold font-black uppercase tracking-[0.2em] text-[0.55rem] shrink-0 pt-1">{update.time}</span>
                         <p className="text-white/40 text-[0.75rem] uppercase tracking-[0.1em] font-black group-hover:text-white transition-colors">{update.text}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-16 py-5 border border-gold/20 text-[0.6rem] font-black uppercase tracking-[0.4em] hover:bg-royal-dark/40 backdrop-blur-md hover:text-premium-white transition-all">Launch Live Hub</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-40 bg-royal-dark/40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="mb-24 flex justify-between items-end border-b border-gold/20 pb-12">
             <div>
                <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-8">Media Archive</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-premium-white">Press <br /><span className="text-gold not-italic">Releases</span></h2>
             </div>
             <Newspaper className="text-gold opacity-20" size={64} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {pressReleases.map((press, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -10 }}
                 className="p-12 border border-gold/20 bg-royal-dark/40 backdrop-blur-md/50 hover:bg-royal-dark/40 backdrop-blur-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between min-h-[350px]"
               >
                 <div>
                    <span className="text-gold font-black uppercase tracking-[0.4em] text-[0.55rem] block mb-8">{press.date}, 2026</span>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-premium-white mb-8 leading-tight">{press.title}</h3>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-white/40 text-[0.55rem] font-black uppercase tracking-[0.2em]">{press.source}</span>
                    <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                       <ChevronRight size={14} className="text-stone-300 group-hover:text-premium-white" />
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA: App Download / Digital Sync */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
           <Smartphone className="mx-auto mb-8 text-premium-white" size={32} />
           <h4 className="text-3xl md:text-5xl font-display italic text-premium-white mb-10 tracking-tight">Sync Your Imperial Schedule</h4>
           <p className="text-premium-white/60 text-[0.65rem] font-black uppercase tracking-[0.4em] mb-12">Download the official RGW App for exclusive behind-the-scenes content.</p>
           <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-5 bg-transparent text-white text-[0.6rem] font-black uppercase tracking-[0.4em] hover:bg-royal-dark/40 backdrop-blur-md hover:text-premium-white transition-all">Apple App Store</button>
              <button className="px-12 py-5 bg-transparent text-white text-[0.6rem] font-black uppercase tracking-[0.4em] hover:bg-royal-dark/40 backdrop-blur-md hover:text-premium-white transition-all">Google Play Store</button>
           </div>
        </div>
      </section>
    </div>
  );
}
