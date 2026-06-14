import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Designers() {
  const designers = [
    {
      name: "Aditya Marwar",
      style: "Heritage Couture",
      image: "/rajasthan-glamour-week-2026/images/rajasthan_embroidery_detail_1780979709712.png",
      description: "Specializing in revival of 18th-century Marwari wedding attire with a modern structural twist."
    },
    {
      name: "Sana Khayyam",
      style: "Avant-Garde Ethic",
      image: "/rajasthan-glamour-week-2026/images/hero_fashion_desert_1780979678685.png",
      description: "Known for blending nomadic desert silhouettes with high-tech sustainable fabrics."
    },
    {
      name: "Royal Rajpoot Studio",
      style: "Imperial Luxury",
      image: "/rajasthan-glamour-week-2026/images/runway_glamour_1780979695640.png",
      description: "The official designers for the Jaipur Royal family, bringing centuries of lineage to the runway."
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-transparent">
      <section className="py-40 bg-transparent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl pt-20">
            <span className="text-gold font-black uppercase tracking-[1em] text-[0.6rem] mb-10 block underline underline-offset-[16px] decoration-gold/20">The Visionary Circle</span>
            <h1 className="text-5xl md:text-[6rem] mb-12 leading-[0.8] uppercase font-black tracking-tighter mix-blend-difference">Master <br /><span className="italic font-normal text-gold">Couturiers</span></h1>
            <p className="text-xl md:text-2xl text-white/30 leading-relaxed font-light max-w-3xl border-l border-gold/30 pl-10 italic">
              "Honoring the souls of Rajasthan's heritage through the hands of the global creative elite."
            </p>
          </div>
        </div>
      </section>

      <section className="py-40 bg-royal-dark/40 backdrop-blur-md relative">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-gold/20 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-48 md:gap-64">
            {designers.map((designer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 lg:gap-40`}
              >
                <div className="w-full lg:w-3/5 relative group">
                  <div className="absolute -inset-4 md:-inset-8 border border-gold/20 group-hover:inset-0 transition-all duration-1000 -z-10" />
                  <div className="aspect-[4/5] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.3)]">
                    <img 
                      src={designer.image} 
                      alt={designer.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-[2.5s] ease-out group-hover:grayscale-0 group-hover:scale-110"
                    />
                  </div>
                  <div className={`absolute bottom-10 ${idx % 2 === 0 ? '-right-10' : '-left-10'} bg-transparent px-10 py-6 md:px-12 md:py-8 shadow-2xl hidden lg:block border border-gold/30`}>
                      <span className="text-gold text-[0.6rem] font-black uppercase tracking-[0.5em]">{designer.style}</span>
                  </div>
                </div>
                
                <div className="w-full lg:w-2/5 space-y-10 md:space-y-12">
                  <div className="relative">
                    <span className="text-gold font-black uppercase tracking-[0.4em] text-[0.6rem] mb-4 block">Archive 0{idx + 1}</span>
                    <h2 className="text-5xl md:text-8xl font-display italic leading-none text-premium-white tracking-tight">{designer.name}</h2>
                  </div>
                  <div className="space-y-8">
                    <p className="text-white/40 leading-relaxed text-lg md:text-xl font-light italic">
                        {designer.description}
                    </p>
                    <div className="h-[1px] w-24 bg-gold" />
                    <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-30">
                        <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-premium-white">Paris</span>
                        <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-premium-white">Jaipur</span>
                        <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-premium-white">Dubai</span>
                    </div>
                  </div>
                  <div className="pt-8">
                    <button className="w-full md:w-auto px-12 py-6 md:px-14 md:py-7 bg-transparent text-white text-[0.65rem] font-black uppercase tracking-[0.6em] hover:bg-gold hover:text-white transition-all flex items-center justify-center shadow-2xl">
                      Examine Portfolio <ExternalLink size={14} className="ml-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
