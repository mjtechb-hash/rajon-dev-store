'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { db } from '@/lib/firebase'
import { ref, get } from 'firebase/database'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function SearchResultsContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [allApps, setAllApps] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appsRef = ref(db, 'apps')
        const snapshot = await get(appsRef)
        if (snapshot.exists()) {
          const data = snapshot.val()
          const list = Object.keys(data)
            .filter(key => data[key].isPublished !== false)
            .map(key => ({ id: key, ...data[key] }))
          setAllApps(list)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (query && allApps.length > 0) {
      const filtered = allApps.filter(app => {
        const searchLower = query.toLowerCase()
        return (
          app.nameEn?.toLowerCase().includes(searchLower) ||
          app.nameBn?.includes(query) ||
          app.modTags?.some(tag => tag.toLowerCase().includes(searchLower)) ||
          app.category?.toLowerCase().includes(searchLower)
        )
      })
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query, allApps])

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Header />
        <main className="container py-6">
          <div className="h-12 glass rounded-xl shimmer mb-4" />
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map(i => <div key={i} className="h-56 glass rounded-xl shimmer" />)}
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="container py-6">
        <div className="mb-4">
          <h1 className="text-xl font-bold">🔍 "{query}" এর ফলাফল</h1>
          <p className="text-sm text-text-secondary">{results.length}টি অ্যাপ পাওয়া গেছে</p>
        </div>

        {results.length === 0 ? (
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-4xl mb-2">😕</p>
            <p className="text-text-secondary">"{query}" এর জন্য কোনো ফলাফল পাওয়া যায়নি</p>
            <p className="text-xs text-text-secondary mt-1">অন্য কীওয়ার্ড দিয়ে চেষ্টা করুন</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {results.map(app => (
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
        )}
      </main>

      <Footer />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-bg"><Header /><main className="container py-6"><div className="h-56 glass rounded-xl shimmer" /></main><Footer /></div>}>
      <SearchResultsContent />
    </Suspense>
  )
}