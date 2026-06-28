'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-border-light py-6">
      <div className="container text-center text-sm text-text-secondary space-y-2">
        <p className="font-medium text-text-primary">Rajon Dev Store</p>
        <p>© 2026 Rajon Dev Store. সর্বস্বত্ব সংরক্ষিত।</p>
        <div className="flex flex-wrap justify-center gap-3 text-xs">
          <Link href="/privacy" className="hover:text-brand-start transition">গোপনীয়তা</Link>
          <Link href="/terms" className="hover:text-brand-start transition">শর্তাবলী</Link>
          <Link href="/dmca" className="hover:text-brand-start transition">DMCA</Link>
          <Link href="/contact" className="hover:text-brand-start transition">যোগাযোগ</Link>
        </div>
        <p className="text-xs opacity-60">সমস্ত ফাইল শুধুমাত্র শিক্ষাগত উদ্দেশ্যে।</p>
      </div>
    </footer>
  )
}
