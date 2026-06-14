import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  Camera, 
  Scissors, 
  Calendar, 
  Ticket, 
  ShieldCheck, 
  Settings, 
  Bell, 
  LogOut,
  Menu,
  X,
  TrendingUp,
  Activity,
  Globe,
  Database,
  Search,
  Plus
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import sub-modules (we will create these next)
import AdminOverview from './AdminOverview';
import ModelManager from './ModelManager';
import DesignerManager from './DesignerManager';
import EventManager from './EventManager';
import TicketManager from './TicketManager';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3, category: 'Analytics' },
    { id: 'users', label: 'User Control', icon: Users, category: 'Management' },
    { id: 'models', label: 'Model Casting', icon: Camera, category: 'Management' },
    { id: 'designers', label: 'Designer Hub', icon: Scissors, category: 'Management' },
    { id: 'events', label: 'Event Master', icon: Calendar, category: 'Operations' },
    { id: 'tickets', label: 'Ticket Ledger', icon: Ticket, category: 'Operations' },
    { id: 'cms', label: 'Content (CMS)', icon: Globe, category: 'System' },
    { id: 'security', label: 'Security & Logs', icon: ShieldCheck, category: 'System' },
    { id: 'settings', label: 'Settings', icon: Settings, category: 'System' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <AdminOverview />;
      case 'models': return <ModelManager />;
      case 'designers': return <DesignerManager />;
      case 'events': return <EventManager />;
      case 'tickets': return <TicketManager />;
      default: return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
           <Database size={48} className="text-white/10 mb-8" />
           <h2 className="text-xl font-black uppercase tracking-tighter text-white/40">Section Under Reconstruction</h2>
           <p className="text-white/20 text-[0.6rem] font-black uppercase tracking-[0.4em] mt-4">Module deployment in progress for Season 2026</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] flex text-white font-sans selection:bg-gold selection:text-[#070707]">
      {/* Sidebar Navigation */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 320 : 0, opacity: isSidebarOpen ? 1 : 0 }}
        className="h-screen bg-[#0a0a0a] border-r border-white/5 fixed left-0 top-0 z-40 overflow-hidden"
      >
        <div className="p-10 border-b border-white/5 flex items-center justify-between">
            <Link to="/" className="flex flex-col">
                <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-1">RGW</span>
                <span className="text-sm font-black uppercase tracking-tighter text-white">IMPERIAL CMD</span>
            </Link>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/40"><X size={20} /></button>
        </div>

        <nav className="p-8 space-y-12">
            <div>
               {['Analytics', 'Management', 'Operations', 'System'].map((cat) => (
                 <div key={cat} className="mb-10 lg:mb-12">
                    <h4 className="text-white/20 text-[0.55rem] font-black uppercase tracking-[0.4em] mb-6 px-4">{cat}</h4>
                    <div className="space-y-2">
                       {menuItems.filter(item => item.category === cat).map((item) => (
                         <button
                           key={item.id}
                           onClick={() => setActiveTab(item.id)}
                           className={`w-full flex items-center px-4 py-4 transition-all group ${
                             activeTab === item.id ? 'bg-gold text-[#0a0a0a]' : 'text-white/40 hover:text-white hover:bg-white/5'
                           }`}
                         >
                           <item.icon size={16} className={`mr-4 transition-transform ${activeTab === item.id ? '' : 'group-hover:scale-110'}`} />
                           <span className="text-[0.65rem] font-black uppercase tracking-[0.2em]">{item.label}</span>
                           {item.id === 'models' && <span className="ml-auto bg-red-500 text-white text-[0.5rem] px-2 py-0.5 font-bold">12</span>}
                         </button>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/5 bg-[#0a0a0a]">
           <button className="w-full flex items-center px-4 py-4 text-red-500/50 hover:text-red-500 transition-colors uppercase text-[0.65rem] font-black tracking-[0.2em]">
              <LogOut size={16} className="mr-4" /> Sign Out Portal
           </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className={`flex-1 transition-all duration-500 ${isSidebarOpen ? 'ml-[320px]' : 'ml-0'}`}>
        {/* Header bar */}
        <header className="h-24 bg-[#0a0a0a]/50 backdrop-blur-3xl border-b border-white/5 sticky top-0 z-30 flex items-center justify-between px-12">
           <div className="flex items-center space-x-8">
              {!isSidebarOpen && (
                <button onClick={() => setIsSidebarOpen(true)} className="text-white/40 hover:text-gold transition-colors">
                  <Menu size={20} />
                </button>
              )}
              <div className="flex items-center space-x-4">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/30 italic">Live Season Feed: 2026</span>
              </div>
           </div>

           <div className="flex items-center space-x-10">
              <div className="relative group hidden md:block">
                 <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold transition-colors" />
                 <input 
                    type="text" 
                    placeholder="GLOBAL REGISTRY SEARCH..." 
                    className="bg-white/5 border border-white/5 pl-12 pr-6 py-3 text-[0.6rem] font-black uppercase tracking-[0.2em] w-80 outline-none focus:border-gold/50 transition-all"
                 />
              </div>
              <button className="relative text-white/40 hover:text-white transition-colors">
                 <Bell size={20} />
                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full" />
              </button>
              <div className="flex items-center space-x-6 border-l border-white/5 pl-10">
                  <div className="text-right">
                     <p className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-white">Imperial Admin</p>
                     <p className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-gold">Super User</p>
                  </div>
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center">
                     <Users size={18} className="text-gold" />
                  </div>
              </div>
           </div>
        </header>

        {/* Dynamic content rendering */}
        <div className="p-12">
           <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                 {renderContent()}
              </motion.div>
           </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
