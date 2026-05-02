/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BIO, COLORS } from '../constants';
import profilePic from '../assets/Profile_Pic.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 lg:px-6 relative overflow-hidden bg-[#F1EDE1] pt-28 lg:pt-32 pb-16 lg:pb-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] lg:opacity-[0.05]">
        <div className="absolute top-10 lg:top-20 -left-10 lg:left-10 w-64 lg:w-96 h-64 lg:h-96 border-[20px] lg:border-[40px] border-black rounded-full" />
        <div className="absolute bottom-10 lg:bottom-20 -right-10 lg:right-10 w-48 lg:w-64 h-48 lg:h-64 border-[20px] lg:border-[40px] border-black" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[clamp(2.5rem,10vw,6.5rem)] leading-[0.85] font-black uppercase tracking-tighter text-black mb-6">
                Hello<br />I'm <span style={{ color: COLORS.yellow }} className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Michael</span><br />Frederick
              </h1>
              <p className="text-base md:text-xl text-black/80 leading-relaxed font-medium max-w-xl border-l-[6px] lg:border-l-8 border-black pl-4 lg:pl-8 mb-4">
                {BIO}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-8"
            >
              <Link 
                to="/animation" 
                className="px-6 lg:px-8 py-3 lg:py-4 bg-black text-white text-sm lg:text-base font-bold uppercase tracking-widest rounded-xl hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.3)] transition-all"
                style={{ backgroundColor: COLORS.black }}
              >
                My Work
              </Link>
              <Link 
                to="/contact" 
                className="px-6 lg:px-8 py-3 lg:py-4 border-[3px] lg:border-4 border-black text-sm lg:text-base font-bold uppercase tracking-widest rounded-xl hover:bg-black hover:text-white transition-all"
              >
                Let's Talk
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="aspect-[4/5] bg-black rounded-[24px] lg:rounded-[40px] overflow-hidden border-[8px] lg:border-[12px] border-black shadow-[10px_10px_0px_rgba(34,34,34,0.1)] lg:shadow-[20px_20px_0px_rgba(34,34,34,0.1)]">
              <img 
                src={profilePic} 
                alt="Michael Frederick Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Artistic Elements */}
            <div 
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full z-[-1]"
              style={{ backgroundColor: COLORS.yellow }}
            />
            <div 
              className="absolute -bottom-10 -right-10 w-40 h-12 skew-x-[-20deg] z-[-1]"
              style={{ backgroundColor: COLORS.green }}
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-4 opacity-30">
        <div className="w-10 h-[2px] bg-black" />
        <span className="text-[10px] uppercase font-bold tracking-[0.4em]">Scroll</span>
        <div className="w-10 h-[2px] bg-black" />
      </div>
    </section>
  );
}
