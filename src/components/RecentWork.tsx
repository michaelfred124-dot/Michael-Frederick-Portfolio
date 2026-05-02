import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { COLORS } from '../constants';

// Import local assets
import animationImg from '../assets/AnimRef.jpg';
import stickyFingersImg from '../assets/Sticky_Fingers_Poster.jpg';

export default function RecentWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const PORTFOLIO_CATEGORIES = [
    {
      title: 'Animation',
      description: 'Bringing stories to life through character movement and visual storytelling.',
      image: animationImg,
      link: '/animation',
      tags: ['3D Animation', 'Character Performance'],
      color: COLORS.green
    },
    {
      title: 'Rigging',
      description: 'Building technical systems and character setups for seamless production.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
      link: '/rigging',
      tags: ['Technical Art', 'Mechanics'],
      color: COLORS.blue
    },
    {
      title: 'Project Management',
      description: 'Leading creative teams and managing production pipelines from start to finish.',
      image: stickyFingersImg,
      link: '/production',
      tags: ['Leadership', 'Pipeline'],
      color: COLORS.purple
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-black px-4 lg:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20 gap-8">
          <div className="flex flex-col space-y-4">
            <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-white/40">Portfolio</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              Explore Work
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-[900px] lg:h-[600px] gap-4 lg:gap-6">
          {PORTFOLIO_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                flex: hoveredIndex === i ? 3 : hoveredIndex === null ? 1 : 0.8,
              }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative rounded-[24px] lg:rounded-[40px] overflow-hidden group border-4 border-white/10 flex-1 min-h-[150px]"
            >
              <Link to={category.link} className="absolute inset-0 z-10" />
              <img 
                src={category.image} 
                alt={category.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] lg:text-xs font-bold uppercase rounded-full tracking-widest border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <motion.div
                  animate={{
                    opacity: hoveredIndex === i || hoveredIndex === null ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter text-white mb-2 leading-none whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis">
                    {category.title}
                  </h3>
                </motion.div>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredIndex === i ? 'auto' : 0,
                    opacity: hoveredIndex === i ? 1 : 0,
                    marginTop: hoveredIndex === i ? 16 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-white/80 font-medium text-sm lg:text-base max-w-md line-clamp-3">
                    {category.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs lg:text-sm">
                    View Portfolio <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
