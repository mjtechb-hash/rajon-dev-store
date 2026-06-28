import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - Rajon Dev Store',
  description: 'Privacy policy for Rajon Dev Store. Learn how we handle your data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="container py-6">
        <div className="glass rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-4">🔒 গোপনীয়তা নীতি</h1>
          
          <div className="space-y-4 text-text-secondary text-sm">
            <p><strong>শেষ আপডেট:</strong> জুন ২০২৬</p>
            
            <p>
              Rajon Dev Store-এ আপনার গোপনীয়তা আমাদের কাছে গুরুত্বপূর্ণ। 
              এই নীতিতে আমরা বর্ণনা করি কীভাবে আমরা আপনার তথ্য সংগ্রহ, ব্যবহার ও সুরক্ষা করি।
            </p>

            <h2 className="text-text-primary font-semibold text-base mt-4">১. আমরা কী তথ্য সংগ্রহ করি?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>আপনার ইমেইল ঠিকানা (যদি সাইন ইন করেন)</li>
              <li>আপনার ডিভাইসের ব্রাউজার ও অপারেটিং সিস্টেম</li>
              <li>আপনার আইপি ঠিকানা (শুধু মোটা অবস্থানে)</li>
              <li>আপনার ডাউনলোড ও পছন্দের তালিকা</li>
            </ul>

            <h2 className="text-text-primary font-semibold text-base mt-4">২. আমরা কীভাবে তথ্য ব্যবহার করি?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>আপনাকে ভালো অভিজ্ঞতা দিতে</li>
              <li>সাইটের পারফরম্যান্স উন্নত করতে</li>
              <li>আপনার পছন্দের অ্যাপ সুপারিশ করতে</li>
              <li>বিজ্ঞাপন প্রদর্শন করতে (Monetag)</li>
            </ul>

            <h2 className="text-text-primary font-semibold text-base mt-4">৩. তৃতীয় পক্ষের পরিষেবা</h2>
            <p>
              আমরা Firebase, ImgBB, GitHub ও Monetag ব্যবহার করি। 
              তাদের নিজস্ব গোপনীয়তা নীতি রয়েছে।
            </p>

            <h2 className="text-text-primary font-semibold text-base mt-4">৪. আপনার অধিকার</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>আপনার তথ্য সংশোধন বা মুছে ফেলতে পারেন</li>
              <li>যেকোনো সময় অ্যাকাউন্ট ডিলিট করতে পারেন</li>
              <li>আমাদের সাথে যোগাযোগ করতে পারেন</li>
            </ul>

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