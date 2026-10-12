import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOTEL_INFO, HOTEL_IMAGES, ROOMS, GALLERY_ITEMS, HOSPITALITY_FEATURES } from '../data/hotelData';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { BookingForm } from '../components/BookingForm';
import { MapEmbed } from '../components/MapEmbed';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Bed, 
  HeartHandshake, 
  MapPin, 
  Calendar,
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, setSelectedRoomForBooking } = useNavigation();

  // Exactly 3 featured rooms for Section 3
  const featuredRooms = ROOMS.slice(0, 3);

  // Exactly 8 distinct photos for Section 4 Gallery Preview
  const previewGallery = GALLERY_ITEMS.slice(0, 8);

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoomForBooking(roomId);
    navigate('/rooms');
  };

  return (
    <div className="bg-[#08152F] text-[#F8F7F4]">

      {/* ========================================================================= */}
      {/* SECTION 1: LUXURY HERO SECTION                                            */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#D6B46A]/20">
        {/* Background Image with Dark Blue & Burgundy Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={HOTEL_IMAGES.heroExterior}
            alt="Airport Otel Exterior and Entrance in Adana"
            className="w-full h-full object-cover scale-105 transform animate-fade-in"
          />
          {/* Gradients: Midnight Blue with Burgundy Red tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-[#08152F]/75 to-[#142B59]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08152F]/90 via-transparent to-[#3B0711]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          
          {/* Subtle gold luxury emblem badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6B46A]/40 bg-[#08152F]/80 backdrop-blur-md mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B46A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B46A] font-medium">
              Seyhan · Adana · Türkiye
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F8F7F4] uppercase leading-[1.08] mb-6 drop-shadow-md">
            Welcome to <span className="text-[#D6B46A]">Airport Otel</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl font-light text-[#F8F7F4]/90 max-w-2xl mx-auto mb-10 leading-relaxed font-serif-luxury italic">
            “Comfort, Elegance and Hospitality in Adana, Türkiye.”
          </p>

          {/* Buttons: Book Your Stay & Explore Our Hotel */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#F8F7F4] bg-gradient-to-r from-[#650D1B] to-[#3B0711] hover:from-[#7e1022] hover:to-[#4f0917] border border-[#D6B46A]/50 hover:border-[#D6B46A] rounded shadow-xl hover:shadow-[#650D1B]/40 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-[#D6B46A]" />
              <span>Book Your Stay</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D6B46A] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#welcome-section"
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#F8F7F4] bg-[#142B59]/80 hover:bg-[#142B59] hover:text-[#D6B46A] border border-[#D6B46A]/30 rounded transition-all duration-200 text-center backdrop-blur-sm"
            >
              Explore Our Hotel
            </a>
          </div>

          {/* Location & Quick Contact Strip */}
          <div className="mt-14 pt-8 border-t border-[#D6B46A]/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#F8F7F4]/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D6B46A]" />
              <span>Turhan Cemal Beriker Blv. No:173/A</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D6B46A]" />
              <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="hover:text-[#D6B46A] transition-colors tabular-nums font-medium">
                {HOTEL_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D6B46A]" />
              <span>24/7 Reception & Concierge</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WELCOME TO AIRPORT OTEL                                        */}
      {/* ========================================================================= */}
      <section id="welcome-section" className="py-24 bg-[#08152F] border-b border-[#142B59]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hotel Photograph */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden border border-[#D6B46A]/30 shadow-2xl">
                <ImageWithFallback
                  src={HOTEL_IMAGES.lobbyLounge}
                  alt="Airport Otel Reception and Lobby Lounge"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08152F]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating caption badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#08152F]/90 border border-[#D6B46A]/30 rounded backdrop-blur-md">
                  <p className="font-serif-luxury text-base text-[#F8F7F4] font-medium">
                    Welcoming Lobby & Reception Lounge
                  </p>
                  <p className="text-xs text-[#D6B46A]/90 mt-0.5">
                    Attentive hospitality around the clock
                  </p>
                </div>
              </div>

              {/* Decorative gold hairline corner frame */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#D6B46A]/40 pointer-events-none hidden sm:block" />
            </div>

            {/* Right Column: Refined Welcome Text */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D6B46A]">
                <span>Airport Otel · Adana</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F8F7F4] leading-tight">
                Your Comfortable Stay in Adana
              </h2>

              {/* Tasteful Gold Divider */}
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#D6B46A] to-transparent" />

              <p className="text-base text-[#F8F7F4]/80 leading-relaxed pt-2">
                Situated along the central artery of Turhan Cemal Beriker Boulevard in Seyhan, <strong>Airport Otel</strong> offers discerning travelers and visiting guests a refined refuge in Adana. Whether visiting the Çukurova region for commerce, regional transit, or holiday exploration, our hotel provides an environment designed for quiet rest and genuine warmth.
              </p>

              <p className="text-base text-[#F8F7F4]/80 leading-relaxed">
                Enjoy soundproofed accommodations, high-speed connectivity, and attentive round-the-clock front desk assistance. Our prime location ensures effortless connections to Adana Şakirpaşa Airport and key commercial districts across the city.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/rooms')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-[#142B59] hover:bg-[#1f3f7e] border border-[#D6B46A]/40 rounded transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  <span>Discover More</span>
                  <ChevronRight className="w-4 h-4 text-[#D6B46A]" />
                </button>

                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#D6B46A] hover:text-[#F8F7F4] border border-[#D6B46A]/30 hover:border-[#D6B46A] rounded transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Reception</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ROOMS & ACCOMMODATION                                          */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#050E20] border-b border-[#142B59]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B46A] font-semibold">
              Accommodations
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F8F7F4] mt-2 mb-4">
              Rooms & Accommodation
            </h2>
            <div className="w-16 h-0.5 bg-[#D6B46A] mx-auto mb-4" />
            <p className="text-sm sm:text-base text-[#F8F7F4]/75 leading-relaxed">
              Thoughtfully engineered guest quarters combining peaceful soundproofing, ergonomic bedding, and contemporary Turkish hospitality details.
            </p>
            <p className="text-xs text-[#D6B46A]/80 italic mt-2">
              Note: Room categories, availability, and rates are configurable upon direct inquiry with our reception.
            </p>
          </div>

          {/* 3 Room Cards Grid (Standard Room, Deluxe Room, Family Room) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-[#08152F] rounded-lg overflow-hidden border border-[#D6B46A]/20 hover:border-[#D6B46A]/60 transition-all duration-300 shadow-xl flex flex-col group"
              >
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#08152F]/90 border border-[#D6B46A]/40 px-3 py-1 rounded text-[11px] text-[#D6B46A] font-medium tracking-wider uppercase">
                    {room.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#F8F7F4] mb-2 group-hover:text-[#D6B46A] transition-colors">
                      {room.name}
                    </h3>

                    {/* Metadata: Beds & Capacity */}
                    <div className="flex items-center gap-2 text-xs text-[#D6B46A]/90 mb-4 pb-3 border-b border-[#142B59]">
                      <span>{room.bedType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{room.capacity}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#F8F7F4]/75 line-clamp-3 leading-relaxed mb-6">
                      {room.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#142B59] flex items-center justify-between gap-3">
                    <button
                      onClick={() => handleRoomSelect(room.id)}
                      className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-[#142B59] hover:bg-[#1f3f7e] border border-[#D6B46A]/30 rounded transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D6B46A]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore all rooms banner */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/rooms')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-gradient-to-r from-[#650D1B] to-[#3B0711] hover:from-[#7e1022] hover:to-[#4f0917] border border-[#D6B46A]/40 rounded shadow-md transition-all cursor-pointer"
            >
              <span>Explore All Rooms & Suites</span>
              <ArrowRight className="w-4 h-4 text-[#D6B46A]" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: HOTEL GALLERY PREVIEW                                          */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#08152F] border-b border-[#142B59]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D6B46A] font-semibold">
                Atmosphere & Spaces
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F8F7F4] mt-2">
                Hotel Gallery Preview
              </h2>
              <div className="w-16 h-0.5 bg-[#D6B46A] mt-3" />
            </div>

            <button
              onClick={() => navigate('/gallery')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#D6B46A] hover:text-[#F8F7F4] border border-[#D6B46A]/40 hover:border-[#D6B46A] rounded bg-[#142B59]/30 transition-colors self-start md:self-auto cursor-pointer"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Exactly 8 distinct photos grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {previewGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => navigate('/gallery')}
                className={`relative rounded-lg overflow-hidden border border-[#D6B46A]/20 hover:border-[#D6B46A]/60 shadow-lg group cursor-pointer ${
                  idx === 0 || idx === 7 ? 'md:col-span-2 md:row-span-1 h-64 sm:h-72' : 'h-64 sm:h-72'
                }`}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-[#08152F]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="font-serif-luxury text-base sm:text-lg font-bold text-[#F8F7F4] leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-[#D6B46A] mt-0.5 tracking-wider uppercase">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: GUEST EXPERIENCE & HOSPITALITY                                 */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#050E20] border-b border-[#142B59]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B46A] font-semibold">
              The Airport Otel Promise
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F8F7F4] mt-2 mb-4">
              Guest Experience & Hospitality
            </h2>
            <div className="w-16 h-0.5 bg-[#D6B46A] mx-auto mb-4" />
            <p className="text-sm sm:text-base text-[#F8F7F4]/75 leading-relaxed">
              Committed to genuine care, spotlessly maintained spaces, and an effortless arrival experience in Adana.
            </p>
          </div>

          {/* Three Elegant Feature Cards with Rich Imagery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOSPITALITY_FEATURES.map((feature, idx) => {
              const icons = [
                <Bed key="1" className="w-5 h-5 text-[#D6B46A]" />,
                <HeartHandshake key="2" className="w-5 h-5 text-[#D6B46A]" />,
                <MapPin key="3" className="w-5 h-5 text-[#D6B46A]" />,
              ];

              return (
                <div
                  key={feature.id}
                  className="bg-gradient-to-b from-[#142B59]/70 via-[#08152F] to-[#050E20] border border-[#D6B46A]/20 hover:border-[#D6B46A]/60 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 relative group flex flex-col justify-between"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-56 sm:h-60 overflow-hidden">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-[#08152F]/40 to-transparent pointer-events-none" />

                    {/* Floating circular icon badge */}
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-full border border-[#D6B46A]/50 bg-[#08152F]/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                      {icons[idx]}
                    </div>

                    {/* Subtle burgundy top accent stripe */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-[#650D1B]" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif-luxury text-2xl font-bold text-[#F8F7F4] mb-3 group-hover:text-[#D6B46A] transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-sm text-[#F8F7F4]/75 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#142B59]/70 flex items-center justify-between text-xs text-[#D6B46A] font-medium">
                      <span>Airport Otel Standard</span>
                      <span className="text-[11px] text-[#F8F7F4]/50">Adana · Seyhan</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CONTACT & BOOKING                                              */}
      {/* ========================================================================= */}
      <section id="contact-booking-section" className="py-24 bg-gradient-to-b from-[#3B0711] via-[#08152F] to-[#050E20] border-t border-[#D6B46A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B46A] font-semibold">
              Reservations & Location
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F8F7F4] mt-2 mb-4">
              Contact & Booking
            </h2>
            <div className="w-16 h-0.5 bg-[#D6B46A] mx-auto mb-4" />
            <p className="text-sm sm:text-base text-[#F8F7F4]/85 leading-relaxed">
              Connect directly with our 24-hour reception desk in Seyhan, Adana. Inquire about rooms, airport arrival directions, or corporate accommodation.
            </p>
          </div>

          {/* Contact Details Bar */}
          <div className="bg-[#08152F]/95 border border-[#D6B46A]/30 rounded-lg p-6 sm:p-8 mb-12 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              
              {/* Hotel & Address */}
              <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-[#142B59] pb-4 md:pb-0 md:pr-4">
                <p className="font-serif-luxury text-2xl font-bold text-[#F8F7F4] tracking-wide">
                  Airport Otel
                </p>
                <div className="flex items-start gap-2 text-xs text-[#F8F7F4]/80">
                  <MapPin className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
                  <span>{HOTEL_INFO.address}</span>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-[#142B59] pb-4 md:pb-0 md:px-4">
                <p className="text-xs uppercase tracking-wider text-[#D6B46A] font-semibold">
                  Reception Telephone
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D6B46A]" />
                  <a
                    href={`tel:${HOTEL_INFO.phoneRaw}`}
                    className="text-lg font-bold text-[#F8F7F4] hover:text-[#D6B46A] transition-colors tabular-nums"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                </div>
                <p className="text-[11px] text-[#F8F7F4]/60">Available 24 hours daily</p>
              </div>

              {/* Fast Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:pl-4">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-[#650D1B] hover:bg-[#7e1022] border border-[#D6B46A]/40 rounded text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={HOTEL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-[#142B59] hover:bg-[#1f3f7e] border border-[#D6B46A]/40 rounded text-center transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D6B46A]" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

          {/* Form and Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Booking Form (Cols 1-7) */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

            {/* Map & Directions (Cols 8-12) */}
            <div className="lg:col-span-5">
              <MapEmbed />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
