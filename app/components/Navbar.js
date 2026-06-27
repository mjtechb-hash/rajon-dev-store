"use client";

import React from "react";
import Link from "next/link";
// লাসিড আইকন লাইব্রেরি ব্যবহার
import { Store, Search, User, ShieldAlert } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-950 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
      
      {/* লোগো সেকশন - কাস্টম ডিজাইন */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform">
          <Store className="w-5 h-5 text-slate-950 stroke-[2.5]" />
        </div>
        <span className="text-xl font-black text-white tracking-tight">
          Rajon Dev <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Store</span>
        </span>
      </Link>

      {/* নেভিগেশন মেনু ও বাটন সমূহ */}
      <div className="flex items-center gap-4">
        
        {/* অ্যাডমিন প্যানেল লিংক (পরবর্তীতে আমাদের কাজে লাগবে) */}
        <Link 
          href="/admin" 
          className="p-2.5 bg-slate-900/60 text-slate-400 hover:text-emerald-400 border border-slate-900 hover:border-emerald-500/20 rounded-xl transition-all"
          title="অ্যাডমিন ড্যাশবোর্ড"
        >
          <ShieldAlert className="w-4 h-4" />
        </Link>

        {/* সাইন ইন / প্রোফাইল বাটন (Firebase Auth এর জন্য প্রস্তুত করা) */}
        <button 
          className="flex items-center gap-2 bg-gradient-to-r from-slate-900 to-slate-900/90 hover:from-emerald-500 hover:to-teal-600 text-slate-300 hover:text-slate-950 px-4 py-2 rounded-xl border border-slate-800 hover:border-emerald-500 text-xs font-bold tracking-wide transition-all shadow-md active:scale-95"
        >
          <User className="w-4 h-4" />
          <span>লগইন</span>
        </button>

      </div>
    </nav>
  );
}
