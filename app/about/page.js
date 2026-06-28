import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About - Rajon Dev Store',
  description: 'Learn about Rajon Dev Store. Our mission, vision, and story.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="container py-6">
        <div className="glass rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-2">ℹ️ আমাদের সম্পর্কে</h1>
          <p className="text-text-secondary text-sm mb-6">
            Rajon Dev Store — নিরাপদ ও বিশ্বস্ত মড অ্যাপ ডাউনলোড প্ল্যাটফর্ম।
          </p>

          <div className="space-y-4 text-text-secondary text-sm">
            <div className="p-4 bg-white/5 rounded-xl">
              <h2 className="text-text-primary font-semibold">🚀 আমাদের মিশন</h2>
              <p className="mt-1">
                বিশ্বস্ত ও নিরাপদ উৎস থেকে মডেড অ্যান্ড্রয়েড অ্যাপ সরবরাহ করা, 
                যাতে ইউজাররা প্রিমিয়াম ফিচার উপভোগ করতে পারে কোনো খরচ ছাড়াই।
              </p>
            </div>

            <div className="p-4 bg-white/5 rounded-xl">
              <h2 className="text-text-primary font-semibold">👤 কারিগরি দল</h2>
              <div className="mt-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-start/20 flex items-center justify-center text-xl">
                  🧑‍💻
                </div>
                <div>
                  <p className="font-medium text-text-primary">Rajon Ai Dev</p>
                  <p className="text-xs">ফুল-স্ট্যাক ডেভেলপার ও ডিজাইনার</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl">
              <h2 className="text-text-primary font-semibold">🛡️ আমরা যা বিশ্বাস করি</h2>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>✅ ইউজারের নিরাপত্তা সর্বোচ্চ অগ্রাধিকার</li>
                <li>✅ ফ্রি অ্যাক্সেস (শিক্ষাগত উদ্দেশ্যে)</li>
                <li>✅ দ্রুত ও আপডেটেড লাইব্রেরি</li>
                <li>✅ সহজ ও সুন্দর ইউজার এক্সপেরিয়েন্স</li>
              </ul>
            </div>

            <div className="p-4 bg-white/5 rounded-xl">
              <h2 className="text-text-primary font-semibold">📈 ভবিষ্যৎ পরিকল্পনা</h2>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>📱 মোবাইল অ্যাপ (Play Store)</li>
                <li>🤖 অটোমেটেড অ্যাডিং সিস্টেম</li>
                <li>📊 ইউজার ড্যাশবোর্ড</li>
                <li>🌍 আরও ভাষা সাপোর্ট</li>
              </ul>
            </div>

            <div className="p-4 bg-white/5 rounded-xl">
              <h2 className="text-text-primary font-semibold">📧 যোগাযোগ</h2>
              <p className="mt-1">
                ইমেইল: <a href="mailto:rajon@gmail.com" className="text-brand-start">rajon@gmail.com</a>
              </p>
              <p>
                সোশ্যাল: <a href="https://youtube.com/@RajonAiDev" className="text-brand-start" target="_blank">YouTube</a> • <a href="https://t.me/RajonAiDev" className="text-brand-start" target="_blank">Telegram</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}