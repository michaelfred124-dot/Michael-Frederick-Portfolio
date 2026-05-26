/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { COLORS, NAV_LINKS } from '../constants';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-20 bg-black text-white px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-black font-black text-2xl">
              MF.
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter">
              Michael Frederick
            </h3>
            <p className="text-white/60 font-medium text-lg max-w-sm">
              Helping stories come to life through technical animation and creative production.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.4em] text-white/40">Navigation</h4>
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map(link => (
                <Link key={link.name} to={link.href} className="text-lg font-bold hover:text-white/60 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.4em] text-white/40">Socials</h4>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://www.linkedin.com/in/michael-frederick-495333176?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-bold hover:text-white/60 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
            © 2026 Michael Frederick Portfolio
          </p>
          <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
