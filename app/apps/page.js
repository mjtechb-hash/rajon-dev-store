'use client'

import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { ref, get } from 'firebase/database'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AppsPage() {
  const [apps, setApps] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const appsRef = ref(db, 'apps')
        const snapshot = await get(appsRef)
        if (snapshot.exists()) {
          const data = snapshot.val()
          const list = Object.keys(data)
            .filter(key => data[key].isPublished !== false)
            .map(key => ({ id: key, ...data[key] }))
            .sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0))
          setApps(list)
        }
      } catch (error) {
        console.error('Error fetching apps:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchApps()
  }, [])

  // ফিল্টারিং
  const filteredApps = apps.filter(app => {
    const matchSearch = app.nameBn?.includes(searchTerm) || 
                         app.nameEn?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.modTags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchCategory = selectedCategory === '' || app.category === selectedCategory
    return matchSearch && matchCategory
  })

  // ইউনিক ক্যাটাগরি লিস্ট
  const categories = [...new Set(apps.map(app => app.category).filter(Boolean))]

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Header />
        <main className="container py-4">
          <div className="h-12 glass rounded-xl shimmer mb-4" />
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[1,2,3,4,5].map(i => <div key={i} className="h-10 w-20 glass rounded-full shimmer flex-shrink-0" />)}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[1,2,3,4,5,6].map(i => <div key={i} className="h-56 glass rounded-xl shimmer" />)}
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
        {/* সার্চ বার */}
        <div className="glass rounded-xl p-3 mb-4">
          <input
            type="text"
            placeholder="🔍 অ্যাপ বা গেম সার্চ করুন..."
            className="w-full bg-transparent outline-none text-text-primary placeholder-text-secondary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* ক্যাটাগরি ফিল্টার */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition ${
              selectedCategory === '' ? 'bg-brand-start text-white' : 'glass text-text-secondary'
            }`}
          >
            সব
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition ${
                selectedCategory === cat ? 'bg-brand-start text-white' : 'glass text-text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* অ্যাপস গ্রিড */}
        {filteredApps.length === 0 ? (
          <div className="text-center py-12 text-text-secondary">
            <p className="text-lg">😕 কোনো অ্যাপ খুঁজে পাওয়া যায়নি</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {filteredApps.map(app => (
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
                      <span className="text-xs text-text-secondary ml-1">• {app.downloadCount || 0} ডাউনলোড</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}