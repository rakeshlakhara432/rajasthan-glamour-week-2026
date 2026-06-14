import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Tag, 
  Clock, 
  Users, 
  UserCheck, 
  Ticket, 
  Crown, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  QrCode, 
  Smartphone,
  LayoutGrid,
  Camera,
  Scissors,
  ArrowRight
} from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

type EventStatus = 'ongoing' | 'upcoming' | 'past';
type RegistrationRole = 'model' | 'designer' | 'visitor' | 'vip';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  status: EventStatus;
  image: string;
  description: string;
  schedule: { time: string; activity: string }[];
  designers: string[];
  guests: string[];
}

export default function Events() {
  const [activeTab, setActiveTab] = useState<EventStatus>('upcoming');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [registrationRole, setRegistrationRole] = useState<RegistrationRole | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const images = {
    runway: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png",
    detail: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png",
    hero: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png",
    backstage: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png"
  };

  const allEvents: Event[] = [
    {
      id: "1",
      title: "Royal Heritage Runway",
      date: "Oct 15, 2026",
      time: "07:00 PM onwards",
      location: "City Palace, Jaipur",
      category: "Main Stage",
      status: "upcoming",
      image: images.runway,
      description: "The grand opening showcase featuring the imperial silk collections and historic silhouettes.",
      schedule: [
        { time: "06:30 PM", activity: "Red Carpet Arrival" },
        { time: "07:15 PM", activity: "Opening Ceremony - Lamp Lighting" },
        { time: "07:45 PM", activity: "Act I: Silk Route Revival" },
        { time: "08:30 PM", activity: "Act II: The Queen's Wardrobe" },
        { time: "09:15 PM", activity: "Showstopper Walk & Grand Finale" }
      ],
      designers: ["Sabyasachi Mukherjee", "Anamika Khanna", "Rahul Mishra"],
      guests: ["Ranveer Singh", "Deepika Padukone", "Princess Diya Kumari"]
    },
    {
      id: "2",
      title: "Desert Twilight Gala",
      date: "Oct 18, 2026",
      time: "08:30 PM",
      location: "Sam Sand Dunes, Jaisalmer",
      category: "Gala Night",
      status: "upcoming",
      image: images.hero,
      description: "An immersive outdoor fashion experience under the stars of the Great Indian Desert.",
      schedule: [
        { time: "08:00 PM", activity: "Dune Welcome & Cocktails" },
        { time: "09:00 PM", activity: "The Sand Runway" },
        { time: "10:30 PM", activity: "Folk Fusion Performance" },
        { time: "11:00 PM", activity: "Imperial Dinner" }
      ],
      designers: ["Tarun Tahiliani", "JJ Valaya"],
      guests: ["Manish Malhotra", "Karan Johar"]
    },
    {
      id: "3",
      title: "Artisan Crafts: Live Workshop",
      date: "May 12, 2026",
      time: "10:00 AM - 05:00 PM",
      location: "Hawa Mahal Grounds",
      category: "Experience",
      status: "past",
      image: images.detail,
      description: "A collaborative session where master craftsmen showcased the dying arts of hand-weaving.",
      schedule: [
        { time: "10:00 AM", activity: "Introduction to Zardozi" },
        { time: "12:00 PM", activity: "Live Block Printing" },
        { time: "03:00 PM", activity: "Weaving Tales Presentation" }
      ],
      designers: ["Artisan Guild of Rajasthan"],
      guests: ["Aishwarya Rai"]
    },
    {
      id: "4",
      title: "Innovation Summit 2026",
      date: "Now Live",
      time: "Ongoing",
      location: "Jaipur Exhibition Centre",
      category: "Summit",
      status: "ongoing",
      image: images.backstage,
      description: "Discussing the role of technology in preserving heritage textiles.",
      schedule: [
        { time: "All Day", activity: "Tech-Textile Exhibit" },
        { time: "02:00 PM", activity: "Daily Keynote Panel" }
      ],
      designers: ["Falguni Shane Peacock"],
      guests: ["Ananya Panday"]
    }
  ];

  const filteredEvents = allEvents.filter(e => e.status === activeTab);

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
      setRegistrationRole(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen pt-24 bg-transparent">
      {/* Search & Filter Header */}
      <section className="pt-20 pb-12 bg-transparent border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div>
              <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-8 underline underline-offset-8 decoration-gold/30">Registry Hub</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-white leading-none">
                Season <span className="text-gold not-italic">Timeline</span>
              </h1>
            </div>
            
            <div className="flex bg-royal-dark/40 backdrop-blur-md/5 p-2 backdrop-blur-2xl border border-gold/10 rounded-none">
              {(['ongoing', 'upcoming', 'past'] as EventStatus[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 text-[0.6rem] font-black uppercase tracking-[0.4em] transition-all ${
                    activeTab === tab ? 'bg-gold text-premium-white' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layoutId={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer bg-royal-dark/40 backdrop-blur-md/[0.02] border border-gold/10 overflow-hidden"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img 
                      src={event.image} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110" 
                      alt={event.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 bg-gold text-premium-white text-[0.55rem] font-black uppercase tracking-[0.3em]">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex items-center space-x-3 text-gold text-[0.6rem] font-black uppercase tracking-[0.4em] mb-4">
                      <Calendar size={12} />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-8 group-hover:text-gold transition-colors">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-white/30 text-[0.6rem] font-black uppercase tracking-[0.3em] pb-8 border-b border-gold/10 mb-8">
                       <MapPin size={12} className="text-gold" />
                       <span>{event.location}</span>
                    </div>
                    <button className="w-full py-5 border border-gold/20 text-[0.6rem] font-black uppercase tracking-[0.4em] text-white hover:bg-gold hover:text-premium-white hover:border-gold transition-all duration-700">
                      Explore Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-40 text-center border border-gold/10 bg-royal-dark/40 backdrop-blur-md/[0.01]">
              <LayoutGrid size={48} className="text-gold/20 mx-auto mb-8" />
              <p className="text-white/20 text-[0.6rem] font-black uppercase tracking-[0.8em]">No Events Recorded For This Category</p>
            </div>
          )}
        </div>
      </section>

      {/* Registration Portal */}
      <section className="py-40 bg-royal-dark/40 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-royal-dark/40 backdrop-blur-md -z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:col-span-6 space-y-12">
               <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block underline underline-offset-8 decoration-gold/30">Registration Portal</span>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none text-premium-white">Join the <br /><span className="text-gold not-italic">Immortal list</span></h2>
               <p className="text-white/60 text-lg md:text-xl font-light italic leading-relaxed max-w-xl">
                 Secure your place in the most exclusive fashion showcase of the desert. We welcome designers, models, and distinguished guests.
               </p>
               <div className="flex flex-wrap gap-6 pt-12">
                  {[
                    { id: 'visitor', label: 'Visitor Pass', icon: Ticket },
                    { id: 'vip', label: 'VIP Lounge', icon: Crown },
                    { id: 'model', label: 'Models', icon: Camera },
                    { id: 'designer', label: 'Designers', icon: Scissors }
                  ].map((role) => (
                    <button
                      key={role.id}
                      onClick={() => setRegistrationRole(role.id as RegistrationRole)}
                      className="px-8 py-5 border border-[#0a0a0a]/10 text-premium-white text-[0.6rem] font-black uppercase tracking-[0.4em] hover:bg-transparent hover:text-white transition-all flex items-center group"
                    >
                      <role.icon size={16} className="mr-4 text-gold group-hover:scale-110 transition-transform" />
                      {role.label}
                    </button>
                  ))}
               </div>
            </div>
            <div className="lg:col-span-6 w-full max-w-xl bg-royal-dark/40 backdrop-blur-md p-12 shadow-2xl border border-gold/20">
                <div className="text-center mb-12">
                  <Smartphone className="mx-auto mb-6 text-gold" size={32} />
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Digital Access</h3>
                  <p className="text-white/40 text-[0.55rem] font-black uppercase tracking-[0.2em] mt-2">Instant QR Validation Enabled</p>
                </div>
                <div className="p-8 bg-royal-dark/40 backdrop-blur-md border border-gold/20 text-center space-y-6">
                    <p className="text-white/60 italic text-lg">Click an alliance above to begin your application process for Season 2026.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Preview */}
      <section className="py-24 bg-transparent text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
               <QrCode className="text-gold" size={32} />
               <h4 className="text-xl font-black uppercase tracking-tighter">QR Ticketing</h4>
               <p className="text-white/30 text-[0.7rem] uppercase tracking-[0.2em] leading-relaxed">Instant verification at all venues via encrypted QR codes directly in your digital wallet.</p>
            </div>
            <div className="space-y-6">
               <LayoutGrid className="text-gold" size={32} />
               <h4 className="text-xl font-black uppercase tracking-tighter">Interactive Seating</h4>
               <p className="text-white/30 text-[0.7rem] uppercase tracking-[0.2em] leading-relaxed">Select your imperial vantage point with our real-time 3D venue layout visualization.</p>
            </div>
            <div className="space-y-6">
               <Clock className="text-gold" size={32} />
               <h4 className="text-xl font-black uppercase tracking-tighter">Smart Reminders</h4>
               <p className="text-white/30 text-[0.7rem] uppercase tracking-[0.2em] leading-relaxed">Precision timekeeping and show updates sent via SMS and Email to keep you in sync with the desert beat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-transparent/95 backdrop-blur-3xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-6xl bg-[#0e0e0e] border border-gold/10 min-h-[80vh] relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-royal-dark/40 backdrop-blur-md/5 flex items-center justify-center text-white hover:bg-gold hover:text-premium-white transition-all"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Visual Section */}
                <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-0">
                   <img src={selectedEvent.image} className="absolute inset-0 w-full h-full object-cover" alt={selectedEvent.title} />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/50" />
                   <div className="absolute bottom-12 left-12 right-12">
                      <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-4 underline underline-offset-8 decoration-gold/30">Official Profile</span>
                      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none italic">{selectedEvent.title}</h2>
                      <div className="flex flex-wrap gap-6 text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/50">
                        <div className="flex items-center space-x-3"><Calendar size={12} className="text-gold" /> <span>{selectedEvent.date}</span></div>
                        <div className="flex items-center space-x-3"><Clock size={12} className="text-gold" /> <span>{selectedEvent.time}</span></div>
                      </div>
                   </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-12 md:p-20 space-y-16 lg:max-h-[90vh] overflow-y-auto custom-scrollbar">
                   <div>
                      <h4 className="text-gold font-black uppercase tracking-[0.4em] text-[0.55rem] mb-6">Overview</h4>
                      <p className="text-white/40 italic font-light text-xl leading-relaxed">{selectedEvent.description}</p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="text-gold font-black uppercase tracking-[0.4em] text-[0.55rem] mb-8 flex items-center"><UserCheck size={14} className="mr-4" /> Guest Lineup</h4>
                        <ul className="space-y-4">
                          {selectedEvent.guests.map((g, i) => (
                            <li key={i} className="text-white font-black uppercase tracking-[0.2em] text-[0.7rem] border-l border-gold/20 pl-6 py-1">{g}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gold font-black uppercase tracking-[0.4em] text-[0.55rem] mb-8 flex items-center"><Scissors size={14} className="mr-4" /> Designers</h4>
                        <ul className="space-y-4">
                          {selectedEvent.designers.map((d, i) => (
                            <li key={i} className="text-white font-black uppercase tracking-[0.2em] text-[0.7rem] border-l border-gold/20 pl-6 py-1">{d}</li>
                          ))}
                        </ul>
                      </div>
                   </div>

                   <div>
                      <h4 className="text-gold font-black uppercase tracking-[0.4em] text-[0.55rem] mb-12">Show Schedule</h4>
                      <div className="space-y-8">
                        {selectedEvent.schedule.map((s, i) => (
                          <div key={i} className="flex gap-12 group">
                             <div className="w-24 shrink-0 text-white font-black uppercase tracking-[0.2em] text-[0.6rem] opacity-30 group-hover:opacity-100 transition-opacity pt-1">{s.time}</div>
                             <div className="relative pl-10 border-l border-gold/10 pb-2">
                                <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] rounded-full bg-gold/20 border border-gold/40 group-hover:bg-gold transition-all" />
                                <h5 className="text-white font-black uppercase tracking-[0.1em] text-[0.8rem] mb-2">{s.activity}</h5>
                             </div>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="pt-12">
                      <button 
                        onClick={() => {
                          setSelectedEvent(null);
                          setRegistrationRole('visitor');
                        }}
                        className="w-full py-8 bg-gold text-premium-white font-black uppercase tracking-[0.8em] text-[0.7rem] hover:bg-royal-dark/40 backdrop-blur-md transition-all shadow-2xl flex items-center justify-center space-x-6"
                      >
                        Request Invitation <ChevronRight size={16} />
                      </button>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Registration Modal Overlay */}
      <AnimatePresence>
        {registrationRole && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-transparent/98 backdrop-blur-[40px]"
          >
             <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="w-full max-w-2xl bg-royal-dark/40 backdrop-blur-md relative p-12 md:p-20 shadow-[-40px_0_80px_rgba(212,175,55,0.1)]"
            >
              <button 
                onClick={() => setRegistrationRole(null)}
                className="absolute top-8 right-8 text-premium-white/20 hover:text-premium-white transition-colors"
                disabled={isRegistered}
              >
                <X size={24} />
              </button>

              {isRegistered ? (
                <div className="text-center py-20 px-8">
                  <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-gold/20">
                    <CheckCircle2 size={48} className="text-gold" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-premium-white mb-6">Success Secured</h3>
                  <p className="text-white/60 italic text-xl mb-12">Your imperial access request has been transmitted. Our council will review and respond within 72 hours.</p>
                  <div className="p-8 bg-royal-dark/40 backdrop-blur-md border border-gold/20 flex flex-col items-center">
                    <QrCode size={120} className="text-premium-white mb-6 bg-royal-dark/40 backdrop-blur-md p-4" />
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/40">Application Reference: RG-2026-XQ</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-12">
                   <div>
                      <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-6">Season 2026 Alliance</span>
                      <h3 className="text-4xl font-black uppercase tracking-tighter text-premium-white">
                        Apply as <span className="text-gold italic font-display lowercase">{registrationRole}</span>
                      </h3>
                   </div>

                   <form onSubmit={handleRegister} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Imperial Name</label>
                           <input required type="text" className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black" placeholder="Your Full Name" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Digital Mail</label>
                           <input required type="email" className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black" placeholder="mail@example.com" />
                        </div>
                      </div>

                      {registrationRole === 'vip' && (
                        <div className="space-y-3">
                           <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Lounge Preference</label>
                           <select className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black appearance-none">
                              <option>The Emerald Veranda</option>
                              <option>Sovereign Sky Deck</option>
                              <option>Archive Chamber</option>
                           </select>
                        </div>
                      )}

                      {(registrationRole === 'model' || registrationRole === 'designer') && (
                        <div className="space-y-3">
                           <label className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-premium-white/40 block ml-1">Portfolio Link / Linktree</label>
                           <input required type="url" className="w-full px-8 py-5 bg-royal-dark/40 backdrop-blur-md border border-gold/20 focus:border-gold outline-none text-[0.7rem] uppercase tracking-[0.2em] font-black" placeholder="https://..." />
                        </div>
                      )}

                      <div className="p-8 bg-royal-dark/40 backdrop-blur-md border-l-4 border-gold">
                         <p className="text-[0.65rem] italic text-white/60 leading-relaxed">
                           "By submitting this application, I acknowledge the imperial code of conduct and the high standards of Rajasthan Glamour Week."
                         </p>
                      </div>

                      <button type="submit" className="w-full py-8 bg-transparent text-white font-black uppercase tracking-[1em] text-[0.7rem] hover:bg-gold transition-all shadow-2xl flex items-center justify-center group">
                        Finalize Registry <ArrowRight className="ml-6 group-hover:translate-x-3 transition-transform" size={16} />
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
