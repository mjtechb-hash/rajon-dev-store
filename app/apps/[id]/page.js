"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/router";
import Link from "next/link";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
// প্রফেশনাল লাসিড আইকন সমূহ
import { 
  ArrowLeft, 
  Download, 
  ShieldCheck, 
  Calendar, 
  HardDrive, 
  FileCode2, 
  CheckCircle2, 
  AlertTriangle 
} from "lucide-react";

export default function AppDetailsPage({ params: cryptoParams }) {
  // Next.js App Router-এ ডাইনামিক আইডি নেওয়ার জন্য
  const params = React.use(cryptoParams);
  const appId = params.id;
  
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!appId) return;

    const appRef = ref(db, `apps/${appId}`);
    const unsubscribe = onValue(appRef, (snapshot) => {
      const data = snapshot.val();
      setApp(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [appId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center space-y-4">
        <AlertTriangle className="w-12 h-12 text-amber-500" />
        <h2 className="text-xl font-bold text-slate-200">অ্যাপটি খুঁজে পাওয়া যায়নি!</h2>
        <p className="text-sm text-slate-500 max-w-xs">ইউআরএলটি ভুল হতে পারে অথবা অ্যাপটি ডাটাবেস থেকে মুছে ফেলা হয়েছে।</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-slate-900 text-slate-300 px-5 py-2.5 rounded-xl border border-slate-800 text-sm font-semibold hover:bg-slate-800 transition-all">
          <ArrowLeft className="w-4 h-4" />
          হোমপেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-6 max-w-4xl mx-auto space-y-8 animate-fade-in">
      
      {/* ব্যাক বাটন */}
      <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-xs font-bold uppercase tracking-wider transition-colors group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        পেছনে যান
      </Link>

      {/* প্রধান অ্যাপ ইনফো সেকশন */}
      <section className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          {/* অ্যাপ আইকন */}
          <div className="w-24 h-24 bg-slate-800 rounded-3xl overflow-hidden border border-slate-700/40 shadow-xl flex-shrink-0">
            <img 
              src={app.id === "spotify-premium" ? "https://cdn-icons-png.flaticon.com/512/174/174872.png" : (app.icon || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300")} 
              alt={app.name} 
              className="w-full h-full object-cover"
            />
          </div>
          {/* নাম ও টাইটেল */}
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-black text-white tracking-tight">{app.name}</h1>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-950 text-slate-400 px-2.5 py-1 rounded-md text-xs font-semibold border border-slate-800">
                {app.category}
              </span>
              {app.isTrending && (
                <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-md text-xs font-bold border border-emerald-500/20">
                  PREMIUM MOD
                </span>
              )}
            </div>
          </div>
        </div>

        {/* বড় কাস্টম ডাউনলোড বাটন */}
        <a 
          href={app.downloadUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/10 transition-all transform active:scale-98"
        >
          <Download className="w-5 h-5 stroke-[2.5]" />
          ডাউনলোড ফাইল ({app.size || "N/A"})
        </a>
      </section>

      {/* টেকনিক্যাল স্পেসিফিকেশন টেবিল (সব কাস্টমাইজড) */}
      <section className="bg-slate-900/20 border border-slate-800/60 rounded-3xl p-6 space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <FileCode2 className="w-4 h-4 text-emerald-500" />
          অ্যাপের বিস্তারিত তথ্য
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/40 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">ভার্সন</span>
            <span className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              {app.version || "1.0"}
            </span>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/40 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">ফাইলের সাইজ</span>
            <span className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-emerald-500" />
              {app.size || "N/A"}
            </span>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/40 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">নিরাপত্তা</span>
            <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ১০০% ভেরিফাইড
            </span>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/40 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">আপডেট তারিখ</span>
            <span className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-500" />
              জুন ২০২৬
            </span>
          </div>
        </div>
      </section>

      {/* অ্যাপ ডেসক্রিপশন বা বিবরণ */}
      <section className="bg-slate-900/20 border border-slate-800/60 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <Info className="w-4 h-4 text-emerald-500" />
          ফিচারস এবং বিবরণ
        </h3>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
          {app.description || "এই অ্যাপ্লিকেশনটির কোনো বিবরণ এখনো যুক্ত করা হয়নি। প্রজেক্ট অ্যাডমিন প্যানেল থেকে খুব শীঘ্রই বিবরণ আপডেট করা হবে।"}
        </p>
      </section>

    </div>
  );
}
