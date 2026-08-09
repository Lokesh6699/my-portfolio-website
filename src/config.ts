// ============================================================================
// CENTRAL CONFIG — Edit anything in this file to customize the portfolio.
// All UI components import from here. Never hardcode content in components.
// ============================================================================

export const siteConfig = {
  // --- THEME (colors are injected into CSS custom properties at runtime) ---
  theme: {
    primary: '#0a78a8',     // deep ocean blue
    secondary: '#e9d8a6',   // warm sand
    accent: '#ff8a5b',      // sunset coral
    background: '#061528',  // midnight ocean
    surface: '#0d2540',     // night sea
    text: '#f4e9d3',        // light sand
    textMuted: '#a9b8c8',
  },

  // --- HERO ---
  hero: {
    eyebrow: 'Goa Trip Planner · Est. Local Expertise',
    fullName: 'Lokesh',
    title: 'Your Local Goa Trip Planner',
    headline: 'Handcrafted Goa holidays, planned by someone who actually lives here.',
    subheadline:
      'Skip the tourist traps. I design calm, sun-soaked itineraries and book the beachfront resorts that real travellers only hear about — all in one call.',
    primaryCtaLabel: '📞 Call Lokesh Now',
    primaryCtaHref: 'tel:+919876543210',
    secondaryCtaLabel: 'See Sample Itineraries',
    secondaryCtaHref: '#work',
    badge: 'Local · Independent · 100% on-call support',
  },

  // --- ABOUT ---
  about: {
    label: 'About Lokesh',
    heading: 'Born in Panjim. Raised on the coast. Still here.',
    body: [
      "I grew up swimming in the same bays I now send my guests to. After ten years of helping friends, cousins, and complete strangers plan their Goa trips, I finally turned it into a full-time craft.",
      "I don't sell packages. I don't upsell water parks. I listen to the kind of trip you actually want — slow mornings, hidden shacks, candle-lit beach dinners, a noisy bachelor party, or a quiet family week — and I build it around real places I've vetted myself.",
      "Every itinerary is hand-drawn, every resort personally verified, and every booking is held by a phone number that actually picks up.",
    ],
    highlights: [
      { icon: 'Waves', label: 'Coastal-born local' },
      { icon: 'Compass', label: '500+ trips planned' },
      { icon: 'HeartHandshake', label: 'Handpicked stays' },
      { icon: 'Clock', label: 'On-call during your trip' },
    ],
  },

  // --- SERVICES ---
  services: {
    label: 'What I Plan For You',
    heading: 'Everything Goa — handled end to end.',
    subheading:
      'You bring the dates and the mood. I bring the routes, the rooms, the reservations, and a phone that rings when you need it.',
    items: [
      {
        icon: 'Map',
        title: 'Complete Goa Trip',
        description:
          'A full day-by-day itinerary built around your pace — North Goa, South Goa, or both, with beach time, forts, markets, sunsets, and food stops mapped out in order.',
        bullets: [
          'Custom day-by-day plan',
          'Inter-beach transport & timing',
          'Restaurant & shack reservations',
          'Hidden spots only locals know',
        ],
        priceLabel: 'Starts at ₹2,499 / trip',
      },
      {
        icon: 'Palmtree',
        title: 'Beach Resort Booking',
        description:
          'Curated, hand-verified stays from Candolim to Palolem — boutique villas, beachfront resorts, and boutique heritage homes with real ocean views.',
        bullets: [
          'Personally verified properties',
          'Best-rate negotiation',
          'Sea-view room guarantees',
          'Free cancellation support',
        ],
        priceLabel: 'No booking fees',
      },
      {
        icon: 'Car',
        title: 'Transport & Bike Rentals',
        description:
          'Airport pickups, self-drive bikes, AC cabs for the day, or a private car with a driver who knows every shortcut along the coast.',
        bullets: [
          'Airport transfers',
          'Bike & scooty rentals',
          'Private car with driver',
          'Fuel & insurance sorted',
        ],
        priceLabel: 'On-request pricing',
      },
      {
        icon: 'Sparkles',
        title: 'Experiences & Surprises',
        description:
          'Sunset cruises, private yacht dinners, scuba, parasailing, proposal setups, anniversary surprises, bachelor parties — I plan the moments you’ll talk about for years.',
        bullets: [
          'Sunset & yacht bookings',
          'Adventure activities',
          'Proposal & celebration setups',
          'Bachelorette / bachelor plans',
        ],
        priceLabel: 'Custom quotes',
      },
    ],
  },

  // --- WHY WORK WITH ME ---
  why: {
    label: 'Why Travellers Call Me First',
    heading: 'A planner who actually answers. Stays on the call. Stays in Goa.',
    subheading:
      'Booking platforms give you listings. I give you judgement, taste, and a fallback plan when the rain hits on a Tuesday.',
    pillars: [
      {
        icon: 'BadgeCheck',
        title: 'Verified Local Insight',
        description:
          'Every recommendation comes from a place I’ve eaten at, slept at, or watched the sunset from. No copied blog posts.',
      },
      {
        icon: 'Wallet',
        title: 'Best-Price Promise',
        description:
          'I match or beat public rates on the same rooms, and tell you when a “deal” online is actually a downgrade.',
      },
      {
        icon: 'Headphones',
        title: 'On-Trip Support',
        description:
          'A 24×7 WhatsApp line during your stay. Last-minute table at a packed shack, a hospital visit at 2 AM, a scooter that won’t start — handled.',
      },
      {
        icon: 'ShieldCheck',
        title: 'No Scams, No Tourist Traps',
        description:
          'I steer you clear of over-priced taxis, fake menus, and “guided tours” that only visit commission shops.',
      },
    ],
    stats: [
      { value: '500+', label: 'Trips planned' },
      { value: '4.9★', label: 'Average rating' },
      { value: '24/7', label: 'Trip support' },
      { value: '0', label: 'Scam referrals' },
    ],
  },

  // --- PROCESS ---
  process: {
    label: 'How It Works',
    heading: 'From first call to final sunrise.',
    subheading: 'A simple, calm process — most trips booked in under 48 hours.',
    steps: [
      {
        icon: 'PhoneCall',
        title: 'Discovery Call',
        description:
          'A 20-minute call to understand your dates, group size, budget, and the kind of trip you’re picturing. No forms, no pressure.',
      },
      {
        icon: 'NotebookPen',
        title: 'Custom Itinerary',
        description:
          'Within 24 hours, you receive a day-by-day Goa plan with stay options, costs, and links — yours to tweak as much as you want.',
      },
      {
        icon: 'CalendarCheck2',
        title: 'Bookings Locked',
        description:
          'Once you approve, I confirm the resorts, transfers, and experiences. You pay the property directly — I never hold your money.',
      },
      {
        icon: 'Sun',
        title: 'You Land in Goa',
        description:
          'A driver meets you at the airport. Your itinerary is on your phone. My WhatsApp is open from touchdown to takeoff.',
      },
    ],
  },

  // --- PORTFOLIO / WORK SAMPLES ---
  work: {
    label: 'Recent Trips',
    heading: 'Trips I’ve put together lately.',
    subheading:
      'A few real-style itineraries (names changed, vibes intact) so you can see the shape of a trip I’d build for you.',
    items: [
      {
        title: '5-Day North Goa Couple Retreat',
        description:
          'Candolim boutique stay, private sunset cruise at Vagator, candlelit beach shack dinners, day trip to Chapora fort.',
        tags: ['Couple', '5 days', 'North Goa', 'Mid-budget'],
        image:
          'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80',
        demo: '#contact',
      },
      {
        title: '7-Day Family Holiday, South Goa',
        description:
          'Beachfront resort in Colva, kid-safe beach days, Old Goa churches, dolphin-spotting cruise, slow evenings at Palolem.',
        tags: ['Family', '7 days', 'South Goa', 'Comfort'],
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
        demo: '#contact',
      },
      {
        title: 'Bachelor Party Weekend',
        description:
          'Anjuna & Vagator villa, sunset yacht, beach club day, ATV ride, late-night parties with reserved tables — and a sober driver on standby.',
        tags: ['Group of 8', '3 days', 'North Goa', 'High-energy'],
        image:
          'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1400&q=80',
        demo: '#contact',
      },
      {
        title: 'Solo Slow-Travel Week',
        description:
          'Heritage homestay in Fontainhas, scooter, café-hopping, yoga, art walks in Panjim, journaling spots in Palolem.',
        tags: ['Solo', '7 days', 'Both coasts', 'Slow pace'],
        image:
          'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1400&q=80',
        demo: '#contact',
      },
    ],
  },

  // --- TESTIMONIALS ---
  testimonials: {
    label: 'What Travellers Say',
    heading: 'Real trips. Real text messages. Real relief.',
    items: [
      {
        name: 'Aarav & Meera',
        role: 'Honeymoon · Bangalore',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
        quote:
          'Lokesh planned our entire honeymoon. Every resort was handpicked, every dinner was perfect, and the sunset cruise he set up was the highlight of our trip. We didn’t have to think once.',
      },
      {
        name: 'Rohan K.',
        role: 'Bachelor Party · Delhi',
        avatar:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80',
        quote:
          'I called him on a Monday and by Wednesday everything — villa, yacht, club tables, sober driver — was locked in. Half the cost of an online package and ten times better.',
      },
      {
        name: 'The Sharma Family',
        role: 'Family Trip · Mumbai',
        avatar:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        quote:
          'We were panicking with two kids and a cancelled hotel. Lokesh picked up at 11 PM, fixed the room in an hour, and saved the trip. He is now the only Goa contact we keep.',
      },
      {
        name: 'Sneha P.',
        role: 'Solo Trip · Pune',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
        quote:
          'I wanted a quiet week, no chaos, no crowds. He built me the most peaceful itinerary I’ve ever travelled on. Real places, real food, zero scam moments.',
      },
    ],
  },

  // --- FAQ ---
  faq: {
    label: 'Common Questions',
    heading: 'Quick answers before you call.',
    items: [
      {
        q: 'How quickly can you put a trip together?',
        a: 'Most itineraries are sent within 24 hours of our discovery call. If you’re travelling in the next 48 hours, mention it on the call — I’ve planned last-minute trips many times.',
      },
      {
        q: 'Do I pay you, or do I pay the hotels directly?',
        a: 'You pay the hotels, transport, and experiences directly. My planning fee is a small, flat amount per trip — and there are zero booking fees on resort stays.',
      },
      {
        q: 'Can you plan just a part of the trip — like only the resort?',
        a: 'Yes. Plenty of guests only need resort booking, or only a transport plan, or only a bachelor weekend. I’m happy to plan just what you need.',
      },
      {
        q: 'What if something goes wrong during the trip?',
        a: 'You get my personal WhatsApp number the moment your trip starts. Whether it’s a delayed flight, a sick day, a scooter breakdown, or a restaurant mishap — I’m on it.',
      },
      {
        q: 'Is Goa safe for families and solo travellers?',
        a: 'Yes, especially with the right stays and the right neighbourhoods. I plan around safety first — verified stays, safe beach hours, and a quick support line for anything off-script.',
      },
      {
        q: 'Do you only plan Goa, or other places too?',
        a: 'Goa is my home and my focus — that’s the whole point. For other destinations I’m happy to recommend trusted planners I know personally.',
      },
    ],
  },

  // --- FINAL CTA ---
  finalCta: {
    label: 'Ready When You Are',
    heading: 'One call. One calm week in Goa.',
    body: 'Tell me your dates and the kind of trip you’re imagining. I’ll send you a hand-built plan within 24 hours — no commitment, no pressure.',
    primaryCtaLabel: '📞 Call Lokesh Now',
    primaryCtaHref: 'tel:+919876543210',
    secondaryCtaLabel: 'WhatsApp Me',
    secondaryCtaHref: 'https://wa.me/919876543210',
    note: 'Replies within minutes during Goa hours (9 AM – 11 PM IST).',
  },

  // --- CONTACT ---
  contact: {
    label: 'Contact',
    heading: 'Let’s plan your Goa trip.',
    body: 'The fastest way to reach me is a phone call or a WhatsApp. I read every message myself.',
    email: 'goatrip.143@gmail.com',
    phone: '+91 98765 43210',
    location: 'Panjim, Goa · Available across India',
    socials: [
      { label: 'Instagram', href: 'https://instagram.com/lokesh.goa' },
      { label: 'WhatsApp', href: 'https://wa.me/919876543210' },
      { label: 'Facebook', href: 'https://facebook.com/lokesh.goa' },
    ],
  },

  // --- FOOTER ---
  footer: {
    tagline: 'Handcrafted Goa holidays, planned by a local.',
    note: 'Independent trip planner · Not affiliated with any hotel chain.',
  },
}

export type SiteConfig = typeof siteConfig
