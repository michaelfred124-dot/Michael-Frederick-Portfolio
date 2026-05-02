import { motion } from 'motion/react';
import { COLORS } from '../constants';

const CASE_STUDIES = [
  {
    title: 'Implementing USD Workflow',
    image: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=2070&auto=format&fit=crop',
    category: 'Unreal Engine',
    color: COLORS.yellow
  },
  {
    title: 'Character Rigging Pipeline',
    image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2070&auto=format&fit=crop',
    category: 'Maya / Python',
    color: COLORS.blue
  },
  {
    title: 'Facial Capture Systems',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop',
    category: 'Motion Capture',
    color: COLORS.pink
  },
  {
    title: 'Real-time Retargeting',
    image: 'https://images.unsplash.com/photo-1633436374961-09b92742047b?q=80&w=2070&auto=format&fit=crop',
    category: 'MotionBuilder',
    color: COLORS.green
  }
];

export default function CaseStudies() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="flex flex-col space-y-4 mb-12 lg:mb-20 text-center items-center px-4 lg:px-6">
        <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Technical Deep Dive</span>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-[0.9]">
          Case Studies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-y-4 border-black">
        {CASE_STUDIES.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative aspect-square overflow-hidden cursor-pointer border-black ${
              index !== CASE_STUDIES.length - 1 ? 'border-b-4 md:border-b-0 md:border-r-4' : 'border-b-4 lg:border-b-0'
            } lg:border-r-0 max-lg:[&:nth-child(odd)]:border-r-4 max-lg:[&:nth-child(even)]:border-r-0`}
          >
            <div 
              className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 z-10" 
            />
            <img 
              src={study.image} 
              alt={study.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span 
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-black text-white rounded-full w-fit mb-4"
                style={{ backgroundColor: study.color, color: COLORS.black }}
              >
                {study.category}
              </span>
              <h3 className="text-white text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-tight">
                {study.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
