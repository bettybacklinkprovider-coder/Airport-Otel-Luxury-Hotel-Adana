import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { GALLERY_ITEMS, GalleryItem } from '../data/hotelData';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { 
  ArrowLeft, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles,
  Info,
  Calendar
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [filter, setFilter] = useState<'all' | 'rooms' | 'lobby' | 'exterior' | 'dining'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const activeItem: GalleryItem | null =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  }, [lightboxIndex, filteredItems.length]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <div className="bg-[#08152F] text-[#F8F7F4] min-h-screen">
      
      {/* Gallery Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#050E20] via-[#142B59]/70 to-[#08152F] border-b border-[#D6B46A]/20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Breadcrumb back to Home */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#D6B46A] uppercase tracking-wider mb-6">
            <button
              onClick={() => navigate('/')}
              className="hover:text-[#F8F7F4] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-[#F8F7F4]/60">Visual Portfolio</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#F8F7F4] uppercase mb-4">
            Hotel Gallery
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D6B46A] to-transparent mx-auto mb-6" />

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#F8F7F4]/80 leading-relaxed font-light">
            A visual glimpse into the interiors, accommodations, welcoming reception, and atmospheric details of Airport Otel in Adana.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded border border-[#D6B46A]/30 bg-[#08152F]/80 text-xs text-[#D6B46A] max-w-xl mx-auto">
            <Info className="w-4 h-4 shrink-0" />
            <span className="text-left">
              Photographs represent hotel architectural views and illustrative hospitality suites. Click any photograph to enlarge in high definition.
            </span>
          </div>

        </div>
      </section>

      {/* Gallery Controls & Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'rooms', label: 'Rooms & Suites' },
            { id: 'lobby', label: 'Lobby & Reception' },
            { id: 'exterior', label: 'Exterior & Architecture' },
            { id: 'dining', label: 'Dining & Lounges' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id as any);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-[#650D1B] to-[#3B0711] text-[#F8F7F4] border border-[#D6B46A] shadow-md'
                  : 'bg-[#142B59]/40 text-[#F8F7F4]/70 hover:text-[#F8F7F4] hover:bg-[#142B59] border border-[#142B59]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid with Masonry-like rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-xl overflow-hidden border border-[#D6B46A]/20 hover:border-[#D6B46A]/60 bg-[#050E20] shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-[#08152F]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-[#08152F]/90 border border-[#D6B46A]/40 px-3 py-1 rounded text-[11px] font-medium text-[#D6B46A] uppercase tracking-wider backdrop-blur-sm">
                  {item.category}
                </div>

                {/* Hover Magnify Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#08152F]/80 border border-[#D6B46A]/40 flex items-center justify-center text-[#D6B46A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-[#142B59]">
                <div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#F8F7F4] mb-1 group-hover:text-[#D6B46A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F8F7F4]/70 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#142B59]/40 flex items-center justify-between text-[11px] text-[#D6B46A]">
                  <span>Airport Otel Adana</span>
                  <span className="group-hover:translate-x-1 transition-transform">Click to expand →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer call to action */}
        <div className="mt-16 text-center pt-8 border-t border-[#142B59]/60">
          <p className="text-sm text-[#F8F7F4]/80 mb-4">
            Would you like to reserve a room featured in our gallery?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-gradient-to-r from-[#650D1B] to-[#3B0711] hover:from-[#7e1022] hover:to-[#4f0917] border border-[#D6B46A]/40 rounded shadow-md cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D6B46A]" />
              <span>Book Your Stay</span>
            </button>
            <button
              onClick={() => navigate('/rooms')}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#D6B46A] hover:text-[#F8F7F4] border border-[#D6B46A]/30 rounded bg-[#142B59]/40 transition-colors cursor-pointer"
            >
              View Room Amenities
            </button>
          </div>
        </div>

      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#050E20]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          {/* Main Container */}
          <div
            className="relative max-w-5xl w-full bg-[#08152F] border border-[#D6B46A]/40 rounded-xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="px-5 py-3.5 bg-[#050E20] border-b border-[#142B59] flex items-center justify-between text-xs text-[#F8F7F4]/80">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B46A]" />
                <span className="font-semibold text-[#D6B46A] uppercase tracking-wider">
                  Airport Otel Gallery
                </span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="p-1.5 rounded hover:bg-[#142B59] text-[#F8F7F4] hover:text-[#D6B46A] transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Stage with Prev & Next Arrows */}
            <div className="relative h-[55vh] sm:h-[65vh] bg-[#000000] flex items-center justify-center select-none overflow-hidden">
              <ImageWithFallback
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#08152F]/80 hover:bg-[#142B59] text-[#F8F7F4] hover:text-[#D6B46A] border border-[#D6B46A]/30 backdrop-blur-sm transition-all cursor-pointer"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#08152F]/80 hover:bg-[#142B59] text-[#F8F7F4] hover:text-[#D6B46A] border border-[#D6B46A]/30 backdrop-blur-sm transition-all cursor-pointer"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption & Action */}
            <div className="p-5 sm:p-6 bg-[#08152F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#142B59]">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#F8F7F4] mb-1">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-[#F8F7F4]/75 max-w-xl">
                  {activeItem.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => {
                    closeLightbox();
                    navigate('/contact');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-[#650D1B] hover:bg-[#7e1022] rounded border border-[#D6B46A]/40 transition-colors cursor-pointer"
                >
                  Inquire For This Space
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
