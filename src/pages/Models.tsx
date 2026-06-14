import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  MapPin, 
  CheckCircle, 
  Search, 
  ChevronRight, 
  X, 
  Upload, 
  Video, 
  Star, 
  TrendingUp, 
  Award,
  Filter
} from 'lucide-react';
import { useState, FormEvent } from 'react';

type ModelCategory = 'female' | 'male' | 'kids';

interface Model {
  id: string;
  name: string;
  category: ModelCategory;
  height: string;
  measurements: string;
  experience: string;
  image: string;
  rating: number;
}

export default function Models() {
  const [activeCategory, setActiveCategory] = useState<ModelCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [showRegForm, setShowRegForm] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  const images = {
    model1: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png",
    model2: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png",
    model3: "/rajasthan-glamour-week-2026/images/fashion_backstage_1780979727578.png",
    featured: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png"
  };

  const models: Model[] = [
    { id: '1', name: 'Zara Khanna', category: 'female', height: '178 cm', measurements: '34-24-35', experience: '5 Years', image: images.model1, rating: 5 },
    { id: '2', name: 'Aryan Rathore', category: 'male', height: '188 cm', measurements: '40-32-38', experience: '3 Years', image: images.model2, rating: 4.8 },
    { id: '3', name: 'Kabir Singh', category: 'male', height: '185 cm', measurements: '39-31-37', experience: '4 Years', image: images.model3, rating: 4.9 },
    { id: '4', name: 'Ananya Mehra', category: 'female', height: '175 cm', measurements: '32-23-34', experience: '2 Years', image: images.model1, rating: 4.7 },
    { id: '5', name: 'Rohan Verma', category: 'male', height: '190 cm', measurements: '42-34-40', experience: '7 Years', image: images.model2, rating: 5 },
    { id: '6', name: 'Sia Malhotra', category: 'kids', height: '127 cm', measurements: 'N/A', experience: '1 Year', image: images.model3, rating: 4.6 }
  ];

  const filteredModels = models.filter(m => {
    const matchesCategory = activeCategory === 'all' || m.category === activeCategory;
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRegistration = (e: FormEvent) => {
    e.preventDefault();
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      setShowRegForm(false);
    }, 4000);
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

      {/* Featured Model of the Month */}
      <section className="py-40 bg-royal-dark/40 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-royal-dark/40 backdrop-blur-md -z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
               <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-8">Hall of Excellence</span>
               <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-premium-white leading-none mb-12">Featured <br /><span className="text-gold not-italic">Of the Month</span></h2>
               <p className="text-white/60 italic text-xl leading-relaxed mb-12 max-w-xl">
                 "A breathtaking representation of desert grace. Zara Khanna has redefined the imperial aesthetic for Season 2026."
               </p>
               <div className="grid grid-cols-2 gap-8 mb-12 border-l-4 border-gold pl-12">
                  <div>
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/40 block mb-2">Global Ranking</span>
                    <span className="text-2xl font-black text-premium-white">#01 IN PORTFOLIO</span>
                  </div>
                  <div>
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/40 block mb-2">Trust Score</span>
                    <span className="text-2xl font-black text-gold">99.8% READY</span>
                  </div>
               </div>
               <button className="flex items-center space-x-6 text-premium-white font-black uppercase tracking-[0.8em] text-[0.7rem] group">
                  <span>View Full Profile</span>
                  <ChevronRight size={16} className="group-hover:translate-x-4 transition-transform text-gold" />
               </button>
            </div>
            <div className="lg:w-1/2 aspect-[3/4] relative">
               <img src={images.model1} className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-[2s]" alt="Featured Model" />
               <div className="absolute -bottom-10 -left-10 bg-transparent p-12 text-white shadow-2xl border border-gold/10">
                  <h3 className="text-3xl font-black tracking-tighter uppercase italic text-white">Zara Khanna</h3>
                  <p className="text-gold text-[0.6rem] font-black uppercase tracking-[0.4em] mt-3">Elite International</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Browser */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-xl">
              <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-8">The Registry</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white leading-none">Casting <br /><span className="text-gold italic font-display lowercase pl-20">inventory</span></h2>
            </div>
            
            <div className="w-full lg:w-auto space-y-8">
              <div className="flex flex-wrap gap-4 bg-royal-dark/40 backdrop-blur-md/5 p-2 backdrop-blur-2xl border border-gold/10">
                {(['all', 'male', 'female', 'kids'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-3 text-[0.55rem] font-black uppercase tracking-[0.4em] transition-all ${
                      activeCategory === cat ? 'bg-gold text-premium-white' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Search size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-gold/50" />
                <input 
                  type="text" 
                  placeholder="SEARCH BY NAME..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full lg:w-80 pl-16 pr-8 py-4 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/20 text-white text-[0.6rem] font-black uppercase tracking-[0.2em] outline-none focus:border-gold transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredModels.map((model) => (
              <motion.div
                key={model.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer bg-royal-dark/40 backdrop-blur-md/[0.02] border border-gold/10 relative overflow-hidden"
                onClick={() => setSelectedModel(model)}
              >
                <div className="aspect-[3/4] relative overflow-hidden border-b border-gold/10">
                  <img src={model.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110" alt={model.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="px-4 py-2 bg-gold text-premium-white text-[0.5rem] font-black uppercase tracking-[0.3em] flex items-center">
                       <Award size={10} className="mr-2" /> Top Rated
                     </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-gold transition-colors">{model.name}</h3>
                    <div className="flex items-center text-gold">
                      <Star size={12} fill="currentColor" />
                      <span className="text-[0.7rem] font-black ml-2">{model.rating}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-gold/10 pt-8 mb-4">
                    <div>
                      <span className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/30 block">Height</span>
                      <span className="text-[0.7rem] text-white uppercase font-black">{model.height}</span>
                    </div>
                    <div>
                      <span className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/30 block">Exp.</span>
                      <span className="text-[0.7rem] text-white uppercase font-black">{model.experience}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Details Modal */}
      <AnimatePresence>
        {selectedModel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-transparent/95 backdrop-blur-3xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl bg-[#0e0e0e] border border-gold/10 overflow-hidden flex flex-col md:flex-row relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedModel(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 bg-royal-dark/40 backdrop-blur-md/5 flex items-center justify-center text-white hover:bg-gold transition-all"
              >
                <X size={20} />
              </button>

              <div className="md:w-1/2 h-[500px] md:h-auto relative">
                <img src={selectedModel.image} className="w-full h-full object-cover" alt={selectedModel.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] to-transparent" />
                <div className="absolute bottom-12 left-12">
                   <span className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem] block mb-2">{selectedModel.category} Talent</span>
                   <h2 className="text-5xl font-black uppercase tracking-tighter text-white italic">{selectedModel.name}</h2>
                </div>
              </div>

              <div className="md:w-1/2 p-12 md:p-20 space-y-12 bg-[#0e0e0e]">
                 <div className="grid grid-cols-2 gap-12 text-white">
                    <div className="space-y-2">
                       <span className="text-white/30 text-[0.6rem] font-black uppercase tracking-[0.4em]">Height</span>
                       <p className="font-black text-xl">{selectedModel.height}</p>
                    </div>
                    <div className="space-y-2">
                       <span className="text-white/30 text-[0.6rem] font-black uppercase tracking-[0.4em]">Experience</span>
                       <p className="font-black text-xl">{selectedModel.experience}</p>
                    </div>
                    <div className="space-y-2">
                       <span className="text-white/30 text-[0.6rem] font-black uppercase tracking-[0.4em]">Measurements</span>
                       <p className="font-black text-xl">{selectedModel.measurements}</p>
                    </div>
                    <div className="space-y-2">
                       <span className="text-white/30 text-[0.6rem] font-black uppercase tracking-[0.4em]">Current Base</span>
                       <p className="font-black text-xl uppercase italic">Milan / Jaipur</p>
                    </div>
                 </div>

                 <div className="p-8 bg-royal-dark/40 backdrop-blur-md/5 border-l-2 border-gold">
                    <h4 className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem] mb-4 flex items-center"><TrendingUp size={14} className="mr-3" /> Career Highlights</h4>
                    <p className="text-white/40 text-[0.75rem] leading-relaxed uppercase tracking-[0.1em]">Worked with leading international brands including Sabyasachi, Vogue Italia, and Hermès. Winner of the 2025 Desert Glow Award.</p>
                 </div>

                 <button className="w-full py-6 bg-gold text-premium-white font-black uppercase tracking-[0.8em] text-[0.7rem] hover:bg-royal-dark/40 backdrop-blur-md transition-all shadow-2xl">
                    Request Portfolio
                 </button>
              </div>
            </motion.div>
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
