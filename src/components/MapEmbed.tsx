import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Navigation, Plane, Compass } from 'lucide-react';

export const MapEmbed: React.FC<{ className?: string }> = ({ className = '' }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Airport Otel Emek Turhan Cemal Beriker Blv No 173 A Seyhan Adana'
  )}`;

  return (
    <div className={`rounded-lg overflow-hidden border border-[#D6B46A]/30 bg-[#08152F] shadow-xl ${className}`}>
      {/* Map Header */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-[#142B59] to-[#08152F] border-b border-[#D6B46A]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#D6B46A] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#F8F7F4] leading-tight">
              Airport Otel Location
            </h4>
            <p className="text-xs text-[#F8F7F4]/75">
              {HOTEL_INFO.address}
            </p>
          </div>
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#D6B46A] hover:text-[#F8F7F4] border border-[#D6B46A]/40 hover:border-[#D6B46A] rounded bg-[#08152F]/70 transition-colors shrink-0"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Open in Google Maps</span>
        </a>
      </div>

      {/* Interactive Map Iframe */}
      <div className="relative h-72 sm:h-80 w-full bg-[#050E20]">
        <iframe
          title="Airport Otel Seyhan Adana Location Map"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://www.openstreetmap.org/export/embed.html?bbox=35.2600%2C36.9800%2C35.3300%2C37.0150&amp;layer=mapnik&amp;marker=36.9920%2C35.2950"
          className="w-full h-full filter saturate-[0.85] contrast-[1.1]"
        />
        
        {/* Floating location card on map */}
        <div className="absolute bottom-3 left-3 bg-[#08152F]/95 border border-[#D6B46A]/40 px-3.5 py-2.5 rounded shadow-lg backdrop-blur-sm pointer-events-none">
          <p className="font-serif-luxury font-bold text-sm text-[#F8F7F4]">Airport Otel</p>
          <p className="text-[11px] text-[#D6B46A]">Turhan Cemal Beriker Blv. No:173/A</p>
        </div>
      </div>

      {/* Airport & Transit Distances */}
      <div className="p-4 bg-[#050E20] border-t border-[#142B59] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-[#F8F7F4]/80">
          <Plane className="w-4 h-4 text-[#D6B46A] shrink-0" />
          <span>Adana Şakirpaşa Airport (~3.5 km)</span>
        </div>
        <div className="flex items-center gap-2.5 text-[#F8F7F4]/80">
          <Compass className="w-4 h-4 text-[#D6B46A] shrink-0" />
          <span>Turhan Cemal Beriker Blv. (Direct D400)</span>
        </div>
        <div className="flex items-center gap-2.5 text-[#F8F7F4]/80">
          <MapPin className="w-4 h-4 text-[#D6B46A] shrink-0" />
          <span>Seyhan City Center (~4.0 km)</span>
        </div>
      </div>
    </div>
  );
};
