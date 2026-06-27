import { Inter } from "next/font-google";
import "./globals.css";
// আমরা মাত্র যে কাস্টম নেভিগেশন বারটি বানিয়েছি, সেটি এখানে ইম্পোর্ট করছি
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rajon Dev Store | Premium Apps & MODs",
  description: "Download secure, high-speed premium applications and customized games without annoying ads.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col`}>
        
        {/* গ্লোবাল প্রিমিয়াম হেডার */}
        <Navbar />
        
        {/* মেইন কন্টেন্ট এরিয়া */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6">
          {children}
        </main>
        
        {/* মিনিমাল প্রফেশনাল ফুটার */}
        <footer className="w-full border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} Rajon Dev Store. All Rights Reserved.
        </footer>

      </body>
    </html>
  );
}
