import React from 'react';
import { FileText, Baby, AlertCircle, PhoneCall, Stethoscope, ShieldCheck } from 'lucide-react';

export default function ServicesGrid() {
  const cardBase =
    'group rounded-xl border p-5 bg-white hover:shadow-lg transition-shadow cursor-pointer';

  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">নাগরিক সেবা</h2>
        <p className="text-gray-600">এখান থেকে আবেদন, অভিযোগ এবং জরুরি সেবায় যোগাযোগ করতে পারবেন।</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="#apply" className={cardBase}>
          <div className="flex items-start gap-4">
            <span className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
              <FileText className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-semibold">নাগরিকত্ব/সেবার জন্য আবেদন</h3>
              <p className="text-gray-600 text-sm">অনলাইনে আবেদন করুন এবং অবস্থা ট্র্যাক করুন।</p>
            </div>
          </div>
        </a>

        <a href="#apply" className={cardBase}>
          <div className="flex items-start gap-4">
            <span className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
              <Baby className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-semibold">জন্ম নিবন্ধন</h3>
              <p className="text-gray-600 text-sm">নতুন জন্ম নিবন্ধনের জন্য আবেদন করুন।</p>
            </div>
          </div>
        </a>

        <a href="#complaint" className={cardBase}>
          <div className="flex items-start gap-4">
            <span className="p-2 rounded-lg bg-amber-50 text-amber-700">
              <AlertCircle className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-semibold">সমস্যা/অভিযোগ</h3>
              <p className="text-gray-600 text-sm">রাস্তা, লাইট, ড্রেন ইত্যাদির সমস্যা জানান।</p>
            </div>
          </div>
        </a>

        <a href="tel:999" className={cardBase}>
          <div className="flex items-start gap-4">
            <span className="p-2 rounded-lg bg-rose-50 text-rose-700">
              <PhoneCall className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-semibold">এম্বুলেন্স</h3>
              <p className="text-gray-600 text-sm">এক ক্লিকে কল করুন: 999 (জরুরি)</p>
            </div>
          </div>
        </a>

        <a
          href="https://app.daktarbhai.com/" target="_blank" rel="noreferrer"
          className={cardBase}
        >
          <div className="flex items-start gap-4">
            <span className="p-2 rounded-lg bg-teal-50 text-teal-700">
              <Stethoscope className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-semibold">টেলিমেডিসিন</h3>
              <p className="text-gray-600 text-sm">ডাক্তার অনলাইনে—এক্সটার্নাল সেবায় সংযোগ।</p>
            </div>
          </div>
        </a>

        <a href="#finance" className={cardBase}>
          <div className="flex items-start gap-4">
            <span className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-semibold">স্বচ্ছতার হিসাব</h3>
              <p className="text-gray-600 text-sm">ওয়ার্ডের আয়-ব্যয়ের সারাংশ দেখুন।</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
