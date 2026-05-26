/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, COLORS } from '../constants';

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md py-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-black/10' 
            : 'bg-transparent py-4 lg:py-8'
        } translate-y-0 opacity-100`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Link 
              to="/"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-black flex items-center justify-center text-white font-black text-xl hover:scale-105 active:scale-95 transition-transform shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              style={{ backgroundColor: COLORS.black }}
            >
              MF.
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6 items-center">
            {NAV_LINKS.map((link, i) => {
              const isActive = location.pathname === link.href;
              return (
                <MotionLink
                  key={link.name}
                  to={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    translateY: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 border-[3px] border-black text-[12px] font-black uppercase tracking-widest rounded-xl transition-all relative overflow-hidden group`}
                  style={{ 
                    backgroundColor: isActive ? link.color : (scrolled ? COLORS.offWhite : 'white'),
                    boxShadow: isActive 
                      ? `4px 4px 0px ${COLORS.black}` 
                      : `0px 0px 0px ${COLORS.black}`,
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ backgroundColor: link.color, zIndex: 0 }}
                  />
                  <span className="relative z-10 transition-colors duration-300" style={{ color: COLORS.black }}>
                    {link.name}
                  </span>
                  {/* Active Underline/Bar effect when scrolled */}
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-black"
                    />
                  )}
                </MotionLink>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-3 bg-white text-black border-[3px] border-black rounded-xl shadow-[4px_4px_1px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] flex flex-col p-8 lg:hidden bg-white"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-3xl font-black">MF.</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-3 border-[3px] border-black rounded-xl bg-white text-black shadow-[4px_4px_1px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-5xl font-black uppercase tracking-tighter transition-all flex items-center gap-4 ${isActive ? 'translate-x-4' : 'hover:translate-x-4'}`}
                      style={{ color: isActive ? link.color : COLORS.black }}
                    >
                      {isActive && <div className="w-8 h-8 rounded-full bg-black grow-0 shrink-0" />}
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto pt-12 border-t border-black/10"
            >
              <p className="text-black/40 font-bold uppercase tracking-widest text-sm mb-4">Let's Connect</p>
              <p className="text-xl font-black">frederick.e.michael@gmail.com</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
