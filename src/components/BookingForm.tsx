import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { Calendar, Users, CheckCircle, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';

interface BookingFormProps {
  initialRoomId?: string | null;
  className?: string;
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialRoomId,
  className = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    roomId: initialRoomId || 'deluxe-room',
    guests: '2',
    fullName: '',
    emailOrPhone: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.checkIn) {
      errs.checkIn = 'Please select your check-in date.';
    }

    if (!formData.checkOut) {
      errs.checkOut = 'Please select your check-out date.';
    } else if (formData.checkIn && formData.checkOut <= formData.checkIn) {
      errs.checkOut = 'Check-out date must be after check-in date.';
    }

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.emailOrPhone.trim()) {
      errs.emailOrPhone = 'Please provide a valid phone number or email.';
    } else if (
      formData.emailOrPhone.trim().length < 6
    ) {
      errs.emailOrPhone = 'Contact details must be at least 6 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate inquiry submission
    setTimeout(() => {
      const selectedRoom = ROOMS.find((r) => r.id === formData.roomId);
      const inquiryRef = `AO-${Math.floor(100000 + Math.random() * 900000)}`;

      setSubmittedData({
        ref: inquiryRef,
        roomName: selectedRoom ? selectedRoom.name : 'Configured Room',
        ...formData,
      });

      setIsSubmitting(false);
      if (onSuccess) onSuccess();
    }, 400);
  };

  const generateWhatsAppMessage = () => {
    if (!submittedData) return '';
    const text = `*Airport Otel Booking Inquiry*\nRef: ${submittedData.ref}\nName: ${submittedData.fullName}\nContact: ${submittedData.emailOrPhone}\nRoom: ${submittedData.roomName}\nCheck-in: ${submittedData.checkIn}\nCheck-out: ${submittedData.checkOut}\nGuests: ${submittedData.guests}\nRequests: ${submittedData.specialRequests || 'None'}`;
    return `https://wa.me/${HOTEL_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  if (submittedData) {
    return (
      <div className={`p-8 bg-[#08152F] border border-[#D6B46A]/40 rounded-lg text-left shadow-2xl ${className}`}>
        <div className="flex items-center gap-3 text-[#D6B46A] mb-4">
          <CheckCircle className="w-8 h-8 text-[#D6B46A]" />
          <div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#F8F7F4]">Inquiry Received</h3>
            <p className="text-xs text-[#D6B46A] tracking-wider uppercase">Reference: {submittedData.ref}</p>
          </div>
        </div>

        <div className="p-4 bg-[#142B59]/40 border border-[#142B59] rounded space-y-2 text-sm text-[#F8F7F4]/90 mb-6">
          <div className="flex justify-between border-b border-[#142B59] pb-1.5">
            <span className="text-[#F8F7F4]/60">Guest Name:</span>
            <span className="font-medium">{submittedData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-[#142B59] pb-1.5">
            <span className="text-[#F8F7F4]/60">Selected Category:</span>
            <span className="font-medium text-[#D6B46A]">{submittedData.roomName}</span>
          </div>
          <div className="flex justify-between border-b border-[#142B59] pb-1.5">
            <span className="text-[#F8F7F4]/60">Dates:</span>
            <span>{submittedData.checkIn} to {submittedData.checkOut}</span>
          </div>
          <div className="flex justify-between border-b border-[#142B59] pb-1.5">
            <span className="text-[#F8F7F4]/60">Guests:</span>
            <span>{submittedData.guests} Guest(s)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#F8F7F4]/60">Contact:</span>
            <span>{submittedData.emailOrPhone}</span>
          </div>
        </div>

        {/* Real action: send via WhatsApp to hotel reception */}
        <div className="space-y-3">
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] bg-[#142B59] hover:bg-[#1f3f7e] border border-[#D6B46A]/40 rounded transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#D6B46A]" />
            <span>Forward to Reception via WhatsApp (+90 543 513 6586)</span>
          </a>

          <button
            onClick={() => {
              setSubmittedData(null);
              setFormData({
                checkIn: '',
                checkOut: '',
                roomId: 'deluxe-room',
                guests: '2',
                fullName: '',
                emailOrPhone: '',
                specialRequests: '',
              });
            }}
            className="w-full py-2.5 text-xs text-[#F8F7F4]/70 hover:text-[#D6B46A] text-center transition-colors cursor-pointer"
          >
            Submit Another Reservation Inquiry
          </button>
        </div>

        {/* Clear demonstration disclosure notice as requested */}
        <div className="mt-4 pt-3 border-t border-[#142B59] flex items-start gap-2 text-[11px] text-[#F8F7F4]/60 leading-relaxed">
          <AlertCircle className="w-3.5 h-3.5 text-[#D6B46A] shrink-0 mt-0.5" />
          <span>
            Demonstration Note: Inquiries are registered client-side and can be immediately dispatched via WhatsApp or telephone to +90 543 513 6586. Production email/CRM delivery must be connected prior to final launch.
          </span>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 sm:p-8 bg-[#08152F]/90 border border-[#D6B46A]/30 rounded-lg text-left shadow-2xl backdrop-blur-sm ${className}`}
      noValidate
    >
      <div className="mb-6 border-b border-[#142B59] pb-4">
        <h3 className="font-serif-luxury text-2xl font-bold text-[#F8F7F4] tracking-wide">
          Booking & Reservation Inquiry
        </h3>
        <p className="text-xs text-[#D6B46A] tracking-wider uppercase mt-1">
          Airport Otel Seyhan · Direct Front Desk
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Check-in */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4]/80 mb-1.5">
            Check-In Date *
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.checkIn}
              onChange={(e) => {
                setFormData({ ...formData, checkIn: e.target.value });
                if (errors.checkIn) setErrors({ ...errors, checkIn: '' });
              }}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full bg-[#050E20] border ${
                errors.checkIn ? 'border-red-400' : 'border-[#142B59] focus:border-[#D6B46A]'
              } rounded px-3.5 py-2.5 text-sm text-[#F8F7F4] focus:outline-none focus:ring-1 focus:ring-[#D6B46A] transition-colors`}
            />
            <Calendar className="w-4 h-4 text-[#D6B46A] absolute right-3 top-3 pointer-events-none" />
          </div>
          {errors.checkIn && (
            <p className="text-red-400 text-xs mt-1">{errors.checkIn}</p>
          )}
        </div>

        {/* Check-out */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4]/80 mb-1.5">
            Check-Out Date *
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.checkOut}
              onChange={(e) => {
                setFormData({ ...formData, checkOut: e.target.value });
                if (errors.checkOut) setErrors({ ...errors, checkOut: '' });
              }}
              min={formData.checkIn || new Date().toISOString().split('T')[0]}
              className={`w-full bg-[#050E20] border ${
                errors.checkOut ? 'border-red-400' : 'border-[#142B59] focus:border-[#D6B46A]'
              } rounded px-3.5 py-2.5 text-sm text-[#F8F7F4] focus:outline-none focus:ring-1 focus:ring-[#D6B46A] transition-colors`}
            />
            <Calendar className="w-4 h-4 text-[#D6B46A] absolute right-3 top-3 pointer-events-none" />
          </div>
          {errors.checkOut && (
            <p className="text-red-400 text-xs mt-1">{errors.checkOut}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Room Category */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4]/80 mb-1.5">
            Accommodation Category
          </label>
          <select
            value={formData.roomId}
            onChange={(e) => setFormData({ ...formData, roomId: e.target.value })}
            className="w-full bg-[#050E20] border border-[#142B59] focus:border-[#D6B46A] rounded px-3.5 py-2.5 text-sm text-[#F8F7F4] focus:outline-none focus:ring-1 focus:ring-[#D6B46A] transition-colors cursor-pointer"
          >
            {ROOMS.map((room) => (
              <option key={room.id} value={room.id} className="bg-[#08152F] text-[#F8F7F4]">
                {room.name} ({room.bedType})
              </option>
            ))}
          </select>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4]/80 mb-1.5">
            Number of Guests
          </label>
          <div className="relative">
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full bg-[#050E20] border border-[#142B59] focus:border-[#D6B46A] rounded px-3.5 py-2.5 text-sm text-[#F8F7F4] focus:outline-none focus:ring-1 focus:ring-[#D6B46A] transition-colors cursor-pointer appearance-none"
            >
              <option value="1" className="bg-[#08152F]">1 Adult</option>
              <option value="2" className="bg-[#08152F]">2 Adults</option>
              <option value="3" className="bg-[#08152F]">3 Guests (Family)</option>
              <option value="4" className="bg-[#08152F]">4+ Guests (Family)</option>
            </select>
            <Users className="w-4 h-4 text-[#D6B46A] absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4]/80 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Mehmet Yılmaz"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: '' });
            }}
            className={`w-full bg-[#050E20] border ${
              errors.fullName ? 'border-red-400' : 'border-[#142B59] focus:border-[#D6B46A]'
            } rounded px-3.5 py-2.5 text-sm text-[#F8F7F4] placeholder-[#F8F7F4]/30 focus:outline-none focus:ring-1 focus:ring-[#D6B46A] transition-colors`}
          />
          {errors.fullName && (
            <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Phone or Email */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4]/80 mb-1.5">
            Phone or Email *
          </label>
          <input
            type="text"
            placeholder="+90 ... or name@example.com"
            value={formData.emailOrPhone}
            onChange={(e) => {
              setFormData({ ...formData, emailOrPhone: e.target.value });
              if (errors.emailOrPhone) setErrors({ ...errors, emailOrPhone: '' });
            }}
            className={`w-full bg-[#050E20] border ${
              errors.emailOrPhone ? 'border-red-400' : 'border-[#142B59] focus:border-[#D6B46A]'
            } rounded px-3.5 py-2.5 text-sm text-[#F8F7F4] placeholder-[#F8F7F4]/30 focus:outline-none focus:ring-1 focus:ring-[#D6B46A] transition-colors`}
          />
          {errors.emailOrPhone && (
            <p className="text-red-400 text-xs mt-1">{errors.emailOrPhone}</p>
          )}
        </div>
      </div>

      {/* Special Requests */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4]/80 mb-1.5">
          Special Requests & Arrival Time
        </label>
        <textarea
          rows={3}
          placeholder="Flight arrival details, quiet room preference, early check-in, or twin bed arrangement..."
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          className="w-full bg-[#050E20] border border-[#142B59] focus:border-[#D6B46A] rounded px-3.5 py-2.5 text-sm text-[#F8F7F4] placeholder-[#F8F7F4]/30 focus:outline-none focus:ring-1 focus:ring-[#D6B46A] transition-colors"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 text-sm font-semibold uppercase tracking-wider text-[#F8F7F4] bg-gradient-to-r from-[#650D1B] to-[#3B0711] hover:from-[#7e1022] hover:to-[#4f0917] border border-[#D6B46A]/50 rounded shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-[#D6B46A] border-t-transparent rounded-full animate-spin" />
            <span>Processing Reservation...</span>
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <span>Send Booking Inquiry</span>
            <ArrowRight className="w-4 h-4 text-[#D6B46A]" />
          </span>
        )}
      </button>

      <p className="text-[11px] text-[#F8F7F4]/50 text-center mt-3">
        Direct confirmation handled by Airport Otel Adana reception · Tel: +90 543 513 6586
      </p>
    </form>
  );
};
