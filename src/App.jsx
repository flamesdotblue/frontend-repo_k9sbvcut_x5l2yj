import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import ServicesGrid from './components/ServicesGrid';
import ComplaintForm from './components/ComplaintForm';
import StatusTracker from './components/StatusTracker';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [lastTicket, setLastTicket] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/60 to-white text-gray-900">
      <HeaderNav />

      <section className="max-w-6xl mx-auto px-4 pt-10">
        <div className="bg-white border rounded-2xl p-8 relative overflow-hidden">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">ওয়ার্ড ৩০ — আপনার হাতের মুঠোয় নাগরিক সেবা</h2>
            <p className="mt-3 text-gray-600">আবেদন করুন, অবস্থা দেখুন, অভিযোগ জানান—সবকিছু এক জায়গায়।</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">সেবা দেখুন</a>
              <a href="#complaint" className="px-4 py-2 rounded-lg border hover:bg-gray-50">অভিযোগ করুন</a>
            </div>
          </div>

          <div className="absolute right-0 top-0 opacity-10 -z-0 pointer-events-none select-none">
            <ShieldCheck className="h-40 w-40 text-emerald-700" />
          </div>
        </div>
      </section>

      <ServicesGrid />

      <ComplaintForm onSubmitted={(t) => setLastTicket(t)} />

      <StatusTracker lastTicket={lastTicket} />

      <section id="finance" className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white border rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">স্বচ্ছতার হিসাব (ডেমো)</h3>
          <p className="text-gray-600 mb-4">আয়-ব্যয়ের সারাংশ: এই ডেমোতে নমুনা ডাটা দেখানো হয়েছে। পূর্ণ সিস্টেমে এটি রিয়েল-টাইম হবে।</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-600">মাসিক আয়</p>
              <p className="text-2xl font-semibold text-emerald-700">৳ ১২,৫০,০০০</p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-600">মাসিক ব্যয়</p>
              <p className="text-2xl font-semibold text-rose-700">৳ ১০,৩০,০০০</p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-600">প্রকল্প চলমান</p>
              <p className="text-2xl font-semibold text-indigo-700">১২</p>
            </div>
          </div>
          <div className="mt-5 text-sm text-gray-600">
            আরও বিস্তারিত জানতে যোগাযোগ করুন বা ওপেন ডাটা পোর্টাল দেখুন।
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} রাজশাহী সিটি কর্পোরেশন — ওয়ার্ড ৩০</p>
          <p>হটলাইন: <a className="text-emerald-700 font-medium" href="tel:333">333</a> | ইমেইল: ward30@rcc.gov.bd</p>
        </div>
      </footer>
    </div>
  );
}
