import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-royal-dark text-white/30 pt-32 pb-12 border-t border-gold/30 relative overflow-hidden shadow-[0_-10px_40px_rgba(56,8,20,0.5)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-gold/10 pb-20 relative z-10">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex flex-col mb-10">
            <span className="font-display text-4xl font-bold tracking-tighter leading-none text-white uppercase italic">
              RAJASTHAN
            </span>
            <span className="text-[0.6rem] tracking-[0.8em] uppercase font-black text-gold mt-2">
              Glamour Week
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-12 font-light max-w-xs italic text-white/60">
            "The pinnacle of fashion excellence. Celebrating the sacred intersection of royal heritage and contemporary haute couture."
          </p>
          <div className="space-y-8">
            <div className="flex space-x-8">
              <Instagram className="text-gold/30 hover:text-gold transition-all cursor-pointer hover:scale-110" size={20} />
              <Facebook className="text-gold/30 hover:text-gold transition-all cursor-pointer hover:scale-110" size={20} />
              <Twitter className="text-gold/30 hover:text-gold transition-all cursor-pointer hover:scale-110" size={20} />
            </div>
            <div className="pt-8 border-t border-gold/10">
                <span className="text-[0.55rem] font-black uppercase tracking-[0.4em] text-white/20 block mb-4">Official Channels</span>
                <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-gold">rajasthan_glamour_week</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem] mb-10">The Archive</h4>
          <ul className="space-y-5 text-[0.65rem] uppercase tracking-[0.3em] font-black">
            <li><Link to="/" className="hover:text-white transition-colors">Digital Portal</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Agency Heritage</Link></li>
            <li><Link to="/events" className="hover:text-white transition-colors">Imperial Shows</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Visual Archive</Link></li>
            <li><Link to="/ceo" className="hover:text-white transition-colors">Leadership Office</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem] mb-10">Empire Network</h4>
          <ul className="space-y-5 text-[0.65rem] uppercase tracking-[0.3em] font-black">
            <li><Link to="/designers" className="hover:text-white transition-colors">The Couturiers</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Acquisition Portal</Link></li>
            <li><Link to="/sponsors" className="hover:text-white transition-colors">Strategic Guilds</Link></li>
            <li><Link to="/press" className="hover:text-white transition-colors">Global Press</Link></li>
          </ul>
        </div>

        <div className="space-y-12">
          <div>
            <h4 className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem] mb-10">Corporate Credits</h4>
            <div className="space-y-6 text-[0.65rem] uppercase tracking-[0.2em] font-black">
                <div className="border-l border-gold/30 pl-4">
                    <p className="text-white/20 mb-1">Founder</p>
                    <p className="text-white">Prince Laxkar</p>
                </div>
                <div className="border-l border-gold/30 pl-4">
                    <p className="text-white/20 mb-1">Organiser</p>
                    <p className="text-white">Naksh Lakhara</p>
                </div>
            </div>
          </div>
          
          <div className="pt-4">
            <h4 className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem] mb-6">HQ</h4>
            <p className="text-[0.65rem] leading-relaxed font-black uppercase tracking-[0.1em] text-white/50">
              Jaipur, Rajasthan <br />India
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 flex flex-col md:flex-row justify-between items-center text-[0.55rem] uppercase tracking-[0.4em] text-white/10 font-black relative z-10">
        <p>&copy; {new Date().getFullYear()} Rajasthan Glamour Week. All Sovereign Rights Reserved.</p>
        <div className="flex space-x-12 mt-8 md:mt-0">
          <span className="hover:text-white transition-colors cursor-pointer">Protocol</span>
          <span className="hover:text-white transition-colors cursor-pointer">Jurisdiction</span>
          <span className="hover:text-white transition-colors cursor-pointer">Encryption</span>
        </div>
      </div>
    </footer>
  );
}
