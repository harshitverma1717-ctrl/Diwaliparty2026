import React, { useState } from 'react';
import { Calendar, MapPin, Sparkles, Camera, Heart, CheckCircle2, X, Plus, Wine } from 'lucide-react';

export default function DiwaliInvitationApp() {
  const [activeSection, setActiveSection] = useState('hero');
  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  
  // Form & User States
  const [guestName, setGuestName] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState(null);
  const [selectedFit, setSelectedFit] = useState(null);
  const [noteForHost, setNoteForHost] = useState('');
  
  // Photo Wall State
  const [photos, setPhotos] = useState([
    { id: 1, url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80', caption: 'Full too filmy', author: 'Host' }
  ]);
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [newCaption, setNewCaption] = useState('Full too filmy');

  const fitOptions = [
    { id: 'laal', name: 'Laal Tamatar', desc: 'Poster Red', color: 'bg-red-600 border-yellow-300 text-white' },
    { id: 'haldi', name: 'Haldi Gang', desc: 'Marigold Yellow', color: 'bg-yellow-400 border-black text-black' },
    { id: 'hari', name: 'Hari Mirch', desc: 'Emerald Green', color: 'bg-emerald-700 border-yellow-300 text-white' },
    { id: 'mor', name: 'Mor Pankh', desc: 'Peacock Blue', color: 'bg-blue-600 border-yellow-300 text-white' },
    { id: 'gulabi', name: 'Gulabi Barfi', desc: 'Hot Pink', color: 'bg-pink-500 border-yellow-300 text-white' },
    { id: 'orange', name: 'Orange Barfi', desc: 'Saffron Orange', color: 'bg-orange-500 border-black text-black' }
  ];

  const handleRsvpSubmit = (status) => {
    setRsvpStatus(status);
    setRsvpModalOpen(false);
  };

  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (!newPhotoUrl) return;
    setPhotos([{ id: Date.now(), url: newPhotoUrl, caption: newCaption, author: guestName || 'Guest' }, ...photos]);
    setNewPhotoUrl('');
    setPhotoModalOpen(false);
  };

  const airbnbUrl = "https://www.airbnb.co.uk/rooms/1688430031887807696?unique_share_id=23b91a15-731f-400d-a304-75450c62a8f8&viralityEntryPoint=1&s=76";

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-gray-900 font-sans selection:bg-red-500 selection:text-white">
      
      {/* Top Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-red-700 border-b-4 border-yellow-300 px-6 py-3 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <span className="bg-yellow-300 text-red-900 font-black px-3 py-1 text-sm tracking-widest border border-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            DIWALI SCENE
          </span>
        </div>
        <div className="flex space-x-3 text-sm font-bold text-yellow-300">
          <button onClick={() => setActiveSection('hero')} className="hover:underline">01 INVITATION</button>
          <button onClick={() => setActiveSection('fitcheck')} className="hover:underline">02 FIT CHECK</button>
          <button onClick={() => setActiveSection('archive')} className="hover:underline">03 GOSSIP WALL</button>
        </div>
      </nav>

      {/* Hero / Invitation Section */}
      <section className="relative overflow-hidden bg-red-600 text-yellow-300 border-b-8 border-black py-12 px-6 text-center">
        {/* Retro Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#facc15_10%,_transparent_10%)] bg-[size:24px_24px]"></div>
        
        <div className="relative max-w-2xl mx-auto bg-yellow-300 text-red-900 p-6 md:p-8 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute -top-4 -right-2 bg-red-600 text-yellow-300 px-4 py-1 font-bold text-xs border-2 border-black rotate-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            ADMIT ONE • BEST FIT
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
            PLOT TWIST: <br/>TU INVITED HAI!
          </h1>
          <p className="text-red-700 font-semibold mb-6">Skip the boring cards. Real ones only. No drama.</p>

          {/* Details Card */}
          <div className="bg-white text-gray-900 p-6 rounded border-2 border-black text-left mb-6 space-y-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-500">EVENT</span>
              <span className="font-black text-red-600">Diwali Party</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-500">DATE</span>
              <span className="font-black">Wednesday, 4 November 2026</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-500">TIME</span>
              <span className="font-black">4:00 PM Onwards</span>
            </div>
            <div className="flex justify-between border-b pb-2 items-center">
              <span className="font-bold text-gray-500">VENUE</span>
              <a 
                href={airbnbUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="font-black text-red-600 underline flex items-center gap-1 hover:text-red-800"
              >
                <MapPin size={16} /> Airbnb Location
              </a>
            </div>

            {/* BYOB Note Banner */}
            <div className="mt-4 bg-yellow-100 border-2 border-dashed border-red-600 p-3 rounded flex items-center gap-3">
              <Wine className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <span className="font-black text-red-600 uppercase text-xs block">Important Note</span>
                <span className="font-bold text-sm text-gray-800">This is a BYOB party 🍾 Bring your own booze & good vibes!</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setRsvpModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-yellow-300 font-black px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 transition-all"
            >
              {rsvpStatus ? `RSVP: ${rsvpStatus}` : 'LOCK MY RSVP'}
            </button>
            <a 
              href={airbnbUrl} 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-black font-bold px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <MapPin size={18} /> VIEW LOCATION
            </a>
          </div>
        </div>
      </section>

      {/* Fit Check Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide">FIT CHECK, FESTIVE EDITION.</h2>
          <p className="text-gray-600 font-medium">Pick your colour. Enter your main-character era.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fitOptions.map((fit) => (
            <div 
              key={fit.id}
              onClick={() => setSelectedFit(fit)}
              className={`cursor-pointer p-6 rounded-lg border-4 border-black ${fit.color} shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all ${selectedFit?.id === fit.id ? 'ring-4 ring-red-600' : ''}`}
            >
              <span className="font-black text-xs opacity-80">0{fitOptions.indexOf(fit) + 1}</span>
              <h3 className="text-2xl font-black uppercase mt-1">{fit.name}</h3>
              <p className="text-sm font-semibold mt-1 opacity-90">{fit.desc}</p>
              {selectedFit?.id === fit.id && (
                <div className="mt-4 inline-flex items-center gap-1 bg-black text-white text-xs px-2 py-1 font-bold">
                  <CheckCircle2 size={14} /> LOCKED IN
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedFit && (
          <div className="mt-8 bg-yellow-200 border-4 border-black p-6 rounded shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase bg-black text-white px-2 py-0.5">Your Choice</span>
              <h4 className="text-xl font-black mt-1">{guestName || 'You'} is wearing: {selectedFit.name}</h4>
              <p className="text-sm text-gray-700">{selectedFit.desc} look. Tikha look, zero apologies.</p>
            </div>
            <button onClick={() => setSelectedFit(null)} className="text-xs underline font-bold">Change Outfit</button>
          </div>
        )}
      </section>

      {/* Gossip Archive / Photo Wall Section */}
      <section className="bg-pink-100 border-t-8 border-b-8 border-black py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div>
              <span className="bg-black text-yellow-300 text-xs font-bold px-2 py-1">04 PHOTO WALL</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase mt-2">DIWALI KI gossip ARCHIVE 📸</h2>
              <p className="text-gray-700 font-medium">Proof that we actually touched grass.</p>
            </div>
            <button 
              onClick={() => setPhotoModalOpen(true)}
              className="bg-black text-yellow-300 font-black px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-gray-800"
            >
              <Plus size={18} className="inline mr-1" /> ADD YOUR PIC +
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((p) => (
              <div key={p.id} className="bg-white p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1">
                <img src={p.url} alt="Gossip" className="w-full h-48 object-cover border-2 border-black mb-3" />
                <div className="flex justify-between items-center text-xs font-black uppercase">
                  <span className="bg-yellow-300 px-2 py-1 border border-black">{p.caption}</span>
                  <span className="text-gray-500">— {p.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Modal */}
      {rsvpModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black p-6 rounded-lg max-w-md w-full shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative">
            <button onClick={() => setRsvpModalOpen(false)} className="absolute top-4 right-4 font-bold text-lg"><X /></button>
            <h3 className="text-2xl font-black uppercase mb-1">RSVP, bestie.</h3>
            <p className="text-xs text-gray-500 mb-4">Only the host sees your RSVP. No login, no drama.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase mb-1">Your Name</label>
                <input 
                  type="text" 
                  value={guestName} 
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Rahul"
                  className="w-full border-2 border-black p-2 font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="space-y-2">
                <button onClick={() => handleRsvpSubmit("Haan bhai, I'm in")} className="w-full text-left font-black p-3 bg-yellow-300 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 transition-all">
                  HAAN BHAI, I'M IN ✓
                </button>
                <button onClick={() => handleRsvpSubmit("Shayad - Dekhte hai")} className="w-full text-left font-black p-3 bg-gray-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 transition-all">
                  SHAYAD - DEKHTE HAI
                </button>
                <button onClick={() => handleRsvpSubmit("Is baar nahi")} className="w-full text-left font-black p-3 bg-red-200 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 transition-all">
                  IS BAAR NAHI ❌
                </button>
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-1">Note for the Host (Optional)</label>
                <input 
                  type="text" 
                  value={noteForHost}
                  onChange={(e) => setNoteForHost(e.target.value)}
                  placeholder="e.g. What drinks are you bringing?"
                  className="w-full border-2 border-black p-2 text-sm font-medium focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Photo Modal */}
      {photoModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black p-6 rounded-lg max-w-md w-full relative shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <button onClick={() => setPhotoModalOpen(false)} className="absolute top-4 right-4 font-bold text-lg"><X /></button>
            <h3 className="text-2xl font-black uppercase mb-4">Drop a pic.</h3>
            
            <form onSubmit={handleAddPhoto} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase mb-1">Image URL</label>
                <input 
                  type="url" 
                  required
                  value={newPhotoUrl}
                  onChange={(e) => setNewPhotoUrl(e.target.value)}
                  placeholder="Paste image link here..."
                  className="w-full border-2 border-black p-2 font-bold text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-1">Caption Tag</label>
                <select 
                  value={newCaption}
                  onChange={(e) => setNewCaption(e.target.value)}
                  className="w-full border-2 border-black p-2 font-bold text-sm bg-yellow-100"
                >
                  <option value="Main character moment">Main character moment</option>
                  <option value="Full too filmy">Full too filmy</option>
                  <option value="Core memory unlocked">Core memory unlocked</option>
                  <option value="Aunty camera approved">Aunty camera approved</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-red-600 text-yellow-300 font-black py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">
                Post to the Wall
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
