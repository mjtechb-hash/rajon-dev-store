"use client";

import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
// প্রিমিয়াম লুকের জন্য Lucide Icons ব্যবহার করা হয়েছে (কোনো ইমোজি নেই)
import { 
  Sparkles, 
  Search, 
  FolderRpc, 
  Layers, 
  Download, 
  Flame, 
  Info, 
  CheckCircle2, 
  Cpu 
} from "lucide-react";

export default function HomePage() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const appsRef = ref(db, "apps");
    const unsubscribe = onValue(appsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const appsList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setApps(appsList);
      } else {
        setApps([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const categories = ["All", "ভিডিও এডিটর", "মিউজিক", "এআই টুলস", "গেমস", "সোশ্যাল"];

  // সার্চ এবং ক্যাটাগরি ফিল্টারিং একসাথে
  const filteredApps = apps.filter((app) => {
    const matchesCategory = activeCategory === "All" || app.category === activeCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (app.description && app.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-6 animate-fade-in bg-slate-950 min-h-screen text-slate-100">
      
      {/* ১. কাস্টম ফিউচারিস্টিক হিরো সেকশন */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 rounded-3xl p-8 md:p-14 border border-slate-800/60 shadow-2xl overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 font-medium text-xs px-4 py-2 rounded-full border border-emerald-500/20 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            Rajon Dev Store v2.0 • Secure Server
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            ডাউনলোড করুন কাস্টম <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">প্রিমিয়াম অ্যাপস</span> ও মোড ফাইল
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg">
            সম্পূর্ণ নিরাপদ এবং কাস্টমাইজড হাই-স্পিড ডাউনলোড লিংক। কোনো রিডাইরেক্ট বা বিরক্তিকর পপ-আপ বিজ্ঞাপনের ঝামেলা নেই।
          </p>
          
          {/* লাইভ ডাইনামিক সার্চ বার */}
          <div className="relative max-w-md mt-4 group/search">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within/search:text-emerald-400 transition-colors" />
            <input 
              type="text" 
              placeholder="আপনার পছন্দের অ্যাপটি সার্চ করুন..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 pl-12 pr-4 py-3.5 rounded-2xl border border-slate-800 focus:border-emerald-500/60 outline-none text-sm font-medium text-slate-200 transition-all shadow-inner placeholder-slate-600"
            />
          </div>
        </div>
      </section>

      {/* ২. প্রফেশনাল ক্যাটাগরি ফিল্টার */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-500" />
          ক্যাটাগরি ফিল্টার
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs md:text-sm rounded-xl font-semibold border transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-lg shadow-emerald-500/10 scale-102 font-bold' 
                  : 'bg-slate-900/80 hover:bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat === "All" ? "সব অ্যাপ" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* ৩. লাইভ অ্যাপস ডাইনামিক গ্রিড */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-500" />
            সদ্য আপডেটেড অ্যাপস
          </h2>
          <span className="text-xs font-bold text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
            টোটাল: {filteredApps.length}
          </span>
        </div>
        
        {loading ? (
          /* প্রিমিয়াম শিমার লোডিং এফেক্ট */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 animate-pulse h-52" />
            ))}
          </div>
        ) : filteredApps.length === 0 ? (
          /* নো ডাটা মেসেজ */
          <div className="text-center py-20 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800 max-w-md mx-auto p-6 space-y-4">
            <Info className="w-8 h-8 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-300">কোনো অ্যাপ খুঁজে পাওয়া যায়নি</h3>
            <p className="text-xs text-slate-500">
              আপনার সার্চ করা নামটি অথবা ক্যাটাগরি ফায়ারবেস ডেটাবেসে এই মুহূর্তে নেই।
            </p>
          </div>
        ) : (
          /* লাইভ অ্যাপস ডিসপ্লে গ্রিড */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <div 
                key={app.id} 
                className="bg-slate-900/40 hover:bg-slate-900/90 p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-500/30 shadow-md hover:shadow-2xl hover:shadow-emerald-500/[0.02] transition-all duration-300 group flex flex-col justify-between relative transform hover:-translate-y-1"
              >
                {app.isTrending && (
                  <span className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-[9px] px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-2.5 h-2.5" />
                    MOD
                  </span>
                )}
                <div>
                  {/* কাস্টম অ্যাপ আইকন */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 overflow-hidden mb-4 border border-slate-700/30 relative shadow-inner">
                    <img 
                      src={app.icon || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=150"} 
                      alt={app.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                  </div>
                  {/* অ্যাপ নেম ও ক্যাটাগরি */}
                  <h3 className="font-bold text-sm md:text-base text-slate-100 line-clamp-1 group-hover:text-emerald-400 transition duration-300">
                    {app.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">{app.category}</p>
                </div>

                {/* মেটা ইনফো ও ভার্সন */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    v{app.version || "1.0"}
                  </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {app.size || "N/A"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
