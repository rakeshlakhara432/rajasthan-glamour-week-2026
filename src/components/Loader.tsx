import { motion } from 'motion/react';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-royal-dark flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <span className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2">
          RAJASTHAN
        </span>
        <div className="flex items-center w-full">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="h-[1px] bg-gold/50 flex-grow" 
          />
          <span className="text-[0.6rem] md:text-[0.7rem] tracking-[0.6em] uppercase font-bold text-gold px-4 whitespace-nowrap">
            Glamour Week
          </span>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="h-[1px] bg-gold/50 flex-grow" 
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[0.5rem] tracking-[1em] uppercase text-white font-light">Curating Legacies</span>
      </motion.div>
    </motion.div>
  );
}
