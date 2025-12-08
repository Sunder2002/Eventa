import { ServiceItem, Testimonial } from './types';

export const COMPANY_INFO = {
  name: "Eventa",
  tagline: "Turning Moments into Memories",
  description: "Eventa curates and executes flawless events in Hyderabad, Telangana. We specialize in transforming venues, capturing timeless moments, and creating breathtaking decorations that ensure your occasion is stress-free and successful.",
  address: "2nd floor, Oftog Business Solutions Pvt Ltd, Road No 1, 1st cabin, Banjara Hills, Hyderabad, Telangana 500034",
  phones: ["+91 9908095092", "+91 9014366645"], // updated phone numbers
  email: "eventseventa@gmail.com",
  instagramHandle: "@eventa.hyd",
  instagramUrl: "https://www.instagram.com/eventa.hyd?igsh=djg4cjVzYmVseGZi"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding',
    title: 'Wedding',
    description: 'Breathtaking mandap decor and cinematic photography to capture every ritual of your big day.',
    image: '/assets/mandap.jpeg', // This must match the filename in your assets folder
  },
  {
    id: 'birthday',
    title: 'Birthday Party',
    description: 'Vibrant balloon themes and venue styling that creates the perfect backdrop for your celebration.',
    image: '/assets/birthday.jpg', // Local image
  },
  {
    id: 'mehandi',
    title: 'Haldi & Mehandi', // renamed from "Mehandi & Mangala Snanam"
    description: 'Traditional mehandi designs, colorful rangoli patterns, and auspicious ceremonies with authentic cultural decor.',
    image: '/assets/mangala%20snanam.jpg', // updated to local asset (encode space as %20)
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional stage setups, branding decor, and premium venue sourcing for impactful business events.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80', // Corporate setup
  },
  {
    id: 'dhoti-saree',
    title: 'Dhoti & Saree Ceremony',
    description: 'Traditional floral arrangements and cultural decor themes honoring your family traditions.',
    image: '/assets/dhoti%20function.jpg', // updated to local asset (encode space as %20)
  },
  {
    id: 'anniversary',
    title: 'Anniversary',
    description: 'Romantic lighting, elegant table settings, and intimate venue choices for your special milestone.',
    image: '/assets/anniversary.jpg', // updated to local asset
  }
];

export const CORE_OFFERINGS = [
  "Decoration",
  "Photography",
  "Venue Selection"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Aditi Rao",
    role: "Bride",
    content: "Eventa's decoration was magical. They transformed the venue completely, and the photos are stunning!"
  },
  {
    id: '2',
    name: "Rajesh Kumar",
    role: "Corporate Client",
    content: "Excellent venue selection for our annual meet. The stage decor was professional and on-brand."
  },
  {
    id: '3',
    name: "Sneha Reddy",
    role: "Parent",
    content: "The floral decor for my son's Dhoti ceremony was traditional and beautiful. Highly recommended."
  }
];
