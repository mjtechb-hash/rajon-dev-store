'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [lang, setLang] = useState('bn')
  const pathname = usePathname()

  // থিম টগল
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleLang = () => {
    setLang(prev => prev === 'bn' ? 'en' : 'bn')
    localStorage.setItem('lang', lang === 'bn' ? 'en' : 'bn')
  }

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 glass border-b border-border-light">
        <div className="container flex items-center justify-between h-14">
          {/* Left: Hamburger */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 rounded-lg hover:bg-white/5 active:scale-95 transition"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Center: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-extrabold bg-gradient-to-r from-brand-start to-brand-end bg-clip-text text-transparent">
              Rajon Dev Store
            </span>
          </Link>

          {/* Right: Theme + Language */}
          <div className="flex items-center gap-1">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/5 active:scale-95 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <button 
              onClick={toggleLang}
              className="p-2 rounded-lg hover:bg-white/5 active:scale-95 transition text-sm font-medium"
            >
              {lang === 'bn' ? 'EN' : 'বাং'}
            </button>
          </div>
        </div>
      </header>

      {/* SIDE MENU (Bottom Sheet) */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sheet */}
          <div className="fixed bottom-0 left-0 right-0 z-50 glass rounded-t-2xl sheet p-4 pb-8 max-h-[80vh] overflow-y-auto">
            {/* Handle */}
            <div className="w-12 h-1 bg-text-secondary/30 rounded-full mx-auto mb-4" />
            
            <div className="space-y-2">
              <p className="text-sm text-text-secondary px-2 mb-2">📂 ক্যাটাগরি</p>
              <Link href="/apps" className="block px-4 py-3 rounded-xl hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>
                📱 সব অ্যাপস
              </Link>
              <Link href="/games" className="block px-4 py-3 rounded-xl hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>
                🎮 সব গেমস
              </Link>
              <div className="h-px bg-border-light my-2" />
              <Link href="/blog" className="block px-4 py-3 rounded-xl hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>
                📝 ব্লগ
              </Link>
              <Link href="/faq" className="block px-4 py-3 rounded-xl hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>
                ❓ FAQ
              </Link>
              <Link href="/about" className="block px-4 py-3 rounded-xl hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>
                ℹ️ সম্পর্কে
              </Link>
              <div className="h-px bg-border-light my-2" />
              <div className="flex gap-3 px-2 pt-2">
                <a href="https://youtube.com/@RajonAiDev" target="_blank" rel="noopener noreferrer" className="text-2xl">▶️</a>
                <a href="https://t.me/RajonAiDev" target="_blank" rel="noopener noreferrer" className="text-2xl">✈️</a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-2xl">💬</a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
