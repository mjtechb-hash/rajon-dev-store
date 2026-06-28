
import { FiMenu, FiSearch, FiDownload, FiMoon, FiSun } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* ১. বাম পাশের থ্রি ডট মেনু */}
        <button className="text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors">
          <FiMenu />
        </button>

        {/* ২. মাঝখানের লোগো (এখানে নিজের ছবি বসাবেন) */}
        <div className="w-32 h-10 flex items-center justify-center">
            {/* আপনার লোগো ফাইলটি public ফোল্ডারে logo.png নামে রাখলে নিচের লাইনটি কাজ করবে */}
            <img src="/logo.png" alt="Logo" className="h-full object-contain" />
        </div>

        {/* ৩. ডান পাশের বাটনসমূহ */}
        <div className="flex items-center gap-3">
          {/* অ্যাপ ডাউনলোড বাটন */}
          <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
            <FiDownload /> অ্যাপ ডাউনলোড
          </button>
          
          {/* ডার্ক/লাইট মোড বাটন */}
          <button className="text-xl p-2 hover:bg-gray-100 rounded-full transition">
            <FiMoon />
          </button>
        </div>
      </div>

      {/* ৪. সার্চ বাটন এরিয়া (হেডারের নিচে) */}
      <div className="px-4 pb-4">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400 text-xl" />
          </div>
          <input 
            type="text" 
            placeholder="সফটওয়্যার সার্চ করুন..." 
            className="w-full py-3 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>
    </header>
  );
}
