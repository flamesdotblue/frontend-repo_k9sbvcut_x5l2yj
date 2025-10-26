import React from 'react';
import { Home, MapPin } from 'lucide-react';

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Home className="h-6 w-6 text-emerald-600" />
          <div>
            <h1 className="text-lg font-semibold leading-tight">রাজশাহী সিটি কর্পোরেশন</h1>
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> ৩০ নং ওয়ার্ড (Ward 30)
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-emerald-700">সেবা</a>
          <a href="#complaint" className="hover:text-emerald-700">অভিযোগ</a>
          <a href="#status" className="hover:text-emerald-700">অবস্থা</a>
          <a href="#contact" className="hover:text-emerald-700">যোগাযোগ</a>
        </nav>
      </div>
    </header>
  );
}
