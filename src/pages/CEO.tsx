import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  Shield, 
  User, 
  Briefcase,
  ChevronRight,
  TrendingUp,
  Award,
  Globe,
  Plus
} from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CEO() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulated login logic for demonstration
    // In a real app, this would be an API call to a backend
    setTimeout(() => {
      if (email === 'admin@rgw.com' && password === 'admin123') {
        navigate('/admin');
      } else {
        setError('UNAUTHORIZED: IMPERIAL CREDENTIALS REJECTED');
        setIsLoading(false);
      }
    }, 2000);
  };

  const images = {
    ceo: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png", // Reusing hero image for CEO placeholder
    signature: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png"
  };

  return (
    <div className="min-h-screen pt-24 bg-[#0a0a0a] text-white">
      {/* CEO Profile Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
        <div className="lg:w-1/2 h-[60vh] lg:h-screen sticky top-0 bg-[#0a0a0a] overflow-hidden">
          <img 
            src={images.ceo} 
            className="w-full h-full object-cover grayscale opacity-40 scale-110" 
            alt="Prince Laxkar - CEO" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]" />
          <div className="absolute bottom-20 left-20">
             <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-6 underline underline-offset-8 decoration-gold/20">The Visionary Core</span>
             <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic text-white">
                Prince <br /><span className="text-gold not-italic">Laxkar</span>
             </h1>
             <p className="text-white/40 text-[0.7rem] font-black uppercase tracking-[0.4em] mt-8 flex items-center">
                <Globe size={14} className="mr-4 text-gold" /> Founder & CEO • Rajasthan Glamour Week
             </p>
          </div>
        </div>

        <div className="lg:w-1/2 p-12 md:p-32 bg-[#0a0a0a] relative flex flex-col justify-center">
            <div className="max-w-xl space-y-16">
               <div className="space-y-8">
                  <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block">Executive Manifesto</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-white italic">
                     Architecting the <br /><span className="text-gold not-italic">Desert Renaissance</span>
                  </h2>
               </div>

               <div className="space-y-10 text-white/40 text-lg md:text-xl font-light leading-relaxed italic border-l-4 border-gold/10 pl-12">
                  <p>
                    "Rajasthan is not just a place; it is a repository of a thousand years of aesthetic wisdom. My mission with RGW is to ensure this legacy is not preserved in museums, but celebrated on the global stage."
                  </p>
                  <p>
                    "We are building a sanctuary for talent where tradition meets modern innovation. Every stitch, every walk, and every design is a tribute to the imperial soul of our heritage."
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <div className="flex items-center space-x-6">
                        <TrendingUp size={20} className="text-gold" />
                        <span className="text-2xl font-black uppercase tracking-tighter">12.5M+</span>
                     </div>
                     <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/20">Economic Impact Forecast</p>
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center space-x-6">
                        <Award size={20} className="text-gold" />
                        <span className="text-2xl font-black uppercase tracking-tighter">240+</span>
                     </div>
                     <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/20">Global Guild Partners</p>
                  </div>
               </div>

               <div className="pt-12">
                  <button 
                    onClick={() => setShowLogin(true)}
                    className="flex items-center space-x-12 px-12 py-8 bg-white/5 border border-white/10 hover:border-gold hover:bg-gold/5 transition-all group"
                  >
                     <div className="text-left">
                        <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/30 block mb-2 group-hover:text-gold transition-colors">Internal Authorization</span>
                        <span className="text-lg font-black uppercase tracking-widest text-white italic">Access Admin Portal</span>
                     </div>
                     <ShieldCheck size={28} className="text-gold/40 group-hover:text-gold transition-colors" />
                  </button>
               </div>
            </div>
        </div>
      </section>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#0a0a0a]/95 backdrop-blur-3xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-lg bg-[#0e0e0e] border border-white/5 p-12 md:p-20 shadow-2xl relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl opacity-20" />
              
              <button 
                onClick={() => setShowLogin(false)}
                className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
                disabled={isLoading}
              >
                <Plus size={24} className="rotate-45" />
              </button>

              <div className="text-center mb-16">
                 <div className="w-20 h-20 bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
                    <Lock size={32} className="text-gold" />
                 </div>
                 <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] block mb-4">Access Protocol</span>
                 <h3 className="text-3xl font-black uppercase tracking-tighter text-white italic">Sovereign <br /><span className="text-gold not-italic uppercase">Authentication</span></h3>
              </div>

              <form onSubmit={handleLogin} className="space-y-10">
                 {error && (
                   <motion.div 
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="p-6 bg-red-500/10 border border-red-500/20 text-red-500 text-[0.6rem] font-black uppercase tracking-[0.2em] text-center"
                   >
                     {error}
                   </motion.div>
                 )}

                 <div className="space-y-8">
                    <div className="relative group">
                       <User size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold transition-colors" />
                       <input 
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ADMIN IDENTIFIER..."
                          className="w-full bg-white/5 border border-white/5 pl-16 pr-8 py-5 text-[0.7rem] font-black uppercase tracking-[0.2em] text-white outline-none focus:border-gold/30 transition-all"
                       />
                    </div>
                    <div className="relative group">
                       <Key size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold transition-colors" />
                       <input 
                          required
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="ACCESS KEY..."
                          className="w-full bg-white/5 border border-white/5 pl-16 pr-16 py-5 text-[0.7rem] font-black uppercase tracking-[0.2em] text-white outline-none focus:border-gold/30 transition-all"
                       />
                       <button 
                         type="button"
                         onClick={() => setShowPassword(!showPassword)}
                         className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                       >
                         {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                       </button>
                    </div>
                 </div>

                 <button 
                   type="submit" 
                   disabled={isLoading}
                   className="w-full py-8 bg-gold text-[#0a0a0a] font-black uppercase tracking-[1em] text-[0.8rem] hover:bg-white transition-all shadow-2xl relative flex items-center justify-center overflow-hidden"
                 >
                   {isLoading ? (
                     <div className="flex space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full animate-bounce" />
                        <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full animate-bounce [animation-delay:0.4s]" />
                     </div>
                   ) : (
                     <>
                      Finalize Access <ArrowRight size={20} className="ml-8" />
                     </>
                   )}
                 </button>
                 
                 <div className="text-center">
                    <p className="text-[0.55rem] font-black uppercase tracking-[0.4em] text-white/10 italic">
                       Enterprise Shield Protected • RGW 2026
                    </p>
                 </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-40 bg-white">
          <div className="container mx-auto px-6">
             <div className="flex flex-col md:flex-row gap-24 items-center">
                <div className="md:w-1/2">
                   <img src={images.signature} className="w-full aspect-[4/3] object-cover grayscale shadow-2xl" />
                </div>
                <div className="md:w-1/2 space-y-12">
                   <div className="w-20 h-2 bg-gold" />
                   <h3 className="text-4xl font-black uppercase tracking-tighter text-[#0a0a0a] leading-none mb-8 italic">The Imperial <br />Standard</h3>
                   <p className="text-stone-500 text-lg font-light leading-relaxed">
                      Every registration, every partnership, and every digital asset is vetted by our Core Integrity Board. We maintain the highest standards of luxury and cultural respect in the digital sphere.
                   </p>
                   <div className="grid grid-cols-2 gap-8 pt-8">
                      <div>
                         <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-stone-400 block mb-2">Vetting Protocol</span>
                         <span className="text-xl font-black text-[#0a0a0a]">96-Hour Cycle</span>
                      </div>
                      <div>
                         <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-stone-400 block mb-2">Security Tier</span>
                         <span className="text-xl font-black text-gold">AES-256 BANKING</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
      </section>
    </div>
  );
}
