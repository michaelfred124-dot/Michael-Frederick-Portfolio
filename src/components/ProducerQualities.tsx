import { motion } from 'motion/react';
import { ShieldCheck, Clock, Users, Workflow } from 'lucide-react';
import { COLORS } from '../constants';

const QUALITIES = [
  {
    icon: Clock,
    title: 'Scope & Schedule',
    description: 'Keeping projects on track without burning out the team. I build realistic timelines and always buffer for the unexpected.',
    color: COLORS.green
  },
  {
    icon: Users,
    title: 'Cross-functional Translation',
    description: 'Bridging the gap between artists, engineers, and stakeholders. I make sure everyone is speaking the exact same language.',
    color: COLORS.blue
  },
  {
    icon: ShieldCheck,
    title: 'Risk Mitigation',
    description: 'Seeing the icebergs before the ship hits them. I proactively identify production bottlenecks and implement solutions early.',
    color: COLORS.yellow
  },
  {
    icon: Workflow,
    title: 'Resource Allocation',
    description: 'Putting the right people on the right tasks at the right time, maximizing efficiency while nurturing creative output.',
    color: COLORS.pink
  }
];

export default function ProducerQualities() {
  return (
    <section className="py-20 lg:py-32 bg-black text-white px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col space-y-4 mb-16 lg:mb-24 text-center items-center">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-white/40">The Secret Sauce</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] max-w-4xl">
            What makes a <span className="text-[#8E7AFE]">great project manager?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {QUALITIES.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 lg:p-12 rounded-[32px] border-4 border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border-4 border-black group-hover:scale-110 transition-transform shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: quality.color }}
              >
                <quality.icon className="w-8 h-8 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4">
                {quality.title}
              </h3>
              <p className="text-white/60 font-medium text-lg leading-relaxed">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
