import { motion } from 'motion/react';
import { COLORS } from '../constants';
import ProductionProjects from '../components/ProductionProjects';
import ProducerQualities from '../components/ProducerQualities';

export default function Production() {
  return (
    <div className="pt-24 lg:pt-32 bg-[#8E7AFE]/5">
      <section className="py-20 px-4 lg:px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-black/40 mb-6">Project Management Portfolio</span>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter text-black mb-8 leading-[0.9]">
              Managing <br/>Creative Chaos
            </h1>
            <p className="text-xl md:text-2xl text-black/80 font-medium max-w-2xl">
              With project management, I ensure that the creative vision is executed smoothly from start to finish. I handle the logistics so artists can focus on the art.
            </p>
          </motion.div>
        </div>
      </section>
      <ProductionProjects />
      <ProducerQualities />
    </div>
  );
}
