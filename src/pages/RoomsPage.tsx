import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ROOMS, HOTEL_INFO, Room } from '../data/hotelData';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Users, 
  Maximize2, 
  Bed, 
  Calendar, 
  Phone, 
  Info,
  Sparkles,
  ShieldCheck,
  Coffee,
  Wifi,
  Tv,
  Wind
} from 'lucide-react';

export const RoomsPage: React.FC = () => {
  const { navigate, setSelectedRoomForBooking } = useNavigation();
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);

  const categories = ['all', 'Standard', 'Deluxe', 'Family', 'Executive'];

  const filteredRooms = filterCategory === 'all'
    ? ROOMS
    : ROOMS.filter(r => r.category === filterCategory);

  const handleBookRoom = (roomId: string) => {
    setSelectedRoomForBooking(roomId);
    navigate('/contact');
  };

  return (
    <div className="bg-[#08152F] text-[#F8F7F4] min-h-screen">
      
      {/* Luxury Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#050E20] via-[#142B59]/70 to-[#08152F] border-b border-[#D6B46A]/20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D6B46A_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Breadcrumb / Return Route to Home */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#D6B46A] uppercase tracking-wider mb-6">
            <button
              onClick={() => navigate('/')}
              className="hover:text-[#F8F7F4] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-[#F8F7F4]/60">Accommodations</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#F8F7F4] uppercase mb-4">
            Rooms & Suites
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D6B46A] to-transparent mx-auto mb-6" />

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#F8F7F4]/80 leading-relaxed font-light">
            Indulge in peaceful relaxation with soundproof accommodations, curated linens, and attentive hospitality tailored for business travelers, regional visitors, and families in Adana.
          </p>

          {/* Configurable Status Banner */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded border border-[#D6B46A]/30 bg-[#08152F]/80 text-xs text-[#D6B46A] max-w-xl mx-auto">
            <Info className="w-4 h-4 shrink-0 text-[#D6B46A]" />
            <span className="text-left">
              Room rates and real-time dates are configurable upon inquiry with our 24/7 reception desk.
            </span>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filterCategory === cat
                  ? 'bg-gradient-to-r from-[#650D1B] to-[#3B0711] text-[#F8F7F4] border border-[#D6B46A] shadow-md'
                  : 'bg-[#142B59]/40 text-[#F8F7F4]/70 hover:text-[#F8F7F4] hover:bg-[#142B59] border border-[#142B59]'
              }`}
            >
              {cat === 'all' ? 'All Accommodations' : `${cat} Rooms`}
            </button>
          ))}
        </div>

        {/* Detailed Room Cards List */}
        <div className="space-y-12">
          {filteredRooms.map((room, idx) => (
            <div
              key={room.id}
              className="bg-[#050E20] border border-[#D6B46A]/20 hover:border-[#D6B46A]/50 rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Large Room Photograph (Cols 1-5 or 1-6) */}
                <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto overflow-hidden group">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050E20]/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 bg-[#08152F]/90 border border-[#D6B46A]/40 px-3.5 py-1.5 rounded text-xs font-semibold text-[#D6B46A] tracking-wider uppercase backdrop-blur-sm">
                    {room.category} Class
                  </div>

                  {/* Quick Expand button */}
                  <button
                    onClick={() => setActiveModalRoom(room)}
                    className="absolute bottom-4 right-4 p-2.5 rounded bg-[#08152F]/80 text-[#D6B46A] hover:text-[#F8F7F4] border border-[#D6B46A]/30 backdrop-blur-sm transition-colors cursor-pointer"
                    title="Enlarge room photo & details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Room Details (Cols 6-12) */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  
                  <div>
                    {/* Header & Badges */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                      <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F7F4]">
                        {room.name}
                      </h2>
                      <span className="text-xs text-[#D6B46A] tracking-wider uppercase font-medium">
                        Adana Seyhan View
                      </span>
                    </div>

                    {/* Key Specs Bar */}
                    <div className="flex flex-wrap items-center gap-6 py-3 border-y border-[#142B59]/70 text-xs sm:text-sm text-[#F8F7F4]/90 mb-5">
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-[#D6B46A]" />
                        <span>{room.bedType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#D6B46A]" />
                        <span>{room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-[#D6B46A]" />
                        <span>{room.size}</span>
                      </div>
                    </div>

                    {/* Room Description */}
                    <p className="text-sm sm:text-base text-[#F8F7F4]/80 leading-relaxed mb-6">
                      {room.description}
                    </p>

                    {/* Configurable Amenities Checklist */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D6B46A] mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Room Amenities & Facilities</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F8F7F4]/85">
                        {room.amenities.map((amenity, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#D6B46A] shrink-0" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="pt-6 border-t border-[#142B59] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left w-full sm:w-auto">
                      <p className="text-xs text-[#D6B46A] uppercase tracking-wider font-semibold">
                        Direct Reservation
                      </p>
                      <p className="text-[11px] text-[#F8F7F4]/60">
                        Front desk inquiries confirmed instantly
                      </p>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={`tel:${HOTEL_INFO.phoneRaw}`}
                        className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#D6B46A] hover:text-[#F8F7F4] border border-[#D6B46A]/30 hover:border-[#D6B46A] rounded bg-[#142B59]/40 transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Call Front Desk</span>
                      </a>

                      <button
                        onClick={() => handleBookRoom(room.id)}
                        className="flex-1 sm:flex-initial py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-gradient-to-r from-[#650D1B] to-[#3B0711] hover:from-[#7e1022] hover:to-[#4f0917] border border-[#D6B46A]/50 rounded shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#D6B46A]" />
                        <span>Inquire About This Room</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Global Amenities & Hospitality Overview */}
        <div className="mt-20 p-8 sm:p-10 rounded-xl bg-gradient-to-r from-[#142B59]/40 via-[#08152F] to-[#3B0711]/30 border border-[#D6B46A]/30 text-center">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F7F4] mb-3">
            Every Stay at Airport Otel Includes
          </h3>
          <p className="text-sm text-[#F8F7F4]/75 max-w-xl mx-auto mb-8">
            Tailored comfort to make your stay in Adana relaxing and uncomplicated.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto text-xs text-[#F8F7F4]/90">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-[#D6B46A]/40 flex items-center justify-center text-[#D6B46A] bg-[#08152F]">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="font-medium">High-Speed Wi-Fi</span>
              <span className="text-[11px] text-[#F8F7F4]/60">Complimentary across rooms</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-[#D6B46A]/40 flex items-center justify-center text-[#D6B46A] bg-[#08152F]">
                <Wind className="w-5 h-5" />
              </div>
              <span className="font-medium">Climate Control</span>
              <span className="text-[11px] text-[#F8F7F4]/60">Individual A/C heating & cooling</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-[#D6B46A]/40 flex items-center justify-center text-[#D6B46A] bg-[#08152F]">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-medium">Tea & Refreshments</span>
              <span className="text-[11px] text-[#F8F7F4]/60">In-room hot beverage service</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-[#D6B46A]/40 flex items-center justify-center text-[#D6B46A] bg-[#08152F]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-medium">Soundproof Glazing</span>
              <span className="text-[11px] text-[#F8F7F4]/60">Restful acoustic isolation</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#142B59]/60 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-[#650D1B] hover:bg-[#7e1022] border border-[#D6B46A]/40 rounded transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Contact for Group or Corporate Booking</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D6B46A]" />
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#D6B46A] hover:text-[#F8F7F4] border border-[#D6B46A]/30 rounded transition-colors cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>

      </section>

      {/* Modal Lightbox for Room Preview */}
      {activeModalRoom && (
        <div
          className="fixed inset-0 z-50 bg-[#050E20]/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalRoom(null)}
        >
          <div
            className="bg-[#08152F] border border-[#D6B46A]/40 rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-96">
              <ImageWithFallback
                src={activeModalRoom.image}
                alt={activeModalRoom.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalRoom(null)}
                className="absolute top-4 right-4 bg-[#08152F]/90 text-[#F8F7F4] hover:text-[#D6B46A] px-3 py-1.5 rounded text-xs border border-[#D6B46A]/40 cursor-pointer"
              >
                Close ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#F8F7F4] mb-2">
                {activeModalRoom.name}
              </h3>
              <p className="text-sm text-[#F8F7F4]/80 mb-4">{activeModalRoom.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-[#142B59]">
                <span className="text-xs text-[#D6B46A]">{activeModalRoom.bedType} · {activeModalRoom.capacity}</span>
                <button
                  onClick={() => {
                    handleBookRoom(activeModalRoom.id);
                    setActiveModalRoom(null);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-[#650D1B] rounded border border-[#D6B46A]/40 cursor-pointer"
                >
                  Proceed to Inquire
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
