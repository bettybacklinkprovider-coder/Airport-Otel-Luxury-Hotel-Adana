import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { HOTEL_INFO } from './data/hotelData';
import { Phone, MessageSquare } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  // Multi-page routing renderer
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/rooms':
        return <RoomsPage />;
      case '/gallery':
        return <GalleryPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08152F] text-[#F8F7F4] selection:bg-[#650D1B] selection:text-[#F8F7F4]">
      {/* Universal Luxury Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Universal Luxury Footer */}
      <Footer />

      {/* Floating Fast Action Contact Drawer on Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        <a
          href={HOTEL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#142B59] hover:bg-[#1f3f7e] border border-[#D6B46A]/50 text-[#D6B46A] hover:text-[#F8F7F4] shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Direct WhatsApp Message to Airport Otel"
          title="WhatsApp Concierge (+90 543 513 6586)"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <a
          href={`tel:${HOTEL_INFO.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-[#650D1B] hover:bg-[#7e1022] border border-[#D6B46A]/50 text-[#F8F7F4] shadow-2xl flex items-center justify-center transition-transform hover:scale-110 sm:hidden"
          aria-label="Call Airport Otel Front Desk"
          title="Call Reception (+90 543 513 6586)"
        >
          <Phone className="w-5 h-5 text-[#D6B46A]" />
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
