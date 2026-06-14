import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Plus, 
  Edit2, 
  Trash2, 
  Copy, 
  Settings, 
  Globe, 
  Mic, 
  Monitor, 
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Users
} from 'lucide-react';
import { useState } from 'react';

export default function EventManager() {
  const [activeView, setActiveView] = useState<'schedule' | 'venue' | 'live'>('schedule');

  const events = [
    { id: 'EVT-001', title: 'The Grand Opulence Opening', date: 'Oct 12, 2026', venue: 'Jaipur Exhibition Center', status: 'confirmed', type: 'Runway' },
    { id: 'EVT-002', title: 'Royal Textile Summit', date: 'Oct 13, 2026', venue: 'City Palace Hall', status: 'draft', type: 'Conference' },
    { id: 'EVT-003', title: 'Imperial Gala & Awards', date: 'Oct 15, 2026', venue: 'Amber Fort Grounds', status: 'confirmed', type: 'Gala' },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
         <div>
            <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-4 underline underline-offset-8 decoration-gold/20">Operational Logistics</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white italic">Event <br /><span className="text-gold not-italic">Steering</span></h2>
         </div>
         
         <div className="flex bg-white/5 p-2 backdrop-blur-2xl border border-white/5">
            {(['schedule', 'venue', 'live'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveView(mode)}
                className={`px-10 py-3 text-[0.6rem] font-black uppercase tracking-[0.4em] transition-all ${
                  activeView === mode ? 'bg-gold text-[#0a0a0a]' : 'text-white/40 hover:text-white'
                }`}
              >
                {mode} Control
              </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Main Event Table / Controls */}
         <div className="lg:col-span-8 space-y-8">
            <div className="bg-[#0a0a0a] border border-white/5 p-12">
               <div className="flex justify-between items-center mb-16 px-4">
                  <div className="flex items-center space-x-6">
                     <Calendar size={18} className="text-gold" />
                     <h4 className="text-xl font-black uppercase tracking-tighter italic">Schedule Master</h4>
                  </div>
                  <button className="px-8 py-3 bg-white/5 border border-white/5 text-[0.55rem] font-black uppercase tracking-[0.4em] hover:text-gold transition-colors flex items-center">
                    <Plus size={12} className="mr-3" /> Create Manifest
                  </button>
               </div>

               <div className="space-y-6">
                  {events.map((evt) => (
                    <div key={evt.id} className="p-8 bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all group flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                       <div className="flex items-start space-x-8 max-w-sm">
                          <div className="w-14 h-14 border border-white/10 flex flex-col items-center justify-center shrink-0">
                             <span className="text-[0.45rem] font-black uppercase tracking-[0.1em] text-white/20">OCT</span>
                             <span className="text-xl font-black text-white italic">{evt.date.split(' ')[1].replace(',', '')}</span>
                          </div>
                          <div>
                             <h5 className="text-[0.8rem] font-black uppercase tracking-[0.1em] text-white group-hover:text-gold transition-colors">{evt.title}</h5>
                             <p className="text-[0.6rem] font-black text-white/30 mt-2 uppercase tracking-widest flex items-center">
                                <MapPin size={10} className="mr-3" /> {evt.venue}
                             </p>
                          </div>
                       </div>
                       
                       <div className="flex items-center space-x-12">
                          <div className="hidden lg:block text-right">
                             <span className="text-[0.5rem] font-black uppercase tracking-[0.2em] text-white/20 block mb-1">Status</span>
                             <span className={`text-[0.55rem] font-black uppercase tracking-[0.4em] ${evt.status === 'confirmed' ? 'text-green-500' : 'text-gold'}`}>
                                {evt.status}
                             </span>
                          </div>
                          <div className="flex space-x-4 border-l border-white/5 pl-12">
                             <button className="p-3 bg-white/5 text-white/40 hover:text-gold transition-colors"><Edit2 size={14} /></button>
                             <button className="p-3 bg-white/5 text-white/40 hover:text-blue-400 transition-colors"><Copy size={14} /></button>
                             <button className="p-3 bg-white/5 text-white/40 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-[#0a0a0a] border border-white/5 p-12 space-y-12">
                  <h4 className="text-xl font-black uppercase tracking-tighter flex items-center">
                     <Users size={18} className="mr-4 text-gold" /> Capacity Monitor
                  </h4>
                  <div className="space-y-10">
                     {[
                       { label: 'Exhibition Center', current: 1200, max: 2000 },
                       { label: 'City Palace Hall', current: 450, max: 500 },
                       { label: 'Amber Grounds', current: 0, max: 5000 },
                     ].map((cap, i) => (
                       <div key={i} className="space-y-4">
                          <div className="flex justify-between text-[0.6rem] font-black uppercase tracking-[0.2em]">
                             <span className="text-white/40">{cap.label}</span>
                             <span className="text-white italic">{cap.current} / {cap.max}</span>
                          </div>
                          <div className="h-1 bg-white/5 relative overflow-hidden">
                             <div className="absolute inset-y-0 left-0 bg-gold" style={{ width: `${(cap.current/cap.max)*100}%` }} />
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="bg-white p-12 text-[#0a0a0a] space-y-12">
                  <h4 className="text-xl font-black uppercase tracking-tighter flex items-center">
                     <AlertTriangle size={18} className="mr-4 text-gold" /> Critical Deadlines
                  </h4>
                  <div className="space-y-8">
                     {[
                       { label: 'Showstopper Booking', time: '14 Hours Leakage' },
                       { label: 'LED Wall Calibration', time: 'Tomorrow 08:00' },
                       { label: 'Final Stage Walk', time: 'Oct 12 10:00' },
                     ].map((d, i) => (
                       <div key={i} className="flex items-center space-x-6 border-l-2 border-gold pl-6 py-2">
                          <div>
                             <p className="text-[0.65rem] font-black uppercase tracking-[0.1em]">{d.label}</p>
                             <p className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-stone-400 mt-1">{d.time}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Sidebar: Control Features */}
         <div className="lg:col-span-4 space-y-12">
            <div className="bg-[#0a0a0a] border border-white/5 p-12 space-y-12">
               <h4 className="text-xl font-black uppercase tracking-tighter flex items-center">
                  <Mic size={18} className="mr-4 text-gold" /> Launch Announcement
               </h4>
               <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/30 leading-relaxed italic">Broadcast critical system-wide messages to all event stakeholders.</p>
               <div className="space-y-8">
                  <textarea 
                    className="w-full bg-white/5 border border-white/10 p-6 text-[0.7rem] font-black uppercase tracking-[0.1em] text-white h-32 outline-none focus:border-gold/30 resize-none"
                    placeholder="ENTER BROADCAST CONTENT..."
                  />
                  <div className="grid grid-cols-2 gap-4">
                     <button className="py-4 border border-white/5 text-[0.55rem] font-black uppercase tracking-[0.4em] hover:text-gold hover:border-gold/30 transition-all">Push to App</button>
                     <button className="py-4 border border-white/5 text-[0.55rem] font-black uppercase tracking-[0.4em] hover:text-gold hover:border-gold/30 transition-all">SMS Relay</button>
                  </div>
                  <button className="w-full py-5 bg-gold text-[#0a0a0a] text-[0.6rem] font-black uppercase tracking-[0.8em]">Deploy Signal</button>
               </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/5 p-12 space-y-12 h-auto">
               <h4 className="text-xl font-black uppercase tracking-tighter flex items-center">
                  <Monitor size={18} className="mr-4 text-gold" /> Feed Control
               </h4>
               <div className="space-y-8">
                  {[
                    { label: 'Main Stage Live Stream', status: 'Offline' },
                    { label: 'Backstage V-LOG Feed', status: 'Live' },
                    { label: 'Global Runway Access', status: 'Paused' },
                  ].map((f, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-white/[0.02]">
                       <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-white/40">{f.label}</span>
                       <div className="flex items-center space-x-4">
                          <span className={`w-2 h-2 rounded-full ${f.status === 'Live' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                          <span className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-white">{f.status}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
