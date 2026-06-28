"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

export default function HomePage() {
  const [apps, setApps] = useState([]);
  
  useEffect(() => {
    const appsRef = ref(db, "apps");
    onValue(appsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const appsList = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        setApps(appsList);
      }
    });
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen p-6 text-white">
      <h1 className="text-2xl font-bold mb-8">Rajon Dev Store</h1>
      <div className="grid grid-cols-2 gap-4">
        {apps.map((app) => (
          <Link key={app.id} href={`/apps/${app.id}`} className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="font-bold">{app.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
