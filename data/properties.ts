import type { Property } from "@/components/PropertyCard";

const baseImages = {
  cityLoft: "/images/properties/mumbai-loft.png",
  modernLiving: "/images/properties/gurgaon-apartment.png",
  skylinePenthouse: "/images/properties/mumbai-penthouse.png",
  gardenTownhouse: "/images/properties/delhi-bungalow.png",
  minimalistStudio: "/images/properties/bangalore-studio.png",
  waterfrontVilla: "/images/properties/goa-villa.png",
  luxuryPenthouse: "/images/properties/gurgaon-apartment.png",
  modernMansion: "/images/properties/delhi-bungalow.png",
  beachHouse: "/images/properties/goa-villa.png",
  urbanLoft: "/images/properties/mumbai-penthouse.png",
  hillsideEstate: "/images/properties/delhi-bungalow.png"
};

// Distinct Unsplash IDs for variety
const frontViews = [
  "https://images.unsplash.com/photo-1600596542815-2a4d9fdd1243?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600047509807-c29dd398f769?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600596542815-2a4d9fdd1243?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f8e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=800&q=80"
];

const sideViews = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1531971589569-0d9370cbe865?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1510627489930-0c1b0dc58e85?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1493809685953-17cd45774d69?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80"
];

const interiorViews = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80"
];

