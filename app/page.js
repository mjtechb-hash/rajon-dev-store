'use client'

import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { ref, get } from 'firebase/database'
import Link from 'next/link'

// কম্পোনেন্ট ইম্পোর্ট (পরবর্তী ফাইলগুলিতে তৈরি করব)
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [apps, setApps] = useState([])
  const [loading, setLoading] = useState(true)
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // সেটিংস ফেচ
        const settingsRef = ref(db, 'settings')
        const settingsSnap = await get(settingsRef)
        if (settingsSnap.exists()) {
          setSettings(settingsSnap.val())
        }

        // অ্যাপস ফেচ (শুধু পাবলিশ করা)
        const appsRef = ref(db, 'apps')
        const appsSnap = await get(appsRef)
        if (appsSnap.exists()) {
          const data = appsSnap.val()
          const appList = Object.keys(data)
            .filter(key => data[key].isPublished !== false)
            .map(key => ({ id: key, ...data[key] }))
            .sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0))
          setApps(appList)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // ফিচার্ড অ্যাপস
  const featuredApps = apps.filter(app => app.isFeatured === true).slice(0, 6)
  const latestApps = apps.slice(0, 10)

  // লোডিং স্কেলটন
  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Header />
        <main className="container py-4">
          {/* Hero Skeleton */}
          <div className="h-48 glass rounded-2xl shimmer mb-6" />
          
          {/* Featured Skeleton */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="min-w-[140px] h-48 glass rounded-xl shimmer" />
            ))}
          </div>
          
          {/* Grid Skeleton */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-56 glass rounded-xl shimmer" />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />

      <main className="container py-4">
        {/* ===== HERO BANNER ===== */}
        <section className="relative overflow-hidden rounded-2xl p-6 mb-6"
          style={{
            background: `linear-gradient(135deg, ${settings?.hero?.gradientStart || '#8B5CF6'}, ${settings?.hero?.gradientEnd || '#4F46E5'})`
          }}
        >
          <div className="relative z-10">
            <h1 className="text-2xl font-bold text-white">
              {settings?.hero?.titleBn || 'প্রিমিয়াম মড স্টেশন'}
            </h1>
            <p className="text-white/80 text-sm mt-1">
              {settings?.hero?.subtitleBn || 'ফ্রিতে ডাউনলোড করুন নিরাপদ ও কাস্টমাইজড মড এপিকে।'}
            </p>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        </section>

        {/* ===== FEATURED APKS ===== */}
        {featuredApps.length > 0 && (
          <section className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold">✨ ফিচার্ড অ্যাপস</h2>
              <Link href="/apps" className="text-brand-start text-sm">সব দেখুন</Link>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {featuredApps.map(app => (
                <Link href={`/apps/${app.slug}`} key={app.id} className="min-w-[140px] glass rounded-xl p-3 card-press">
                  <div className="w-16 h-16 rounded-xl bg-white/5 mx-auto mb-2 overflow-hidden">
                    <img src={app.logoUrl || '/icon-192x192.png'} alt={app.nameBn} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-medium truncate">{app.nameBn || app.nameEn}</p>
                  <span className="text-xs text-text-secondary">{app.promoTag || 'MOD'}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ===== LATEST APPS ===== */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">📦 সর্বশেষ অ্যাপস</h2>
            <Link href="/apps" className="text-brand-start text-sm">সব দেখুন</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {latestApps.map(app => (
              <Link href={`/apps/${app.slug}`} key={app.id} className="glass rounded-xl p-3 card-press">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex-shrink-0 overflow-hidden">
                    <img src={app.logoUrl || '/icon-192x192.png'} alt={app.nameBn} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{app.nameBn || app.nameEn}</p>
                    <p className="text-xs text-text-secondary truncate">{app.modTags?.[0] || 'MOD'}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs text-yellow-400">⭐</span>
                      <span className="text-xs text-text-secondary">{app.rating || 4.5}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== Monetag Ad Slot (Banner) ===== */}
        <div className="my-6 text-center text-xs text-text-secondary">
          {/* Monetag Banner Ad - Zone ID will be added later */}
          <div className="bg-white/5 rounded-xl p-2 min-h-[60px] flex items-center justify-center">
            <span>📢 Monetag Ad</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
