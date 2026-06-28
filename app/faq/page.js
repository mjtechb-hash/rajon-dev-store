'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'FAQ - Rajon Dev Store',
  description: 'Frequently asked questions about Rajon Dev Store. Find answers to common questions.',
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'এই সাইটে কী কী অ্যাপ পাওয়া যায়?',
      a: 'আমরা মডেড (MOD) অ্যান্ড্রয়েড অ্যাপ ও গেম সরবরাহ করি। এগুলোতে প্রিমিয়াম ফিচার আনলক করা থাকে, যেমন: প্রিমিয়াম আনলক, কোনো অ্যাড নেই, অনলিমিটেড মানি ইত্যাদি।'
    },
    {
      q: 'ডাউনলোড করতে কী কী লাগে?',
      a: 'শুধু একটি অ্যান্ড্রয়েড ডিভাইস (৫.০+) এবং ইন্টারনেট সংযোগ। কোনো রেজিস্ট্রেশন বা লগইন প্রয়োজন নেই।'
    },
    {
      q: 'এগুলো কি নিরাপদ?',
      a: 'আমরা প্রতিটি অ্যাপ স্ক্যান করি এবং নিরাপদ উৎস থেকে সংগ্রহ করি। তবে যেকোনো থার্ড-পার্টি অ্যাপের মতো, আপনি নিজের দায়িত্বে ইনস্টল করবেন।'
    },
    {
      q: 'অ্যাপটি কাজ না করলে কী করব?',
      a: 'প্রথমে চেক করুন আপনার অ্যান্ড্রয়েড ভার্সন সাপোর্ট করে কি না। তারপর ইনস্টলেশন গাইড ফলো করুন। সমস্যা থাকলে আমাদের যোগাযোগ করুন।'
    },
    {
      q: 'আমার পছন্দের অ্যাপ এখানে নেই, কী করব?',
      a: 'আমাদের রিকোয়েস্ট সিস্টেম ব্যবহার করে অ্যাপ রিকোয়েস্ট করুন। আমরা দ্রুত যোগ করার চেষ্টা করব।'
    },
    {
      q: 'কোনো অ্যাপের লিংক ভেঙে গেলে কী করব?',
      a: 'রিপোর্ট ব্রোকেন লিংক অপশনে ক্লিক করুন। আমরা দ্রুত আপডেট করব।'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="container py-6">
        <div className="glass rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-2">❓ প্রায়শই জিজ্ঞাসিত প্রশ্ন</h1>
          <p className="text-text-secondary text-sm mb-6">
            সাধারণ প্রশ্নের উত্তর এখানে পাবেন।
          </p>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-medium text-sm">{faq.q}</span>
                  <span className="text-brand-start text-xl flex-shrink-0 ml-2">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-text-secondary">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-white/5 rounded-xl text-center">
            <p className="text-sm text-text-secondary">
              ❓ আরও প্রশ্ন? <a href="/contact" className="text-brand-start">যোগাযোগ করুন</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}