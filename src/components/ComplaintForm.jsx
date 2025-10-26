import React, { useRef, useState } from 'react';
import { Camera, Upload, Send } from 'lucide-react';

export default function ComplaintForm({ onSubmitted }) {
  const [category, setCategory] = useState('light');
  const [details, setDetails] = useState('');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    setPhoto(file);
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result?.toString() || '');
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission latency
    setTimeout(() => {
      const ticketId = 'W30-' + Math.floor(Math.random() * 900000 + 100000);
      onSubmitted?.({ ticketId, category, details, location, createdAt: new Date().toISOString() });
      setSubmitting(false);
      setCategory('light');
      setDetails('');
      setLocation('');
      setPhoto(null);
      setPreview('');
      alert(`অভিযোগ গ্রহণ করা হয়েছে. আপনার টিকিট আইডি: ${ticketId}`);
    }, 900);
  };

  return (
    <section id="complaint" className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">সমস্যা/অভিযোগ জমা দিন</h2>
        <p className="text-gray-600">ছবি, লোকেশন ও বিবরণ দিয়ে দ্রুত জানান।</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">সমস্যার ধরন</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="light">স্ট্রিট লাইট</option>
              <option value="road">রাস্তা ক্ষতিগ্রস্ত</option>
              <option value="drain">ড্রেন/পানি নিষ্কাশন</option>
              <option value="waste">বর্জ্য ব্যবস্থাপনা</option>
              <option value="other">অন্যান্য</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">লোকেশন</label>
            <input
              type="text"
              placeholder="উদাহরণ: সাহেববাজার, গলি-৩"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">বিস্তারিত</label>
          <textarea
            rows={4}
            placeholder="সংক্ষেপে সমস্যা লিখুন..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">ছবি যুক্ত করুন</label>
          {preview ? (
            <div className="flex items-center gap-4">
              <img src={preview} alt="preview" className="h-24 w-24 object-cover rounded-lg border" />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-50"
              >
                <Upload className="h-4 w-4" /> পরিবর্তন করুন
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="w-full border-2 border-dashed rounded-xl p-6 text-center hover:bg-gray-50"
            >
              <Camera className="mx-auto h-6 w-6 text-gray-600" />
              <span className="text-sm text-gray-600">ছবি তুলুন/আপলোড করুন</span>
            </button>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files?.[0])}
            className="hidden"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-60"
          >
            <Send className="h-4 w-4" /> {submitting ? 'পাঠানো হচ্ছে...' : 'জমা দিন'}
          </button>
        </div>
      </form>
    </section>
  );
}
