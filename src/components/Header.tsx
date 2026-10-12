import React, { useState } from 'react';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Menu, X, Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; path: PageRoute }[] = [
    { label: 'Home', path: '/' },
    { label: 'Rooms & Suites', path: '/rooms' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact & Booking', path: '/contact' },
  ];

  const handleNavClick = (path: PageRoute, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#08152F]/95 backdrop-blur-md border-b border-[#D6B46A]/20 transition-all duration-300">
      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleNavClick('/', e)}
          className="flex items-center gap-3 text-left group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B46A]"
        >
          <div className="w-10 h-10 rounded border border-[#D6B46A]/50 bg-gradient-to-br from-[#142B59] to-[#3B0711] flex items-center justify-center text-[#D6B46A] shadow-inner font-serif-luxury font-bold text-lg tracking-wider group-hover:border-[#D6B46A] transition-colors">
            AO
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-[#F8F7F4] uppercase leading-none group-hover:text-[#D6B46A] transition-colors">
              Airport Otel
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#D6B46A] uppercase font-light mt-0.5">
              Adana · Türkiye
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(link.path, e)}
                className={`whitespace-nowrap shrink-0 py-1 transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#D6B46A] font-semibold'
                    : 'text-[#F8F7F4]/80 hover:text-[#F8F7F4]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D6B46A] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Desktop) */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#F8F7F4]/90 hover:text-[#D6B46A] border border-[#142B59] hover:border-[#D6B46A]/40 rounded bg-[#142B59]/40 transition-colors whitespace-nowrap shrink-0"
            title={`Call Airport Otel at ${HOTEL_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#D6B46A]" />
            <span>Call Now</span>
          </a>

          <button
            onClick={() => navigate('/contact')}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-gradient-to-r from-[#650D1B] to-[#3B0711] hover:from-[#7e1022] hover:to-[#4f0917] border border-[#D6B46A]/40 hover:border-[#D6B46A] rounded shadow-md hover:shadow-[#650D1B]/30 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D6B46A]" />
            <span>Book Your Stay</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            className="p-2 text-[#D6B46A] hover:bg-[#142B59]/60 rounded border border-[#D6B46A]/30 sm:hidden"
            aria-label="Call Airport Otel"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F8F7F4] hover:text-[#D6B46A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B46A] rounded border border-[#142B59]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08152F] border-b border-[#D6B46A]/20 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(link.path, e)}
                  className={`px-4 py-3 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#142B59] text-[#D6B46A] border-l-2 border-[#D6B46A]'
                      : 'text-[#F8F7F4]/90 hover:bg-[#142B59]/40 hover:text-[#F8F7F4]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#142B59] flex flex-col gap-3">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-[#F8F7F4] bg-[#142B59] hover:bg-[#142B59]/80 rounded border border-[#D6B46A]/30 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D6B46A]" />
              <span>Call +90 543 513 6586</span>
            </a>
            <button
              onClick={() => {
                navigate('/contact');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold uppercase tracking-wider text-[#F8F7F4] bg-gradient-to-r from-[#650D1B] to-[#3B0711] rounded border border-[#D6B46A]/40 shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#D6B46A]" />
              <span>Book Your Stay</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
