import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOTEL_INFO } from '../data/hotelData';
import { BookingForm } from '../components/BookingForm';
import { MapEmbed } from '../components/MapEmbed';
import { 
  ArrowLeft, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Plane, 
  Car, 
  Navigation,
  ShieldCheck,
  Building,
  Mail
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigate, selectedRoomForBooking } = useNavigation();

  return (
    <div className="bg-[#08152F] text-[#F8F7F4] min-h-screen">
      
      {/* Luxury Hero Banner */}
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
            <span className="text-[#F8F7F4]/60">Reservations & Location</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#F8F7F4] uppercase mb-4">
            Contact & Booking
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D6B46A] to-transparent mx-auto mb-6" />

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#F8F7F4]/80 leading-relaxed font-light">
            Plan your stay at Airport Otel. Reach our front desk team in Seyhan, Adana directly by telephone, WhatsApp, or through our reservation inquiry form below.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Phone */}
          <div className="p-8 rounded-xl bg-gradient-to-b from-[#142B59]/60 to-[#050E20] border border-[#D6B46A]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full border border-[#D6B46A]/40 bg-[#08152F] flex items-center justify-center text-[#D6B46A] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#F8F7F4] mb-1">
                Direct Reception Line
              </h3>
              <p className="text-xs text-[#F8F7F4]/70 mb-4 leading-relaxed">
                Call our front desk for immediate booking confirmations, room inquiries, and arrival support.
              </p>
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="text-lg font-bold text-[#D6B46A] hover:text-[#F8F7F4] transition-colors tabular-nums block"
              >
                {HOTEL_INFO.phone}
              </a>
            </div>

            <div className="pt-4 mt-4 border-t border-[#142B59]">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-[#650D1B] hover:bg-[#7e1022] rounded text-center transition-colors block"
              >
                Call Reception Now
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="p-8 rounded-xl bg-gradient-to-b from-[#142B59]/60 to-[#050E20] border border-[#D6B46A]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full border border-[#D6B46A]/40 bg-[#08152F] flex items-center justify-center text-[#D6B46A] mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#F8F7F4] mb-1">
                WhatsApp Concierge
              </h3>
              <p className="text-xs text-[#F8F7F4]/70 mb-4 leading-relaxed">
                Connect seamlessly with our concierge team over WhatsApp for questions, directions, and special needs.
              </p>
              <p className="text-sm font-medium text-[#D6B46A]">
                +90 543 513 6586
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#142B59]">
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-[#142B59] hover:bg-[#1f3f7e] border border-[#D6B46A]/40 rounded text-center transition-colors block"
              >
                Open WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Card 3: Hotel Address & Hours */}
          <div className="p-8 rounded-xl bg-gradient-to-b from-[#142B59]/60 to-[#050E20] border border-[#D6B46A]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full border border-[#D6B46A]/40 bg-[#08152F] flex items-center justify-center text-[#D6B46A] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#F8F7F4] mb-1">
                Hotel Location
              </h3>
              <p className="text-xs text-[#F8F7F4]/80 leading-relaxed mb-3">
                {HOTEL_INFO.address}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#D6B46A]">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{HOTEL_INFO.frontDesk}</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#142B59] flex items-center justify-between text-xs text-[#F8F7F4]/70">
              <span>Check-in: {HOTEL_INFO.checkInTime}</span>
              <span>Check-out: {HOTEL_INFO.checkOutTime}</span>
            </div>
          </div>

        </div>

        {/* Booking Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <BookingForm initialRoomId={selectedRoomForBooking} />
          </div>

          {/* Right: Map & Directions Guide */}
          <div className="lg:col-span-5 space-y-6">
            
            <MapEmbed />

            {/* Getting Here / Driving Directions */}
            <div className="p-6 rounded-lg bg-[#050E20] border border-[#142B59] space-y-4">
              <h4 className="font-serif-luxury text-lg font-bold text-[#D6B46A] uppercase tracking-wider flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                <span>Directions to Airport Otel</span>
              </h4>

              <div className="space-y-3 text-xs text-[#F8F7F4]/80 leading-relaxed">
                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F8F7F4]">From Adana Şakirpaşa Airport (ADA):</strong>
                    <p className="text-[#F8F7F4]/70 mt-0.5">
                      Approximately 5–8 minutes drive along Barış Bulvarı to Turhan Cemal Beriker Boulevard (D400 highway). Taxi and private transfers readily available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F8F7F4]">From Central Seyhan & Adana Gar:</strong>
                    <p className="text-[#F8F7F4]/70 mt-0.5">
                      Head west on Turhan Cemal Beriker Boulevard toward Emek Mah. Hotel entrance and guest parking are located directly along No:173/A.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F8F7F4]">Parking & Valet:</strong>
                    <p className="text-[#F8F7F4]/70 mt-0.5">
                      Convenient on-site vehicle drop-off and parking spaces available for hotel guests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};
