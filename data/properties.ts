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
        baseImages.modernLiving,
        baseImages.cityLoft,
        baseImages.minimalistStudio
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
        baseImages.modernLiving,
        baseImages.waterfrontVilla,
        baseImages.cityLoft
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
        baseImages.cityLoft,
        baseImages.modernLiving,
        baseImages.waterfrontVilla
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
        baseImages.modernLiving,
        baseImages.skylinePenthouse,
        baseImages.gardenTownhouse
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
        baseImages.minimalistStudio,
        baseImages.modernLiving,
        baseImages.gardenTownhouse
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
        baseImages.skylinePenthouse,
        baseImages.gardenTownhouse,
        baseImages.minimalistStudio
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
        baseImages.skylinePenthouse,
        baseImages.modernLiving,
        baseImages.cityLoft
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
        baseImages.gardenTownhouse,
        baseImages.waterfrontVilla,
        baseImages.luxuryPenthouse
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
        baseImages.waterfrontVilla,
        baseImages.modernLiving,
        baseImages.gardenTownhouse
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
        baseImages.cityLoft,
        baseImages.minimalistStudio,
        baseImages.modernLiving
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
        baseImages.modernMansion,
        baseImages.gardenTownhouse,
        baseImages.luxuryPenthouse
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

