/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SKILLS, COLORS } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-white px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Services</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-[0.9]">
              What I’m <br />Great At
            </h2>
          </div>
          <p className="max-w-xl text-black/60 text-lg lg:text-xl leading-relaxed font-medium">
            It’s never easy to sum up your passion in a few sentences, but I’d describe myself as a highly technical creator. I love exploring new technologies and getting deeply involved in tinkering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, i) => {
            const Icon = (LucideIcons as any)[skill.icon];
            return (
              <motion.div 
                key={skill.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 lg:p-10 rounded-[24px] lg:rounded-[32px] border-4 border-black lg:hover:translate-y-[-10px] transition-all group scroll-mt-32"
                id={skill.title === 'Rigger / Tech Art' ? 'rigging' : skill.title === 'Animation' ? 'animation-skill' : skill.title.toLowerCase()}
                style={{ 
                  backgroundColor: COLORS.offWhite,
                  boxShadow: `8px 8px 0px ${COLORS.black}`,
                }}
              >
                <div 
                  className="mb-8 p-4 rounded-2xl w-fit border-4 border-black group-hover:scale-110 transition-transform shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: skill.color }}
                >
                  {Icon && <Icon className="w-8 h-8 text-black" />}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-black">
                  {skill.title}
                </h3>
                <p className="text-black/70 font-medium leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-20 flex justify-center">
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05, translateY: -5 }}
            className="px-12 py-5 bg-black text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-[10px_10px_0px_rgba(34,34,34,0.2)] hover:shadow-[15px_15px_0px_rgba(34,34,34,0.3)] transition-all"
          >
            Explore My Journey
          </motion.a>
        </div>
      </div>
    </section>
  );
}
