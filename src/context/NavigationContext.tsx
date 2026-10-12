import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageRoute = '/' | '/rooms' | '/gallery' | '/contact';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string, options?: { scrollToTop?: boolean; state?: any }) => void;
  selectedRoomForBooking: string | null;
  setSelectedRoomForBooking: (roomId: string | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Normalize pathname to one of the 4 valid routes or default to '/'
  const normalizePath = (path: string): string => {
    const clean = path.split('?')[0].split('#')[0] || '/';
    if (clean === '/rooms' || clean === '/gallery' || clean === '/contact') {
      return clean;
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string, options?: { scrollToTop?: boolean; state?: any }) => {
    const targetPath = normalizePath(path);
    if (window.location.pathname !== targetPath) {
      window.history.pushState(options?.state || {}, '', path);
    }
    setCurrentPath(targetPath);

    if (options?.scrollToTop !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Update browser document title based on page
  useEffect(() => {
    let title = 'Airport Otel — Luxury Hotel Adana, Türkiye';
    if (currentPath === '/rooms') {
      title = 'Rooms & Suites | Airport Otel Adana';
    } else if (currentPath === '/gallery') {
      title = 'Hotel Gallery | Airport Otel Adana';
    } else if (currentPath === '/contact') {
      title = 'Contact & Reservations | Airport Otel Adana';
    }
    document.title = title;
  }, [currentPath]);

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        selectedRoomForBooking,
        setSelectedRoomForBooking,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
