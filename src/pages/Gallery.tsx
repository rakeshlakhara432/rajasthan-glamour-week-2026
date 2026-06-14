import { motion, AnimatePresence } from 'motion/react';
import { useState, MouseEvent } from 'react';
import { 
  X, 
  Maximize2, 
  Download, 
  Share2, 
  Play, 
  Camera, 
  Scissors, 
  Video, 
  Users,
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface MediaItem {
  id: string;
  url: string;
  title: string;
  category: string;
  type: 'image' | 'video';
  description?: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [viewMode, setViewMode] = useState<'photo' | 'video'>('photo');

  const media: MediaItem[] = [
    { id: '1', url: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png", title: "Desert Sunset", category: "Editorial", type: 'image', description: "Capturing the golden hour in the heart of the Thar desert." },
    { id: '2', url: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png", title: "Palace Runway", category: "Runway", type: 'image', description: "The grand opening show featuring imperial silks." },
    { id: '3', url: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png", title: "Intricate Gold", category: "Collections", type: 'image', description: "Close-up of the master craftsmanship in Zardozi." },
    { id: '4', url: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png", title: "The Preparation", category: "Backstage", type: 'image', description: "Behind the scenes with the elite styling team." },
    { id: '5', url: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png", title: "Showstopper Walk", category: "Celebrities", type: 'image', description: "Celebrity appearances on the final night." },
    { id: '6', url: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png", title: "Thar Couture", category: "Editorial", type: 'image' },
    { id: '7', url: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png", title: "Highlights 2026", category: "Interviews", type: 'video' },
    { id: '8', url: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png", title: "Designer Talk", category: "Interviews", type: 'video' },
    { id: '9', url: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png", title: "Event Highlights", category: "Highlights", type: 'video' },
    { id: '10', url: "/rajasthan-glamour-week-2026/images/rajasthani_fashion_show.png", title: "Rajasthani Look", category: "Runway", type: 'image', description: "A high-fashion runway show featuring modern Rajasthani traditional clothing." }
  ];

  const categories = ["All", "Runway", "Editorial", "Backstage", "Collections", "Celebrities", "Interviews", "Highlights"];
  
  const filteredMedia = media.filter(item => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const typeMatch = viewMode === 'photo' ? item.type === 'image' : item.type === 'video';
    return categoryMatch && typeMatch;
  });

  const handleDownload = (e: MouseEvent) => {
    e.stopPropagation();
    alert("Digital Asset Downloaded (Simulated)");
  };

  const handleShare = (e: MouseEvent) => {
    e.stopPropagation();
    alert("Share Link Copied (Simulated)");
  };

  return (
    <div className="min-h-screen pt-24 bg-transparent">
      {/* Header */}
      <section className="py-40 bg-transparent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 text-center relative z-10 pt-20">
            <span className="text-gold font-black uppercase tracking-[1em] text-[0.6rem] mb-10 block underline underline-offset-[16px] decoration-gold/20">Media Archive</span>
            <h1 className="text-5xl md:text-[6rem] mb-16 uppercase font-black tracking-tighter leading-[0.8] mix-blend-difference">Live <br /><span className="italic font-normal text-gold">Vault</span></h1>
            
            <div className="flex flex-col items-center gap-12 mt-20">
               <div className="flex bg-royal-dark/40 backdrop-blur-md/5 p-2 backdrop-blur-2xl border border-gold/10 rounded-none">
                  {(['photo', 'video'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      className={`px-12 py-3 text-[0.6rem] font-black uppercase tracking-[0.4em] transition-all flex items-center ${
                        viewMode === mode ? 'bg-gold text-premium-white' : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {mode === 'photo' ? <Camera size={14} className="mr-3" /> : <Video size={14} className="mr-3" />}
                      {mode}s
                    </button>
                  ))}
               </div>

               <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-3 text-[0.55rem] font-black uppercase tracking-[0.3em] transition-all border ${
                      activeCategory === cat ? 'bg-royal-dark/40 backdrop-blur-md text-premium-white border-white' : 'bg-transparent text-white/20 border-gold/10 hover:border-gold hover:text-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-32 bg-royal-dark/40 backdrop-blur-md relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container mx-auto px-6">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 md:gap-12 space-y-8 md:space-y-12">
              <AnimatePresence mode="popLayout">
                {filteredMedia.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    viewport={{ once: true }}
                    className="relative break-inside-avoid overflow-hidden group cursor-pointer bg-stone-100"
                    onClick={() => setSelectedMedia(item)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.url} 
                        alt={item.title} 
                        className="w-full h-auto object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-110" 
                      />
                      
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center text-premium-white scale-90 group-hover:scale-100 transition-transform">
                              <Play fill="currentColor" size={24} />
                           </div>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700" />
                      
                      <div className="absolute inset-x-8 bottom-8 text-white translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                          <span className="text-gold text-[0.55rem] uppercase tracking-[0.4em] mb-3 font-black block">{item.category}</span>
                          <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">{item.title}</h3>
                          <div className="flex space-x-6">
                             <button onClick={handleDownload} className="p-3 bg-royal-dark/40 backdrop-blur-md/10 hover:bg-gold hover:text-premium-white transition-all rounded-full"><Download size={14} /></button>
                             <button onClick={handleShare} className="p-3 bg-royal-dark/40 backdrop-blur-md/10 hover:bg-gold hover:text-premium-white transition-all rounded-full"><Share2 size={14} /></button>
                             <button className="p-3 bg-royal-dark/40 backdrop-blur-md/10 hover:bg-gold hover:text-premium-white transition-all rounded-full"><Maximize2 size={14} /></button>
                          </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {filteredMedia.length === 0 && (
              <div className="py-40 text-center">
                 <Camera size={48} className="mx-auto mb-8 text-stone-200" />
                 <p className="text-[0.6rem] font-black uppercase tracking-[0.8em] text-stone-300">No Assets recorded in this segment</p>
              </div>
            )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-transparent/98 backdrop-blur-3xl"
          >
            <button 
              onClick={() => setSelectedMedia(null)}
              className="absolute top-8 right-8 z-10 w-12 h-12 bg-royal-dark/40 backdrop-blur-md/5 flex items-center justify-center text-white hover:bg-gold hover:text-premium-white transition-all"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl h-full flex flex-col md:flex-row bg-[#0e0e0e] border border-gold/10 shadow-2xl relative overflow-hidden"
            >
               <div className="md:w-2/3 h-[60vh] md:h-full relative overflow-hidden bg-black flex items-center justify-center">
                  <img src={selectedMedia.url} className="w-full h-full object-contain" alt={selectedMedia.title} />
                  {selectedMedia.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                       <Play size={80} className="text-gold" />
                    </div>
                  )}
               </div>

               <div className="md:w-1/3 p-12 md:p-16 space-y-12 bg-[#0e0e0e] overflow-y-auto">
                  <div>
                    <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-4 underline underline-offset-8 decoration-gold/30">{selectedMedia.category} segment</span>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8 italic">{selectedMedia.title}</h2>
                    <p className="text-white/40 text-[0.8rem] leading-relaxed uppercase tracking-[0.1em] font-light">
                      {selectedMedia.description || "Witness the pinnacle of desert glamour in Season 2026. A digital artifact from the Rajasthan Glamour Week archive."}
                    </p>
                  </div>

                  <div className="space-y-6 pt-12 border-t border-gold/10">
                     <button onClick={handleDownload} className="w-full py-5 bg-gold text-premium-white font-black uppercase tracking-[0.6em] text-[0.7rem] flex items-center justify-center">
                        <Download size={16} className="mr-4" /> Download Original
                     </button>
                     <button onClick={handleShare} className="w-full py-5 border border-gold/20 text-white font-black uppercase tracking-[0.6em] text-[0.7rem] flex items-center justify-center">
                        <Share2 size={16} className="mr-4" /> Copy Share Link
                     </button>
                  </div>

                  <div className="pt-12">
                     <h4 className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/20 mb-6">Technical Metadata</h4>
                     <ul className="space-y-3 text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/40">
                        <li className="flex justify-between"><span>Resolution</span> <span className="text-white">4096 x 2731</span></li>
                        <li className="flex justify-between"><span>Date Captured</span> <span className="text-white">Oct 16, 2026</span></li>
                        <li className="flex justify-between"><span>Camera</span> <span className="text-white">Sony Alpha 1</span></li>
                     </ul>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
