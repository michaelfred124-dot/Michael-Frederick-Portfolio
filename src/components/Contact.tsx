/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { COLORS } from '../constants';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMessage('');

    try {
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
      
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      try {
        handleFirestoreError(error, OperationType.WRITE, 'messages');
      } catch (finalError: any) {
        // The error thrown by handleFirestoreError is a JSON string
        try {
          const parsed = JSON.parse(finalError.message);
          setErrorMessage(parsed.error);
        } catch {
          setErrorMessage("Something went wrong. Please try again.");
        }
      }
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Contact</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              Lets Work<br />Together!
            </h2>
            <p className="text-lg lg:text-2xl text-black/60 font-medium max-w-md">
              If you’re working on an exciting project and need someone with strong animation and production skills, I’d love to connect.
            </p>
            <div className="flex flex-col space-y-2 lg:space-y-4 pt-4 lg:pt-8">
              <div className="text-xs lg:text-sm font-bold uppercase tracking-widest text-black/40">Based in</div>
              <div className="text-lg lg:text-xl font-black uppercase">San Francisco, CA</div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 lg:p-12 rounded-[24px] lg:rounded-[40px] border-[4px] lg:border-[6px] border-black"
            style={{ 
              backgroundColor: COLORS.offWhite,
              boxShadow: `10px 10px 0px ${COLORS.black}`,
            }}
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase mb-2">Message Sent!</h3>
                  <p className="text-black/60 font-bold">I'll get back to you as soon as possible.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-black text-white font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-transform"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs uppercase font-black tracking-widest text-black/40 ml-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tell me who you are"
                    className="w-full p-5 bg-white border-4 border-black rounded-2xl font-bold placeholder:text-black/20 focus:outline-none focus:ring-4 focus:ring-yellow-200 transition-all"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs uppercase font-black tracking-widest text-black/40 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Where can I reach you?"
                    className="w-full p-5 bg-white border-4 border-black rounded-2xl font-bold placeholder:text-black/20 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs uppercase font-black tracking-widest text-black/40 ml-2">Your Message</label>
                  <textarea 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can I help you?"
                    rows={4}
                    className="w-full p-5 bg-white border-4 border-black rounded-2xl font-bold placeholder:text-black/20 focus:outline-none focus:ring-4 focus:ring-green-200 transition-all resize-none"
                  />
                </div>
                
                {status === 'error' && (
                  <div className="p-4 bg-red-100 border-2 border-red-500 rounded-xl flex items-center gap-3 text-red-700 font-bold text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>{errorMessage || "Something went wrong. Please try again."}</p>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full p-5 lg:p-6 bg-black text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_rgba(0,0,0,0.1)] active:translate-y-0 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: COLORS.black }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  <Send className={`w-5 h-5 ${status === 'loading' ? 'animate-pulse' : ''}`} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

