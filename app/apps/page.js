'use client'

import { useEffect, useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import { db } from '@/lib/firebase'
import { ref, get } from 'firebase/database'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AppDetailPage() {
  const params = useParams()
  const slug = params.slug
  
  const [app, setApp] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showDownloadSheet, setShowDownloadSheet] = useState(false)
  const [downloadStep, setDownloadStep] = useState(0)

  useEffect(() => {
    const fetchApp = async () => {
      try {
        const appsRef = ref(db, 'apps')
        const snapshot = await get(appsRef)
        if (snapshot.exists()) {
          const data = snapshot.val()
          let foundApp = null
          let foundId = null
          
          for (const [id, appData] of Object.entries(data)) {
            if (appData.slug === slug && appData.isPublished !== false) {
              foundApp = appData
              foundId = id
              break
            }
          }
          
          if (foundApp) {
            setApp({ id: foundId, ...foundApp })
          } else {
            notFound()
          }
        } else {
          notFound()
        }
      } catch (error) {
        console.error('Error fetching app:', error)
        notFound()
      } finally {
        setLoading(false)
      }
    }
    fetchApp()
  }, [slug])

  // ডাউনলোড হ্যান্ডলার
  const handleDownloadClick = () => {
    setShowDownloadSheet(true)
    setDownloadStep(1)
  }

  const handleStepComplete = () => {
    if (downloadStep === 1) {
      setDownloadStep(2)
    } else if (downloadStep === 2) {
      setDownloadStep(3)
    }
  }

  const handleFinalDownload = () => {
    if (app?.downloadUrl) {
      const a = document.createElement('a')
      a.href = app.downloadUrl
      a.download = `${app.slug || 'app'}.apk`
      a.rel = 'noopener noreferrer'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
    setShowDownloadSheet(false)
    setDownloadStep(0)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Header />
        <main className="container py-4">
          <div className="w-20 h-20 rounded-2xl shimmer mx-auto" />
          <div className="h-8 w-48 shimmer mx-auto mt-3" />
          <div className="h-20 w-full shimmer mt-4" />
          <div className="h-64 w-full shimmer mt-4" />
        </main>
        <Footer />
      </div>
    )
  }

  if (!app) return notFound()

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="container py-4">
        {/* অ্যাপ তথ্য */}
        <div className="text-center">
          <div className="w-24 h-24 rounded-2xl bg-white/5 mx-auto overflow-hidden">
            <img src={app.logoUrl || '/icon-192x192.png'} alt={app.nameBn} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl font-bold mt-3">{app.nameBn || app.nameEn}</h1>
          <p className="text-sm text-text-secondary">v{app.version || '1.0'}</p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {app.modTags?.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-brand-start/20 text-brand-start rounded-full text-xs">
                ✅ {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-1 mt-3">
            <span className="text-yellow-400">⭐</span>
            <span>{app.rating || 4.5}</span>
            <span className="text-text-secondary">({app.downloadCount || 0} ডাউনলোড)</span>
          </div>
        </div>

        {/* ডাউনলোড বাটন */}
        <button
          onClick={handleDownloadClick}
          className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-brand-start to-brand-end text-white font-bold text-lg shadow-lg shadow-brand-start/30 active:scale-95 transition"
        >
          📥 ডাউনলোড করুন
        </button>

        {/* বিবরণ */}
        <div className="mt-6 space-y-4">
          <div className="glass rounded-xl p-4">
            <h2 className="font-bold mb-2">📝 বিবরণ</h2>
            <div 
              className="text-sm text-text-secondary space-y-2"
              dangerouslySetInnerHTML={{ __html: app.descriptionBn || app.descriptionEn || '<p>বিবরণ পাওয়া যায়নি।</p>' }}
            />
          </div>

          {app.changelog && (
            <div className="glass rounded-xl p-4">
              <h2 className="font-bold mb-2">🔄 কী নতুন?</h2>
              <p className="text-sm text-text-secondary">{app.changelog}</p>
            </div>
          )}

          <div className="glass rounded-xl p-4">
            <h2 className="font-bold mb-2">ℹ️ তথ্য</h2>
            <div className="space-y-1 text-sm text-text-secondary">
              <p>📦 আকার: {app.size || 'অজানা'}</p>
              <p>🤖 অ্যান্ড্রয়েড: {app.androidMin || '৫.০+'}</p>
              <p>📂 ক্যাটাগরি: {app.category || 'অন্যান্য'}</p>
            </div>
          </div>
        </div>
      </main>

      {/* ডাউনলোড শীট */}
      {showDownloadSheet && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setShowDownloadSheet(false)
              setDownloadStep(0)
            }}
          />
          
          <div className="fixed bottom-0 left-0 right-0 z-50 glass rounded-t-2xl sheet p-4 pb-8">
            <div className="w-12 h-1 bg-text-secondary/30 rounded-full mx-auto mb-4" />
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/5 mx-auto mb-2 overflow-hidden">
                <img src={app.logoUrl || '/icon-192x192.png'} alt={app.nameBn} className="w-full h-full object-cover" />
              </div>
              <p className="font-bold">{app.nameBn || app.nameEn}</p>
              <p className="text-sm text-text-secondary">v{app.version || '1.0'}</p>
            </div>

            {/* Monetag Ad placeholder */}
            <div className="bg-white/5 rounded-xl p-2 min-h-[50px] flex items-center justify-center text-xs text-text-secondary mb-4">
              📢 Monetag Ad (Loading...)
            </div>

            {/* স্টেপ ১ */}
            {downloadStep === 1 && (
              <button
                onClick={handleStepComplete}
                className="w-full py-3 rounded-xl bg-brand-start/20 text-brand-start font-bold active:scale-95 transition"
              >
                👆 ধাপ ১: অ্যাড দেখুন (৮s)
              </button>
            )}

            {/* স্টেপ ২ */}
            {downloadStep === 2 && (
              <button
                onClick={handleStepComplete}
                className="w-full py-3 rounded-xl bg-brand-start/20 text-brand-start font-bold active:scale-95 transition"
              >
                👆 ধাপ ২: যাচাই করুন (৮s)
              </button>
            )}

            {/* ডাউনলোড রেডি */}
            {downloadStep === 3 && (
              <button
                onClick={handleFinalDownload}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg shadow-green-500/30 active:scale-95 transition"
              >
                ⬇️ ডাউনলোড করুন
              </button>
            )}

            {/* ক্লোজ */}
            <button
              onClick={() => {
                setShowDownloadSheet(false)
                setDownloadStep(0)
              }}
              className="w-full mt-3 py-2 text-text-secondary text-sm active:scale-95 transition"
            >
              বন্ধ করুন
            </button>
          </div>
        </>
      )}

      <Footer />
    </div>
  )
}