"use client";

import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

export default function HomePage() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("সব অ্যাপ");

  // ফায়ারবেস থেকে লাইভ ডেটা রিড করা
  useEffect(() => {
    const appsRef = ref(db, "apps");
    const unsubscribe = onValue(appsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // অবজেক্ট ডেটাকে অ্যারেতে রূপান্তর
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

  // ক্যাটাগরি পিলস
  const categories = ["সব অ্যাপ", "এআই টুলস", "ভিডিও এডিটর", "মিউজিক", "গেমস", "সোশ্যাল"];

  // ফিল্টারিং লজিক
  const filteredApps = activeCategory === "সব অ্যাপ" 
    ? apps 
    : apps.filter(app => app.category === activeCategory);

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      
      {/* ১. ফিউচারিস্টিক হিরো ব্যানার */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 rounded-3xl p-8 md:p-14 border border-slate-800/80 shadow-2xl overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brandGreen/10 rounded-full blur-3xl group-hover:bg-brandGreen/15 transition duration-500 pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-5">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-brandGreen font-semibold text-xs px-3.5 py-1.5 rounded-full border border-emerald-500/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brandGreen animate-pulse" />
            লাইভ প্রিমিয়াম স্টোর v2.0
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            ডাউনলোড করুন সেরা <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGreen to-emerald-400">মোড APK</span> ও প্রিমিয়াম অ্যাপস
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg">
            Rajon Dev Store-এ কোনো বিরক্তিকর পপ-আপ অ্যাড বা রিডাইরেক্ট লিঙ্ক নেই। সম্পূর্ণ নিরাপদ ও হাই-স্পিড সার্ভার থেকে সরাসরি ডাউনলোড করুন।
          </p>
        </div>
      </section>

      {/* ২. গ্লোয়িং ক্যাটাগরি ফিল্টার */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-200 tracking-wide flex items-center gap-2">
          <span className="w-1.5 h-5 bg-brandGreen rounded-full inline-block" />
          📁 ক্যাটাগরি দিয়ে খুঁজুন
        </h2>
        <div className="flex gap-2.5 overflow-x-auto pb-3 no-scrollbar scroll-smooth">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs md:text-sm rounded-full font-semibold border transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-brandGreen text-slate-950 border-brandGreen shadow-lg shadow-brandGreen/20 scale-105 font-bold' 
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ৩. লাইভ অ্যাপস ডাইনামিক গ্রিড */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-200 tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brandGreen rounded-full inline-block" />
            🚀 সদ্য আপডেটেড অ্যাপস
          </h2>
          <span className="text-xs text-slate-500 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
            মোট: {filteredApps.length} টি
          </span>
        </div>
        
        {loading ? (
          // লোডিং অ্যানিমেশন (শিমার ইফেক্ট)
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-slate-900 p-5 rounded-2xl border border-slate-800/50 animate-pulse h-48" />
            ))}
          </div>
        ) : filteredApps.length === 0 ? (
          // ডাটাবেস খালি থাকলে এই সুন্দর নোটিশটি দেখাবে
          <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-dashed border-slate-800 max-w-md mx-auto p-6 space-y-3">
            <div className="text-3xl">📦</div>
            <h3 className="text-base font-bold text-slate-300">এখনো কোনো অ্যাপ যুক্ত করা হয়নি!</h3>
            <p className="text-xs text-slate-500">
              ফায়ারবেস ডাটাবেসে ডেটা ইনপুট দেওয়া মাত্রই অ্যাপগুলো স্বয়ংক্রিয়ভাবে প্রফেশনাল স্টাইলে এখানে ভেসে উঠবে।
            </p>
          </div>
        ) : (
          // লাইভ অ্যাপস ডিসপ্লে গ্রিড
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {filteredApps.map((app) => (
              <div 
                key={app.id} 
                className="bg-slate-900/50 hover:bg-slate-900 p-4 rounded-2xl border border-slate-800/60 hover:border-brandGreen/40 shadow-md hover:shadow-xl hover:shadow-brandGreen/5 transition-all duration-300 group cursor-pointer flex flex-col justify-between relative transform hover:-translate-y-1"
              >
                {app.isTrending && (
                  <span className="absolute top-3 right-3 bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider z-10">
                    🔥 MOD
                  </span>
                )}
                <div>
                  {/* অ্যাপ আইকন */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 overflow-hidden mb-4 border border-slate-700/40 relative shadow-inner">
                    <img 
                      src={app.icon || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&auto=format&fit=crop&q=60"} 
                      alt={app.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                    />
                  </div>
                  {/* অ্যাপ নেম ও ক্যাটাগরি */}
                  <h3 className="font-bold text-sm md:text-base text-slate-100 line-clamp-1 group-hover:text-brandGreen transition duration-300">
                    {app.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{app.category}</p>
                </div>

                {/* মেটা ইনফো ও ভার্সন */}
                <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    v{app.version || "1.0"}
                  </span>
                  <span className="text-emerald-400/90">{app.size || "N/A"}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
