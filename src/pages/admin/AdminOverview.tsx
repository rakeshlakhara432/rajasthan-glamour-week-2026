import { motion } from 'motion/react';
import { 
  Users, 
  Camera, 
  Scissors, 
  Ticket, 
  TrendingUp, 
  Activity, 
  Globe, 
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Eye,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon, color = "gold" }: any) => (
  <div className="bg-transparent border border-gold/10 p-8 group hover:border-gold/30 transition-all">
    <div className="flex justify-between items-start mb-8">
      <div className={`w-12 h-12 bg-${color}/10 flex items-center justify-center text-${color}`}>
        <Icon size={20} />
      </div>
      <div className={`flex items-center space-x-2 text-[0.6rem] font-black uppercase ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        <span>{change >= 0 ? '+' : ''}{change}%</span>
        {change >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
      </div>
    </div>
    <p className="text-white/30 text-[0.6rem] font-black uppercase tracking-[0.4em] mb-4">{title}</p>
    <h3 className="text-4xl font-black text-white uppercase tracking-tighter">{value}</h3>
  </div>
);

export default function AdminOverview() {
  const recentActivities = [
    { type: 'registration', title: 'New Model Application', desc: 'Zara Khanna (Female Portfolio)', time: '2 mins ago', status: 'pending' },
    { type: 'payment', title: 'Ticket Sale: VIP Pass x4', desc: 'Order #8839 - $2,400 Total', time: '15 mins ago', status: 'success' },
    { type: 'designer', title: 'Designer Portfolio Upload', desc: 'Sabyasachi Mukherjee - Monsoon Collection', time: '1 hour ago', status: 'success' },
    { type: 'security', title: 'Failed Admin Login Attempt', desc: 'IP: 192.168.1.45 (Jaipur)', time: '3 hours ago', status: 'alert' }
  ];

  return (
    <div className="space-y-12">
      {/* Header Summary */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
         <div>
            <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-4 underline underline-offset-8 decoration-gold/20">Operational Pulse</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white italic">Imperial <br /><span className="text-gold not-italic">Intel</span></h2>
         </div>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all">Export Report (PDF)</button>
            <button className="px-10 py-4 bg-gold text-premium-white text-[0.6rem] font-black uppercase tracking-[0.4em]">Real-time Refresh</button>
         </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         <StatCard title="Total Visitors" value="42,891" change={12.5} icon={Users} />
         <StatCard title="Active Models" value="156" change={8.2} icon={Camera} />
         <StatCard title="Designer Guild" value="64" change={-2.1} icon={Scissors} />
         <StatCard title="Ticket Revenue" value="$482.5K" change={24.8} icon={Ticket} />
      </div>

      {/* Main Analytics Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Traffic Visualization Placeholder */}
         <div className="lg:col-span-8 bg-transparent border border-gold/10 p-12">
            <div className="flex justify-between items-center mb-16 px-4">
               <div className="flex items-center space-x-6">
                  <Activity className="text-gold" size={20} />
                  <h4 className="text-xl font-black uppercase tracking-tighter">Season Velocity</h4>
               </div>
               <div className="flex items-center space-x-12">
                  <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 rounded-full bg-gold" />
                     <span className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/40">Registrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 rounded-full bg-royal-dark/40 backdrop-blur-md/10" />
                     <span className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/40">Sales</span>
                  </div>
               </div>
            </div>
            
            <div className="h-80 flex items-end gap-x-6 px-4 mb-8">
               {[40, 70, 45, 90, 65, 80, 50, 85, 95, 70, 60, 40].map((h, i) => (
                 <div key={i} className="flex-1 group relative">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 1 }}
                      className={`w-full ${h > 80 ? 'bg-gold' : 'bg-royal-dark/40 backdrop-blur-md/5'} group-hover:bg-gold/80 transition-all`} 
                    />
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[0.5rem] font-black text-white/10 group-hover:text-gold transition-colors">OCT {10+i}</div>
                 </div>
               ))}
            </div>
         </div>

         {/* Right Sidebar: Recent Alerts/Actions */}
         <div className="lg:col-span-4 space-y-12">
            <div className="bg-transparent border border-gold/10 p-12 h-auto">
               <h4 className="text-xl font-black uppercase tracking-tighter mb-12 flex items-center">
                  <Clock size={18} className="mr-4 text-gold" /> Critical Feed
               </h4>
               <div className="space-y-10">
                  {recentActivities.map((act, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="w-10 h-10 border border-gold/10 shrink-0 flex items-center justify-center">
                          {act.status === 'success' && <CheckCircle2 size={12} className="text-green-500" />}
                          {act.status === 'pending' && <Eye size={12} className="text-gold" />}
                          {act.status === 'alert' && <AlertCircle size={12} className="text-red-500" />}
                       </div>
                       <div>
                          <p className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-white group-hover:text-gold transition-colors">{act.title}</p>
                          <p className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/20 mt-1 mb-2">{act.desc}</p>
                          <span className="text-[0.5rem] font-black text-white/10 uppercase tracking-widest">{act.time}</span>
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full mt-16 py-5 border border-gold/10 text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/30 hover:border-gold hover:text-gold transition-all">
                  Launch Live Console
               </button>
            </div>

            <div className="bg-gold p-12 text-premium-white">
               <div className="flex items-center space-x-6 mb-8">
                  <TrendingUp size={24} />
                  <h4 className="text-xl font-black uppercase tracking-tighter">Imperial Goal</h4>
               </div>
               <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] mb-10 opacity-70">Season 2026 Revenue Milestone</p>
               <div className="flex justify-between items-end mb-4">
                  <span className="text-3xl font-black">$750,000</span>
                  <span className="text-[0.6rem] font-black uppercase">64.3%</span>
               </div>
               <div className="h-2 bg-black/10 relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '64.3%' }}
                    className="absolute inset-y-0 left-0 bg-black"
                  />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
