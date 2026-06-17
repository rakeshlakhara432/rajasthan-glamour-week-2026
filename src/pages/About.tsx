import { motion } from 'motion/react';
import { Target, Users, Gem, ShieldCheck, Star, History, Award, Globe, Clock, Trophy, CheckCircle, Briefcase, Camera, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const images = {
    backstage: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png",
    detail: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png",
    hero: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png",
    runway: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png"
  };

  const timeline = [
    { year: "2018", title: "The Foundation", desc: "Initially conceived as a local artisan showcase in the heart of Jaipur's Pink City." },
    { year: "2020", title: "Digital Awakening", desc: "Pioneered virtual runway experiences during global lockdowns, reaching 1M+ live viewers." },
    { year: "2023", title: "Imperial Expansion", desc: "First cross-border collaboration with European luxury houses established." },
    { year: "2026", title: "The Sovereign Era", desc: "Setting the new world standard for cultural haute couture at the City Palace." }
  ];

  const benefits = [
    {
      title: "For Designers",
      icon: <Gem size={24} />,
      items: ["Global Media Exposure", "Direct Buyer Networking", "Boutique Retail Partnerships", "Portfolio Documentation"]
    },
    {
      title: "For Models",
      icon: <Camera size={24} />,
      items: ["International Agency Scouting", "Professional High-Fashion Portfolio", "Runway Experience", "Brand Collaboration Leads"]
    },
    {
      title: "For Sponsors",
      icon: <Target size={24} />,
      items: ["Elite Demographic Reach", "Brand Synergy with Luxury", "Strategic Product Placement", "VIP Hospitality Access"]
    }
  ];

  const team = [
    { name: "Naksh Lakhara", role: "Organiser & Director", image: images.runway },
    { name: "Prince Laxkar", role: "Founder & Visionary", image: images.backstage },
    { name: "Sanya Rathore", role: "Head of Curation", image: images.detail },
    { name: "Vikram Singh", role: "Technical Director", image: images.hero }
  ];

  return (
    <div className="min-h-screen pt-24 bg-transparent">
      {/* Editorial Hero */}
      <section className="relative h-[80vh] flex flex-col md:flex-row overflow-hidden bg-transparent">
        <div className="w-full md:w-1/2 h-full relative order-2 md:order-1">
          <img 
            src={images.hero} 
            alt="Rajasthan Glamour Week Hero" 
            className="w-full h-full object-cover opacity-50 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-12 md:p-24 order-1 md:order-2 bg-transparent relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[120px]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-xl relative z-10"
          >
            <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] mb-10 block underline underline-offset-[16px] decoration-gold/20">The Vision</span>
            <h1 className="text-4xl md:text-6xl text-white mb-12 leading-[0.8] tracking-tighter uppercase font-black mix-blend-difference">
              ROYAL <br />
              <span className="text-gold italic font-normal">LEGACY</span> <br />
              REBORN
            </h1>
            <p className="text-white font-black uppercase tracking-[0.4em] text-[0.65rem] leading-relaxed mb-8 opacity-80">
              A Grand Celebration of Fashion, <br />
              Talent and Culture from the <br />
              Heart of Rajasthan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-40 bg-royal-dark/40 backdrop-blur-md relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-8 block">Our Story</span>
              <h2 className="text-4xl md:text-7xl font-display italic leading-none mb-12 text-premium-white tracking-tighter">Crafting a <br /><span className="font-sans not-italic font-black text-gold uppercase">Sovereign Story</span></h2>
              <div className="space-y-8 text-white/60 text-lg md:text-xl font-light leading-relaxed mb-16 border-l-4 border-gold/10 pl-10">
                <p>
                  Rajasthan Glamour Week emerged not as a simple event, but as a response to the quiet disappearance of ancestral craft. We observed as the intricate Zardozi and royal leheriyas were being relegated to memory, rather than the global runway.
                </p>
                <p>
                  Founded in Jaipur, our organization serves as the bridge between the heritage-soaked streets of Rajasthan and the high-fashion districts of Paris and Milan. We curate experiences that celebrate the intersection of imperial history and contemporary haute couture.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] overflow-hidden shadow-2xl relative">
                <img src={images.detail} className="w-full h-full object-cover grayscale" alt="Craft Detail" />
                <div className="absolute inset-0 bg-gold/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-transparent p-12 shadow-2xl border border-gold/20">
                <span className="text-gold text-5xl font-display italic">Inception</span>
                <p className="text-white font-black uppercase tracking-[0.4em] text-[0.6rem] mt-4">Jaipur • Since 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-royal-dark/40 backdrop-blur-md border-y border-gold/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
             <div className="space-y-8">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                    <Target className="text-gold" size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-premium-white">The Mission</h3>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                    To provide a global stage for Rajasthan's imperial craftsmanship, empowering local artisans through international luxury exposure and sustainable fashion practices.
                </p>
             </div>
             <div className="space-y-8">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                    <Globe className="text-gold" size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-premium-white">The Vision</h3>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                    To be recognized as the world's premier cultural fashion hub, where the legacy of empires inspires the global vanguard of innovative couture.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-40 bg-[#0e0e0e] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 lg:gap-40">
            {/* Director Message */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-12"
            >
              <div className="w-32 h-[1px] bg-gold mb-12" />
              <Quote className="text-gold opacity-20" size={64} />
              <h3 className="text-3xl md:text-5xl font-display italic text-white tracking-tight leading-tight">
                "We are architecting a sanctuary for true talent—a global lighthouse for imperial luxury fashion."
              </h3>
              <div>
                <p className="text-white font-black uppercase tracking-[0.6em] text-[0.7rem] mb-2 text-gold">Naksh Lakhara</p>
                <p className="text-white/30 text-[0.55rem] uppercase tracking-[0.4em] font-black">Organiser & Director</p>
              </div>
            </motion.div>

            {/* Founder Message */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 space-y-12"
            >
              <div className="w-32 h-[1px] bg-gold mb-12" />
              <Quote className="text-gold opacity-20" size={64} />
              <h3 className="text-3xl md:text-5xl font-display italic text-white tracking-tight leading-tight">
                "Our mission is to ensure that the hands that weave Rajasthan's history are the same ones that define its future."
              </h3>
              <div>
                <p className="text-white font-black uppercase tracking-[0.6em] text-[0.7rem] mb-2 text-gold">Prince Laxkar</p>
                <p className="text-white/30 text-[0.55rem] uppercase tracking-[0.4em] font-black">Founder & Visionary</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Timeline */}
      <section className="py-40 bg-royal-dark/40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] mb-8 block">The Chronicle</span>
            <h2 className="text-5xl md:text-8xl text-premium-white font-black tracking-tighter uppercase italic leading-none">History <br /><span className="text-gold not-italic">of Excellence</span></h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-24 relative pb-24">
            <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-stone-100 hidden md:block" />
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-right">
                  <div className={`${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-4xl md:text-6xl font-display text-stone-200 italic mb-4 block">{item.year}</span>
                    <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-premium-white mb-4">{item.title}</h4>
                    <p className="text-white/60 font-light text-lg">{item.desc}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-gold relative z-10 hidden md:block shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section className="py-32 bg-royal-dark/40 backdrop-blur-md border-t border-gold/20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div className="group">
                    <Trophy className="mx-auto mb-6 text-gold opacity-40 group-hover:opacity-100 transition-opacity" size={40} />
                    <h4 className="text-3xl font-black text-premium-white mb-2">15+</h4>
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/40">Global Awards</p>
                </div>
                <div className="group">
                    <Star className="mx-auto mb-6 text-gold opacity-40 group-hover:opacity-100 transition-opacity" size={40} />
                    <h4 className="text-3xl font-black text-premium-white mb-2">250+</h4>
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/40">Elite Designers</p>
                </div>
                <div className="group">
                    <Users className="mx-auto mb-6 text-gold opacity-40 group-hover:opacity-100 transition-opacity" size={40} />
                    <h4 className="text-3xl font-black text-premium-white mb-2">1M+</h4>
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/40">Digital Reach</p>
                </div>
                <div className="group">
                    <Globe className="mx-auto mb-6 text-gold opacity-40 group-hover:opacity-100 transition-opacity" size={40} />
                    <h4 className="text-3xl font-black text-premium-white mb-2">12</h4>
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/40">International Media Partners</p>
                </div>
            </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="py-40 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] mb-10 block underline underline-offset-[16px] decoration-gold/20">Strategic Growth</span>
            <h2 className="text-4xl md:text-7xl text-white italic font-display tracking-tighter">Why Participate?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 md:p-16 border border-gold/10 bg-royal-dark/40 backdrop-blur-md/5 backdrop-blur-3xl group hover:border-gold/30 transition-all duration-700"
              >
                <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mb-10 group-hover:bg-gold group-hover:scale-110 transition-all duration-700">
                    <div className="text-gold group-hover:text-premium-white transition-colors">{benefit.icon}</div>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-10 text-white uppercase tracking-[0.4em]">{benefit.title}</h3>
                <ul className="space-y-6">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-5 text-white/30 group-hover:text-white/60 transition-colors">
                      <CheckCircle size={16} className="text-gold shrink-0 mt-1" />
                      <span className="text-[0.7rem] uppercase tracking-[0.2em] font-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-40 bg-royal-dark/40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] mb-8 block underline underline-offset-[16px] decoration-gold/20">The Visionaries</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none text-premium-white">The Core <br /><span className="text-gold not-italic">Guild</span></h2>
            </div>
            <p className="text-white/40 max-w-sm italic font-light text-lg">
                "Our team consists of global visionaries, curators, and technical masters dedicated to imperial excellence."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group p-8 border border-gold/20 bg-royal-dark/40 backdrop-blur-md/50 hover:bg-royal-dark/40 backdrop-blur-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-xl">
                  <img src={member.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={member.name} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tighter text-premium-white mb-2">{member.name}</h4>
                <p className="text-gold font-black uppercase tracking-[0.4em] text-[0.55rem] mb-6">{member.role}</p>
                {member.name === "Prince Laxkar" && (
                   <Link 
                     to="/ceo" 
                     className="inline-flex items-center text-[0.5rem] font-black uppercase tracking-[0.2em] text-white/40 hover:text-gold transition-colors"
                   >
                     View Profile & Portal <ArrowRight size={10} className="ml-2" />
                   </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-transparent relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gold/30" />
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl text-white italic font-display mb-12 tracking-tight leading-none">Ready to write <br />your legacy?</h2>
            <div className="flex justify-center">
                <Link to="/contact" className="px-16 py-8 bg-gold text-premium-white font-black uppercase tracking-[1em] text-[0.7rem] hover:bg-royal-dark/40 backdrop-blur-md hover:text-premium-white transition-all shadow-2xl flex items-center group">
                    Connect With Us <ArrowRight className="ml-6 group-hover:translate-x-3 transition-transform" size={20} />
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
