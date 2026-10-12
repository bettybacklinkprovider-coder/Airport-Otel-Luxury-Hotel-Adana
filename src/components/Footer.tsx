import React from 'react';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNav = (path: PageRoute, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="bg-[#050E20] border-t border-[#D6B46A]/20 text-[#F8F7F4] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#142B59]/60">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-[#D6B46A]/50 bg-gradient-to-br from-[#142B59] to-[#3B0711] flex items-center justify-center text-[#D6B46A] font-serif-luxury font-bold text-lg">
                AO
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold tracking-wider text-[#F8F7F4] uppercase leading-tight">
                  Airport Otel
                </h3>
                <p className="text-[11px] tracking-[0.2em] text-[#D6B46A] uppercase font-light">
                  Adana · Türkiye
                </p>
              </div>
            </div>

            <p className="text-sm text-[#F8F7F4]/75 max-w-sm leading-relaxed pt-2">
              Comfort, elegance, and warm hospitality in Adana. Ideally situated along Turhan Cemal Beriker Boulevard in Seyhan for airport travelers and visitors to Çukurova.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded bg-[#142B59] hover:bg-[#142B59]/80 border border-[#D6B46A]/30 text-[#F8F7F4] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#D6B46A]" />
                <span>WhatsApp Concierge</span>
                <ArrowUpRight className="w-3 h-3 text-[#D6B46A]/60" />
              </a>

              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded bg-[#3B0711] hover:bg-[#650D1B] border border-[#D6B46A]/30 text-[#F8F7F4] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6B46A]" />
                <span>+90 543 513 6586</span>
              </a>
            </div>
          </div>

          {/* Navigation Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-luxury text-lg font-semibold tracking-wide text-[#D6B46A] uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F8F7F4]/80">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav('/', e)}
                  className="hover:text-[#D6B46A] transition-colors inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/rooms"
                  onClick={(e) => handleNav('/rooms', e)}
                  className="hover:text-[#D6B46A] transition-colors inline-block"
                >
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  onClick={(e) => handleNav('/gallery', e)}
                  className="hover:text-[#D6B46A] transition-colors inline-block"
                >
                  Hotel Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav('/contact', e)}
                  className="hover:text-[#D6B46A] transition-colors inline-block"
                >
                  Contact & Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Hotel Contact & Address (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif-luxury text-lg font-semibold tracking-wide text-[#D6B46A] uppercase">
              Location & Inquiries
            </h4>
            
            <div className="space-y-3 text-sm text-[#F8F7F4]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D6B46A] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  {HOTEL_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D6B46A] shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="hover:text-[#D6B46A] transition-colors font-medium tabular-nums"
                >
                  {HOTEL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D6B46A] shrink-0" />
                <span>{HOTEL_INFO.frontDesk}</span>
              </div>
            </div>

            <p className="text-xs text-[#F8F7F4]/50 pt-2 leading-relaxed">
              Check-in from {HOTEL_INFO.checkInTime} · Check-out until {HOTEL_INFO.checkOutTime}. Direct airport transfers can be arranged on request.
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F7F4]/60">
          <p>© {new Date().getFullYear()} Airport Otel. All rights reserved. Seyhan, Adana, Türkiye.</p>
          <div className="flex items-center gap-4 text-[11px] text-[#D6B46A]/80">
            <span>Direct Reservations</span>
            <span aria-hidden="true">·</span>
            <span>+90 543 513 6586</span>
            <span aria-hidden="true">·</span>
            <span>Adana Şakirpaşa District</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
