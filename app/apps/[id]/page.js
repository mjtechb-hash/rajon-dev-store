"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

export default function AppDetailsPage() {
  const params = useParams();
  const appId = params?.id;
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!appId) return;
    const appRef = ref(db, `apps/${appId}`);
    onValue(appRef, (snapshot) => {
      setApp(snapshot.val());
      setLoading(false);
    });
  }, [appId]);

  if (loading) return <div className="text-white p-10">Loading...</div>;
  if (!app) return <div className="text-white p-10">অ্যাপটি পাওয়া যায়নি।</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 max-w-2xl mx-auto">
      <Link href="/" className="text-emerald-400 mb-6 block">← ফিরে যান</Link>
      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
        <h1 className="text-3xl font-bold mb-4">{app.name}</h1>
        <p className="text-slate-400 mb-6">{app.description}</p>
        <a href={app.downloadUrl} className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-bold">
          ডাউনলোড ফাইল
        </a>
      </div>
    </div>
  );
}