export const allProperties: (Property & {
  images: string[];
  description: string;
  secondaryDescription: string;
})[] = [
    {
      id: "skyline-penthouse",
      title: "Skyline Penthouse with Worli Sea Face Views",
      location: "Worli, Mumbai",
      priceFormatted: "₹18.5 Cr",
      image: baseImages.skylinePenthouse,
      images: [
        baseImages.skylinePenthouse,
        frontViews[0],
        sideViews[0],
        interiorViews[0]
      ],
      beds: 4,
      baths: 4,
      size: 4500,
      status: "For sale",
      description:
        "A luxurious penthouse overlooking the Arabian Sea, featuring expansive decks, private elevator access, and Italian marble flooring throughout.",
      secondaryDescription:
        "Located in South Mumbai's most prestigious tower, with 5-star concierge services and close proximity to the Bandra-Worli Sea Link."
    },
    {
      id: "garden-townhouse",
      title: "Heritage Bungalow with Private Lawn",
      location: "Vasant Vihar, New Delhi",
      priceFormatted: "₹25 Cr",
      image: baseImages.gardenTownhouse,
      images: [
        baseImages.gardenTownhouse,
        frontViews[1],
        sideViews[1],
        interiorViews[1]
      ],
      beds: 5,
      baths: 6,
      size: 6000,
      status: "For sale",
      description:
        "A stately sprawling bungalow in the heart of Delhi, featuring a lush private garden, colonial architecture, and modern interiors.",
      secondaryDescription:
        "Includes staff quarters, a modular gourmet kitchen, and is situated in a high-security diplomatic zone."
    },
    {
      id: "minimalist-studio",
      title: "Premium Studio in Tech Hub",
      location: "Indiranagar, Bangalore",
      priceFormatted: "₹2.1 Cr",
      image: baseImages.minimalistStudio,
      images: [
        baseImages.minimalistStudio,
        frontViews[2],
        sideViews[2],
        interiorViews[2]
      ],
      beds: 1,
      baths: 1,
      size: 950,
      status: "For sale",
      description:
        "A smart, contemporary studio apartment walking distance from Bangalore's best cafes and workspaces.",
      secondaryDescription:
        "Features home automation, soundproof windows, and access to a rooftop infinity pool and co-working lounge."
    },
    {
      id: "waterfront-villa",
      title: "Goan Portuguese Villa by the River",
      location: "Assagao, North Goa",
      priceFormatted: "₹12.5 Cr",
      image: baseImages.waterfrontVilla,
      images: [
        baseImages.waterfrontVilla,
        frontViews[3],
        sideViews[3],
        interiorViews[3]
      ],
      beds: 5,
      baths: 5,
      size: 5000,
      status: "For sale",
      description:
        "A painstakingly restored Portuguese-style villa with modern amenities, set amidst swaying palms and river breezes.",
      secondaryDescription:
        "Boasts a private lap pool, balcão seating, and traditional laterite stone walls, perfect as a vacation home or high-yield rental."
    },
    {
      id: "city-loft",
      title: "Artist's Loft in Heritage Precinct",
      location: "Kala Ghoda, Mumbai",
      priceFormatted: "₹6.8 Cr",
      image: baseImages.cityLoft,
      images: [
        baseImages.cityLoft,
        frontViews[4],
        sideViews[4],
        interiorViews[4]
      ],
      beds: 2,
      baths: 2,
      size: 1800,
      status: "For sale",
      description:
        "A rare high-ceilinged loft in a restored British-era building, surrounded by art galleries and heritage structures.",
      secondaryDescription:
        "Exposed brick walls, teakwood rafters, and large french windows create a unique blend of old-world charm and bohemian luxury."
    },
    {
      id: "modern-living-residence",
      title: "Ultra-Modern Apartment near Golf Course",
      location: "DLF Golf Course Road, Gurgaon",
      priceFormatted: "₹9.5 Cr",
      image: baseImages.modernLiving,
      images: [
        baseImages.modernLiving,
        frontViews[5],
        sideViews[5],
        interiorViews[5]
      ],
      beds: 3,
      baths: 4,
      size: 3200,
      status: "For sale",
      description:
        "A high-floor apartment offering sweeping views of the award-winning golf course and the city skyline.",
      secondaryDescription:
        "Part of an iconic super-luxury development with club amenities, heated indoor pools, and dedicated concierge."
    },
    {
      id: "luxury-penthouse-suite",
      title: "Eon Tower Sky Villa",
      location: "Kharadi, Pune",
      priceFormatted: "₹5.2 Cr",
      image: baseImages.luxuryPenthouse,
      images: [
        baseImages.luxuryPenthouse,
        frontViews[6],
        sideViews[6],
        interiorViews[6]
      ],
      beds: 4,
      baths: 4,
      size: 4000,
      status: "For sale",
      description:
        "A massive single-floor residence in Pune's IT corridor, designed for those who appreciate space and privacy.",
      secondaryDescription:
        "Features a wrap-around sky deck, private lift lobby, and VRV air-conditioning, close to international schools and malls."
    },
    {
      id: "modern-mansion-estate",
      title: "Palatial Farmhouse Retreat",
      location: "Chattarpur Farms, New Delhi",
      priceFormatted: "₹45 Cr",
      image: baseImages.modernMansion,
      images: [
        baseImages.modernMansion,
        frontViews[7],
        sideViews[7],
        interiorViews[7]
      ],
      beds: 7,
      baths: 8,
      size: 12000,
      status: "For sale",
      description:
        "A magnificent 2.5-acre estate featuring a contemporary mansion, manicured lawns, and a swimming pool.",
      secondaryDescription:
        "Includes a home theatre, gym, spa, gazebo, and fully automated lighting and security systems."
    },
    {
      id: "beach-house-retreat",
      title: "Sea-Facing Villa on ECR",
      location: "East Coast Road, Chennai",
      priceFormatted: "₹7.5 Cr",
      image: baseImages.beachHouse,
      images: [
        baseImages.beachHouse,
        frontViews[8],
        sideViews[8],
        interiorViews[8]
      ],
      beds: 4,
      baths: 4,
      size: 3500,
      status: "For sale",
      description:
        "A breezy beachfront villa on the scenic ECR, offering direct beach access and a tranquil lifestyle.",
      secondaryDescription:
        "Designed with wind-catchers and courtyards to stay cool naturally, this home is a perfect weekend getaway from the city."
    },
    {
      id: "urban-loft-penthouse",
      title: "Duplex Penthouse in Jubilee Hills",
      location: "Jubilee Hills, Hyderabad",
      priceFormatted: "₹14 Cr",
      image: baseImages.urbanLoft,
      images: [
        baseImages.urbanLoft,
        frontViews[9],
        sideViews[9],
        interiorViews[9]
      ],
      beds: 5,
      baths: 5,
      size: 5500,
      status: "For sale",
      description:
        "An architectural marvel in Hyderabad's most elite neighborhood, featuring a private terrace garden.",
      secondaryDescription:
        "Split-level living with a double-height living room, private gym, and proximity to KBR Park."
    },
    {
      id: "hillside-estate-villa",
      title: "Colonial Cottage in the Hills",
      location: "Landour, Mussoorie",
      priceFormatted: "₹8.2 Cr",
      image: baseImages.hillsideEstate,
      images: [
        baseImages.hillsideEstate,
        frontViews[10],
        sideViews[10],
        interiorViews[10]
      ],
      beds: 4,
      baths: 3,
      size: 2800,
      status: "For sale",
      description:
        "A charming stone cottage nestled in the Himalayas, offering panoramic views of the Doon Valley and snow-capped peaks.",
      secondaryDescription:
        "Features wooden flooring, fireplaces in every room, and a sun-drenched conservatory for winter afternoons."
    }
  ];

export const featuredProperties = allProperties.slice(0, 3);
