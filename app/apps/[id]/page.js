"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import Link from "next/link";

export default function AppDetailsPage() {
  const params = useParams();
  const appId = params?.id;
  const [app, setApp] = useState(null);

  useEffect(() => {
    if (!appId) return;
    const appRef = ref(db, `apps/${appId}`);
    onValue(appRef, (snapshot) => {
      setApp(snapshot.val());
    });
  }, [appId]);

  if (!app) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <Link href="/" className="text-emerald-400 mb-4 block underline">
        ← ফিরে যান
      </Link>
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h1 className="text-3xl font-bold mb-4">{app.name}</h1>
        <p className="text-slate-400 mb-6">{app.description}</p>
        <a 
          href={app.downloadUrl} 
          className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-bold text-black inline-block"
        >
          ডাউনলোড করুন
        </a>
      </div>
    </div>
  );
}
