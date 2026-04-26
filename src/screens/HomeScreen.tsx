import { motion } from 'motion/react';

export default function HomeScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl"
      >
        <span className="section-label">Selected Portfolio</span>
        <h1 className="hero-title mb-12">
          Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-primary-ink/60 font-light leading-relaxed max-w-2xl mx-auto opacity-80">
          Exploring the intersection of architectural rigor and digital fluidness through experimental visual narratives.
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 font-body text-[10px] uppercase tracking-[0.4em] text-primary-ink/40"
        >
          <a href="mailto:rafael922yeshua@gmail.com" className="hover:text-accent-blue transition-colors duration-500">Email</a>
          <a href="#" className="hover:text-accent-blue transition-colors duration-500">LinkedIn</a>
          <a href="#" className="hover:text-accent-blue transition-colors duration-500">Contact</a>
        </motion.div>
      </motion.div>
    </div>
  );
}
