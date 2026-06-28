import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - Rajon Dev Store',
  description: 'Terms of service for Rajon Dev Store. Read our terms before using.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="container py-6">
        <div className="glass rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-4">📜 শর্তাবলী</h1>
          
          <div className="space-y-4 text-text-secondary text-sm">
            <p><strong>শেষ আপডেট:</strong> জুন ২০২৬</p>
            
            <p>
              Rajon Dev Store ব্যবহার করে আপনি নিচের শর্তাবলীতে সম্মত হচ্ছেন। 
              অনুগ্রহ করে মনোযোগ দিয়ে পড়ুন।
            </p>

            <h2 className="text-text-primary font-semibold text-base mt-4">১. পরিষেবার ব্যবহার</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>এই সাইট শুধুমাত্র শিক্ষাগত ও ব্যক্তিগত ব্যবহারের জন্য</li>
              <li>আপনি নিজের দায়িত্বে অ্যাপ ডাউনলোড ও ব্যবহার করেন</li>
              <li>আমরা কোনো ফাইলের নিরাপত্তার গ্যারান্টি দিই না</li>
            </ul>

            <h2 className="text-text-primary font-semibold text-base mt-4">২. কপিরাইট ও কন্টেন্ট</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>সমস্ত অ্যাপ তাদের নিজস্ব মালিকদের সম্পত্তি</li>
              <li>আমরা মড সংস্করণ শেয়ার করি, কিন্তু অরিজিনাল নয়</li>
              <li>কপিরাইট লঙ্ঘনের অভিযোগ পেলে আমরা লিংক সরিয়ে দেব</li>
            </ul>

            <h2 className="text-text-primary font-semibold text-base mt-4">৩. দায়িত্ব অস্বীকার</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>আমরা কোনো ফাইলের নিরাপত্তার নিশ্চয়তা দিই না</li>
              <li>ডাউনলোডের ফলে ডিভাইসের ক্ষতির দায় আমাদের নয়</li>
              <li>তৃতীয় পক্ষের বিজ্ঞাপনের জন্য আমরা দায়ী নই</li>
            </ul>

            <h2 className="text-text-primary font-semibold text-base mt-4">৪. পরিবর্তনের অধিকার</h2>
            <p>
              আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করতে পারি। 
              পরিবর্তন হলে এই পৃষ্ঠায় আপডেট করা হবে।
            </p>

            <h2 className="text-text-primary font-semibold text-base mt-4">৫. যোগাযোগ</h2>
            <p>
              কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
            </p>

            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-xs">
                📧 যোগাযোগ: <a href="mailto:rajon@gmail.com" className="text-brand-start">rajon@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}