export interface Room {
  id: string;
  name: string;
  category: 'Standard' | 'Deluxe' | 'Family' | 'Executive';
  image: string;
  description: string;
  bedType: string;
  capacity: string;
  size: string;
  amenities: string[];
  note?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'lobby' | 'exterior' | 'dining';
  image: string;
  description: string;
}

export const HOTEL_INFO = {
  name: 'Airport Otel',
  tagline: 'Comfort, Elegance and Hospitality in Adana, Türkiye',
  phone: '+90 543 513 6586',
  phoneRaw: '905435136586',
  whatsappUrl: 'https://wa.me/905435136586?text=Hello%20Airport%20Otel,%20I%20would%20like%20to%20inquire%20about%20a%20reservation.',
  address: 'Emek, Turhan Cemal Beriker Blv. No:173/A, 01080 Seyhan/Adana, Türkiye',
  city: 'Adana',
  district: 'Seyhan',
  country: 'Türkiye',
  checkInTime: '14:00',
  checkOutTime: '12:00',
  frontDesk: '24/7 Front Desk & Concierge',
};

// Using locally generated high-fidelity photography assets + verified hospitality assets
import heroExteriorImg from '../assets/images/hotel_hero_exterior_1791730251539.jpg';
import lobbyLoungeImg from '../assets/images/hotel_lobby_lounge_1791730264985.jpg';
import deluxeRoomImg from '../assets/images/deluxe_room_interior_1791730278003.jpg';
import standardRoomImg from '../assets/images/standard_room_interior_1791730289171.jpg';
import familySuiteImg from '../assets/images/family_suite_interior_1791730298963.jpg';
import hospitalityComfortableImg from '../assets/images/hospitality_comfortable_accommodation_1791783800753.jpg';
import hospitalityWarmWelcomeImg from '../assets/images/hospitality_warm_welcome_1791783811975.jpg';
import hospitalityConvenientLocationImg from '../assets/images/hospitality_convenient_location_1791783823769.jpg';

export const HOTEL_IMAGES = {
  heroExterior: heroExteriorImg,
  lobbyLounge: lobbyLoungeImg,
  deluxeRoom: deluxeRoomImg,
  standardRoom: standardRoomImg,
  familySuite: familySuiteImg,
  hospitalityComfortable: hospitalityComfortableImg,
  hospitalityWarmWelcome: hospitalityWarmWelcomeImg,
  hospitalityConvenientLocation: hospitalityConvenientLocationImg,
  // Additional high-resolution hospitality scenes with zero repetition
  diningBreakfast: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
  bathroomLuxury: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  hotelEntranceNight: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  executiveSuiteView: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  teaLoungeCorner: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
  terraceAdanaSkyline: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
  receptionDetail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  twinComfortRoom: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
  businessDeskCorner: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
};

