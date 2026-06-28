"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { db } from "../../firebase"; // পাথটি ঠিক করুন (দুই ধাপ উপরে)
import { ref, onValue } from "firebase/database";

export default function AppDetailsPage() {
  const params = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    if (!params.id) return;
    const appRef = ref(db, `apps/${params.id}`);
    onValue(appRef, (snapshot) => {
      setApp(snapshot.val());
    });
  }, [params.id]);

  if (!app) return <div className="text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold">{app.name}</h1>
      <p>{app.description}</p>
      <a href={app.downloadUrl} className="bg-emerald-500 p-3 rounded-lg mt-4 block">ডাউনলোড</a>
    </div>
  );
}
