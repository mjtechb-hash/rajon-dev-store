import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="container py-12">
        <div className="glass rounded-2xl p-8 text-center max-w-md mx-auto">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold mb-2">পেজ পাওয়া যায়নি</h1>
          <p className="text-text-secondary text-sm mb-6">
            আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে বা বিদ্যমান নেই।
          </p>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-start to-brand-end text-white font-bold active:scale-95 transition"
          >
            🏠 হোম পেজে ফিরুন
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}