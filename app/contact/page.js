'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('সাবমিট করা হচ্ছে...')
    
    setTimeout(() => {
      setStatus('✅ আপনার বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="container py-6">
        <div className="glass rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-2">📬 যোগাযোগ করুন</h1>
          <p className="text-text-secondary text-sm mb-6">
            যেকোনো প্রশ্ন, পরামর্শ বা প্রতিক্রিয়া জানাতে আমাদের সাথে যোগাযোগ করুন।
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">আপনার নাম</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-start transition"
                placeholder="জন ডো"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">ইমেইল</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-start transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">বিষয়</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-start transition"
                placeholder="সাইট সম্পর্কে প্রশ্ন"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">বার্তা</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-start transition resize-none"
                placeholder="আপনার বার্তা লিখুন..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-start to-brand-end text-white font-bold active:scale-95 transition"
            >
              📤 বার্তা পাঠান
            </button>

            {status && (
              <div className="text-center text-sm text-text-secondary mt-2">
                {status}
              </div>
            )}
          </form>

          <div className="mt-6 p-4 bg-white/5 rounded-xl text-center">
            <p className="text-sm text-text-secondary">
              📧 সরাসরি ইমেইল: <a href="mailto:rajon@gmail.com" className="text-brand-start">rajon@gmail.com</a>
            </p>
            <p className="text-xs text-text-secondary mt-1">
              ⏱️ সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}