export const ROOMS: Room[] = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    category: 'Standard',
    image: HOTEL_IMAGES.standardRoom,
    description: 'A thoughtfully appointed haven engineered for comfort and restful nights, featuring contemporary wood panelling and bespoke lighting.',
    bedType: 'Twin Beds or 1 Queen Bed',
    capacity: 'Up to 2 Guests',
    size: '24 m²',
    amenities: [
      'Individually Controlled AC',
      'High-Speed Wi-Fi',
      'Satellite Smart LED TV',
      'En-suite Bathroom & Rain Shower',
      'Work Desk & Ergonomic Chair',
      'Tea & Coffee Making Set',
      'Soundproof Double Glazing',
      'Daily Housekeeping'
    ],
    note: 'Rates and seasonal availability are configurable by hotel reception upon inquiry.'
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    category: 'Deluxe',
    image: HOTEL_IMAGES.deluxeRoom,
    description: 'Elevated luxury boasting a king-size bed, rich velvet furnishings, panoramic city windows, and ambient reading illumination.',
    bedType: '1 King Bed',
    capacity: 'Up to 2 Guests',
    size: '32 m²',
    amenities: [
      'King-Size Orthopedic Bed',
      'Panoramic City View',
      'Mini Bar & Refreshment Station',
      'Luxury Toiletries & Plush Bathrobe',
      'Complimentary High-Speed Wi-Fi',
      '43" 4K Smart TV',
      'Laptop Safe Box',
      '24/7 Room Service Call'
    ],
    note: 'Rates and seasonal availability are configurable by hotel reception upon inquiry.'
  },
  {
    id: 'family-room',
    name: 'Family Room',
    category: 'Family',
    image: HOTEL_IMAGES.familySuite,
    description: 'Generous suite layout featuring interconnected relaxation spaces, plush lounge seating, and flexible sleeping configurations for family visits.',
    bedType: '1 King Bed + 2 Twin Beds / Sofa Bed',
    capacity: 'Up to 4 Guests',
    size: '48 m²',
    amenities: [
      'Spacious Seating Lounge',
      'Multiple Sleeping Zones',
      'Family Dining / Coffee Table',
      'Dual Climate Control',
      'Large En-suite Bathroom',
      'Ample Wardrobe Storage',
      'Electric Kettle & Complimentary Tea',
      'Soundproof Acoustic Design'
    ],
    note: 'Rates and seasonal availability are configurable by hotel reception upon inquiry.'
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    category: 'Executive',
    image: HOTEL_IMAGES.executiveSuiteView,
    description: 'A prestigious boutique residence combining private business work accommodations with refined living comfort.',
    bedType: '1 Master King Bed',
    capacity: 'Up to 2 Guests',
    size: '42 m²',
    amenities: [
      'Separate Living & Work Area',
      'Executive Writing Desk',
      'Espresso & Premium Tea Bar',
      'Marble Bathroom with Deep Soaking Tub',
      'High-Speed Fiber Internet',
      'Pillow Menu Selection',
      'Express Check-in Service',
      'Daily Mineral Water'
    ],
    note: 'Rates and seasonal availability are configurable by hotel reception upon inquiry.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hotel Entrance & Driveway',
    category: 'exterior',
    image: HOTEL_IMAGES.heroExterior,
    description: 'Architectural illuminated facade on Turhan Cemal Beriker Boulevard, Adana.'
  },
  {
    id: 'gal-2',
    title: 'Lobby Lounge & Reception',
    category: 'lobby',
    image: HOTEL_IMAGES.lobbyLounge,
    description: 'Opulent reception lounge welcoming guests with warm Turkish hospitality.'
  },
  {
    id: 'gal-3',
    title: 'Deluxe King Bedroom',
    category: 'rooms',
    image: HOTEL_IMAGES.deluxeRoom,
    description: 'Refined bedding with dark burgundy velvet accents and Adana skyline view.'
  },
  {
    id: 'gal-4',
    title: 'Standard Twin Accommodation',
    category: 'rooms',
    image: HOTEL_IMAGES.standardRoom,
    description: 'Modern twin room equipped with soundproof glazing and ambient headboard lighting.'
  },
  {
    id: 'gal-5',
    title: 'Family Suite Living Area',
    category: 'rooms',
    image: HOTEL_IMAGES.familySuite,
    description: 'Generous family suite with dedicated sitting lounge and dark wine red accents.'
  },
  {
    id: 'gal-6',
    title: 'Executive Master Suite',
    category: 'rooms',
    image: HOTEL_IMAGES.executiveSuiteView,
    description: 'Quiet boutique suite designed for both business executives and leisure travelers.'
  },
  {
    id: 'gal-7',
    title: 'Breakfast & Dining Lounge',
    category: 'dining',
    image: HOTEL_IMAGES.diningBreakfast,
    description: 'Elegant dining area serving authentic Turkish morning selections and fresh tea.'
  },
  {
    id: 'gal-8',
    title: 'En-suite Marble Bathroom',
    category: 'rooms',
    image: HOTEL_IMAGES.bathroomLuxury,
    description: 'Pristine modern bathroom with premium rainfall shower and luxury toiletries.'
  },
  {
    id: 'gal-9',
    title: 'Evening Exterior Illumination',
    category: 'exterior',
    image: HOTEL_IMAGES.hotelEntranceNight,
    description: 'Welcoming evening lighting accentuating the hotel front and secure parking area.'
  },
  {
    id: 'gal-10',
    title: 'Boutique Tea & Coffee Corner',
    category: 'dining',
    image: HOTEL_IMAGES.teaLoungeCorner,
    description: 'Relaxed hospitality corner for welcoming conversations and Turkish coffee.'
  },
  {
    id: 'gal-11',
    title: 'Reception Desk Detail',
    category: 'lobby',
    image: HOTEL_IMAGES.receptionDetail,
    description: 'Dedicated 24/7 front desk team providing seamless check-in and assistance.'
  },
  {
    id: 'gal-12',
    title: 'Adana City Skyline View',
    category: 'exterior',
    image: HOTEL_IMAGES.terraceAdanaSkyline,
    description: 'Views over the vibrant cityscape of Seyhan and the Çukurova region.'
  },
  {
    id: 'gal-13',
    title: 'Executive Work Station',
    category: 'rooms',
    image: HOTEL_IMAGES.businessDeskCorner,
    description: 'In-room high-speed Wi-Fi and ergonomic workstation for business stays.'
  },
  {
    id: 'gal-14',
    title: 'Twin Comfort Guest Room',
    category: 'rooms',
    image: HOTEL_IMAGES.twinComfortRoom,
    description: 'Restful twin accommodation ensuring quiet sleep and attentive housekeeping.'
  }
];

export const HOSPITALITY_FEATURES = [
  {
    id: 'feat-comfort',
    title: 'Comfortable Accommodation',
    image: HOTEL_IMAGES.hospitalityComfortable,
    description: 'Meticulously maintained guest rooms with premium mattresses, crisp cotton linens, soundproof double-glazed windows, and individual temperature regulation for truly restful sleep.'
  },
  {
    id: 'feat-hospitality',
    title: 'Warm Hospitality',
    image: HOTEL_IMAGES.hospitalityWarmWelcome,
    description: 'Experience genuine Turkish hospitality from our attentive 24-hour reception team, ready to assist with luggage, local Seyhan dining recommendations, and smooth check-in procedures.'
  },
  {
    id: 'feat-location',
    title: 'Convenient Location',
    image: HOTEL_IMAGES.hospitalityConvenientLocation,
    description: 'Positioned on Turhan Cemal Beriker Boulevard in Seyhan, offering seamless proximity to Adana Şakirpaşa Airport, the D400 highway corridor, and central business districts.'
  }
];
