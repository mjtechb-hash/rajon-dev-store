import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DMCA - Rajon Dev Store',
  description: 'DMCA disclaimer for Rajon Dev Store. Copyright infringement notice.',
}

export default function DMCAPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="container py-6">
        <div className="glass rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-4">⚖️ DMCA ডিসক্লেইমার</h1>
          
          <div className="space-y-4 text-text-secondary text-sm">
            <p><strong>শেষ আপডেট:</strong> জুন ২০২৬</p>
            
            <p>
              Rajon Dev Store DMCA (Digital Millennium Copyright Act) মেনে চলে। 
              আমরা কপিরাইট মালিকদের অধিকার সম্মান করি।
            </p>

            <h2 className="text-text-primary font-semibold text-base mt-4">১. কন্টেন্টের উৎস</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>আমরা সরাসরি কোনো APK ফাইল হোস্ট করি না (GitHub Releases ব্যবহার করি)</li>
              <li>সমস্ত অ্যাপ তাদের নিজস্ব মালিকদের সম্পত্তি</li>
              <li>আমরা শুধুমাত্র শিক্ষাগত উদ্দেশ্যে মড সংস্করণ শেয়ার করি</li>
            </ul>

            <h2 className="text-text-primary font-semibold text-base mt-4">২. কপিরাইট লঙ্ঘনের অভিযোগ</h2>
            <p>
              আপনি যদি মনে করেন যে আমাদের সাইটে আপনার কপিরাইট লঙ্ঘন করা হয়েছে, 
              তাহলে নিচের তথ্য সহ আমাদের ইমেইল করুন:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>আপনার সম্পূর্ণ নাম ও যোগাযোগের তথ্য</li>
              <li>লঙ্ঘনকারী কন্টেন্টের সঠিক URL</li>
              <li>আপনার কপিরাইটের প্রমাণ</li>
              <li>একটি বিবৃতি যে তথ্যটি সঠিক</li>
            </ul>

            <h2 className="text-text-primary font-semibold text-base mt-4">৩. আমরা কী করি?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>বৈধ অভিযোগ পেলে ২৪-৪৮ ঘণ্টার মধ্যে পদক্ষেপ নিই</li>
              <li>লিঙ্ক সরিয়ে দিই বা ফাইল ডিলিট করি</li>
              <li>আমরা অভিযোগকারীকে জানাই</li>
            </ul>

            <h2 className="text-text-primary font-semibold text-base mt-4">৪. কাউন্টার-নোটিশ</h2>
            <p>
              আপনি যদি মনে করেন যে আপনার কন্টেন্ট ভুলভাবে সরানো হয়েছে, 
              তাহলে আপনি কাউন্টার-নোটিশ দিতে পারেন।
            </p>

            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-xs">
                📧 DMCA সম্পর্কিত যোগাযোগ: <a href="mailto:rajon@gmail.com" className="text-brand-start">rajon@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}