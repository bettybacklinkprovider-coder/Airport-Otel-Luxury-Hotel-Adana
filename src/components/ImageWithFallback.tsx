import React, { useState } from 'react';
import { BedDouble } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Airport Otel Adana',
  fallbackTitle = 'Airport Otel',
  className = '',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#08152F] via-[#142B59] to-[#3B0711] text-[#F8F7F4] p-6 border border-[#D6B46A]/20 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full border border-[#D6B46A]/40 flex items-center justify-center mb-3 text-[#D6B46A] bg-[#08152F]/60">
          <BedDouble className="w-6 h-6" />
        </div>
        <p className="font-serif-luxury text-lg text-center tracking-wide text-[#F8F7F4]">{fallbackTitle}</p>
        <p className="text-xs text-[#D6B46A]/80 tracking-wider uppercase mt-1">Seyhan · Adana</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#08152F]/70 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#D6B46A]/40 border-t-[#D6B46A] rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};
