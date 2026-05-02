import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '../constants';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const ROBERT_VIDEOS = [
  {
    id: 'Am2zKe3skdQ',
    title: 'Facial Setup & Controls',
    description: "A deep dive into Robert's facial rig, focusing on expressive controls and performance flexibility.",
    thumbnail: 'https://img.youtube.com/vi/Am2zKe3skdQ/0.jpg'
  },
  {
    id: 'eqUHW9OXbf0',
    title: 'Robert Rig Animation',
    description: "This project we animated on 3's to give a stop motion effect.",
    thumbnail: 'https://img.youtube.com/vi/eqUHW9OXbf0/0.jpg'
  }
];

export default function Rigging() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % ROBERT_VIDEOS.length);
    setHasPlayed(true);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + ROBERT_VIDEOS.length) % ROBERT_VIDEOS.length);
    setHasPlayed(true);
  };

  const currentVideo = ROBERT_VIDEOS[currentVideoIndex];

  return (
    <section className="min-h-screen pt-48 pb-32 bg-[#00B1FF]/5 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 mb-24">
        <div className="flex flex-col space-y-4 text-center items-center">
          <span className="text-sm lg:text-base font-bold uppercase tracking-[0.4em] text-[#00B1FF] mb-2">Technical Art & Rigging</span>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-tighter text-black leading-[0.85]">
            Character Rigging
          </h1>
          <p className="text-lg lg:text-xl text-black/70 font-medium max-w-2xl mt-8">
            Demonstrating robust automated systems and technical solutions designed to empower creative animation workflows.
          </p>
        </div>
      </div>

      {/* Robert Rig Showcase - High-Impact Centered Slider */}
      <div className="mb-48">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-between mb-12 gap-8 px-4 lg:px-6">
          <div className="flex flex-col text-center items-center">
            <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              The Robert Rig
            </h2>
            <div className="flex items-center gap-4 mt-6">
              <div className="h-1 w-12 bg-[#00B1FF]" />
              <span className="text-lg font-black uppercase tracking-[0.2em] text-black/40">Project Breakdown</span>
              <div className="h-1 w-12 bg-[#00B1FF]" />
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-visible" style={{ '--card-width': 'min(80vw, 850px)' } as any}>
          {/* Navigation Buttons overlaying the video */}
          <div 
            className="absolute z-20 w-full max-w-[1100px] mx-auto left-1/2 -translate-x-1/2 px-2 md:px-0 pointer-events-none flex justify-between items-center"
            style={{ top: 'calc(var(--card-width) * 9 / 32)' }}
          >
            <button 
              onClick={prevVideo}
              className="pointer-events-auto -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white hover:bg-black hover:text-white rounded-full border-4 border-black flex items-center justify-center transition-all duration-150 active:scale-95 shadow-[6px_6px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_rgba(0,0,0,1)] -translate-x-2 md:-translate-x-6"
            >
              <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10 pr-1" />
            </button>
            <button 
              onClick={nextVideo}
              className="pointer-events-auto -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#00B1FF] text-white hover:bg-black rounded-full border-4 border-black flex items-center justify-center transition-all duration-150 active:scale-95 shadow-[6px_6px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_rgba(0,0,0,1)] translate-x-2 md:translate-x-6"
            >
              <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10 pl-1" />
            </button>
          </div>

          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              //@ts-ignore
              '--card-gap': 'clamp(2rem, 4vw, 4rem)',
              gap: 'var(--card-gap)',
              transform: `translateX(calc(50vw - (var(--card-width) / 2) - (${currentVideoIndex} * (var(--card-width) + var(--card-gap)))))`,
            } as any}
          >
            {ROBERT_VIDEOS.map((video, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: i === currentVideoIndex ? 1 : 0.85,
                  opacity: i === currentVideoIndex ? 1 : 0.1,
                  y: i === currentVideoIndex ? 0 : 40
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-none w-[var(--card-width)] group"
              >
                <div className="relative aspect-video rounded-[16px] lg:rounded-[24px] overflow-hidden border-[6px] lg:border-[8px] border-black shadow-[16px_16px_0px_rgba(0,0,0,1)] lg:shadow-[24px_24px_0px_rgba(0,0,0,1)] bg-black">
                  {i === currentVideoIndex ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=${hasPlayed ? 1 : 0}&rel=0&modestbranding=1&showinfo=0`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <button 
                      onClick={() => {
                        setCurrentVideoIndex(i);
                        setHasPlayed(true);
                      }}
                      className="w-full h-full relative"
                    >
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/40 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-12 h-12 text-white fill-current" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>
                <div className={`mt-12 transition-all duration-500 text-center ${i === currentVideoIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black mb-4 leading-none">{video.title}</h3>
                  <p className="text-base lg:text-xl text-black/60 font-medium max-w-3xl mx-auto leading-relaxed">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
