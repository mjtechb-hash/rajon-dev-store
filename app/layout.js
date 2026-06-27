import "./globals.css";

export const metadata = {
  title: "Rajon Dev Store — বাংলাদেশের সেরা মোড APK ও প্রিমিয়াম অ্যাপ স্টোর",
  description: "নিরাপদ মোড APK ও প্রিমিয়াম অ্যান্ড্রয়েড অ্যাপ সম্পূর্ণ ফ্রিতে ডাউনলোড করুন। রাজোন দেব স্টোর — ফ্রি, ফাস্ট, এবং ১০০% সেফ।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className="bg-darkBg text-slate-100 min-h-screen">
        {/* গ্লোবাল হেডার / নেভিগেশন বার */}
        <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-wider text-brandGreen">
                Rajon Dev <span className="text-white">Store</span>
              </span>
            </div>
          </div>
        </header>

        {/* মেইন কনটেন্ট এরিয়া */}
        <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>

        {/* গ্লোবাল ফুটার */}
        <footer className="border-t border-slate-800 bg-slate-950 py-6 mt-12 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Rajon Dev Store. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
