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
      <section className="relative bg-gradient-to-br from-slate-900 to-emerald-950/40 rounded-3xl p-8 border border-slate-800 shadow-2xl">
        <h1 className="text-3xl font-black">প্রিমিয়াম অ্যাপস ও মোড ফাইল</h1>
        <div className="relative max-w-md mt-4">
          <input 
            type="text" 
            placeholder="সার্চ করুন..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 p-3 rounded-xl border border-slate-800 outline-none"
          />
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredApps.map((app) => (
          <Link 
            key={app.id}
            href={`/apps/${app.id}`} 
            className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800 hover:border-emerald-500 transition-all cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-800 mb-4 overflow-hidden">
               <img src={app.id === "spotify-premium" ? "https://cdn-icons-png.flaticon.com/512/174/174872.png" : (app.icon || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7")} className="w-full h-full object-cover"/>
            </div>
            <h3 className="font-bold text-sm">{app.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
