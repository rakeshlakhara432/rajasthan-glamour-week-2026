import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Search, 
  Scissors, 
  CheckCircle2, 
  XCircle, 
  MoreVertical, 
  Layout, 
  Clock, 
  Globe, 
  Star,
  ExternalLink,
  Layers,
  Image as ImageIcon,
  Play
} from 'lucide-react';
import { useState } from 'react';

interface Designer {
  id: string;
  name: string;
  collection: string;
  status: 'active' | 'pending' | 'draft';
  slot: string;
  image: string;
  views: string;
}

export default function DesignerManager() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDesigner, setSelectedDesigner] = useState<Designer | null>(null);

  const designers: Designer[] = [
    { id: 'DES-001', name: 'Sabyasachi Mukherjee', collection: 'Heritage Monsoons', status: 'active', slot: 'Day 1 - Grand Finale', image: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png", views: '4.2K' },
    { id: 'DES-002', name: 'Anita Dongre', collection: 'Desert Hues 2026', status: 'active', slot: 'Day 2 - Main Show', image: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png", views: '3.1K' },
    { id: 'DES-003', name: 'Manish Malhotra', collection: 'Imperial Silks', status: 'pending', slot: 'TBD', image: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png", views: '1.8K' },
    { id: 'DES-004', name: 'Ritu Kumar', collection: 'Vintage Rajasthan', status: 'draft', slot: 'TBD', image: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png", views: '0.5K' },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
         <div>
            <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-4 underline underline-offset-8 decoration-gold/20">Designer Guild</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white italic">Couture <br /><span className="text-gold not-italic">Legacy</span></h2>
         </div>
         
         <div className="flex gap-4">
            <div className="relative">
               <Search size={14} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
               <input 
                  type="text" 
                  placeholder="SEARCH DESIGNERS..." 
                  className="pl-14 pr-6 py-4 bg-white/5 border border-white/5 text-[0.6rem] font-black uppercase tracking-[0.2em] w-80 outline-none focus:border-gold/30 transition-all"
               />
            </div>
            <button className="px-10 py-4 bg-gold text-[#0a0a0a] text-[0.6rem] font-black uppercase tracking-[0.4em] flex items-center">
               <Plus size={14} className="mr-4" /> New Designer
            </button>
         </div>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designers.map((designer) => (
          <motion.div 
            key={designer.id}
            whileHover={{ scale: 1.02 }}
            className="bg-[#0a0a0a] border border-white/5 group cursor-pointer overflow-hidden p-8"
            onClick={() => setSelectedDesigner(designer)}
          >
             <div className="aspect-video bg-white/5 mb-10 overflow-hidden relative">
                <img src={designer.image} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                   <span className="px-4 py-2 bg-white/5 border border-white/10 text-[0.5rem] font-black uppercase tracking-widest text-white/60 group-hover:bg-gold group-hover:text-[#0a0a0a] group-hover:border-gold transition-all">View Collection</span>
                </div>
             </div>

             <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white transition-colors group-hover:text-gold italic leading-none mb-2">{designer.name}</h3>
                  <p className="text-white/30 text-[0.55rem] font-black uppercase tracking-[0.4em]">{designer.collection}</p>
                </div>
                <div className={`p-2 border ${designer.status === 'active' ? 'border-green-500/20 text-green-500' : 'border-gold/20 text-gold'}`}>
                   {designer.status === 'active' ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                </div>
             </div>

             <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8 text-[0.6rem] font-black uppercase tracking-widest">
                <div>
                   <span className="text-white/20 block mb-2">Show Slot</span>
                   <span className="text-white italic">{designer.slot}</span>
                </div>
                <div>
                   <span className="text-white/20 block mb-2">Impact Score</span>
                   <span className="text-gold italic">{designer.views} Reach</span>
                </div>
             </div>
          </motion.div>
        ))}
      </div>

      {/* Designer Side Panel */}
      <AnimatePresence>
         {selectedDesigner && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-md"
           >
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className="w-full max-w-4xl h-screen bg-[#0e0e0e] border-l border-white/10 overflow-y-auto"
              >
                 <div className="sticky top-0 bg-[#0e0e0e]/80 backdrop-blur-3xl p-12 border-b border-white/5 flex justify-between items-center z-10">
                    <div className="flex items-center space-x-6">
                       <span className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem]">Guild Member Registry</span>
                       <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <button onClick={() => setSelectedDesigner(null)} className="p-4 bg-white/5 text-white/40 hover:text-white transition-colors"><Plus size={24} className="rotate-45" /></button>
                 </div>

                 <div className="p-12 md:p-20 space-y-20">
                    <div className="flex flex-col md:flex-row gap-16">
                       <div className="md:w-1/3 aspect-[3/4] bg-white/5 border border-white/5 overflow-hidden">
                          <img src={selectedDesigner.image} className="w-full h-full object-cover grayscale" />
                       </div>
                       <div className="md:w-2/3 space-y-10">
                          <div>
                             <h2 className="text-6xl font-black uppercase tracking-tighter text-white italic leading-[0.8] mb-6">{selectedDesigner.name}</h2>
                             <p className="text-gold font-black text-xl italic">{selectedDesigner.collection}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-10">
                             <div className="space-y-2">
                                <span className="text-white/20 text-[0.6rem] font-black uppercase tracking-[0.4em]">Designer Tier</span>
                                <p className="text-white text-lg font-black uppercase tracking-widest italic">Imperial Platinum</p>
                             </div>
                             <div className="space-y-2">
                                <span className="text-white/20 text-[0.6rem] font-black uppercase tracking-[0.4em]">Official Slot</span>
                                <p className="text-white text-lg font-black uppercase tracking-widest italic">{selectedDesigner.slot}</p>
                             </div>
                          </div>

                          <div className="flex gap-6 pt-10">
                             <button className="flex-1 py-6 bg-gold text-[#0a0a0a] font-black uppercase tracking-[0.4em] text-[0.7rem] hover:bg-white transition-all">Edit Registry</button>
                             <button className="px-10 py-6 border border-white/10 text-white/40 hover:text-white hover:border-white transition-all"><ExternalLink size={18} /></button>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-12">
                       <div className="flex justify-between items-end border-b border-white/5 pb-8">
                          <h4 className="text-2xl font-black uppercase tracking-tighter italic">Collection Archive</h4>
                          <span className="text-white/20 text-[0.6rem] font-black uppercase tracking-[0.4em]">24 Assets Uploaded</span>
                       </div>

                       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                          {[1,2,3,4,5,6].map((i) => (
                            <div key={i} className="aspect-square bg-white/5 group relative cursor-pointer overflow-hidden">
                               <img src={selectedDesigner.image} className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1.5s]" />
                               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  {i % 3 === 0 ? <Play className="text-gold" size={32} /> : <ImageIcon className="text-gold" size={32} />}
                                </div>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="p-12 bg-white/5 border border-white/5 space-y-12">
                       <h4 className="text-xl font-black uppercase tracking-tighter flex items-center">
                          <Layers size={18} className="mr-4 text-gold" /> Slot Scheduling Center
                       </h4>
                       <div className="space-y-6">
                          {[
                            { day: 'Day 1', time: '19:00 - 20:30', stage: 'Imperial Stage A', status: 'Reserved' },
                            { day: 'Day 3', time: '14:00 - 15:30', stage: 'Palace Stage B', status: 'Available' },
                          ].map((slot, i) => (
                            <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-[#0a0a0a] border border-white/5 hover:border-gold/30 transition-all group">
                               <div className="flex items-center space-x-10 mb-6 md:mb-0">
                                  <div className="text-center w-16">
                                     <span className="text-white/20 text-[0.5rem] font-black uppercase tracking-[0.2em] block">Date</span>
                                     <span className="text-xl font-black text-white">{slot.day}</span>
                                  </div>
                                  <div>
                                     <span className="text-white/20 text-[0.5rem] font-black uppercase tracking-[0.2em] block">Time Window</span>
                                     <span className="text-[0.8rem] font-black text-white italic">{slot.time}</span>
                                  </div>
                               </div>
                               <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                  <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-white/40">{slot.stage}</span>
                                  <button className={`px-8 py-3 text-[0.55rem] font-black uppercase tracking-[0.4em] ${slot.status === 'Reserved' ? 'bg-gold text-[#0a0a0a]' : 'border border-white/10 text-white hover:border-gold hover:text-gold transition-all'}`}>
                                     {slot.status === 'Reserved' ? 'Assigned' : 'Assign Slot'}
                                  </button>
                               </div>
                            </div>
                          ))}
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
