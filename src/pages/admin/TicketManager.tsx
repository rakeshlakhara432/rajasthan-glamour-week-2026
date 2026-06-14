import { motion } from 'motion/react';
import { 
  Ticket, 
  Search, 
  Download, 
  BarChart3, 
  QrCode, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  DollarSign, 
  TrendingUp,
  CreditCard,
  History,
  FileText
} from 'lucide-react';

export default function TicketManager() {
  const ticketTypes = [
    { type: 'Imperial Pass (VVIP)', price: '$5,000', sold: 42, total: 50, revenue: '$210,000' },
    { type: 'Royal Circle (VIP)', price: '$1,200', sold: 184, total: 250, revenue: '$220,800' },
    { type: 'General Entry', price: '$450', sold: 890, total: 1500, revenue: '$400,500' },
    { type: 'Designer Delegate', price: '$1,500', sold: 64, total: 100, revenue: '$96,000' },
  ];

  const recentTransactions = [
    { id: 'TX-9902', name: 'Rajesh Khanna', tier: 'Imperial Pass', status: 'completed', amount: '$5,000', date: '6 mins ago' },
    { id: 'TX-9901', name: 'Suhani Shah', tier: 'General Entry', status: 'completed', amount: '$450', date: '22 mins ago' },
    { id: 'TX-9900', name: 'Kabir Singh', tier: 'Royal Circle', status: 'flagged', amount: '$1,200', date: '1 hour ago' },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
         <div>
            <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-4 underline underline-offset-8 decoration-gold/20">Access Ledger</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white italic">Ticket <br /><span className="text-gold not-italic">Engine</span></h2>
         </div>
         
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all flex items-center">
               <FileText size={14} className="mr-4" /> Revenue Report (CSV)
            </button>
            <button className="px-10 py-4 bg-gold text-premium-white text-[0.6rem] font-black uppercase tracking-[0.4em] flex items-center">
               <QrCode size={14} className="mr-4" /> Global Key Check-In
            </button>
         </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {ticketTypes.map((ticket, i) => (
           <div key={i} className="bg-transparent border border-gold/10 p-12 group hover:border-gold/30 transition-all">
              <span className="text-gold font-black uppercase tracking-[0.4em] text-[0.55rem] block mb-4">{ticket.type}</span>
              <h3 className="text-3xl font-black text-white italic mb-10 leading-none">{ticket.price}</h3>
              
              <div className="space-y-6 pt-10 border-t border-gold/10">
                 <div className="flex justify-between items-end">
                    <span className="text-white/20 text-[0.5rem] font-black uppercase tracking-[0.1em]">Allocation Sold</span>
                    <span className="text-white text-[0.7rem] font-black">{ticket.sold} / {ticket.total}</span>
                 </div>
                 <div className="h-1 bg-royal-dark/40 backdrop-blur-md/5 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-gold" style={{ width: `${(ticket.sold/ticket.total)*100}%` }} />
                 </div>
                 <div className="flex justify-between items-end pt-4">
                    <span className="text-gold text-[0.5rem] font-black uppercase tracking-[0.1em]">Revenue Generated</span>
                    <span className="text-gold text-[0.8rem] font-black italic">{ticket.revenue}</span>
                 </div>
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Live Ledger Table */}
         <div className="lg:col-span-8 bg-transparent border border-gold/10 p-12">
            <div className="flex justify-between items-center mb-16 px-4">
               <div className="flex items-center space-x-6">
                  <History size={18} className="text-gold" />
                  <h4 className="text-xl font-black uppercase tracking-tighter italic text-white">Live Transactions</h4>
               </div>
               <div className="flex items-center space-x-8">
                  <div className="relative">
                     <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                     <input type="text" placeholder="TX-ID / NAME..." className="pl-10 pr-6 py-2 bg-royal-dark/40 backdrop-blur-md/5 border border-gold/10 text-[0.55rem] font-black uppercase tracking-[0.1em] outline-none" />
                  </div>
               </div>
            </div>

            <div className="space-y-6">
               <div className="grid grid-cols-6 gap-6 px-4 py-4 text-[0.5rem] font-black uppercase tracking-[0.4em] text-white/20 border-b border-gold/10">
                  <div className="col-span-2">Client Identity</div>
                  <div>Tier</div>
                  <div>Status</div>
                  <div>Amount</div>
                  <div className="text-right">Timestamp</div>
               </div>
               
               {recentTransactions.map((tx, i) => (
                 <div key={i} className="grid grid-cols-6 gap-6 px-4 py-8 bg-royal-dark/40 backdrop-blur-md/[0.01] hover:bg-royal-dark/40 backdrop-blur-md/[0.03] transition-all group items-center">
                    <div className="col-span-2">
                       <p className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-white group-hover:text-gold transition-colors">{tx.name}</p>
                       <p className="text-[0.5rem] font-black text-white/10 uppercase mt-1 italic">{tx.id}</p>
                    </div>
                    <div><span className="text-[0.55rem] font-black uppercase text-white/40">{tx.tier}</span></div>
                    <div>
                       <span className={`px-4 py-1 text-[0.45rem] font-black uppercase tracking-widest ${tx.status === 'completed' ? 'text-green-500 bg-green-500/10' : 'text-red-500 bg-red-500/10'}`}>
                          {tx.status}
                       </span>
                    </div>
                    <div><span className="text-[0.65rem] font-black text-white italic">{tx.amount}</span></div>
                    <div className="text-right"><span className="text-[0.55rem] font-black text-white/10 uppercase">{tx.date}</span></div>
                 </div>
               ))}
            </div>
            
            <button className="w-full mt-12 py-5 border border-gold/10 text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all uppercase">Load Historical Registry (2025 Archive)</button>
         </div>

         {/* Right Analytics Sidebar */}
         <div className="lg:col-span-4 space-y-12">
            <div className="bg-transparent border border-gold/10 p-12 space-y-12">
               <h4 className="text-xl font-black uppercase tracking-tighter italic flex justify-between items-center">
                  Payment Methods <CreditCard size={18} className="text-gold" />
               </h4>
               <div className="space-y-10">
                  {[
                    { label: 'Imperial Stripe Portal', val: '45.2%', count: '$420K' },
                    { label: 'UPI Direct (India)', val: '32.1%', count: '$298K' },
                    { label: 'Crypto (Web3 Connect)', val: '12.4%', count: '$115K' },
                    { label: 'Direct Wire Exchange', val: '10.3%', count: '$95K' },
                  ].map((pay, i) => (
                    <div key={i} className="space-y-4">
                       <div className="flex justify-between items-end">
                          <p className="text-[0.55rem] font-black uppercase tracking-[0.15em] text-white/40">{pay.label}</p>
                          <p className="text-[0.6rem] font-black text-gold italic">{pay.count}</p>
                       </div>
                       <div className="h-[2px] bg-royal-dark/40 backdrop-blur-md/5">
                          <motion.div initial={{ width: 0 }} animate={{ width: pay.val }} className="h-full bg-gold/50" />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-gold p-12 text-premium-white space-y-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none translate-x-12 -translate-y-12">
                  <QrCode size={128} />
               </div>
               <div className="flex items-center space-x-4">
                  <ShieldCheck size={24} />
                  <h4 className="text-2xl font-black uppercase tracking-tighter">Security Node</h4>
               </div>
               <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] opacity-70 leading-relaxed italic">System generated 927 unique digital keys. All assets are cryptographically signed for Season 2026.</p>
               <div className="space-y-8 pt-8">
                  <div className="flex justify-between border-b border-black/10 pb-4">
                     <span className="text-[0.55rem] font-black uppercase tracking-[0.1em]">Fraud Attempts Blocked</span>
                     <span className="text-xl font-black italic">12</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 pb-4">
                     <span className="text-[0.55rem] font-black uppercase tracking-[0.1em]">Verification Latency</span>
                     <span className="text-xl font-black italic">45ms</span>
                  </div>
               </div>
               <button className="w-full py-5 bg-black text-white text-[0.6rem] font-black uppercase tracking-[0.6em] hover:bg-royal-dark/40 backdrop-blur-md hover:text-black transition-all">Launch Auth Console</button>
            </div>
         </div>
      </div>
    </div>
  );
}
