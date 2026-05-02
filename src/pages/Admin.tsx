import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'motion/react';
import { Upload, Check, AlertCircle, Loader2, LogIn } from 'lucide-react';
import { uploadFile } from '../lib/storage';
import { auth } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import { COLORS } from '../constants';

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/unauthorized-domain') {
        setError(`Domain not authorized. Please go to Firebase Console > Authentication > Settings > Authorized Domains and add this site's URL.`);
      } else {
        setError(`Login failed: ${err.message || 'Please try again.'}`);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
      setUrl(null);
    }
  };

  const handleUpload = async () => {
    if (!file || !user) return;

    setUploading(true);
    setError(null);
    try {
      const path = `uploads/${Date.now()}_${file.name}`;
      const downloadUrl = await uploadFile(file, path);
      setUrl(downloadUrl);
      setFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F1EDE1] flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-black" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F1EDE1] pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-3xl border-4 border-black shadow-[16px_16px_0px_rgba(0,0,0,1)]"
          >
            <LogIn className="w-16 h-16 mx-auto mb-6 text-black" />
            <h1 className="text-3xl font-black uppercase mb-4">Admin Access</h1>
            <p className="text-black/60 mb-8 font-medium">Please sign in to manage your portfolio assets.</p>
            <button
              onClick={handleLogin}
              className="w-full py-4 bg-black text-white rounded-xl font-black uppercase tracking-[0.2em] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.3)] transition-all flex items-center justify-center gap-3"
            >
              Sign in with Google
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1EDE1] pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black uppercase">
            Asset Manager
          </h1>
          <div className="flex items-center gap-3">
            <img src={user.photoURL || ''} alt="" className="w-8 h-8 rounded-full border-2 border-black" />
            <span className="text-xs font-bold uppercase tracking-wider">{user.displayName}</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl border-4 border-black shadow-[16px_16px_0px_rgba(0,0,0,1)]"
        >
          {/* Rest of the form remains the same */}
          <div className="space-y-6">
            <div className="relative border-4 border-dashed border-black/20 rounded-2xl p-12 text-center hover:border-black/40 transition-colors">
              <input 
                type="file" 
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*,application/pdf"
              />
              <Upload className="mx-auto w-12 h-12 mb-4 text-black/40" />
              <p className="font-bold text-black/60 uppercase tracking-widest text-center">
                {file ? file.name : "Drag & drop or Click to browse"}
              </p>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-100 border-2 border-red-500 text-red-700 rounded-xl font-bold">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}

            {url && (
              <div className="p-4 bg-green-100 border-2 border-green-500 text-green-700 rounded-xl font-bold break-all">
                <div className="flex items-center gap-3 mb-2">
                  <Check className="w-5 h-5" />
                  Successfully Uploaded!
                </div>
                <p className="text-xs font-mono select-all bg-white p-2 rounded border border-green-200">
                  {url}
                </p>
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className={`w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] transition-all
                ${!file || uploading 
                  ? 'bg-black/10 text-black/30 cursor-not-allowed' 
                  : 'bg-black text-white hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.3)]'
                }`}
              style={{ backgroundColor: !file || uploading ? undefined : COLORS.black }}
            >
              {uploading ? (
                <span className="flex items-center justify-center gap-3">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Uploading...
                </span>
              ) : 'Upload File'}
            </button>
          </div>
        </motion.div>

        <div className="mt-8 p-6 bg-yellow-400 rounded-2xl border-4 border-black font-bold uppercase tracking-tight">
          <p className="text-sm">
            💡 Upload your portfolio images or PDF reels here. Once uploaded, copy the URL and use it in your code to replace WordPress links.
          </p>
        </div>
      </div>
    </div>
  );
}
