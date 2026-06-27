"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { 
  Sparkles, 
  Search, 
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

  const filteredApps = apps.filter((app) => {
    const matchesCategory = activeCategory === "All" || app.category === activeCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-6 bg-slate-950 min-h-screen text-slate-100">
      
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 rounded-3xl p-8 md:p-14 border border-slate-800 shadow-2xl overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs px-4 py-2 rounded-full border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Rajon Dev Store v2.0
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            প্রিমিয়াম অ্যাপস ও <span className="text-emerald-400">মোড ফাইল</span>
          </h1>
          <div className="relative max-w-md mt-4">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="সার্চ করুন..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 pl-12 pr-4 py-3.5 rounded-2xl border border-slate-800 outline-none text-sm"
            />
          </div>
        </div>
      </section>

      {/* ক্যাটাগরি */}
      <section className="space-y-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-semibold border text-xs whitespace-nowrap ${
                activeCategory === cat ? 'bg-emerald-500 text-slate-950 border-emerald-500' : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              {cat === "All" ? "সব অ্যাপ" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* অ্যাপস গ্রিড */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {loading ? (
          <p>লোড হচ্ছে...</p>
        ) : (
          filteredApps.map((app) => (
            <Link 
              key={app.id}
              href={`/apps/${app.id}`}
              className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800 hover:border-emerald-500 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800 mb-4 overflow-hidden">
                <img 
                  src={app.id === "spotify-premium" ? "https://cdn-icons-png.flaticon.com/512/174/174872.png" : (app.icon || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7")} 
                  alt={app.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-sm text-slate-100 group-hover:text-emerald-400 transition">{app.name}</h3>
              <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] font-bold text-slate-400">
                v{app.version} • {app.size}
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
