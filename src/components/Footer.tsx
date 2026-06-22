import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="glass-panel text-white/60 pt-24 pb-12 mt-12 relative overflow-hidden shadow-[0_-10px_40px_rgba(229,193,88,0.05)] border-t border-white/10 rounded-t-[3rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(229,193,88,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 relative z-10">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex flex-col mb-8">
            <span className="font-display text-4xl font-bold tracking-tighter leading-none text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              RAJASTHAN
            </span>
            <span className="text-[0.6rem] tracking-[0.8em] uppercase font-black text-gold mt-2 drop-shadow-[0_0_8px_rgba(229,193,88,0.4)]">
              Glamour Week
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-8 font-light max-w-xs italic text-white/80">
            "The pinnacle of fashion excellence. Celebrating the sacred intersection of royal heritage and contemporary haute couture."
          </p>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/rajasthan_glamour_week" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-white/40 hover:text-gold hover:scale-110 transition-all cursor-pointer" size={20} />
            </a>
            <a href="https://m.facebook.com/profile.php?id=1074510172421874" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-white/40 hover:text-gold hover:scale-110 transition-all cursor-pointer" size={20} />
            </a>
            <Twitter className="text-white/40 hover:text-gold hover:scale-110 transition-all cursor-pointer" size={20} />
          </div>
        </div>

        <div>
          <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[0.6rem] mb-8">The Archive</h4>
          <ul className="space-y-4 text-[0.65rem] uppercase tracking-[0.3em] font-bold">
            <li><Link to="/" className="hover:text-white hover:translate-x-2 transition-all block">Digital Portal</Link></li>
            <li><Link to="/about" className="hover:text-white hover:translate-x-2 transition-all block">Agency Heritage</Link></li>
            <li><Link to="/events" className="hover:text-white hover:translate-x-2 transition-all block">Imperial Shows</Link></li>
            <li><Link to="/gallery" className="hover:text-white hover:translate-x-2 transition-all block">Visual Archive</Link></li>
            <li><Link to="/ceo" className="hover:text-white hover:translate-x-2 transition-all block">Leadership Office</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[0.6rem] mb-8">Empire Network</h4>
          <ul className="space-y-4 text-[0.65rem] uppercase tracking-[0.3em] font-bold">
            <li><Link to="/designers" className="hover:text-white hover:translate-x-2 transition-all block">The Couturiers</Link></li>
            <li><Link to="/contact" className="hover:text-white hover:translate-x-2 transition-all block">Acquisition Portal</Link></li>
            <li><Link to="/sponsors" className="hover:text-white hover:translate-x-2 transition-all block">Strategic Guilds</Link></li>
            <li><Link to="/participate-members" className="hover:text-white hover:translate-x-2 transition-all block">The Talents</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[0.6rem] mb-8">Newsletter</h4>
          <p className="text-xs text-white/60 mb-4 font-light leading-relaxed">
            Subscribe to receive exclusive access to designer showcases and VIP tickets.
          </p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold/50 focus:bg-white/10 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gold/20 text-gold rounded-full hover:bg-gold hover:text-white transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="mt-8 space-y-4 text-[0.65rem] uppercase tracking-[0.2em] font-bold">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-white/40">Organiser</span>
                  <span className="text-white">Naksh Lakhara</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-white/40">Founder</span>
                  <span className="text-white">Prince Laxkar</span>
              </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 flex flex-col md:flex-row justify-between items-center text-[0.55rem] uppercase tracking-[0.4em] text-white/30 font-bold relative z-10 gap-6">
        <p>&copy; {new Date().getFullYear()} Rajasthan Glamour Week. All Sovereign Rights Reserved.</p>
        <div className="flex space-x-8">
          <span className="hover:text-gold transition-colors cursor-pointer">Protocol</span>
          <span className="hover:text-gold transition-colors cursor-pointer">Jurisdiction</span>
          <span className="hover:text-gold transition-colors cursor-pointer">Encryption</span>
        </div>
      </div>
    </footer>
  );
}
