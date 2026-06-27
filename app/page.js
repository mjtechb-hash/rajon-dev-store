import React from 'react';

// ডেমো ডেটা (পরবর্তীতে এটি ফায়ারবেস ডাটাবেস থেকে লাইভ আসবে)
const demoApps = [
  {
    id: "capcut-pro",
    name: "CapCut Pro PC & Android",
    version: "12.1.0",
    size: "145MB",
    category: "Video Editor",
    rating: "4.8",
    icon: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isTrending: true
  },
  {
    id: "spotify-mod",
    name: "Spotify Premium MOD",
    version: "9.1.56",
    size: "72MB",
    category: "Music & Audio",
    rating: "4.5",
    icon: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=120&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isTrending: true
  }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      
      {/* ১. হিরো ব্যানার সেকশন */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-xl space-y-4">
          <span className="bg-brandGreen/20 text-brandGreen font-medium text-xs px-3 py-1 rounded-full border border-brandGreen/30">
            🔥 ট্রেন্ডিং কালেকশন
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
            সব প্রিমিয়াম অ্যাপ এবং মোড গেমস একদম ফ্রিতে!
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Rajon Dev Store-এ আপনাকে স্বাগতম। কোনো বিজ্ঞাপন ও ঝামেলা ছাড়াই হাই-স্পিডে ডাউনলোড করুন আপনার পছন্দের সব প্রিমিয়াম সফটওয়্যার।
          </p>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-brandGreen/5 blur-3xl rounded-full pointer-events-none" />
      </section>

      {/* ২. কুইক ক্যাটাগরি পিলস */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          📁 ক্যাটাগরি দিয়ে খুঁজুন
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {["সব অ্যাপ", "এআই টুলস", "ভিডিও এডিটর", "মিউজিক", "গেমস", "সোশ্যাল"].map((cat, idx) => (
            <button 
              key={idx} 
              className={`px-4 py-2 text-sm rounded-full font-medium transition whitespace-nowrap ${
                idx === 0 
                  ? 'bg-brandGreen text-slate-950 font-bold' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ৩. লেটেস্ট অ্যাপ গ্রিড (২ কলাম মোবাইলে, ৪ কলাম পিসিতে) */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          🚀 সদ্য আপডেটেড অ্যাপস
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {demoApps.map((app) => (
            <div 
              key={app.id} 
              className="bg-slate-900 hover:bg-slate-800/80 p-4 rounded-xl border border-slate-800/60 transition group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* অ্যাপ আইকন */}
                <div className="w-16 h-16 rounded-2xl bg-slate-800 overflow-hidden mb-3 border border-slate-700/50 group-hover:scale-105 transition duration-300">
                  <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                </div>
                {/* অ্যাপের নাম ও ক্যাটাগরি */}
                <h3 className="font-semibold text-sm text-slate-100 line-clamp-1 group-hover:text-brandGreen transition">
                  {app.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{app.category}</p>
              </div>

              {/* অ্যাপ মেটা ও সাইজ */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>⭐ {app.rating}</span>
                <span>{app.size}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
