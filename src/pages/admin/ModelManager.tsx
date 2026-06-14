import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  ArrowRight,
  MoreVertical,
  Plus,
  Mail,
  Smartphone,
  MapPin,
  ChevronRight,
  Star,
  Award,
  Video,
  Camera
} from 'lucide-react';
import { useState } from 'react';

interface ModelApplication {
  id: string;
  name: string;
  category: string;
  height: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected' | 'info_requested';
  image: string;
  rating: number;
}

export default function ModelManager() {
  const [filter, setFilter] = useState('all');
  const [selectedApp, setSelectedApp] = useState<ModelApplication | null>(null);

  const applications: ModelApplication[] = [
    { id: 'APP-001', name: 'Suhana Sheikh', category: 'Female Portfolio', height: '180 cm', date: '2026-06-08', status: 'pending', image: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png", rating: 4.8 },
    { id: 'APP-002', name: 'Vikram Singh', category: 'Male Portfolio', height: '188 cm', date: '2026-06-07', status: 'approved', image: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png", rating: 5.0 },
    { id: 'APP-003', name: 'Isha Mehra', category: 'Female Portfolio', height: '175 cm', date: '2026-06-05', status: 'rejected', image: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png", rating: 3.2 },
    { id: 'APP-004', name: 'Arjun Rathore', category: 'Male Portfolio', height: '190 cm', date: '2026-06-04', status: 'pending', image: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png", rating: 4.5 },
    { id: 'APP-005', name: 'Maya Kapoor', category: 'Female Portfolio', height: '178 cm', date: '2026-06-02', status: 'info_requested', image: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png", rating: 4.7 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-500 bg-green-500/10';
      case 'rejected': return 'text-red-500 bg-red-500/10';
      case 'info_requested': return 'text-gold bg-gold/10';
      default: return 'text-white/40 bg-royal-dark/40 backdrop-blur-md/5';
    }
  };

  return (
    <div className="space-y-12">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
         <div>
            <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-4 underline underline-offset-8 decoration-gold/20">Talent Acquisition</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white italic">Casting <br /><span className="text-gold not-italic">Bureau</span></h2>
         </div>
         
         <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:flex-none">
               <Search size={14} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
               <input 
                  type="text" 
                  placeholder="SEARCH APPLICATIONS..." 
                  className="w-full lg:w-64 pl-14 pr-6 py-4 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 text-[0.6rem] font-black uppercase tracking-[0.2em] outline-none focus:border-gold/30 transition-all"
               />
            </div>
            <button className="px-8 py-4 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 text-[0.6rem] font-black uppercase tracking-[0.4em] flex items-center hover:text-gold transition-colors">
               <Filter size={14} className="mr-4" /> Filter By Tier
            </button>
            <button className="px-8 py-4 bg-gold text-premium-white text-[0.6rem] font-black uppercase tracking-[0.4em] flex items-center">
               <Plus size={14} className="mr-4" /> Add Model
            </button>
         </div>
      </div>

      {/* Main Table View */}
      <div className="bg-transparent border border-gold/10 overflow-hidden">
         <div className="grid grid-cols-12 gap-8 px-12 py-8 border-b border-gold/20 bg-royal-dark/40 backdrop-blur-md/[0.02]">
            <div className="col-span-4 text-[0.55rem] font-black uppercase tracking-[0.4em] text-white/20">Casting Profile</div>
            <div className="col-span-2 text-[0.55rem] font-black uppercase tracking-[0.4em] text-white/20">Category</div>
            <div className="col-span-2 text-[0.55rem] font-black uppercase tracking-[0.4em] text-white/20">Stats (Height)</div>
            <div className="col-span-2 text-[0.55rem] font-black uppercase tracking-[0.4em] text-white/20">Submission</div>
            <div className="col-span-2 text-[0.55rem] font-black uppercase tracking-[0.4em] text-white/20">Status</div>
         </div>

         <div className="divide-y divide-white/5">
            {applications.map((app) => (
              <motion.div 
                key={app.id} 
                initial={false}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.01)' }}
                className="grid grid-cols-12 gap-8 px-12 py-10 items-center cursor-pointer group"
                onClick={() => setSelectedApp(app)}
              >
                <div className="col-span-4 flex items-center space-x-6">
                   <div className="w-16 h-20 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img src={app.image} className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h4 className="text-[0.7rem] font-black uppercase tracking-[0.1em] text-white group-hover:text-gold transition-colors">{app.name}</h4>
                      <p className="text-[0.55rem] font-black text-white/20 mt-1 uppercase tracking-widest italic">{app.id}</p>
                   </div>
                </div>
                <div className="col-span-2">
                   <span className="text-[0.6rem] font-black uppercase tracking-[0.1em] text-white/60">{app.category}</span>
                </div>
                <div className="col-span-2">
                   <span className="text-[0.6rem] font-black uppercase tracking-[0.1em] text-white/60">{app.height}</span>
                </div>
                <div className="col-span-2">
                   <span className="text-[0.55rem] font-black uppercase tracking-[0.1em] text-white/20">{app.date}</span>
                </div>
                <div className="col-span-2 flex justify-between items-center">
                   <span className={`px-4 py-1.5 text-[0.5rem] font-black uppercase tracking-widest ${getStatusColor(app.status)}`}>
                      {app.status.replace('_', ' ')}
                   </span>
                   <button className="text-white/10 hover:text-white transition-colors"><MoreVertical size={16} /></button>
                </div>
              </motion.div>
            ))}
         </div>
      </div>

      {/* Model Detail Drawer / Modal Overlay */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-4xl h-screen bg-[#0e0e0e] border-l border-gold/20 overflow-y-auto p-12 md:p-20 flex flex-col"
            >
               <div className="flex justify-between items-center mb-20">
                  <span className={`px-6 py-2 text-[0.6rem] font-black uppercase tracking-[0.4em] ${getStatusColor(selectedApp.status)}`}>
                     {selectedApp.status.replace('_', ' ')}
                  </span>
                  <button onClick={() => setSelectedApp(null)} className="p-4 bg-royal-dark/40 backdrop-blur-md/5 text-white/40 hover:text-white transition-colors">
                     <Plus size={24} className="rotate-45" />
                  </button>
               </div>

               <div className="flex flex-col lg:flex-row gap-20">
                  <div className="lg:w-2/5 space-y-12">
                     <div className="aspect-[3/4] bg-royal-dark/40 backdrop-blur-md/5">
                        <img src={selectedApp.image} className="w-full h-full object-cover grayscale" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <button className="flex-1 py-6 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 text-[0.6rem] font-black uppercase tracking-[0.4em] hover:bg-gold hover:text-premium-white transition-all">Reject</button>
                        <button className="flex-1 py-6 bg-gold text-premium-white text-[0.6rem] font-black uppercase tracking-[0.4em]">Approve</button>
                     </div>
                     <button className="w-full py-6 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 text-[0.6rem] font-black uppercase tracking-[0.4em] hover:text-gold transition-colors italic">Request More Information</button>
                  </div>

                  <div className="lg:w-3/5 space-y-16">
                     <div>
                        <h3 className="text-4xl font-black uppercase tracking-tighter text-white italic mb-4">{selectedApp.name}</h3>
                        <p className="text-white/30 text-[0.65rem] font-black uppercase tracking-[0.4em] flex items-center"><MapPin size={12} className="mr-3 text-gold" /> Jaipur, Rajasthan</p>
                     </div>

                     <div className="grid grid-cols-2 gap-12">
                        {[
                          { label: 'Chest', val: '92 CM' },
                          { label: 'Waist', val: '74 CM' },
                          { label: 'Hips', val: '98 CM' },
                          { label: 'Experience', val: '2 YEARS' },
                        ].map((m, i) => (
                          <div key={i} className="pb-6 border-b border-gold/10">
                             <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/20 block mb-2">{m.label}</span>
                             <p className="text-xl font-black text-white italic">{m.val}</p>
                          </div>
                        ))}
                     </div>

                     <div className="space-y-8">
                        <h4 className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-gold border-b border-gold/20 pb-4 flex items-center">
                           <Award size={14} className="mr-3 text-gold" /> Imperial Score & Verification
                        </h4>
                        <div className="flex items-center space-x-8">
                           <div className="flex items-center text-gold">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill={i < Math.floor(selectedApp.rating) ? 'currentColor' : 'none'} className="mr-1" />
                              ))}
                           </div>
                           <span className="text-2xl font-black text-white">{selectedApp.rating}</span>
                           <div className="h-10 w-[1px] bg-royal-dark/40 backdrop-blur-md/5" />
                           <span className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-green-500 bg-green-500/10 px-4 py-2 border border-green-500/20">Verified Identity</span>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-8">
                        <div className="p-8 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 group hover:border-gold/30 transition-all cursor-pointer">
                           <Camera size={20} className="text-white/20 mb-4 group-hover:text-gold" />
                           <p className="text-[0.6rem] font-black uppercase tracking-[0.3em]">Full Portfolio</p>
                           <p className="text-[0.55rem] text-white/20 mt-2">12 High-Res Shots</p>
                        </div>
                        <div className="p-8 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 group hover:border-gold/30 transition-all cursor-pointer">
                           <Video size={20} className="text-white/20 mb-4 group-hover:text-gold" />
                           <p className="text-[0.6rem] font-black uppercase tracking-[0.3em]">Runway Walk</p>
                           <p className="text-[0.55rem] text-white/20 mt-2">45s Media Clip</p>
                        </div>
                     </div>

                     <div className="pt-12 border-t border-gold/10 space-y-6">
                        <div className="flex items-center space-x-6 text-white/40 hover:text-white transition-colors cursor-pointer group">
                           <div className="w-10 h-10 border border-gold/10 flex items-center justify-center group-hover:border-gold"><Mail size={16} /></div>
                           <span className="text-[0.6rem] font-black uppercase tracking-[0.4em]">Send Official Invitation</span>
                        </div>
                        <div className="flex items-center space-x-6 text-white/40 hover:text-white transition-colors cursor-pointer group">
                           <div className="w-10 h-10 border border-gold/10 flex items-center justify-center group-hover:border-gold"><Smartphone size={16} /></div>
                           <span className="text-[0.6rem] font-black uppercase tracking-[0.4em]">Archive Phone Record</span>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
