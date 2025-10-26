import React, { useMemo, useState } from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

function mockStatus(ticketId) {
  // Create a deterministic pseudo-status for demo
  const seed = ticketId?.split('').reduce((a, c) => a + c.charCodeAt(0), 0) || 0;
  const steps = [
    { key: 'received', label: 'গ্রহণ করা হয়েছে', done: true },
    { key: 'assigned', label: 'দায়িত্বপ্রাপ্ত টিমে পাঠানো', done: seed % 3 > 0 },
    { key: 'inprogress', label: 'কাজ চলছে', done: seed % 5 > 1 },
    { key: 'resolved', label: 'সমাধান সম্পন্ন', done: seed % 7 > 3 },
  ];
  const etaDays = Math.max(0, 5 - (seed % 6));
  return { steps, etaDays };
}

export default function StatusTracker({ lastTicket }) {
  const [ticketId, setTicketId] = useState(lastTicket?.ticketId || '');
  const { steps, etaDays } = useMemo(() => mockStatus(ticketId), [ticketId]);

  return (
    <section id="status" className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">আবেদন/অভিযোগের অবস্থা</h2>
        <p className="text-gray-600">টিকিট আইডি লিখে অগ্রগতি দেখুন।</p>
      </div>

      <div className="bg-white border rounded-xl p-6 space-y-5">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <input
            type="text"
            placeholder="উদাহরণ: W30-123456"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <Clock className="h-4 w-4" /> আনুমানিক বাকি: <span className="font-medium">{etaDays} দিন</span>
          </div>
        </div>

        <ol className="relative border-s-2 border-dashed ps-5 space-y-4">
          {steps.map((s, idx) => (
            <li key={s.key} className="space-y-1">
              <span className={`absolute -start-3.5 mt-1 rounded-full border bg-white ${
                s.done ? 'text-emerald-600 border-emerald-600' : 'text-gray-400 border-gray-300'
              }`}>
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <p className={`font-medium ${s.done ? 'text-emerald-700' : 'text-gray-700'}`}>{idx + 1}. {s.label}</p>
              <p className="text-sm text-gray-500">{s.done ? 'সম্পন্ন' : 'অপেক্ষমান'}</p>
            </li>
          ))}
        </ol>
      </div>

      {lastTicket?.ticketId && (
        <p className="text-sm text-gray-600 mt-3">সর্বশেষ জমা: <span className="font-medium">{lastTicket.ticketId}</span></p>
      )}
    </section>
  );
}
