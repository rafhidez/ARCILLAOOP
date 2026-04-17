import { motion } from 'motion/react';
import { UploadCloud } from 'lucide-react';

const categories = [
  { id: '01', title: 'Quiz', href: '#quiz-archive' },
  { id: '02', title: 'Activities', href: '#activities-archive' },
  { id: '03', title: 'Seatwork', href: '#seatwork-archive' },
  { id: '04', title: 'Exam', href: '#exams-archive' },
];

const ArchiveZone = ({ title, id }: { title: string; id: string }) => (
  <div id={id} className="flex flex-col gap-6 scroll-mt-40">
    <div className="flex items-center gap-4">
      <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-primary-ink">{title}</h3>
      <div className="h-px flex-1 bg-primary-ink/5" />
    </div>
    <div className="upload-zone group">
      <UploadCloud className="w-8 h-8 text-primary-ink/20 group-hover:text-accent-blue transition-colors duration-500" />
      <p className="text-[10px] uppercase tracking-widest text-primary-ink/40 font-bold">
        Drag & drop {title.toLowerCase()} files here
      </p>
    </div>
  </div>
);

export default function MidtermScreen() {
  return (
    <div className="min-h-screen pt-48 pb-32 px-12 max-w-7xl mx-auto">
      <header className="text-center mb-48">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hero-title mb-10 text-primary-ink"
        >
          Midterm
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl text-primary-ink/60 font-light max-w-2xl mx-auto leading-relaxed border-l border-primary-ink/10 pl-8 text-left italic"
        >
          An archival display of progress and performance metrics. Systematic organization of Quizzes, Activities, Seatwork, and Examinations.
        </motion.p>
      </header>

      <section className="max-w-6xl mx-auto px-8 mb-64">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col gap-8"
            >
              <span className="text-accent-blue font-bold text-xs tracking-[0.3em] uppercase">{cat.id} /</span>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary-ink">{cat.title}</h2>
                <a 
                  href={cat.href}
                  className="w-fit pb-1 border-b border-primary-ink/10 text-[10px] tracking-[0.2em] uppercase font-bold text-primary-ink/40 hover:text-accent-blue hover:border-accent-blue transition-all duration-300"
                >
                  view
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-surface-container py-48">
        <div className="max-w-6xl mx-auto px-12">
          <div className="mb-24">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary-ink/40 mb-4">Submission Archive</h4>
            <div className="h-px w-12 bg-accent-blue" />
          </div>
          
          <div className="grid grid-cols-1 gap-24">
            <ArchiveZone title="Quizzes" id="quiz-archive" />
            <ArchiveZone title="Activities" id="activities-archive" />
            <ArchiveZone title="Seatwork" id="seatwork-archive" />
            <ArchiveZone title="Exams" id="exams-archive" />
          </div>
        </div>
      </section>

      <footer className="pt-24 border-t border-primary-ink/5 text-center">
        <div className="flex justify-center gap-16 font-body text-[10px] tracking-[0.3em] uppercase text-primary-ink/40">
          <a href="#" className="hover:text-accent-blue transition-colors">Contact</a>
          <a href="#" className="hover:text-accent-blue transition-colors">Email</a>
          <a href="#" className="hover:text-accent-blue transition-colors">LinkedIn</a>
        </div>
        <p className="mt-12 opacity-20 text-[10px] uppercase tracking-[0.4em]">OOP JAVA</p>
      </footer>
    </div>
  );
}
